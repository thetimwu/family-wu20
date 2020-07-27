import React, { ReactElement } from "react";
import { FaChevronDown, FaRegCalendar, FaRegCalendarAlt } from "react-icons/fa";

interface Props {}

export default function Sidebar({}: Props): ReactElement {
  return (
    <div className="sidebar" data-testid="sidebar">
      <ul className="sidebar__generic">
        <li>Inbox</li>
        <li>
          <span>
            <FaRegCalendar />
          </span>
          <span>Today</span>
        </li>
        <li>
          <span>
            <FaRegCalendarAlt />
          </span>
          <span>Next 7 Days</span>{" "}
        </li>
      </ul>
      <div className="sidebar__middle">
        <span>
          <FaChevronDown />
        </span>
        <h2>Projects</h2>
      </div>
      <ul className="sidebar__projects">Projects will be here!</ul>
      add projects component here.
    </div>
  );
}
