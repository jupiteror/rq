import { createContext } from "react";
import type { User } from "./type/user.type";

export type IUserType = {
  user: User | null;
  setUser: (user: User | null) => void;
};

export const UserContext = createContext<IUserType | undefined>(undefined);
