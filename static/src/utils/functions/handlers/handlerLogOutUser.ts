import { currentUser } from "../../../const/objects/currentUser";
import { ROUTES } from "../../../const/routes";
import { authAPI } from "../../api/AuthAPI";
import { router } from "../../classes/Router";

export default function handlerLogOutUser() {
  return authAPI
    .logOut()
    .then((data: any) => {
      if (data.status === 200) {
        Object.assign(currentUser, {
          avatar: null,
          display_name: null,
          email: null,
          first_name: null,
          id: null,
          login: null,
          phone: null,
          second_name: null,
        });
        router.go(ROUTES.SIGNIN);
      }
    })
    .catch((err) => console.log(err));
}
