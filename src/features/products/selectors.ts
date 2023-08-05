import { RootState } from "../../app/store"
import Product from "./types/Product"

// eslint-disable-next-line import/prefer-default-export
export const selectProduct = (state: RootState): Product[] =>
  state.products.products
