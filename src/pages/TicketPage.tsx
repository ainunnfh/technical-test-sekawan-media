import React from "react";
import TableTicket from "../components/TableTicket";
import Sidebar from "../components/Sidebar";

const TicketPage = () => {
  return (
    <Sidebar email={""}>
      <TableTicket />
    </Sidebar>
  );
};

export default TicketPage;
