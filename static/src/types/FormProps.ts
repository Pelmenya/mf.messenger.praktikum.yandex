import { Nullable } from "./Nullable.js";

export default interface FormProps {
  container: HTMLFormElement;
  handlerSubmit?: Nullable<Function>;
}