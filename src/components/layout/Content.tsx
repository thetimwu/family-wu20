import React, { ReactElement } from "react";
import Sidebar from "./Sidebar";

interface Props {}

export default function Content({}: Props): ReactElement {
  return (
    <section>
      <Sidebar />
    </section>
  );
}
