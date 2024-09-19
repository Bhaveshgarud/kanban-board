import React, { useState, useEffect } from "react";
import "./App.css";
import DisplayDropdown from "./components/DisplayDropdown";
import KanbanBoard from "./components/KanbanBoard";

const App = () => {
  const [tickets, setTickets] = useState([]);
  const [users, setUsers] = useState([]);
  const [displayOptions, setDisplayOptions] = useState({
    grouping: "status",
    ordering: "priority",
  });

  useEffect(() => {
    fetch("https://api.quicksell.co/v1/internal/frontend-assignment")
      .then((response) => response.json())
      .then((data) => {
        setTickets(data.tickets);
        setUsers(data.users);
      });
  }, []);

  const handleOptionChange = (option, value) => {
    setDisplayOptions((prev) => ({ ...prev, [option]: value }));
  };

  return (
    <>
      <div className="board-header">
        <DisplayDropdown
          displayOptions={displayOptions}
          handleOptionChange={handleOptionChange}
        />
      </div>
      <KanbanBoard
        tickets={tickets}
        users={users}
        displayOptions={displayOptions}
      />
    </>
  );
};

export default App;