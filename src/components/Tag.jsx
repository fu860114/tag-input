import React from "react";
import cx from "classnames";
import style from "./TagInput.module.scss";

type TagProps = {
  text: string,
  currentInput: string,
  onRemove: (text: string) => void
};

const Tag: React.FC<TagProps> = React.forwardRef((props, ref) => {
  const { text, onRemove, currentInput } = props;

  return (
    <div
      ref={ref}
      className={cx("taginput_item", style.tagItem)}
      data-match={currentInput === text}
    >
      <span data-testid="text">{text}</span>
      <button
        data-testid="button"
        onClick={() => {
          onRemove(text);
        }}
      >
        x
      </button>
    </div>
  );
});

export default React.memo(Tag);
