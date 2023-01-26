import { useState } from "react";

export const AppHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  const burgerStyle = {
    width: "2rem",
    height: "0.25rem",
    background: "#EFFFFA",
    borderRadius: "10px",
    transition: "all 0.3s linear",
    position: "relative",
    transformOrigin: "1px",
  };
  const firstLineBurgerStyle = {
    transform: isOpen ? "rotate(45deg)" : "rotate(0)",
  };

  const secondLineBurgerStyle = {
    opacity: isOpen ? "0" : "1",
    transform: isOpen ? "translateX(-20px)" : "translateX(0)",
  };

  const thirdLineBurgerStyle = {
    transform: isOpen ? "rotate(-45deg)" : "rotate(0)",
  };

  const menuStyle = {
    visibility: isOpen && "visible",
  };

  return (
    <header className="app-header">
      <div className="logo">
        LoremIpsum.<span>Net</span>
      </div>
      <div className="header-menu">
        <div className="burger-menu" onClick={() => setIsOpen(!isOpen)}>
          <div style={{ ...burgerStyle, ...firstLineBurgerStyle }} />
          <div style={{ ...secondLineBurgerStyle, ...burgerStyle }} />
          <div style={{ ...thirdLineBurgerStyle, ...burgerStyle }} />
        </div>
        <div className="menu" style={menuStyle}>
          <a href="#buisness">Бизнес</a>
          <a href="#about">О нас</a>
          <a href="#prices">Цены</a>
          <a href="#ordering">Оформить заказ</a>
        </div>
      </div>
    </header>
  );
};
