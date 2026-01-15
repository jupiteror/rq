import { instance } from "../../instance";
import type { IUsersResponse, User } from "../../type/user.type";

export async function getUsers(): Promise<User[]> {
  try {
    const response = await instance.get<IUsersResponse>("/users");
    return response.data?.users;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
