
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CartItem {
  id: number;
  title: string;
  images?: string[];
  price: number;
}

export interface EcomState {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ecoslice: any;
  transfers: CartItem[];
}

const initialState: EcomState = {
  transfers: [],
  ecoslice: undefined
};

const ecomSlice = createSlice({
  name: 'ecom',
  initialState,
  reducers: {
    transfer: (state, action: PayloadAction<CartItem>) => {
      state.transfers.push(action.payload);
    },
    deleteItemFromCart: (state, action: PayloadAction<number>) => {
      const indexToDelete = action.payload;
      state.transfers.splice(indexToDelete, 1);
    },
  },
});

export const { transfer, deleteItemFromCart } = ecomSlice.actions;
export default ecomSlice.reducer;
