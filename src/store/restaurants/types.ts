// src/store/restaurants/types.ts
export type Restaurant = {
  id: number;
  name: string;
  pizzas: number[];
};

export type RestaurantsState = {
  allRestaurants: Restaurant[];
};

// will add proper action types later
export type RestaurantsAction = any;
