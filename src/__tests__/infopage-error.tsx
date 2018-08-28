import "jest-dom/extend-expect";
import * as React from "react";
import { render } from "react-testing-library";
import { AxiosResponse } from "../../node_modules/axios";
import Error from "../components/info-pages/error";

interface IError {
  response?: AxiosResponse | null;
}
test("Renders infopage-error correctly", () => {
  const props: IError = {
    response: {
      config: {},
      data: {
        message: "Failed to load the page"
      },
      headers: 'head',
      request: '/',
      status: 400,
      statusText: 'Failure',
    }
  };
  
  const { getByTestId } = render(<Error {...props} />);
  const node = getByTestId("rt-error-page");
  expect(node).toBeInTheDocument();
  expect(node).toMatchSnapshot();
  expect(node).toHaveTextContent("Failed to load the page");
});

