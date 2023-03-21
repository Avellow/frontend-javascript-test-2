import { Layout, Typography } from 'antd';

import { PageProps } from './Page.props';
import styles from './Page.module.css';
import { Logo } from '../../components';

const { Header, Content, Footer } = Layout;
const { Text } = Typography;

export const Page = ({ children }: PageProps): JSX.Element => {

  return (
    <Layout className={styles.page}>
      <Header className={styles.header}>
        <Logo />
      </Header>
      <Content className={styles.content}>
        {children}
      </Content>
      <Footer className={styles.footer}>
        <Text type='secondary' italic strong>&copy; Book Search 2023</Text>
      </Footer>
    </Layout>
  );
};