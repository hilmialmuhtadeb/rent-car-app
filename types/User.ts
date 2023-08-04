export type User = {
  id: number;
  username: string;
  email: string;
  phoneNumber: string;
  password: string;
  city: string;
  zip: string;
  address: string;
  role: number;
}

export type UserInput = {
  username: string;
  email: string;
  phoneNumber: string;
  password: string;
  city: string;
  zip: string;
  address: string;
}