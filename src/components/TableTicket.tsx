import React, { useEffect, useState } from "react";

interface IProps {
  id: number;
  description: string;
  date: string;
  customerName: string;
  priority: string;
  status: string;
}
const TableTicket: React.FC= () => {

    const [tickets, setTickets] = useState<IProps[]>([]);
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
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Description</th>
            <th>Date</th>
            <th>Customer Name</th>
            <th>Priority</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {tickets.map(ticket => (
            <tr key={ticket.id}>
              <td>{ticket.id}</td>
              <td>{ticket.description}</td>
              <td>{ticket.date}</td>
              <td>{ticket.customerName}</td>
              <td>{ticket.priority}</td>
              <td>{ticket.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableTicket;
