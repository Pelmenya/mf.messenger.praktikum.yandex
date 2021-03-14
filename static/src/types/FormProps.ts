import { Nullable } from "./Nullable";

export default interface FormProps {
  container: HTMLFormElement;
  handlerSubmit?: Nullable<Function>;
}