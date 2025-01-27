import React, { useEffect } from 'react';
import { useHistory } from '@docusaurus/router';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import styles from './index.module.css';

export default function WikiUnitElectronics() {
  const history = useHistory();

  useEffect(() => {
    // Redirige automáticamente a /docs/intro al cargar la página
    history.push('/docs/intro');
  }, [history]);

  return (
    <p> </p>
   
  );
}
