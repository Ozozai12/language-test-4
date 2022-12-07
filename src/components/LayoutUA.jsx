import { Outlet } from 'react-router-dom';
import { HeaderUA } from './HeaderUA';

export const LayoutUA = () => {
  return (
    <>
      <HeaderUA />
      <Outlet />
    </>
  );
};
