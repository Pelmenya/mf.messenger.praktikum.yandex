import { ROUTES } from "../const/routes.js";
import { router } from "../utils/classes/Router.js";
import getDataFromStore from "../utils/functions/getDataFromStrore.js";
import isDataEmptyInStore from "../utils/functions/isDataEmptyInStore.js";
import { store } from "../utils/store/storeObj.js";
import ChatsPage from "./classes/ChatsPage.js";
import ErrorPage from "./classes/ErrorPage.js";
import SignInPage from "./classes/SignInPage.js";
import SignUpPage from "./classes/SignUpPage.js";

console.log(getDataFromStore("chatsProps"))

router
  .use(ROUTES.SIGNIN, SignInPage, getDataFromStore("signInProps"))
  .use(ROUTES.SIGNUP, SignUpPage, getDataFromStore("signUpProps"))
  .use(ROUTES.CHATS, ChatsPage, getDataFromStore("chatsProps"))
  .use(ROUTES.ERROR, ErrorPage, getDataFromStore("errorProps"))

  
  //console.log(store.objects.chatsProps.elements[4].block.props.name);

  console.log(store)

 if (!isDataEmptyInStore("currentUser")) router.go("/#chats");
 


 


