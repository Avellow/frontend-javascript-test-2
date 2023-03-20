import { Card, Typography } from 'antd';

import { BookCardProps } from './BookCard.props';
import styles from './BookCard.module.css';

const { Meta } = Card;
const { Text } = Typography;

export const BookCard = ({
  title,
  image,
  category,
  authors,
}: BookCardProps): JSX.Element => {

  function buildCover() {
    return (
      <div className={styles.coverWrapper}>
        <img className={styles.img} alt={title} src={image} />
      </div>
    );
  }

  return (
    <Card
      hoverable
      className={styles.card}
      cover={buildCover()}
      bodyStyle={{ padding: 12 }}
    >
      <Text type='secondary'>{category}</Text>
      <Meta title={title} />
      <Text type='secondary' className={styles.text}>{authors.join(', ')}</Text>
    </Card>
  );
};
