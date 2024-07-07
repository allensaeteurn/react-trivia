import { useState } from "react";
import Button from "../components/Button";
import Game from "../components/Game";

const Landing = () => {
  const [vis, setVis] = useState(false);

  const openGame = () => {
    setVis(true);
  };

  return (
    <>
      <section className="p-8">
        Welcome to the ultimate JavaScript Trivia Game! Test your knowledge,
        sharpen your skills, and challenge your friends in a fun and interactive
        quiz. Dive into a world of JavaScript facts and see how much you really
        know about one of the most popular programming languages. Are you ready
        to become a JavaScript master? Let’s get started!
      </section>
      <div>{vis ? "" : <Button text="Start" onClick={openGame} />}</div>
      <div>{vis ? <Game /> : ""}</div>
    </>
  );
};

export default Landing;
