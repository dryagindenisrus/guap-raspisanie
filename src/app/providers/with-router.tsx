import { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';

export const withRouter = (component: () => React.ReactNode) => () => (
  <BrowserRouter>
    <Suspense
      fallback={
        <div className="h-screen flex items-center justify-center">
          <p className="text-6xl font-light text-black dark:text-white">Загрузка...</p>
        </div>
      }
    >
      {component()}
    </Suspense>
  </BrowserRouter>
);
