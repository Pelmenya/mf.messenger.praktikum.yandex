import { expect } from "chai";
import queryString from "../functions/getString";
import { METHOD } from "../../const/methods";
import { Options } from "../../types/Options";

type OptionsWithoutMethod = Omit<Options, "method">;

const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

export default class HTTPTransport {
  private baseUrl: string;

  constructor(url: string) {
    this.baseUrl = url;
  }

  get(url: string, options: OptionsWithoutMethod = {}): Promise<XMLHttpRequest> {
    const { data } = options;
    if (data)
      return this.request(`${url}?${queryString(data)}`, { ...options, method: METHOD.GET });
    else return this.request(url, { ...options, method: METHOD.GET });
  }

  post(url: string, options: Options): Promise<XMLHttpRequest> {
    return this.request(url, { ...options, method: METHOD.POST });
  }

  put(url: string, options: Options): Promise<XMLHttpRequest> {
    return this.request(url, { ...options, method: METHOD.PUT });
  }

  delete(url: string, options: Options): Promise<XMLHttpRequest> {
    return this.request(url, { ...options, method: METHOD.DELETE });
  }

  request(url: string, options: Options = { method: METHOD.GET }): Promise<XMLHttpRequest> {
    const { method, data = {}, id = undefined } = options;

    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.withCredentials = true;

      if (id === undefined) {
        xhr.open(method, `${this.baseUrl}${url}`);
      } else xhr.open(method, `${this.baseUrl}${url}/${String(id)}`);

      xhr.onload = () => {
        resolve(xhr);
      };

      xhr.onabort = reject;
      xhr.onerror = reject;
      xhr.ontimeout = reject;

      if (method === METHOD.GET || !data) {
        xhr.setRequestHeader("content-type", "application/json; charset=utf-8");
        xhr.send();
      } else {
        if (data instanceof FormData) {
          xhr.send(data);
        } else {
          xhr.setRequestHeader("Content-type", "text/plain; charset=utf-8");
          xhr.send(JSON.stringify(data));
        }
      }
    });
  }
}

describe("Проверяем модуль отправки запросов к серверу", () => {
  it('При вызове метода GET возвращается от сервера объект { status: "success", message: "Welcome To Testing API" } и статус 200', () => {
    const httpTransport = new HTTPTransport("http://localhost:3000");
    let response: object;
    let status: number;
    httpTransport
      .get("/get")
      .then((data: any) => {
        response = JSON.parse(data.responseText);
        status = data.status;
        expect(response).to.deep.equal({ status: "success", message: "Welcome To Testing API" });
        expect(status).to.eq(200);
      })
      .catch((err: any) => console.log(err.message));
  });
});

describe("Проверяем модуль отправки запросов к серверу", () => {
  it('При вызове метода POST возвращается от сервера объект { status: "success", message: "Ok" } и статус 200', () => {
    const httpTransport = new HTTPTransport("http://localhost:3000");
    let response: object;
    let status: number;
    httpTransport
      .post("/post", {}  as Options)
      .then((data: any) => {
        response = JSON.parse(data.responseText);
        status = data.status;
        expect(response).to.deep.equal({ status: "success", result: "Ок" });
        expect(status).to.eq(200);
      })
      .catch((err: any) => console.log(err.message));
  });
});

describe("Проверяем модуль отправки запросов к серверу", () => {
  it('При вызове метода DELETE возвращается от сервера объект { status: "success", message: "Ok" } и статус 200', () => {
    const httpTransport = new HTTPTransport("http://localhost:3000");
    let response: object;
    let status: number;
    httpTransport
      .delete("/delete", {}  as Options)
      .then((data: any) => {
        response = JSON.parse(data.responseText);
        status = data.status;
        expect(response).to.deep.equal({ status: "success", result: "Ок" });
        expect(status).to.eq(200);
      })
      .catch((err: any) => console.log(err.message));
  });
});

describe("Проверяем модуль отправки запросов к серверу", () => {
  it('При вызове метода PUT возвращается от сервера объект { status: "success", message: "Ok" } и статус 200', () => {
    const httpTransport = new HTTPTransport("http://localhost:3000");
    let response: object;
    let status: number;
    httpTransport
      .put("/put", {data:{x:1}}  as Options)
      .then((data: any) => {
        response = JSON.parse(data.responseText);
        status = data.status;
        expect(response).to.deep.equal({ status: "success", result: "Ок" });
        expect(status).to.eq(200);
      })
      .catch((err: any) => console.log(err.message));
  });
});
