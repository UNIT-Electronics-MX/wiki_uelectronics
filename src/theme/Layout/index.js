import React from 'react';
import Layout from '@theme-original/Layout';
import ProductAds from '@site/src/components/ProductAds';
import {useLocation} from '@docusaurus/router';

export default function LayoutWrapper(props) {
  const location = useLocation();
  const isDocsPage = location.pathname.startsWith('/docs');
  
  return (
    <Layout {...props}>
      {/* Solo mostrar anuncios en páginas de documentación */}
      {isDocsPage && (
        <div className="docs-ads-container">
          <ProductAds />
        </div>
      )}
      {props.children}
    </Layout>
  );
}
