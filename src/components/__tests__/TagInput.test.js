import { render, fireEvent, cleanup } from "@testing-library/react";
import { act } from "react-dom/test-utils";
// import '@testing-library/jest-dom/extend-expect';
import TagInput from "../TagInput";

describe("<TagInput/>", () => {
  test("should render correct", () => {
    const defaultInputs = ["React", "JavaScript"];

    const { getByTestId, container } = render(
      <TagInput tags={defaultInputs} />
    );

    expect(container.querySelectorAll(".taginput_item").length).toBe(2);
  });

  test("add tag", () => {
    const defaultInputs = ["React", "JavaScript"];

    const onChange = jest.fn();

    const { getByTestId, container } = render(
      <TagInput tags={defaultInputs} onChange={onChange} />
    );

    act(async () => {
      fireEvent.change(getByTestId("taginput__input"), {
        target: { value: "Vue" }
      });
      fireEvent.keyDown(getByTestId("taginput__input"), {
        key: "Enter",
        keyCode: 13,
        charCode: 13
      });
    });
    expect(onChange).toBeCalledTimes(1);
    expect(onChange).toHaveBeenCalledWith([...defaultInputs, "Vue"]);
  });
});
