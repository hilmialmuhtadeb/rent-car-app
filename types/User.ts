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

export type UserProfile = {
  id: number;
  username: string;
  email: string;
  phoneNumber: string;
  city: string;
  zip: string;
  address: string;
}

export const defaultUserProfile : UserProfile = {
  id: 0,
  username: '',
  email: '',
  phoneNumber: '',
  city: '',
  zip: '',
  address: '',
}