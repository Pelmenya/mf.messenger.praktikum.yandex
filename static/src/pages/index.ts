import Button from "../../blocks/button/Button.js";
import { PATTERNS } from "../const/regex.js";
import Router from "../utils/classes/Router.js";
import {
  handlerSignInPage,
  handlerSignUpPage,
} from "../utils/functions/handlersPage/handlersPages.js";
import SignInPage from "./classes/SignInPage.js";
import SignUpPage from "./classes/SignUpPage.js";

console.log(window.history);

const router = new Router(".app");

// Можно обновиться на /user и получить сразу пользователя

const props1 = {
  tagNameBlock: "main",
  classListBlock: [
    "body",
  ],
  displayBlock: "flex",
  elements: [
    {
      query: ".form__wrap_buttons",
      block: new Button({
        tagNameBlock: "div",
        name: "submit_btn",
        text: "Авторизоваться",
        classList: "button",
      }),
    },
    {
      query: ".form__wrap_buttons",
      block: new Button({
        tagNameBlock: "div",
        name: "link",
        text: "Нет аккаунта?",
        classList: "form__button-link",
      }),
    },
  ],
  handler: () => {
    handlerSignInPage(router);
  },
};

const props2 = {
  tagNameBlock: "main",
  classListBlock: [
    "body",
  ],
  displayBlock: "flex",
  phone: PATTERNS.PATTERN_PHONE,
  email: PATTERNS.PATTERN_EMAIL,
  elements: [
    {
      query: ".form__wrap_buttons",
      block: new Button({
        tagNameBlock: "div",
        name: "submit_btn",
        text: "Зарегистрироваться",
        classList: "button",
      }),
    },
    {
      query: ".form__wrap_buttons",
      block: new Button({
        tagNameBlock: "div",
        name: "link",
        text: "Войти",
        classList: "form__button-link",
      }),
    },
  ],
  handler: () => {
    handlerSignUpPage(router);
  },
};
if (props1 !== undefined && props2 !== undefined)
  router.use("/", SignInPage, props1).use("/#signup", SignUpPage, props2).start();

// handlerNoAccountBtn();
/*  setTimeout(() => {
  router.go("/#signup");
}, 5000)  */

/*   
  history.pushState({page: 1}, "title 1", "?page=1")
  history.pushState({page: 2}, "title 2", "?page=2")
  history.replaceState({page: 3}, "title 3", "?page=3")
  history.back() // alerts "location: http://example.com/example.html?page=1, state: {"page":1}"
  history.back() // alerts "location: http://example.com/example.html, state: null"
  history.go(2) */
