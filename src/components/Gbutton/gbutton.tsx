import { type PropFunction, Slot, component$ } from "@builder.io/qwik";
import styles from "./gbutton.module.css";

export enum ButtonTypes {
  "SUBMIT" = "submit",
  "RESET" = "reset",
  "BUTTON" = "button",
}

export interface GbuttonProps {
  type?: ButtonTypes;
  onClick$?: PropFunction<() => void>;
}

export const Gbutton = component$<GbuttonProps>(
  ({ type = ButtonTypes.BUTTON, onClick$ }: GbuttonProps) => {
    return (
      <button type={type} class={styles.button} onClick$={onClick$}>
        <Slot />
      </button>
    );
  }
);
