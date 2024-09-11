import { withProviders } from './providers';
import './index.scss';
import { Routing } from '@/pages';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';

function App() {
  return (
    <div className="flex flex-col bg-white dark:bg-gray-900 min-h-screen h-screen relative overflow-hidden">
      <Header />
      <div className="flex flex-col-reverse md:flex-row overflow-hidden h-screen">
        <div className="sticky bottom-0 md:relative">
          <Sidebar />
        </div>

        <div className="flex-1 w-full overflow-auto">
          <Routing />
        </div>
      </div>
    </div>
  );
}

export default withProviders(App);
