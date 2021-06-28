import { expect } from "chai";
import { signInProps } from "../../const/objects/signInProps";
import { signUpProps } from "../../const/objects/signUpProps";
import SignInPage from "../../pages/classes/SignInPage";
import SignUpPage from "../../pages/classes/SignUpPage";
import { ROUTES } from "../../const/routes";
import { Nullable } from "../../types/Nullable";
import getCurrentUser from "../functions/getCurrentUser";
import getUrlRoute from "../functions/getUrlRoute";
import isDataEmptyInStore from "../functions/isDataEmptyInStore";
import Route from "./Route";

class Router {
  private rootQuery: string;
  private currentRoute: Nullable<Route>;
  private activePage: number;
  public routes: Route[];
  public history: History;

  constructor(rootQuery: string = ".app") {
    this.routes = [];
    this.history = window.history;
    this.currentRoute = null;
    this.rootQuery = rootQuery;
    this.activePage = 0;
    this.create();
  }

  public create = () =>{
    window.onpopstate = this.handlerOnPopState;
  }

  public use(pathname: string, block: Function, blockProps: any) {
    const route = new Route(pathname, block, { blockProps, rootQuery: this.rootQuery });
    this.routes.push(route);
    return this;
  }

  private handlerOnPopState = (event: Event) => {
    
    
    this.history.replaceState(
      { page: this.activePage, url: getUrlRoute(event.target) },
      `Title: ${this.activePage}`,
    );

    console.log(this.history.state);
    getCurrentUser().then((data) => {
      if (data !== null) {
        if (event.currentTarget instanceof Window)
          if (this.history.state !== null) {
            this.onRoute(this.history.state.url);
          } else {
            this.onRoute(getUrlRoute(event.currentTarget));
          }
      } else {
        if (getUrlRoute(event.target) === ROUTES.SIGNIN) this.onRoute(ROUTES.SIGNIN);
        else if (getUrlRoute(event.target) === ROUTES.SIGNUP) {
          this.onRoute(ROUTES.SIGNUP);
        } else {
          this.onRoute(ROUTES.ERROR);
        }
      }
    });
  };

  public start() {
    if (this.history.state === null) this.onRoute(getUrlRoute(window));
    else this.onRoute(this.history.state.url);
  }

  private onRoute(pathname: string) {
    const route = this.getRoute(pathname);
    if (!route) {
      this.go(ROUTES.ERROR);
      return;
    }

    if (this.currentRoute) {
      this.currentRoute.leave();
    }

    this.currentRoute = route;
    route.render();
  }

  public go(pathname: string) {

    if (getUrlRoute(window) === ROUTES.SIGNIN || getUrlRoute(window) === ROUTES.SIGNUP) {
      if (isDataEmptyInStore("currentUser")) {
        this.activePage++;
        this.history.pushState(
          { page: this.activePage, url: pathname },
          `Title: ${this.activePage}`,
          pathname
        );
        this.onRoute(pathname);
      } else {
        this.activePage++;
        this.history.replaceState(
          { page: this.activePage, url: ROUTES.CHATS },
          `Title: ${this.activePage}`,
          ROUTES.CHATS
        );
        this.onRoute(ROUTES.CHATS);
      }
    } else {
      this.activePage++;
      this.history.pushState(
        { page: this.activePage, url: pathname },
        `Title: ${this.activePage}`,
        pathname
      );
      this.onRoute(pathname);
    }
  }

  public back() {
    this.history.back();
    this.activePage--;
  }

  public forward() {
    this.history.forward();
    this.activePage++;

  }

  public getRoute(pathname: string) {
    return this.routes.find((route) => route.match(pathname));
  }
}

const JSDOM = require("jsdom").JSDOM;

const { window } = new JSDOM(
  `<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
    </head>
    <body>
      <div class="app"></div>
    </body>
    </html>`,
  {
    url: "http://localhost:8080",
  }
);

console.log(window.history.state);

describe("Проверяем инициализацию роутов", () => {
  it("При вызове метода use - route добавляется в масив роутов", () => {
    const routerTest = new Router(".app");
    routerTest.use(ROUTES.SIGNIN, SignInPage, signInProps);
    routerTest.use(ROUTES.SIGNUP, SignUpPage, signUpProps);
    expect(routerTest.routes.length).to.eq(2);
  });
});

describe("Проверяем историю, при использовании метода use =>", () => {
  it("State истории не изменяется", () => {
    window.history.pushState({ page: 0, url: "/" }, "Title StartPage");
    const routerTest = new Router(".app");
    routerTest.use(ROUTES.SIGNIN, SignInPage, signInProps);
    console.log(routerTest.history.state);
    expect(routerTest.history.state).deep.equal({ page: 0, url: "/" });
  });
});

describe("Проверяем историю, при использовании метода go =>", () => {
  it("State истории изменяется", () => {
    window.history.pushState({ page: 0, url: "/" }, "Title StartPage");
    const routerTest = new Router(".app");
    routerTest.use(ROUTES.SIGNIN, SignInPage, signInProps);
    routerTest.use(ROUTES.SIGNUP, SignUpPage, signUpProps);

    routerTest.go(ROUTES.SIGNIN);
    routerTest.go(ROUTES.SIGNUP);

    expect(routerTest.history.state).deep.equal({ page: 2, url: ROUTES.SIGNUP });
  });
});

describe("Проверяем историю, при использовании метода go =>", () => {
  it("State истории изменяется", () => {
    window.history.pushState({ page: 0, url: "/" }, "Title StartPage");
    const routerTest = new Router(".app");
    routerTest.use(ROUTES.SIGNIN, SignInPage, signInProps);
    routerTest.use(ROUTES.SIGNUP, SignUpPage, signUpProps);

    routerTest.go(ROUTES.SIGNIN);
    routerTest.go(ROUTES.SIGNUP);
    routerTest.go(ROUTES.SIGNIN);

    expect(routerTest.history.state).deep.equal({ page: 3, url: ROUTES.SIGNIN });
  });
});

describe("Проверяем историю, при использовании метода back =>", () => {
  it("State истории изменяется, возвращаемся на предыдущий роутер, если пользователь разлогинен редирект на SignUp или SignIn", () => {
    window.history.pushState({ page: 0, url: "/" }, "Title StartPage");
    const routerTest = new Router(".app");
    routerTest
      .use(ROUTES.SIGNIN, SignInPage, signInProps)
      .use(ROUTES.SIGNUP, SignUpPage, signUpProps);
    routerTest.go(ROUTES.SIGNIN);
    routerTest.go(ROUTES.SIGNUP);
    routerTest.back();

    console.log(routerTest.history.state, "*********");

    expect(routerTest.history.state).deep.equal({ page: 1, url: ROUTES.SIGNIN });
  });
});
