import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Sidebar from "./components/Sidebar";
import { userDummy } from "./constans/DummyData";

interface IUser {
  name: string;
  email: string;
  role: string;
}

const userAdmin = userDummy.find((user) => user.role === "Admin");
// console.log(userAdmin);

function App({ email }: IUser) {
  return <Sidebar email={email}>Grafik</Sidebar>;
}

export default App;
