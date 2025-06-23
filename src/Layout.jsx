import { Routes, Route } from "react-router-dom";
import App from './App.jsx'
import Test from "@components/Test.jsx";
import Testt from "@templates/Test.jsx";
import NotFound from "@templates/notfound/NotFound.jsx";
export default function Layout() {
  return (
    <div>
       <Routes>
       <Route path="/" element={<App />} />
       <Route path="/component" element={<Test/>}/>
       <Route path="/templates" element={<Testt/>}/>
       <Route path="*" element={<NotFound />} />
       </Routes>
    </div>
  )
}
