import { useState } from "react";
import { Button } from "react-bootstrap";

interface NewReminderProps {
  onAddReminders: (title: string) => void;
}
export default function NewReminder({
  onAddReminders,
}: NewReminderProps): JSX.Element {
  const [title, setTitle] = useState("");

  const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onAddReminders(title);
    setTitle("");
  };
  return (
    <form onSubmit={submitForm}>
      <label htmlFor="title">Add</label>
      <input
        id="title"
        type="text"
        value={title}
        className="form-control"
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <Button className="rounded-pill my-3" variant="primary" type="submit">
        Add Reminder
      </Button>
    </form>
  );
}
