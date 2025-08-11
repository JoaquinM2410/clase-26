import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Dashboard } from "../pages/Dashboard"
import { NoteFound } from "../pages/NoteFound"

const RouterApp = () => {
  return (<BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="*" element={<NoteFound />} />
    </Routes>
  </BrowserRouter>
  )
}

export { RouterApp }