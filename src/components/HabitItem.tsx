import Button from "./Button";

interface Habit {
  id: string;
  name: string;
  completed: boolean;
}

type HabitItemProps = {
  habit: Habit;
};

const HabitItem = ({ habit }: HabitItemProps) => {
    const visibleDates = [new Date()]
  return (
    <div className="rounded-xl bg-zinc-800 p-4">
      <div className="flex items-center justify-between">
        <div className="flex gap-3 items-center">
          <span className="sont-medium">{habit.name}</span>
          <span className="text-sm text-amber-400">🔥 3</span>
        </div>
        <Button>Delete</Button>
      </div>
      <div className="flex gap-1.5"></div>
    </div>
  );
};

export default HabitItem;
