import { BrowserRouter, Route, Routes } from 'react-router'
import { ShoppingListPage } from '../../../pages'
import App from '../../../App'

export const RoutesProvider = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/shopping-list' element={<ShoppingListPage />} />
      </Routes>
    </BrowserRouter>
  )
}
