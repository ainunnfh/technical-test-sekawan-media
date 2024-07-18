import "./App.css";
import Sidebar from "./components/Sidebar";
import { userDummy } from "./constans/DummyData";
import Overview from "./components/dashboard/Overview";

interface IUser {
  name: string;
  email: string;
  role: string;
}

const userAdmin = userDummy.find((user) => user.role === "Admin");
// console.log(userAdmin);

function App({ email }: IUser) {
  return <Sidebar email={email}><Overview/>
  </Sidebar>;
}

export default App;
