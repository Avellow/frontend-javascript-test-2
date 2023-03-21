import { BooksContainer, SearchForm, UpButton } from '../../components';
import styles from './Home.module.css';

export const Home = (): JSX.Element => {

  return (
    <>
      <section className={styles.search}>
        <SearchForm />
      </section>
      <section className={styles.booksSection}>
        <BooksContainer />
      </section>
      <UpButton />
    </>
  );
};
