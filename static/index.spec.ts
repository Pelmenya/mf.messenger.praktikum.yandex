import { expect } from "chai";

function hello(str: string) {
  if (str === "mocha") return "Hello mocha";
}

describe("Typescript + Babel usage suite", () => {
  it("should return string correctly", () => {
    expect(hello("mocha"), "Hello mocha");
  });
});
