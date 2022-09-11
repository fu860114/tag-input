import { useState } from "react";
import TagInput from "./components/TagInput";
import useInputTags, { defaultReducer } from "./hooks/useInputTags";

const limit4TagReducer = (state, action) => {
  const newState = defaultReducer(state, action);
  let tags = newState.tags;
  if(tags.includes('aaa')) {
    tags = tags.filter( text => text !== 'aaa');
  }
  if (newState.tags.length >= 4) {
    return {
      ...newState,
      tags,
      isActive: false
    };
  }
  return {
    ...newState,
    tags,
    isActive: true
  };
};

export default function App2() {
  const { tags, isActive, onChange } = useInputTags(
    ["React", "Javascript"],
    limit4TagReducer
  );
  return (
    <div className="App border p-2 mt-4">
      <h1>App2</h1>
      <h2>{tags.toString()}</h2>
      <h2>isActive:{isActive + ""}</h2>
      <TagInput disabled={!isActive} tags={tags} onChange={onChange} />
    </div>
  );
}
