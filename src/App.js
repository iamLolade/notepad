import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Notes from "./pages/Notes"
import Create from "./pages/Create"
import { createTheme, ThemeProvider } from "@mui/material/styles"

//custom theme
const theme = createTheme({
  palette: {
    primary: {
      main: "rgb(40, 100, 141)"
    }
  }
})

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Notes />} />
            <Route path="/create" element={<Create />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
