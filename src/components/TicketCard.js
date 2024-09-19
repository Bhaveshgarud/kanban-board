import React from "react";
import { priorityMap } from "../utils/constants";
import UrgentPriorityGreyIcon from "../assets/UrgentPriorityGrey.svg";
import NoPriorityIcon from "../assets/No-priority.svg";

const GreyCircle = () => (
  <div className="grey-circle"></div>
);

const TicketCard = ({ ticket, users, grouping }) => {
  const assignedUser = users.find((user) => user.id === ticket.userId);
  const showUrgentIcon = Math.random() < 0.5; // 50% chance to show urgent icon

  return (
    <div className="card">
      <div className="card-header">
        <span className="ticket-id">{ticket.id}</span>
        {assignedUser && (
          <div className="user-avatar">{assignedUser.name[0]}</div>
        )}
      </div>
      <h3 className="card-title">{ticket.title}</h3>
      <div className="card-footer">
        <div className="tag-container">
          {grouping !== "priority" && (
            showUrgentIcon ? (
              <img src={UrgentPriorityGreyIcon} alt="Urgent" className="priority-icon urgent-grey" />
            ) : (
              <img src={NoPriorityIcon} alt="No Priority" className="priority-icon no-priority" />
            )
          )}
          <GreyCircle />
          <span className="tag">{ticket.tag[0]}</span>
        </div>
      </div>
    </div>
  );
};

export default TicketCard;