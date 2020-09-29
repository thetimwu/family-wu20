import React, { ReactElement } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";

interface Props {}

export default function Header({}: Props): ReactElement {
  return (
    <header className="header" data-testid="header">
      <nav>
        <div className="logo">
          <img src="/images/logo.png" alt="The Wu Family" />
        </div>
        <div className="settings">
          <ul>
            <li data-testid="quick-add-task-action" className="settings__add">
              +
            </li>
            <li data-testid="dark-mode-action" className="settings__darkmode">
              <AiOutlineShoppingCart />
            </li>
            <li>
              <a href="/login">login</a>{" "}
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
