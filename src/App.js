import TagInput from "./components/TagInput";

import { useState } from "react";
import "./styles.css";

export default function App() {
  const [tags, setTags] = useState(["React", "JavaScript"]);
  return (
    <div className="App">
      <h2>{tags.toString()}</h2>
      <TagInput tags={tags} onChange={setTags} />
      <button
        onClick={() => {
          setTags(["1", "2", "3"]);
        }}
      >
        setNewTags
      </button>
    </div>
  );
}
