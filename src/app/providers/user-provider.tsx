import { useState } from "react";
import type { IWrapperProps } from "@/types/wrapper.type";
import type { User } from "@/types/user.type.ts";
import { UserContext } from "@/entities/session/model/user-context.tsx";

export type IUserType = {
  user: User;
  setUser: (user: User) => void;
};

export function UserProvider({ children }: IWrapperProps) {
  const [user, setUser] = useState<User | null>(null);
  return <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>;
}
