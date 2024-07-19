import "./App.css";
import Sidebar from "./components/Sidebar";
import { userDummy } from "./constans/DummyData";
import Overview from "./components/dashboard/Overview";
import UnresolvedLists from "./components/dashboard/UnresolvedLists";
import TaskLists from "./components/dashboard/TaskLists";
import Header from "./components/Header";

interface IUser {
  name: string;
  email: string;
  role: string;
}

const userAdmin = userDummy.find((user) => user.role === "Admin");
// console.log(userAdmin);

function App({ email }: IUser) {
  return (
    <Sidebar email={email}>
      <Header/>
      <Overview />
      <div className="flex gap-3 mt-5">
        <UnresolvedLists />
        <TaskLists />
      </div>
    </Sidebar>
  );
}

export default App;
