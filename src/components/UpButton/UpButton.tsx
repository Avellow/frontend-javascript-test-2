import { Button } from 'antd';
import { useEffect, useState } from 'react';
import { useScrollY } from '../../hooks/useScrollY';

import styles from './UpButton.module.css';

export const UpButton = (): JSX.Element => {

  const y = useScrollY();
  const [opacity, setOpacity] = useState<number>(0);

  useEffect(() => {
    setOpacity(y / document.body.scrollHeight);
  }, [y, opacity]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <Button
      type='primary'
      className={styles.up}
      onClick={scrollToTop}
      style={{ opacity: opacity }}
    >
      ^ up
    </Button>
  );
};
