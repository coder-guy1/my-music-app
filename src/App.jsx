import AppLayout from "./ui/AppLayout";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Playlist from "./pages/Playlist";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Navigate replace to="Home" />} />
          <Route path="login" element={<Login />} />
          <Route path="playlist" element={<Playlist />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
