import {
  $,
  component$,
  createContextId,
  QRL,
  Signal,
  Slot,
  useContextProvider,
  useSignal,
  useStore,
} from "@builder.io/qwik";
import { routeLoader$, type RequestHandler } from "@builder.io/qwik-city";
import { InitialValues } from "@modular-forms/qwik";
import { emptyUserState, User } from "~/models/user.model";

export const onGet: RequestHandler = async ({ cacheControl }) => {
  // Control caching for this request for best performance and to reduce hosting costs:
  // https://qwik.builder.io/docs/caching/
  cacheControl({
    // Always serve a cached response by default, up to a week stale
    staleWhileRevalidate: 60 * 60 * 24 * 7,
    // Max once every 5 seconds, revalidate on the server to get a fresh version of this page
    maxAge: 5,
  });
};

// Create Contexts
export interface UserContextType {
  user: User;
  changeValues: QRL<(this: UserContextType, user: User) => void>;
}

export const DialogContext = createContextId<Signal<boolean>>("DialogContext");
export const UserContext = createContextId<UserContextType>("UserContext");

// Create User Form
export const useFormLoader = routeLoader$<InitialValues<User>>(() => ({
  name: "",
}));



export default component$(() => {
  const dialogState = useSignal(false);
  const userState = useStore({
    user: emptyUserState,
    changeValues: $(function (this: UserContextType, user: User) {
      this.user = user;
    }),
  });

  useContextProvider(DialogContext, dialogState);
  useContextProvider(UserContext, userState);

  return <Slot />;
});
