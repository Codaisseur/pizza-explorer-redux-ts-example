// src/store/user/reducer.ts
import { UserState, UserAction } from "./types";

const initialState: UserState = {
  name: "Helva",
  id: 42,
};

export default function reducer(state = initialState, action: UserAction) {
  switch (action.type) {
    default: {
      return state;
    }
  }
}
