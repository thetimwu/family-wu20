import React, { ReactElement } from "react";
import Sidebar from "./Sidebar";
import Tasks from "../Tasks";

interface Props {}

export default function Content({}: Props): ReactElement {
  return (
    <section>
      <Sidebar />
      <Tasks />
    </section>
  );
}
