import { Button } from 'antd';
import { Link } from 'react-router-dom';

export const NotFound = (): JSX.Element => {
  return (
    <>
      <div>Oops 404. There is no page found.</div>
      <Link to='/'><Button type='primary'>Go to Home Page</Button></Link>
    </>
  );
};
