import {Route, Routes} from "react-router-dom"
import {MainPage} from "./pages/mainPage"
import {ProductsPage} from "./pages/productsPage"

function App() {
  return (
<Routes>
  <Route path="/" element={ <MainPage />} />
  <Route path="/about" element={ <ProductsPage />} />
</Routes>
  );
}

export default App;
