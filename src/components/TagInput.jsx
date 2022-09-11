import React, {
  useState,
  useCallback,
  useEffect,
  useRef,
  useLayoutEffect
} from "react";
import Tag from "./Tag";
import style from "./TagInput.module.scss";
import gsap from "gsap";
type TagInputProps = {
  tags: string[],
  onChange?: (tags: string[]) => void,
  disabled: boolean
};

const TagInput: React.FC<TagInputProps> = (props) => {
  const { tags, onChange, disabled } = props;

  const [input, setInput] = useState("");
  const tagsRef = useRef(); // Record<string, HtmlElement>;
  tagsRef.current = {};

  const atInputKeyDown = (e) => {
    if (e.keyCode !== 13 || input === "") { //不是按enter和沒輸入東西時
      return;
    }
    setInput("");
    if (tags.includes(input)) { //重複的時候
      const findDOM = tagsRef.current[input];
      gsap.to(findDOM, {
        scale: 1.2,
        yoyo: true,
        repeat: 1,
        duration: 0.15
      });
      return;
    }
    onChange(tags.concat(input)); //執行
  };

  const atTagRemove = useCallback( //刪除功能
    (text) => {
      onChange(tags.filter((t) => t !== text));
    },
    [onChange, tags]
  );

  return (
    <div className={style.root} data-active={!disabled}>
      {tags.map((text, i) => { //跑出先前的tag
        return (
          <Tag
            onRemove={atTagRemove}
            currentInput={input}
            text={text}
            key={text}
            ref={(dom) => {
              tagsRef.current[text] = dom;
            }}
          />
        );
      })}
      <input //輸入功能
        data-testid="taginput__input"
        className={style.input}
        onKeyDown={atInputKeyDown}
        value={input}
        readOnly={disabled}
        onChange={(e) => setInput(e.target.value)}
      />
    </div>
  );
};

export default TagInput;
