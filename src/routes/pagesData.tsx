import { IRouter } from './router.types';
import {
  Home,
  BookPage,
  NotFound
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
  },
  {
    path: '*',
    element: <NotFound />,
    title: '404 page'
  }
];
