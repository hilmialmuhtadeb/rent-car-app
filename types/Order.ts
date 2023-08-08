export interface Order {
  id: number
  carId: number
  userId: number
  adminId: number
  pickupLocation: string
  dropoffLocation: string
  pickupDate: string
  dropoffDate: string
  pickupTime: string
}

export interface OrderInput {
  carId: number
  pickupLocation: string
  dropoffLocation: string
  pickupDate: string
  dropoffDate: string
  pickupTime: string
}