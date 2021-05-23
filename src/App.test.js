import { render, fireEvent, waitFor } from "@testing-library/react";
import { rest } from "msw";
import { setupServer } from "msw/node";

import App from "./App";

const server = setupServer(
  rest.get("http://fake.com", (req, res, ctx) => {
    let data = {
      headers: { config: "fake config" },
      data: [{ text: "fake string" }],
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

test("check for method change event", () => {
  const { getByTestId } = render(<App />);

  const get = getByTestId("get");
  const post = getByTestId("post");
  const put = getByTestId("put");
  const del = getByTestId("delete");

  fireEvent.click(get);
  fireEvent.click(post);
  fireEvent.click(put);
  fireEvent.click(del);

  expect(get.value).toBe("GET");
  expect(post.value).toBe("POST");
  expect(put.value).toBe("PUT");
  expect(del.value).toBe("DELETE");
});

// test("check for response data after api call", async () => {
//   const { getByTestId, getAllByTestId } = render(<App />);

//   const form = getByTestId("api-form");
//   const input = getByTestId("url");
//   const method = getByTestId("get");

//   fireEvent.change(input, {
//     target: { name: "url", value: "http://fake.com" },
//   });
//   fireEvent.click(method);
//   fireEvent.submit(form);

//   await waitFor(() => {
//     const items = getAllByTestId("results");
//     expect(items.length).toBe(1);
//   });
// });
