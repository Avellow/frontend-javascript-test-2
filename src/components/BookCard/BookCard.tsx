import { Card, Typography } from 'antd';

import { BookCardProps } from './BookCard.props';
import styles from './BookCard.module.css';

const { Meta } = Card;
const { Text } = Typography;

export const BookCard = ({ title, img, description }: BookCardProps): JSX.Element => {

  function buildCover() {
    return (
      <div className={styles.coverWrapper}>
        <img className={styles.img} alt={title} src={img} />
      </div>
    );
  }

  return (
    <Card
      hoverable
      className={styles.card}
      cover={buildCover()}
    >
      <Text type='secondary'>Category</Text>
      <Meta title={title} description={description} />
    </Card>
  );
};
