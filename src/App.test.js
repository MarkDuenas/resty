import { render, fireEvent, waitFor } from "@testing-library/react";
import { rest } from "msw";
import { setupServer } from "msw/node";

import App from "./App";

const server = setupServer(
  rest.get("http://fake.com", (req, res, ctx) => {
    let data = {
      headers: { config: "fake config" },
      results: [{ text: "fake string" }],
    };

    return res(ctx.json(data));
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test("render header title", () => {
  const { getByText } = render(<App />);

  const header = getByText("RESTy");

  expect(header.textContent).toBe("RESTy");
});

test("render footer", () => {
  const { getByTestId } = render(<App />);

  getByTestId("footer");
});

test("check for input change event", () => {
  const { getByTestId } = render(<App />);

  const input = getByTestId("url");

  fireEvent.change(input, {
    target: { name: "url", value: "http://fake.com" },
  });

  expect(input.value).toBe("http://fake.com");
});
