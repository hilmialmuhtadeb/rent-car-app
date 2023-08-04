import { Car } from "@/types/Car";
import axios from "axios";

type getAllCarsResponse = {
  cars: Car[];
}

export async function getAllCars(): Promise<Car[]>  {
  const response = await axios.get<getAllCarsResponse>('http://localhost:8080/api/cars');
  return response.data.cars;
}