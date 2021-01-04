import React from "react";
import { withRouter } from "react-router-dom";
import Main from "../Routes/Main";
import TodoSecretary from "../Routes/TodoSecretary";
import GuessMyNumber from "../Routes/GuessMyNumber";
import FlipCard from "../Routes/FlipCard";
import HeungdoLabPolicy from "../Routes/HeungdoLabPolicy";

export default withRouter(({ history }) => {
  const {
    location: { pathname },
  } = history;

  switch (true) {
    case pathname === "/":
      return <Main />;

    case pathname === "/todosecretary":
      return <TodoSecretary />;

    case pathname === "/guessmynumber":
      return <GuessMyNumber />;

    case pathname === "/flipcard":
      return <FlipCard />;

    case pathname === "/policy/heungdolab":
      return <HeungdoLabPolicy />;

    default:
      return <Main />;
  }
});
