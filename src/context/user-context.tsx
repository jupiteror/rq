import { createContext } from "react";
import type { User } from "../types/user.type";

export type IUserType = {
  user: User | null;
  setUser: (user: User | null) => void;
};

export const UserContext = createContext<IUserType | undefined>(undefined);
