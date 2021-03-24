import { ROUTES } from "../const/routes.js";
import { router } from "../utils/classes/Router.js";
import getDataFromStore from "../utils/functions/getDataFromStrore.js";
import isDataEmptyInStore from "../utils/functions/isDataEmptyInStore.js";
import { store } from "../utils/store/storeObj.js";
import ChangeChatPage from "./classes/ChangeChatPage.js";
import ErrorPage from "./classes/ErrorPage.js";
import SignInPage from "./classes/SignInPage.js";
import SignUpPage from "./classes/SignUpPage.js";



router
  .use(ROUTES.ROOT, SignInPage, getDataFromStore("signInProps"))
  .use(ROUTES.SIGNUP, SignUpPage, getDataFromStore("signUpProps"))
  .use(ROUTES.CHATS, ChangeChatPage, getDataFromStore("chatsProps"))
  .use(ROUTES.ERROR, ErrorPage, getDataFromStore("errorProps"))



 if (!isDataEmptyInStore("currentUser")) router.go("/#chats");




