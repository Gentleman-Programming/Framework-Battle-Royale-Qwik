import {
  $,
  Slot,
  component$,
  useComputed$,
  useContext,
} from "@builder.io/qwik";
import { DialogContext } from "~/routes/layout";
import { Gbutton } from "../Gbutton/gbutton";
import styles from "./gdialog.module.css";

export const Gdialog = component$(() => {
  const dialogState = useContext(DialogContext);
  const isOpen = useComputed$(
    () =>
      `${dialogState.value ? styles["open"] : ""} ${
        styles["dialog-background"]
      }`
  );

  const closeDialog = $(() => {
    dialogState.value = false;
  });

  return (
    <>
      <div class={isOpen}>
        <dialog open={dialogState.value} class={styles["dialog-container"]}>
          <Slot />
          <Gbutton onClick$={closeDialog}>Close</Gbutton>
        </dialog>
      </div>
    </>
  );
});
