import React, { ReactElement } from "react";
import {
  FaWindows,
  FaChevronDown,
  FaRegCalendar,
  FaRegCalendarAlt,
} from "react-icons/fa";

interface Props {}

export default function Sidebar({}: Props): ReactElement {
  return (
    <div className="sidebar" data-testid="sidebar">
      <ul className="sidebar__generic">
        <li data-testId="inbox" className="inbox">
          <span>
            <FaWindows />
          </span>
          <span>Inbox</span>
        </li>
        <li data-testId="today" className="today">
          <span>
            <FaRegCalendar />
          </span>
          <span>Today</span>
        </li>
        <li data-testId="next_7" className="next_7">
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
