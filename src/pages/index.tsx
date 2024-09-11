import { lazy } from 'react';
import { Navigate, Routes } from 'react-router';
import { Route } from 'react-router-dom';

const NotFound = lazy(() => import('./NotFound'));
const Rasp = lazy(() => import('./Rasp'));

export const Routing = () => {
  return (
    <div className="relative max-w-screen-2xl mx-auto px-4">
      <Routes>
        <Route path="/" element={<Navigate to={'/rasp'} />} />
        <Route path="/rasp" element={<Rasp />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};
