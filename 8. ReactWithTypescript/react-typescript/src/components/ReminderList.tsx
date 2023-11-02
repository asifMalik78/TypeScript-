import { Button } from "react-bootstrap";
import Reminder from "../models/Reminder";

interface ReminderListProps {
  items: Reminder[];
  onRemoveReminder: (id: number) => void;
}

function ReminderList({ items, onRemoveReminder }: ReminderListProps) {
  return (
    <ul className="list-group">
      {items.map((item) => (
        <li className="list-group-item" key={item.id}>
          {item.title}
          <Button
            variant="outline-danger"
            className="mx-2 rounded-pill"
            onClick={() => onRemoveReminder(item.id)}
          >
            Delete
          </Button>
        </li>
      ))}
    </ul>
  );
}

export default ReminderList;
