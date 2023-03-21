import { Button, Spin, Typography } from 'antd';

import { BookCard } from '..';
import { useAppDispatch, useAppSelector } from '../../store';
import { booksStateSelector } from '../../store/books';
import { SearchParams } from '../../api/google-books/googlebooks';
import { booksPerLoading } from '../../utils/constants';
import { fetchBooks } from '../../store/books/thunk';
import styles from './BooksContainer.module.css';

const { Title, Text } = Typography;

export const BooksContainer = (): JSX.Element => {

  const dispatch = useAppDispatch();
  const {
    data: booksData,
    loading,
    error,
    total,
    lastRequestParams
  } = useAppSelector(booksStateSelector);

  const handleLoadMoreBooks = () => {
    if (lastRequestParams) {
      const params: SearchParams = {
        ...lastRequestParams,
        startIndex: lastRequestParams.startIndex + booksPerLoading,
      };
      dispatch(fetchBooks(params));
    }
  };

  return (
    <>
      {
        loading && (
          <Spin size='large' />
        )
      }

      {
        !!total && (
          <Title level={3}>Found {total} {total > 1 ? 'results' : 'result'} </Title>
        )
      }

      {
        !!error && (
          <Text type='danger'>{error}</Text>
        )
      }

      {
        booksData.length > 0 && (
          <ul className={styles.books}>
            {
              booksData.map(book => (
                <li key={book.etag} className={styles.listItem}>
                  <BookCard
                    title={book.title}
                    authors={book.authors}
                    category={book.category}
                    image={book.image}
                    volumeId={book.volumeId}
                  />
                </li>
              ))
            }
          </ul>
        )
      }

      {
        total > booksData.length && (
          <Button
            onClick={handleLoadMoreBooks}
            type='primary'
            loading={loading}
          >
            Load more
          </Button>
        )
      }
    </>
  );
};
