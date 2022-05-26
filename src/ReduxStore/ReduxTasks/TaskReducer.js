import { INSERT_TASK, TOGGEL_COMPLATE, TOGGEL_STAR } from "./TaskActionType";

const initialState = [];

const TaskReducer = (state = initialState, action) => {
  switch (action.type) {
    case INSERT_TASK:
      return [
        ...state,
        {
          id: state.length++,
          title: action.title,
          itemId: action.ItemId,
          compated: false,
          star: action.star,
        },
      ];
    case TOGGEL_COMPLATE:
      return state.map((task) =>
        task.id === action.taskId ? { ...task, compated: !task.compated } : task
      );

    case TOGGEL_STAR:
      return state.map((task) =>
        task.id === action.taskId ? { ...task, star: !task.star } : task
      );

    default:
      return state;
  }
};

export default TaskReducer;
