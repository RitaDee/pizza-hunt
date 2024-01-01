import React from "react";
import ReactDOM from "react-dom/client";
// import { pizzaData } from "./data";

const App = () => {
  return (
    <div>
      <Header />
      <Pizza />
      <Pizza />
      <Footer />
    </div>
  );
};

const Pizza = () => {
  return (
    <div>
      <img src="/pizzas/margherita.jpg" alt="pizza margherita" />
      <h2>Salamino</h2>
      <p>Tomatoes</p>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
