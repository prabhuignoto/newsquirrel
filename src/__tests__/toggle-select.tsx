import "jest-dom/extend-expect";
import * as React from "react";
import { render } from "react-testing-library";
import ToggleSelect from "../components/toggle-select/toggle-select";
import toggleSelectSize from "../enums/toggleSelectSize";
import { IToggleSelect } from "../models/view/IToggleSelect";

test("Render Toggle Select correctly", () => {
  const onToggleCB = jest.fn();
  const props: IToggleSelect = {
    items: [
      {
        name: "item1",
        onToggle: onToggleCB,
        selected: true,
        size: toggleSelectSize.LARGE,
        theme: 'red',
        value: "item1",
      },
      {
        name: "item2",
        onToggle: onToggleCB,
        selected: false,
        size: toggleSelectSize.LARGE,
        theme: 'red',
        value: "item2",
      }
    ],
    label: "Toggle Select Test Label",
    onToggle: onToggleCB,
    size: toggleSelectSize.LARGE,
    theme: "red",
  };
  const { getByTestId } = render(<ToggleSelect {...props} />);
  const node = getByTestId('rt-toggle-select');
  expect(node).toBeInTheDocument();
  expect(node).toMatchSnapshot();
});
