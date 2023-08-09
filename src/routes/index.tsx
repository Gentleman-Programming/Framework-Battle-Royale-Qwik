import { component$, useContext } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Topnav } from "~/components/TopNav/topnav";
import { UserContext } from "./layout";

export default component$(() => {
  const userState = useContext(UserContext);

  return (
    <>
      <Topnav />
      {JSON.stringify(userState.user)}
    </>
  );
});

export const head: DocumentHead = {
  title: "Battle Royale Qwik",
  meta: [
    {
      name: "Gentleman Programming",
      content: "Battle Royale Qwik",
    },
  ],
};
