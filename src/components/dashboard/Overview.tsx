import { ITicketProps } from "@/src/pages/TicketPage";
import { useEffect, useState } from "react";

const Overview = () => {
  const [tickets, setTickets] = useState<ITicketProps[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:4000/tickets");
        const data = await response.json();
        setTickets(data);
      } catch (error) {
        console.error("Error fetching tickets:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <div>
      <div className="grid grid-cols-4 gap-4 w-full h-32 text-xl">
        {[
          "open",
          "on hold",
          "unresolved",
          "overdue"
        ].map((status) => (
          <div
            key={status}
            className="flex flex-col justify-center items-center bg-slate-200 rounded-md"
          >
            {status}
            <span>{tickets.filter((ticket) => ticket.status === status).length}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Overview;
function useFetch(arg0: string): { data: any } {
  throw new Error("Function not implemented.");
}
