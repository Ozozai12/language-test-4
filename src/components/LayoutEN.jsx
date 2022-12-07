import { Outlet } from 'react-router-dom';
import { HeaderEN } from './HeaderEN';

export const LayoutEN = () => {
  return (
    <>
      <HeaderEN />
      <Outlet />
    </>
  );
};
