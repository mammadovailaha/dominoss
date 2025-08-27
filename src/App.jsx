import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./layouts/Layout";
import Home from "./pages/Home";
// import Login from "./pages/Login";
// import Basket from "./pages/Basket";
import Suggestions from "./pages/Suggestions";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import About from "./pages/AboutUs";
import Join from "./pages/JoinUs";
import Offer from "./pages/Offer";
import Bread from "./pages/Bread";
import Chicken from "./pages/Chicken";
import Salad from "./pages/Salad";
import Dip from "./pages/Dip";
import Dessert from "./pages/Dessert";
function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<About />}/>
          <Route path="/suggestions-complaints" element={<Suggestions />}/>
          <Route path="/terms-of-service" element={<Services />}/>
          <Route path="/privacy-policy" element={<Privacy />}/>
          <Route path="/contact-us" element={<Contact />}/>
          <Route path="/join-us" element={<Join />}/>
          <Route path="/offers" element={<Offer />}/>
          {/* <Route path="/pizza" element={<Pizza />}/> */}
          <Route path="/bread" element={<Bread />}/>
          <Route path="/chicken" element={<Chicken />}/>
          <Route path="/salad" element={<Salad />}/>
          {/* <Route path="/drinks" element={<Drink />}/> */}
          <Route path="/dips" element={<Dip />}/>
          <Route path="/desserts" element={<Dessert />}/>
          {/* <Route path="/login" element={<Login />} />
          <Route path="/basket" element={<Basket />} /> */}
        </Route>
      </Routes>
    </Router>
  );
}
export default App;
