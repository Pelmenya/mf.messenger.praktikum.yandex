import { router } from "../utils/classes/Router.js";
import getDataFromStore from "../utils/functions/getDataFromStrore.js";
import { store } from "../utils/store/storeObj.js";
import ChangeChatPage from "./classes/ChangeChatPage.js";
import SignInPage from "./classes/SignInPage.js";
import SignUpPage from "./classes/SignUpPage.js";

console.log(window.history);


router
  .use("/", SignInPage, getDataFromStore("signInProps"))
  .use("/#signup", SignUpPage, getDataFromStore("signUpProps"))
  .use("/#chats", ChangeChatPage, getDataFromStore("chatsProps"))
  .start();
  
  console.log(store.objects)
  console.log(getDataFromStore("currentUser"));

  // if (getDataFromStore("currentUser") === null) router.go("/#chat") ;

// handlerNoAccountBtn();
/*  setTimeout(() => {
  router.go("/#signup");
}, 5000)  */
