import { Route, Routes } from "react-router-dom"
import { Counter } from "../features/counter/Counter"
import Products from "../features/products/Products"

import "./App.css"

function App(): JSX.Element {
  return (
    <>
      <Routes>
        <Route index element={<Counter />} />
        <Route path="products" element={<Products />} />
      </Routes>
    </>
  )
}

export default App
