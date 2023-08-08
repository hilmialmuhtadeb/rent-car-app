import { User } from "@/types/User";
import axios from "axios";

type UserInput = {
  username: string;
  email: string;
  phoneNumber: string;
  password: string;
  city: string;
  zip: string;
  address: string;
}

type LoginInput = {
  email: string;
  password: string;
}

type loginResponse = {
  token: string;
}

export function registerUser(user: UserInput) {
  return axios.post<User>('http://localhost:8080/api/users', user);
}

export function loginUser(user: LoginInput) {
  return axios.post<loginResponse>('http://localhost:8080/api/login', user);
}

export function getUserProfile() {
  return axios.get<{user: User}>('http://localhost:8080/api/users/profile', { withCredentials: true });
}

export function loginAdmin(user: LoginInput) {
  return axios.post<loginResponse>('http://localhost:8080/api/admin/login', user);
}

export function storeTokenToLocalDB(token: string) {
  // bad practice, manual set cookie
  localStorage.setItem('token', token);
  document.cookie = `Authorization=${token}`;
}

export function removeTokenFromLocalDB() {
  localStorage.removeItem('token');
  document.cookie = `Authorization=; expires=Thu, 01 Jan 1970 00:00:00 UTC;`;
}

export function storeAdminTokenToLocalDB(token: string) {
  localStorage.setItem('adminToken', token);
  document.cookie = `Authorization=${token}`;
}

export function removeAdminTokenFromLocalDB() {
  localStorage.removeItem('adminToken');
  document.cookie = `Authorization=; expires=Thu, 01 Jan 1970 00:00:00 UTC;`;
}