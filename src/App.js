import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home/Home';
import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Admin from './components/Admin/Admin/Admin';
import OrderList from './components/Admin/OrderList/OrderList';
import AddService from './components/Admin/AddService/AddService';
import MakeAdmin from './components/Admin/MakeAdmin/MakeAdmin';
import ManageService from './components/Admin/ManageService/ManageService';
import Booking from './components/Dashboard/Booking/Booking';
import Review from './components/Dashboard/Review/Review';
import BookingList from './components/Dashboard/BookingList/BookingList';
import Login from './components/Login/Login';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

export const UserContext = createContext();

function App() {

  const [loggedInUser, setLoggedInUser] = useState({})
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>

          <PrivateRoute path="/dashboard/book/:id">
            <Booking></Booking>
          </PrivateRoute>
          
          <PrivateRoute path="/dashboard/book">
            <Booking></Booking>
          </PrivateRoute>
          <PrivateRoute exact path="/dashboard">
            <Booking></Booking>
          </PrivateRoute>
          <PrivateRoute exact path="/dashboard/bookingList">
            <BookingList></BookingList>
          </PrivateRoute>
          <PrivateRoute exact path="/dashboard/review">
            <Review></Review>
          </PrivateRoute>

          <PrivateRoute exact path="/admin">
            <OrderList></OrderList>
          </PrivateRoute>
          <PrivateRoute path="/admin/orderList">
            <OrderList></OrderList>
          </PrivateRoute>
          <PrivateRoute path="/admin/addService">
            <AddService></AddService>
          </PrivateRoute>
          <PrivateRoute path="/admin/makeAdmin">
            <MakeAdmin></MakeAdmin>
          </PrivateRoute>
          <PrivateRoute path="/admin/manageService">
            <ManageService></ManageService>
          </PrivateRoute>
        </Switch>
      </Router>
    </UserContext.Provider>

  );
}

export default App;
