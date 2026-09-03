import { Routes, Route } from "react-router-dom";
import Home from "@/pages/Home";
import Branch from "@/pages/Branch";

// One <Route> per page in src/pages; BrowserRouter already wraps this in main.tsx.
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/branches/:slug" element={<Branch />} />
    </Routes>
  );
}
