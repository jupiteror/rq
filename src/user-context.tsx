import {createContext} from "react";
import type {User} from "./users.tsx";


const UserContext = createContext<User[] | null>(null);



export {UserContext}