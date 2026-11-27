import HabitItem from "./HabitItem";

interface Habit {
  id: string;
  name: string;
  completed: boolean;
}

const HabitList = () => {
  const habits: Habit[] = [
    {
      id: '1',
      name: "string",
      completed: false,
    },
  ];
  if (!habits.length) {
    return (
      <p className="text-center text-zinc-500 py-12">
        No habits yet. Add one above to get started!
      </p>
    );
  }
  return (
    <div className=" flex flex-col gap-3 py-2">
      {habits.map((habit) => (
        <HabitItem habit={habit}/>
      ))}
    </div>
  );
};

export default HabitList;