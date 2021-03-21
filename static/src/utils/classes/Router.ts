import { BlockClass } from "../../types/BlockClass.js";
import { Nullable } from "../../types/Nullable.js";
import Route from "./Route.js";

export default class Router {
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
  }

  use(pathname: string, block: BlockClass, blockProps: any) {
    if (this.rootQuery !== undefined && this.routes !== undefined) {
      const route = new Route(pathname, block, { blockProps, rootQuery: this.rootQuery });
      this.routes.push(route);
      return this;
    }
  }

  start() {
    // Реагируем на изменения в адресной строке и вызываем перерисовку
    window.onpopstate = (event: Event) => {
      if (event.currentTarget instanceof Window)
      if (this.history.state !== null) {
        this._onRoute(this.history.state.url);
        console.log("Router.start : event", this.history.state.url);
      } else {
        this._onRoute(event.currentTarget.location.pathname);
        console.log("Router.start : event", event.currentTarget.location.pathname);
      }
    };

    if (this.history.state === null) this._onRoute(window.location.pathname);
    else this._onRoute(this.history.state.url);

    console.log(window.location.pathname);
    console.log(this.history.state);
  }

  _onRoute(pathname: string) {
    const route = this.getRoute(pathname);

    console.log(route);

    if (!route) {
      return;
    }

    if (this.currentRoute) {
      this.currentRoute.leave();
    }

    this.currentRoute = route;
    route.render();
  }

  go(pathname: string) {
    window.onpopstate = (event: Event) => {
      if (event.currentTarget instanceof Window)
        if (this.history.state !== null) {
          this._onRoute(this.history.state.url);
          console.log("Router.go : event", this.history.state.url);
        } else {
          this._onRoute(event.currentTarget.location.pathname);

          console.log("Router.go : event", event.currentTarget.location.pathname);
        }
    };

    this.activePage++;
    this.history.pushState(
      { page: this.activePage, url: pathname },
      `Title: ${this.activePage}`,
      pathname
    );

    console.log(this.history.state);

    this._onRoute(pathname);
  }

  back() {
    window.onpopstate = (event: Event) => {
      if (event.currentTarget instanceof Window)
        this._onRoute(event.currentTarget.location.pathname);
    };
    this.history.back();
  }

  forward() {
    window.onpopstate = (event: Event) => {
      if (event.currentTarget instanceof Window)
        this._onRoute(event.currentTarget.location.pathname);
    };
    this.history.forward();
  }

  getRoute(pathname: string) {
    return this.routes.find((route) => route.match(pathname));
  }
}
