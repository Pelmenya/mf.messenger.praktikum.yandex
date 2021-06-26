import { expect } from "chai";
import { signInProps } from "../../const/objects/signInProps";
import { ROUTES } from "../../const/routes";
import SignInPage from "../../pages/classes/SignInPage";

import Router from "./Router";

const routerTest = new Router(".app");

describe("Проверяем переходы у Роута", () => {
  it("Переход на новую страницу должен менять состояние сущности history", () => {
    routerTest.use(ROUTES.SIGNIN, SignInPage, signInProps);

    expect(routerTest.routes.length).to.eq(1);
  });
});
