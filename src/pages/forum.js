import React, { useState } from 'react';
import Layout from '@theme/Layout';

export default function Forum() {
  // Estado para manejar los temas y comentarios
  const [threads, setThreads] = useState([
    {
      id: 1,
      title: 'Welcome to Unit Electronics Forum',
      comments: ['This is the first comment!', 'Great to be here!'],
    },
    {
      id: 2,
      title: 'Suggestions for New Features',
      comments: ['Add more tutorials', 'Would love to see IoT projects'],
    },
  ]);

  const [newThreadTitle, setNewThreadTitle] = useState('');
  const [newComment, setNewComment] = useState('');
  const [selectedThread, setSelectedThread] = useState(null);

  // Agregar un nuevo tema
  const addThread = () => {
    if (newThreadTitle) {
      setThreads([...threads, { id: threads.length + 1, title: newThreadTitle, comments: [] }]);
      setNewThreadTitle('');
    }
  };

  // Agregar un comentario a un tema
  const addComment = (id) => {
    if (newComment) {
      setThreads(
        threads.map((thread) =>
          thread.id === id ? { ...thread, comments: [...thread.comments, newComment] } : thread
        )
      );
      setNewComment('');
    }
  };

  return (
    <Layout title="Forum" description="Unit Electronics Forum">
      <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
        <h1>Unit Electronics Forum</h1>
        <div style={{ marginBottom: '20px' }}>
          <h2>Create a New Thread</h2>
          <input
            type="text"
            value={newThreadTitle}
            onChange={(e) => setNewThreadTitle(e.target.value)}
            placeholder="Enter thread title"
            style={{ width: '100%', padding: '10px', marginBottom: '10px' }}
          />
          <button onClick={addThread} style={{ padding: '10px', cursor: 'pointer' }}>
            Add Thread
          </button>
        </div>
        <hr />
        <div>
          <h2>Threads</h2>
          {threads.map((thread) => (
            <div key={thread.id} style={{ marginBottom: '20px', border: '1px solid #ddd', padding: '10px' }}>
              <h3 onClick={() => setSelectedThread(thread.id)} style={{ cursor: 'pointer' }}>
                {thread.title}
              </h3>
              {selectedThread === thread.id && (
                <div>
                  <h4>Comments:</h4>
                  <ul>
                    {thread.comments.map((comment, index) => (
                      <li key={index}>{comment}</li>
                    ))}
                  </ul>
                  <input
                    type="text"
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    placeholder="Enter your comment"
                    style={{ width: '100%', padding: '10px', marginTop: '10px' }}
                  />
                  <button
                    onClick={() => addComment(thread.id)}
                    style={{ padding: '10px', cursor: 'pointer', marginTop: '10px' }}
                  >
                    Add Comment
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
