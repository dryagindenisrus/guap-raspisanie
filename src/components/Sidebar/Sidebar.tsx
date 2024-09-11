import { ReactComponent as TimetableIcon } from './assets/img/file-text.svg';
import { ReactComponent as SettingsIcon } from './assets/img/gear.svg';
import { ReactComponent as FilterIcon } from './assets/img/sliders.svg';

export const Sidebar = (): React.ReactNode => {
  return (
    <aside className="h-full flex flex-col-reverse bottom-0 w-full z-20 border-t border-gray-200 md:flex-row md:border-r md:border-t-0 md:w-fit md:h-full md:left-0 md:bottom-auto dark:border-gray-600 bg-white dark:bg-gray-900">
      <div className="w-full md:w-fit md:h-auto">
        <section className="flex flex-row md:flex-col md:h-full justify-around text-sm text-black dark:text-white p-2">
          <button
            title="Расписание"
            className="w-fit aspect-square hover:bg-gray-800 rounded-lg p-2"
          >
            <TimetableIcon className="fill-black dark:fill-white w-6 h-auto" />
          </button>
          <button
            title="Фильтры"
            className="w-fit aspect-square hover:bg-gray-800 rounded-lg p-2"
          >
            <FilterIcon className="fill-black dark:fill-white w-6 h-auto" />
          </button>
          <button
            title="Настройки"
            className="w-fit aspect-square hover:bg-gray-800 rounded-lg p-2"
          >
            <SettingsIcon className="fill-black dark:fill-white w-6 h-auto" />
          </button>
        </section>
      </div>

      <section className="border-b border-gray-200 p-4 md:border-l md:border-b-0 dark:border-gray-600">
        <div>Sidebar</div>
      </section>
    </aside>
  );
};
