import { ITicketProps } from "@/src/pages/TicketPage";
import { useEffect, useState } from "react";

const TaskLists = () => {
  const [tickets, setTickets] = useState<ITicketProps[]>([]);

  useEffect(() => {
    const fetchTickets = async () => {
      try {
        const response = await fetch(
          "http://localhost:4000/tasks?_sort=date&_order=desc&_limit=5"
        );
        const data = await response.json();
        setTickets(data);
      } catch (error) {
        console.error("Error fetching tickets:", error);
      }
    };

    fetchTickets();
  }, []);
  console.log(tickets);
  return (
    <div>
      <div className=" bg-slate-200 rounded-md p-4">
        <p className="font-semibold">Recent Tasks</p>
        {tickets.map((ticket) => (
          <div key={ticket.id}>
            <input
              type="radio"
              name="ticketType"
              value={ticket.id}
              checked={true}
            />
            <span>{ticket.description}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskLists;
