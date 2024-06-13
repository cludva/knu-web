import { Routes, Route } from "react-router-dom";
import Faculties from "./Components/pages/Faculties/Faculties";
import Home from "./Components/pages/Home/Home";
import Institutes from "./Components/pages/Institutes/Institutes";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/faculties" element={<Faculties />}></Route>
        <Route path="/institutes" element={<Institutes />}></Route>
      </Routes>
    </>
  );
};

export default App;
