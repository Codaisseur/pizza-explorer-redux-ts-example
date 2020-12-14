// src/store/pizzas/types.ts
export type Pizza = {
  id: number;
  name: string;
  description: string;
  bought: number;
  image: string;
};

export type PizzasState = {
  allPizzas: Pizza[];
};

// will add proper action types later
export type PizzasAction = any;
