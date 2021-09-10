import { Redirect } from "react-router";

import { useUserStorage } from "../../services/storageAdapter";
import { Cart } from "../Cart";
import { Profile } from "../Profile";

export function User() {
  const { user } = useUserStorage();
  if (!user) return <Redirect to="/auth" />;

  return (
    <main>
      <Profile />
      <Cart />
    </main>
  );
}
