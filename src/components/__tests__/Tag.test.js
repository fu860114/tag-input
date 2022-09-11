import { render, fireEvent, cleanup } from '@testing-library/react'
// import '@testing-library/jest-dom/extend-expect';
import Tag from '../Tag';

afterEach(cleanup);

describe('<Tag/>', ()=> {
  test('should render correct', ()=> {
    const {
      getByTestId,
    } = render(
      <Tag
        text="React"/>
    );
    expect(getByTestId('text').textContent).toBe('React');
  });

  test('should call props onRemove when delete button click', ()=> {
    const onRemove = jest.fn();
    const {
      getByTestId,
    } = render(
      <Tag
        text="React"
        onRemove={onRemove}/>
    );

    fireEvent.click(getByTestId('button'));
    expect(onRemove).toBeCalledTimes(1);
    expect(onRemove.mock.calls[0]).toEqual(['React']);
  });
})