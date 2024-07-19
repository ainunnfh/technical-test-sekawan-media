import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import { DataTable } from "../components/ticket/DataTable";
import Columns from "../components/ticket/Columns";
export interface ITicketProps {
  id: number;
  description: string;
  date: string;
  customerName: string;
  priority: string;
  status: string;
}
const TicketPage = () => {
  const [tickets, setTickets] = useState<ITicketProps[]>([]);
  useEffect(() => {
    const fetchTickets = async () => {
      try {
        const response = await fetch("http://localhost:4000/tickets");
        const data = await response.json();
        setTickets(data);
      } catch (error) {
        console.error("Error fetching tickets:", error);
      }
    };

    fetchTickets();
  }, []);
  return (
    <Sidebar email={""}>
      <DataTable columns={Columns} data={tickets}/>
    </Sidebar>
  );
};

export default TicketPage;
