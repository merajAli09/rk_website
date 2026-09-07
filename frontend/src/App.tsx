import { Navigate, Routes, Route } from "react-router-dom";
import Home from "@/pages/Home";
import Branch from "@/pages/Branch";

// One <Route> per page in src/pages; BrowserRouter already wraps this in main.tsx.
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/branches/gudimalkapur" element={<Navigate replace to="/branches/guddimalkapur" />} />
      <Route path="/branches/afzal-gunj" element={<Navigate replace to="/branches/begum-bazar" />} />
      <Route path="/branches/puranapool" element={<Navigate replace to="/branches/puranapul" />} />
      <Route path="/branches/:slug" element={<Branch />} />
    </Routes>
  );
}
