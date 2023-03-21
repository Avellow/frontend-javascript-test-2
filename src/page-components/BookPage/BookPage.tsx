import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Spin, Typography } from 'antd';
import parse from 'html-react-parser';

import { IAppBook } from '../../api/AppBook';
import { getBookDetails } from '../../api/google-books/googlebooks';
import { convertBookProps } from '../../utils/bookPropsConverter';
import styles from './BookPage.module.css';

const { Text, Title } = Typography;

export const BookPage = (): JSX.Element => {

  const { id } = useParams();

  const [book, setBook] = useState<IAppBook | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>();

  useEffect(() => {
    if (id) {
      setLoading(true);
      getBookDetails(id)
        .then(convertBookProps)
        .then(setBook)
        .catch(setError)
        .finally(() => setLoading(false));
    }
  }, []);

  if (!book || error || loading) {
    return (
      <div className={styles.warning}>
        {loading && <Spin size='large' />}
        {!book && !loading && <Text type='danger'>No book description</Text>}
        {error && <Text type='danger'>{error}</Text>}
      </div>
    );
  }

  return (
    <div className={styles.book}>
      <div className={styles.cover}>
        <div className={styles.imgWrapper}>
          <img src={book.image} alt={book.title} />
        </div>
      </div>
      <div className={styles.description}>
        <Text type='secondary'>{book.category.map(c => c.trim()).join(', ')}</Text>
        <Title level={3}>{book.title}</Title>
        <Text type='secondary'>{book.authors.join(', ')}</Text>
        <Text>{book.description && parse(book.description)}</Text>
      </div>
    </div >
  );
};
