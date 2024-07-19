import { ITicketProps } from "@/src/pages/TicketPage";
import { useEffect, useState } from "react";

const UnresolvedLists = () => {
  const [tickets, setTickets] = useState<ITicketProps[]>([]);
  useEffect(() => {
    const fetchTickets = async () => {
      try {
        const response = await fetch("http://localhost:4000/tickets");
        const data = await response.json();
        setTickets(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching tickets:", error);
      }
    };

    fetchTickets();
  }, []);
  return (
    <div className="w-1/2 bg-slate-200 rounded-md p-4">
      <div className="p-2">
        <p className="font-semibold">Unresolved tickets</p>
      </div>
      <ul className="">
        <li className="rounded-sm cursor-pointer">
          {tickets
            .filter((ticket) => ticket.status === "unresolved")
            .map((ticket) => (
              <div
                key={ticket.id}
                className="border-b border-black p-2 text-sm font-light"
              >
                <b>{ticket.description}</b>
              </div>
            ))}
        </li>
      </ul>
    </div>
  );
};

export default UnresolvedLists;
