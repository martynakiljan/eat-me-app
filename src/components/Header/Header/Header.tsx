/** @format */
import "./Header.scss";
import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import { Routes, Route, useNavigate } from "react-router-dom";
const Header = () => {
  const navigate = useNavigate();

  const navigateToMainPage = () => {
    navigate("/kitchen");
  };

  return (
    <header className="header">
      <div className="header__mask"></div>
      <div className="header__title">
        <h1 className="header__text-first">ESSEN</h1>
        <h2 className="header__text-second"> AUS VERSCHIEDENEN KÜCHEN</h2>
        <Button
          variant="secondary"
          size="sm"
          className="header__button p-2"
          onClick={navigateToMainPage}
        >
          Ich will essen!
        </Button>
      </div>
    </header>
  );
};

export default Header;
