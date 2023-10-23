import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePages from "./HomePages";
import HomeLayout from "./HomePages/layouts/MainLayout/HomeLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeLayout />}>
          <Route index element={<HomePages />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
