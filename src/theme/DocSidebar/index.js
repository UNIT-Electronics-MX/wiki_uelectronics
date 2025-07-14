import React from 'react';
import DocSidebar from '@theme-original/DocSidebar';

export default function DocSidebarWrapper(props) {
  return (
    <>
      {/* Sidebar original de Docusaurus sin modificaciones */}
      <DocSidebar {...props} />
    </>
  );
}
