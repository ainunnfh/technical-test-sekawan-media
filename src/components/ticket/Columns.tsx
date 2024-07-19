import { ITicketProps } from "@/src/pages/TicketPage";
import { ColumnDef } from "@tanstack/react-table";

const Columns: ColumnDef<ITicketProps>[] = [
  {
    accessorKey: "index",
    header: "no",
    cell: ({ row }) => row.index + 1,
  },
  {
    accessorKey: "description",
    header: "Description",
  },
  {
    accessorKey: "date",
    header: "Date",
  },
  {
    accessorKey: "customerName",
    header: "Customer Name",
  },
  {
    accessorKey: "priority",
    header: "Priority",
  },
  {
    accessorKey: "status",
    header: "Status",
  },
];

export default Columns;
