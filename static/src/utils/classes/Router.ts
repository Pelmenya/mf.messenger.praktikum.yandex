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

  use(pathname: string, block: Function, blockProps: object) {
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
        this._onRoute(event.currentTarget.location.pathname);
    };
    this._onRoute(window.location.pathname);

    /*     if (this.history.state !== null)
    {
    this._activePage++;
    this.history.pushState(
      { page: this._activePage, url: window.location.pathname },
      `Title: ${this._activePage}`,
      window.location.pathname
    );
    } */
    console.log(window.location.pathname);
    console.log(this.history.state);
  }

  _onRoute(pathname:string) {
    const route = this.getRoute(pathname);
    if (!route) {
      return;
    }

    if (this.currentRoute) {
      this.currentRoute.leave();
    }
    this.currentRoute = route;
    route.render();
  }

  go(pathname:string) {
    this.activePage++;
    this.history.pushState(
      { page: this.activePage, url: pathname },
      `Title: ${this.activePage}`,
      pathname
    );
    this._onRoute(pathname);
  }

  back() {
    this.history.back();
  }

  forward() {
    this.history.forward();
  }

  getRoute(pathname:string) {
    return this.routes.find((route) => route.match(pathname));
  }
}
