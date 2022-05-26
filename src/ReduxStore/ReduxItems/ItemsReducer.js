import {
  INSERT_ITEMS,

  INCREMENT_COUNT,
  DECREMENT_COUNT,
} from "./ItemsActionType";

const initalState = [
  {
    id: 0,
    title: "My Day",
    slug: "myday",
    created_at: new Date(),
    count: 0,


  },

  {
    id: 1,
    title: "Important",
    slug: "important",
    created_at: new Date(),
    count: 0,


  },

  {
    id: 2,
    title: "Planned",
    slug: "planned",
    created_at: new Date(),
    count: 0,


  },

  {
    id: 3,
    title: "Assigned to me",
    slug: "assigned_to_me",
    created_at: new Date(),
    count: 0,


  },

  {
    id: 4,
    title: "Tasks",
    slug: "tasks",
    created_at: new Date(),
    count: 0,


  },
];

const ItemsReducer = (state = initalState, action) => {
  switch (action.type) {
    case INSERT_ITEMS:
      return [
        ...state,
        {
          id: state.length++,
          title: action.title,
          created_at: new Date(),
          count: 0,
       
        },
      ];
    
    case INCREMENT_COUNT:
      return state.map((item) =>
        item.id === action.itemId
          ? {
              ...item,

              count: ++item.count,
              countId: action.itemId,
            }
          : item
      );
    case DECREMENT_COUNT:
      return state.map((item) =>
        item.id === action.itemId
          ? {
              ...item,

              count: --item.count,
              countId: action.itemId,
            }
          : item
      );

    default:
      return state;
  }
};

export default ItemsReducer;
