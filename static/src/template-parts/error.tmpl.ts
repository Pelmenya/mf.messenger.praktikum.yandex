import { Template } from "../types/Template.js";

export const err: Template = {
  tmpl:
    '<div class="error">\
        <div class="error__wrap">\
          <h1 class="error__title"><%=title%></h1>\
          <p class="error__message"><%=message%></p>\
          <a class= "error__link" href="<%=back%>">Назад к чатам</a>\
        </div>\
      </div>\
      <a class="page-link" href="<%=next%>">Следущая страница</a>',
};
