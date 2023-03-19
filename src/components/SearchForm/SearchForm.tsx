import { Col, Form, Input, Row, Select, message } from 'antd';
import { CategoriesEnum, SearchParams, SortingEnum } from '../../api/google-books/googlebooks';

import { useAppDispatch, useAppSelector } from '../../store';
import { lastIndexSelector } from '../../store/books';
import { fetchBooks } from '../../store/books/thunk';
import styles from './SearchForm.module.css';

const { Search } = Input;

interface IFields extends Omit<SearchParams, 'startIndex'> { }
const initialFieldsValues: IFields = {
  searchString: '',
  sorting: SortingEnum.RELEVANCE,
  category: CategoriesEnum.COMPUTERS
};

export const SearchForm = () => {

  const [form] = Form.useForm<IFields>();

  const dispatch = useAppDispatch();
  const lastIndex = useAppSelector(lastIndexSelector);

  const handleSearch = () => {
    form
      .validateFields()
      .then((values) => dispatch(fetchBooks({ ...values, startIndex: lastIndex })))
      .catch(() => message.error('Проверьте форму поиска'));
  };

  return (
    <Form
      form={form}
      layout='horizontal'
      className={styles.form}
      initialValues={initialFieldsValues}
    >
      <Row gutter={[20, 10]}>
        <Col span={12}>
          <Form.Item name='category' label="Категория">
            <Select>
              {
                Object.values(CategoriesEnum).map(category => (
                  <Select.Option value={category} key={category}>{category}</Select.Option>
                ))
              }
            </Select>
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item name='sorting' label='Сортировать по'>
            <Select>
              {
                Object.values(SortingEnum).map(sorting => (
                  <Select.Option value={sorting} key={sorting}>{sorting}</Select.Option>
                ))
              }
            </Select>
          </Form.Item>
        </Col>
      </Row>
      <Form.Item name='searchString' rules={[{ required: true, message: 'Введите название книги' }]}>
        <Search
          placeholder='Введите название книги'
          size='large'
          onSearch={handleSearch}
        />
      </Form.Item>
    </Form>
  );
};
