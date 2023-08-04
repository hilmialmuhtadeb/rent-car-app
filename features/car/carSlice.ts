import { Car } from '@/types/Car';
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CarState {
  cars: Car[];
}

const initialState: CarState = {
  cars: [],
}

export const carSlice = createSlice({
  name: 'car',
  initialState,
  reducers: {
    addCar: (state, action: PayloadAction<Car>) => {
      state.cars.push(action.payload);
    },
    removeCar: (state, action: PayloadAction<number>) => {
      state.cars = state.cars.filter((car) => car.carId !== action.payload);
    },
    updateCar: (state, action: PayloadAction<Car>) => {
      const index = state.cars.findIndex((car) => car.carId === action.payload.carId);
      state.cars[index] = action.payload;
    },
    setCars: (state, action: PayloadAction<Car[]>) => {
      state.cars = action.payload;
    }
  },
})

// Action creators are generated for each case reducer function
export const { addCar, removeCar, updateCar, setCars } = carSlice.actions

export default carSlice.reducer