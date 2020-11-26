import * as t from "io-ts";

export const ExpectedBodyType = t.type({
  id: t.number,
  value: t.string
});