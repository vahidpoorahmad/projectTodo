import {
  INSERT_ITEMS,
  INCREMENT_COUNT,
  DECREMENT_COUNT,
} from "./ItemsActionType";

export const insertItems = (title) => {
  return {
    type: INSERT_ITEMS,
    title,
  };
};

export const incrementCount = (itemId) => {
  return {
    type: INCREMENT_COUNT,
    itemId,
  };
};
export const decrementCount = (itemId) => {
  return {
    type: DECREMENT_COUNT,
    itemId,
  };
};
