import { BooksContainer, SearchForm } from '../../components';
import { UpButton } from '../../components/UpButton/UpButton';
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
