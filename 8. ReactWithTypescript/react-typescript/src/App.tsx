import { useEffect, useState } from "react";
import "./App.css";
import ReminderList from "./components/ReminderList";
import Reminder from "./models/Reminder";
import reminderService from "./services/reminder";
import NewReminder from "./components/NewReminder";

function App() {
  const [reminders, setReminders] = useState<Reminder[]>([]);

  const loadReminders = async () => {
    const data = await reminderService.getReminders();
    setReminders(data);
  };

  const removeReminder = (id: number) => {
    const filteredReminders = reminders.filter(
      (reminder) => reminder.id !== id
    );
    setReminders(filteredReminders);
  };

  const addReminder = async (title: string) => {
    const newReminder = await reminderService.addReminder(title);
    setReminders([newReminder, ...reminders]);
  };
  useEffect(() => {
    loadReminders();
  }, []);
  return (
    <div className="App">
      <NewReminder onAddReminders={addReminder} />
      <ReminderList items={reminders} onRemoveReminder={removeReminder} />
    </div>
  );
}

export default App;
