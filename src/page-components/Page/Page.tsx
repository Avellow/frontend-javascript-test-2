import { Layout } from 'antd';

import { PageProps } from './Page.props';
import styles from './Page.module.css';

const { Header, Content, Footer } = Layout;

export const Page = ({ children }: PageProps): JSX.Element => {

  return (
    <div className={styles.page}>
      <Header className={styles.header}>
        Шапка
      </Header>
      <Content className={styles.content}>
        {children}
      </Content>
      <Footer className={styles.footer}>
        Футер
      </Footer>
    </div>
  );
};