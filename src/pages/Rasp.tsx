import Timetable from '@/components/Timetable';

const Rasp = () => {
  return (
    <div className="text-2xl">
      {[...Array(20)].map((_, index) => (
        <h1 key={index}>Home {index}</h1>
      ))}
      <Timetable />
    </div>
  );
};

export default Rasp;
