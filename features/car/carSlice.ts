import { Car } from '@/types/Car';
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CarState {
  cars: Car[];
  selectedCar: Car | undefined;
}

const initialState: CarState = {
  cars: [],
  selectedCar: undefined
}

export const carSlice = createSlice({
  name: 'car',
  initialState,
  reducers: {
    addCar: (state, action: PayloadAction<Car>) => {
      state.cars.push(action.payload);
    },
    removeCar: (state, action: PayloadAction<number>) => {
      state.cars = state.cars.filter((car) => car.id !== action.payload);
    },
    updateCar: (state, action: PayloadAction<Car>) => {
      const index = state.cars.findIndex((car) => car.id === action.payload.id);
      state.cars[index] = action.payload;
    },
    setCars: (state, action: PayloadAction<Car[]>) => {
      state.cars = action.payload;
    },
    setSelectedCar: (state, action: PayloadAction<Car>) => {
      state.selectedCar = action.payload;
    }
  },
})

// Action creators are generated for each case reducer function
export const { addCar, removeCar, updateCar, setCars, setSelectedCar } = carSlice.actions

export default carSlice.reducer