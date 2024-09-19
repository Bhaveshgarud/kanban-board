import React from "react";
import AddIcon from "../assets/add.svg";
import MenuIcon from "../assets/menu.svg";
import ToDoIcon from "../assets/ToDo.svg";
import InProgressIcon from "../assets/in-progress.svg";
import BacklogIcon from "../assets/Backlog.svg";
import UrgentIcon from "../assets/UrgentPriorityColour.svg";
import HighIcon from "../assets/High.svg";
import MediumIcon from "../assets/Medium.svg";
import LowIcon from "../assets/Low.svg";
import NoPriorityIcon from "../assets/No-priority.svg";

const ColumnHeader = ({ group, count, priority }) => {
  const getColorFromName = (name) => {
    const colors = ['#FF6900', '#FCB900', '#7BDCB5', '#00D084', '#8ED1FC', '#0693E3', '#ABB8C3', '#EB144C', '#F78DA7', '#9900EF'];
    let hash = 0;
    for (let i = 0; i < name.length; i++) {
      hash = name.charCodeAt(i) + ((hash << 5) - hash);
    }
    hash = Math.abs(hash);
    return colors[hash % colors.length];
  };

  const getIcon = () => {
    if (priority !== undefined) {
      switch (group.toLowerCase()) {
        case "urgent":
          return <img src={UrgentIcon} alt="Urgent" className="icon priority-icon" />;
        case "high":
          return <img src={HighIcon} alt="High" className="icon priority-icon" />;
        case "medium":
          return <img src={MediumIcon} alt="Medium" className="icon priority-icon" />;
        case "low":
          return <img src={LowIcon} alt="Low" className="icon priority-icon" />;
        case "no priority":
          return <img src={NoPriorityIcon} alt="No Priority" className="icon priority-icon" />;
      }
    }

    switch (group.toLowerCase()) {
      case "todo":
        return <img src={ToDoIcon} alt="Todo" className="icon todo-icon" />;
      case "in progress":
        return <img src={InProgressIcon} alt="In Progress" className="icon in-progress-icon" />;
      case "backlog":
        return <img src={BacklogIcon} alt="Backlog" className="icon backlog-icon" />;
      default:
        const backgroundColor = getColorFromName(group);
        return (
          <div className="avatar-icon" style={{ backgroundColor, color: '#FFFFFF' }}>
            {group.charAt(0).toUpperCase()}
          </div>
        );
    }
  };

  const getPriorityLevel = () => {
    if (priority !== undefined) {
      return 4 - priority; // Convert to 0-4 scale
    }
    return null;
  };

  return (
    <div className="column-header">
      <div className="column-header-left">
        {getIcon()}
        <h2>{group}</h2>
        {priority === undefined && <span className="ticket-count">{count}</span>}
        {getPriorityLevel() !== null && (
          <span className="priority-number">{getPriorityLevel()}</span>
        )}
      </div>
      <div className="column-actions">
        <img src={AddIcon} alt="Add" className="icon" />
        <img src={MenuIcon} alt="Menu" className="icon" />
      </div>
    </div>
  );
};

export default ColumnHeader;