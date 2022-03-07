import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Notes from "./pages/Notes"
import Create from "./pages/Create"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Notes />} />
          <Route path="/create" element={<Create />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
