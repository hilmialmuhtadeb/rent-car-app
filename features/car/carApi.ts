import { Car } from "@/types/Car";
import axios from "axios";

interface getAllCarsResponse {
  cars: Car[];
}

interface getCarByIdResponse {
  car: Car;
}

export async function getAllCars(): Promise<Car[]>  {
  const response = await axios.get<getAllCarsResponse>('http://localhost:8080/api/cars', { withCredentials: true });
  return response.data.cars;
}

export async function getCarById(id: number): Promise<Car> {
  const response = await axios.get<getCarByIdResponse>(`http://localhost:8080/api/cars/${id}`, { withCredentials: true });
  return response.data.car;
}

export async function createCar(data: FormData): Promise<Car> {
  const response = await axios.post<getCarByIdResponse>('http://localhost:8080/api/cars', data, { withCredentials: true });
  return response.data.car;
}