import { User, UserInput } from "@/types/User";
import axios from "axios";

export function registerUser(user: UserInput) {
  return axios.post<User>('http://localhost:8080/api/users', user);
}