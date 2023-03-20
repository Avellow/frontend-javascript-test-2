import { BooksContainer, SearchForm } from '../../components';
import { Page } from '../Page/Page';
import styles from './Home.module.css';

export const Home = (): JSX.Element => {

  return (
    <Page>
      <section className={styles.search}>
        <SearchForm />
      </section>
      <section className={styles.booksSection}>
        <BooksContainer />
      </section>
    </Page>
  );
};
