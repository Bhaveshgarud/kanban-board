import React from "react";
import TicketCard from "./TicketCard";
import ColumnHeader from "./ColumnHeader";
import { priorityMap } from "../utils/constants";

const KanbanBoard = ({ tickets, users, displayOptions }) => {
  const groupTickets = () => {
    return tickets.reduce((acc, ticket) => {
      let key;
      switch (displayOptions.grouping) {
        case "user":
          key =
            users.find((user) => user.id === ticket.userId)?.name ||
            "Unassigned";
          break;
        case "priority":
          key = priorityMap[ticket.priority].name;
          break;
        default:
          key = ticket.status;
      }
      if (!acc[key]) {
        acc[key] = [];
      }
      acc[key].push(ticket);
      return acc;
    }, {});
  };

  const sortTickets = (ticketsToSort) => {
    return ticketsToSort.sort((a, b) => {
      if (displayOptions.ordering === "priority") {
        return b.priority - a.priority;
      }
      return a.title.localeCompare(b.title);
    });
  };

  const priorityOrder = ["Urgent", "High", "Medium", "Low", "No priority"];

  const groupedAndSortedTickets = Object.entries(groupTickets()).reduce(
    (acc, [key, value]) => {
      acc[key] = sortTickets(value);
      return acc;
    },
    {}
  );

  // Sort the groups if grouping by priority
  const sortedGroups = Object.keys(groupedAndSortedTickets).sort((a, b) => {
    if (displayOptions.grouping === "priority") {
      return priorityOrder.indexOf(a) - priorityOrder.indexOf(b);
    }
    return 0;
  });

  return (
    <div className="kanban-board">
      <div className="board-columns">
        {sortedGroups.map((group) => (
          <div key={group} className="board-column">
            <ColumnHeader 
              group={group} 
              count={groupedAndSortedTickets[group].length}
              priority={displayOptions.grouping === "priority" ? priorityOrder.indexOf(group) : undefined}
            />
            {groupedAndSortedTickets[group].map((ticket) => (
              <TicketCard 
                key={ticket.id} 
                ticket={ticket} 
                users={users} 
                grouping={displayOptions.grouping}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default KanbanBoard;