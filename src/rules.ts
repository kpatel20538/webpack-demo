import { createStore } from "redux";

type State = number;
type Action = { type: "increment" } | { type: "decrement" } | { type: "reset" };

export const store = createStore((state: State = 0, action: Action): State => {
  switch (action.type) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return 0;
    default:
      return state;
  }
});
