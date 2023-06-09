import React from "react";
import { Card_Todo } from "./Card-Todo";
export const List = () => {
  return (
    <main className="list">
      <h1>TO DO LIST</h1>
      <div className="list__input">
        <input type="text" />
        <button className="list__button">
          <span>Create</span>
        </button>
      </div>
      <section className="list__background">
        <Card_Todo />
        <Card_Todo />
      </section>
    </main>
  );
};
