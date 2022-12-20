import React from "react";
import { Link, Route } from "react-router-dom";

export default function Header () {
  return (
    <header className="header">
      <Route>
        <Link to="/" className="logo"></Link>
      </Route>
    </header>
  )
}
