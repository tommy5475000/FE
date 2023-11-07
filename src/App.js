import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePages from "./HomePages";
import HomeLayout from "./HomePages/layouts/MainLayout/HomeLayout";
import SignIn from "./Auth/pages/SignIn";
import SignUp from "./Auth/pages/SignUp";
import Jobs from "./HomePages/Jobs";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeLayout />}>
          <Route index element={<HomePages />} />
          <Route path="types/:jobtype/:id" element={<Jobs />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
