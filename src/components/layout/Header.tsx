import React, { ReactElement } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";

interface Props {}

export default function Header({}: Props): ReactElement {
  return (
    <header className="header" data-testid="header">
      <div className="logo">
        <img src="/images/logo.png" alt="The Wu Family" />
      </div>
      <div className="settings">
        <ul>
          <li>+</li>
          <li>
            <AiOutlineShoppingCart />
          </li>
        </ul>
      </div>
    </header>
  );
}
