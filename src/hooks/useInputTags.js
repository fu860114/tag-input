import { useCallback, useReducer } from "react";

export const defaultReducer = (state, action) => {
  switch (action.type) {
    case "CHAGE_TAGS": {
      return {
        ...state,
        tags: action.payload
      };
    }
    default:
      return state;
  }
};

export default function useInputTags(
  defaultTags: string[],
  reducer = defaultReducer
) {
  const [state, dispatch] = useReducer(reducer, {
    tags: defaultTags,
    isActive: true
  });

  const onChange = useCallback((tags) => {
    dispatch({ type: "CHAGE_TAGS", payload: tags });
  }, []);

  return {
    ...state,
    onChange
  };
}
