import { Routes, Route, Outlet } from "react-router-dom";
import Navigation from "./routes/Navigation/Navigation.component";
import Home from "./routes/Home/Home.component";
import NoMatchingRoute from "./routes/NoMatcingRoute/NoMatchingRoute.component";
import SignIn from "./routes/SignIn/SignIn.component";
import Shop from "./routes/Shop/Shop.component";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='shop' element={<Shop />} />
        <Route path='sign-in' element={<SignIn />} />
        <Route path="*" element={<NoMatchingRoute />} />
      </Route>
    </Routes>
  );
};

export default App;
