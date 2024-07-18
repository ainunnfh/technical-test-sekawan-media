import { AlarmCheck, AlarmClockIcon, Bell, Search } from "lucide-react";
import React from "react";

const Header = () => {
  return (
    <>
      <header className="flex items-center justify-end gap-3 px-6 py-4 bg-white">
        <div>
          <Search className="w-5 h-5 mr-2" />
        </div>
        <div>
          <Bell className="w-5 h-5 mr-2" />
        </div>
        <div>Name</div>
        <button className="relative block w-8 h-8 overflow-hidden rounded-full shadow focus:outline-none">
          <img
            className="object-cover w-full h-full"
            src="https://images.unsplash.com/photo-1528892952291-009c663ce843?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=296&q=80"
            alt="Your avatar"
          />
        </button>
      </header>
    </>
  );
};

export default Header;
