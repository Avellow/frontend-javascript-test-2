import { Link } from 'react-router-dom';
import { Typography } from 'antd';

import styles from './Logo.module.css';

const { Text } = Typography;

export const Logo = (): JSX.Element => {
  return (
    <div className={styles.logo}>
      <Link to='/'>
        <Text italic>Logo link</Text>
      </Link>
    </div>
  );
};
