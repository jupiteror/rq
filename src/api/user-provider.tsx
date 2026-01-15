import { useState } from "react";
import { UserContext } from "../user-context";
import type { User } from "../type/user.type";

export interface IWrapperProps {
  children?: React.ReactNode;
  className?: string;
}

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
