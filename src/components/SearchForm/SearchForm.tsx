import { Col, Form, Input, Row, Select } from 'antd';

import { CategoriesEnum, SearchParams, SortingEnum } from '../../api/google-books/googlebooks';
import { useAppDispatch, useAppSelector } from '../../store';
import { booksStateSelector, lastIndexSelector } from '../../store/books';
import { fetchBooks } from '../../store/books/thunk';
import { isSearchParamsEqual } from '../../utils/isSearchParamsEqual';

const { Search } = Input;

interface IFields extends Omit<SearchParams, 'startIndex'> { }
const initialFieldsValues: IFields = {
  searchString: '',
  sorting: SortingEnum.RELEVANCE,
  category: CategoriesEnum.COMPUTERS
};

export const SearchForm = () => {

  const [form] = Form.useForm<SearchParams>();

  const dispatch = useAppDispatch();
  const { lastRequestParams, loading } = useAppSelector(booksStateSelector);
  const lastIndex = useAppSelector(lastIndexSelector);

  const handleSearch = () => {
    form
      .validateFields()
      .then((values) => {
        if (lastRequestParams && isSearchParamsEqual(lastRequestParams, values)) {
          return;
        } else {
          dispatch(fetchBooks({
            ...values,
            searchString: values.searchString.trim(),
            startIndex: lastIndex
          }));
        }
      })
      .catch(console.log);
  };

  return (
    <Form
      form={form}
      layout='horizontal'
      initialValues={initialFieldsValues}
      disabled={loading}
    >
      <Row gutter={[20, 10]}>
        <Col span={12}>
          <Form.Item name='category' label="Categories">
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
          <Form.Item name='sorting' label='Sorting by'>
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
      <Form.Item name='searchString' rules={[{ required: true, message: 'Insert book title' }]}>
        <Search
          placeholder='Book title'
          size='large'
          onSearch={handleSearch}
        />
      </Form.Item>
    </Form>
  );
};
