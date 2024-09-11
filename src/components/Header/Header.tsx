import { ReactComponent as Logo } from './assets/img/logo.svg';
import { Link } from 'react-router-dom';

export const Header = (): React.ReactNode => {
  return (
    <nav className="bg-white dark:bg-gray-900 sticky w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
      <div className="flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <Logo />
          <span className="self-center text-xl font-extralight whitespace-nowrap dark:text-white">
            Гуап | Расписание
          </span>
        </Link>

        {/* <ul className="flex flex-row font-medium md:space-x-8 dark:border-gray-700">
          <li>
            <Link
              to="/rasp"
              className="block py-2 px-3 text-white dark:text-blue-500"
              aria-current="page"
            >
              Расписание
            </Link>
          </li>
          <li>
            <Link
              to="/session"
              className="block py-2 px-3 text-white dark:text-blue-500"
              aria-current="page"
            >
              Сессия
            </Link>
          </li>
        </ul> */}
      </div>
    </nav>
  );
};
