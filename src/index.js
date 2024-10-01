import React from "react";
import ReactDOM from "react-dom/client";
import pizzaData from "./data";
import "./index.css";

console.log(pizzaData);

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const isOpen = hour >= 12 && hour <= 22 ? "Open" : "Closed";
  return (
    <footer className="footer">
      {new Date().toLocaleDateString()}. We currently {isOpen}
    </footer>
  );
}

function Header() {
  return (
    <header className="header">
      <h1 style={{}}>React Pizza Super Duper Co.</h1>
    </header>
  );
}

function Menu() {
  return (
    <div className="menu">
      <h2>This is our Menu</h2>
      <Pizza />
      <Pizza />
      <Pizza />
      <Pizza />
    </div>
  );
}

function Pizza() {
  return (
    <div>
      <img src="pizzas/spinaci.jpg" alt="Pizza Spinaci"></img>
      <h2>Pizza Spinaci</h2>
      <p>Tomato, mozarella, spinach, and ricotta cheese</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
