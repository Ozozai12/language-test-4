import { Route, Routes } from 'react-router-dom';
import { HomeUa } from '../pages/HomeUa';
import { HomeEn } from '../pages/HomeEn';
import { FlagUa } from 'pages/FlagUa';
import { FlagEn } from 'pages/FlagEn';
import { LayoutUA } from './LayoutUA';
import { LayoutEN } from './LayoutEN';
import css from './App.module.css';

export const App = () => {
  return (
    <div className={css.container}>
      <Routes>
        <Route path="/" element={<LayoutUA />}>
          <Route index element={<HomeUa />} />
          <Route path="flag" element={<FlagUa />} />
        </Route>
        <Route path="/en" element={<LayoutEN />}>
          <Route index element={<HomeEn />} />
          <Route path="flag" element={<FlagEn />} />
        </Route>
      </Routes>
    </div>
  );
};
