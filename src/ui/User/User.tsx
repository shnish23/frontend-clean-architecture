import { Redirect } from "react-router";

import { useUserStorage } from "../../services/storageAdapter";
import { Profile } from "../Profile";

export function User() {
  const { user } = useUserStorage();
  if (!user) return <Redirect to="/auth" />;

  return (
    <main>
      <Profile />
    </main>
  );
}
