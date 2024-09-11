import { Provider } from 'react-redux';
import { store } from '@/redux/store';

export const withStore = (component: () => React.ReactNode) => () => (
  <Provider store={store}>{component()}</Provider>
);
