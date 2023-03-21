import { IRouter } from './router.types';
import {
  Home,
  BookPage
} from '../page-components';

export const pagesData: IRouter[] = [
  {
    path: '',
    element: <Home />,
    title: 'Home'
  },
  {
    path: 'books/:id',
    element: <BookPage />,
    title: 'Book Details'
  }
];
