import { INSERT_TASK, TOGGEL_COMPLATE, TOGGEL_STAR } from "./TaskActionType";

export const insertTask = (title, ItemId, star) => {
  return {
    type: INSERT_TASK,
    title,
    ItemId,
    star,
  };
};
export const toggelsComplated = (itemId, taskId) => {
  return {
    type: TOGGEL_COMPLATE,
    itemId,
    taskId,
  };
};
export const toggelsStar = (itemId, taskId) => {
  return {
    type: TOGGEL_STAR,
    itemId,
    taskId,
  };
};
