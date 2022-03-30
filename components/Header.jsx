import React from "react";
import Link from "next/link";
const Header = () => {
  return (
    <div className="text-center">
      <h1>
        <a href="/#/">Real Time Point POS</a>
      </h1>
      <ul className="nav-menu">
        <li className="lead">
          <Link href="/inventory">Inventory</Link>
        </li>
        <li className="lead">
          <Link href="/">POS</Link>
        </li>
        <li className="lead">
          <Link href="/transactions">Transactions</Link>
        </li>
        <li className="lead">
          <Link href="/livecart">LiveCart</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
