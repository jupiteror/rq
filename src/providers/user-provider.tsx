import { useState } from "react";
import { UserContext } from "../context/user-context";
import type { User } from "../types/user.type";
import type { IWrapperProps } from "@/types/wrapper.type";

export type IUserType = {
  user: User;
  setUser: (user: User) => void;
};

export function UserProvider({ children }: IWrapperProps) {
  const [user, setUser] = useState<User | null>(null);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}
