import { ReduxState } from "../index";

export const selectPizzas = (reduxState: ReduxState) => {
  return reduxState.pizzas.allPizzas;
};
