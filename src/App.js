import { Routes, Route } from "react-router-dom";
import About from "./components/About";
import Header from "./components/Header";
import Home from "./components/Home";
import ToDoDetail from "./components/ToDoDetail";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route path="todo" element={<Home />}>
          </Route>
          <Route path="/todo/:todoID" element={<ToDoDetail />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
