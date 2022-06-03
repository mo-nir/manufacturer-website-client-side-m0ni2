import './App.css';
import Navbar from './Pages/Shared/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Login from './Pages/Authentication/Login';
import Footer from './Pages/Shared/Footer';
import PrivacyPolicy from './Pages/Shared/PrivacyPolicy';
import TermsOfService from './Pages/Shared/TermsOfService';
import Register from './Pages/Authentication/Register';
import RequireAuth from './Pages/Authentication/RequireAuth';
import Purchase from './Pages/Purchase/Purchase';
import Blogs from './Pages/Blogs/Blogs';
import Dashboard from './Pages/Dashboard/Dashboard';
import AddAReview from './Pages/Dashboard/AddAReview';
import MyOrders from './Pages/Dashboard/MyOrders';
import MyProfile from './Pages/Dashboard/MyProfile';


function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='login' element={<Login />} />
        <Route path='register' element={<Register />} />
        <Route path='privacy' element={<PrivacyPolicy />} />
        <Route path='blogs' element={<Blogs />} />
        <Route path='terms' element={<TermsOfService />} />

        <Route
          path="purchase/:id"
          element={
            <RequireAuth>
              <Purchase />
            </RequireAuth>
          }
        />

        <Route
          path="dashboard"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }>
          <Route index element={<TermsOfService />} />
          <Route path='addAReview' element={<AddAReview />} />
          <Route path='myOrders' element={<MyOrders />} />
          <Route path='myProfile' element={<MyProfile />} />
        </Route>

      </Routes>
      <Footer />
    </div>
  );
}

export default App;
