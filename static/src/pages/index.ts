import { ROUTES } from "../const/routes.js";
import { router } from "../utils/classes/Router.js";
import getCurrentUser from "../utils/functions/getCurrentUser.js";
import getDataFromStore from "../utils/functions/getDataFromStrore.js";
import getUrlRoute from "../utils/functions/getUrlRoute.js";
import renderChats from "../utils/functions/renderChats.js";
import { store } from "../utils/store/storeObj.js";
import ChatsPage from "./classes/ChatsPage.js";
import ErrorPage from "./classes/ErrorPage.js";
import MyAccountPage from "./classes/MyAccountPage.js";
import SignInPage from "./classes/SignInPage.js";
import SignUpPage from "./classes/SignUpPage.js";

console.log(getDataFromStore("chatsProps"));

router
  .use(ROUTES.SIGNIN, SignInPage, getDataFromStore("signInProps"))
  .use(ROUTES.SIGNUP, SignUpPage, getDataFromStore("signUpProps"))
  .use(ROUTES.CHATS, ChatsPage, getDataFromStore("chatsProps"))
  .use(ROUTES.ERROR, ErrorPage, getDataFromStore("errorProps"))
  .use(ROUTES.MY_ACCOUNT, MyAccountPage, getDataFromStore("myAccountProps"));

getCurrentUser()
  .then((data) => {
    const routeUrl = getUrlRoute(window);
    console.log("INDEX", routeUrl);
    if (data !== null) {
      switch (routeUrl) {
        case ROUTES.SIGNIN:
          console.log("noas", routeUrl);
          renderChats();
          break;
        case ROUTES.SIGNUP:
          renderChats();
          break;
        case ROUTES.CHATS:
          renderChats();
          break;
        case ROUTES.MY_ACCOUNT:
          router.go(ROUTES.MY_ACCOUNT);
          break;
        default:
          router.go(ROUTES.ERROR);
          break;
      }
    } else if (routeUrl === ROUTES.SIGNIN) router.go(ROUTES.SIGNIN);
    else if (routeUrl === ROUTES.SIGNUP) router.go(ROUTES.SIGNUP);
    else router.go(ROUTES.ERROR);
  })
  .catch((err) => console.log(err));

console.log(store);
