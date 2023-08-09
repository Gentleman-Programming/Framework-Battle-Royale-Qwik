import { $, component$, useContext } from "@builder.io/qwik";
import { DialogContext } from "~/routes/layout";
import { Guserform } from "../GUserForm/guserform";
import { ButtonTypes, Gbutton } from "../Gbutton/gbutton";
import { Gdialog } from "../Gdialog/gdialog";
import styles from "./topnav.module.css";

export const Topnav = component$(() => {
  const dialogState = useContext(DialogContext);

  const openDialog = $(() => {
    dialogState.value = true;
  });

  return (
    <>
      <div class={styles["toolbar-container"]}>
        <p>
          Framework Battle Royale: <strong>Qwik</strong>
        </p>
        <Gbutton type={ButtonTypes.BUTTON} onClick$={openDialog}>
          Open Dialog
        </Gbutton>
      </div>
      <Gdialog>
        <Guserform />
      </Gdialog>
    </>
  );
});
