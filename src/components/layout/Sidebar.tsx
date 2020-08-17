import React, { ReactElement, useState, useEffect } from "react";
import {
  FaWindows,
  FaChevronDown,
  FaRegCalendar,
  FaRegCalendarAlt,
} from "react-icons/fa";
import {
  startFetching,
  hasError,
  fetchSuccess,
} from "../../features/project/projectSlice";
import { useProjects } from "../../hooks";
import { useDispatch } from "react-redux";

interface Props {}

export default function Sidebar({}: Props): ReactElement {
  console.log("calling");
  const { projects, setProjects } = useProjects();
  console.log(projects);
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   if (projects) {
  //     dispatch(startFetching);

  //   }
  // }, [projects]);
  return (
    <div className="sidebar" data-testid="sidebar">
      <ul className="sidebar__generic">
        <li data-testid="inbox" className="inbox">
          <span>
            <FaWindows />
          </span>
          <span>Inbox</span>
        </li>
        <li data-testid="today" className="today">
          <span>
            <FaRegCalendar />
          </span>
          <span>Today</span>
        </li>
        <li data-testid="next_7" className="next_7">
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
