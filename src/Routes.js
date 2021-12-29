import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import PrivateRoute from "./PrivateRoutes";
import Home from "./Pages/Home/Home";
import Librarians from "./Pages/Librarians/Librarians";
import AddNew from "./Pages/AddNewLibrarian/AddNew";
import Readers from "./Pages/Readers/Readers";
import Categories from "./Pages/Categories/Categories";
import Books from "./Pages/Books/Books";
import AddNewBook from "./Pages/AddNewBook/AddNewBook";
import Authors from "./Pages/Authors/Authors";
import Sales from "./Pages/Sales/Sales";
import CustomerCare from "./Pages/Notifications/CustomerCare";
import ScheduleNotifications from "./Pages/Notifications/ScheduleNotifications";
import BulkNotifications from "./Pages/Notifications/BulkNotifications";
import AddSliderImages from "./Pages/Settings/AddSliderImages";
import MobileSettings from "./Pages/Settings/MobileSettings";
import Packages from "./Pages/Settings/Packages";
import Shop from "./Pages/Shop/Shop";
import AddNewProduct from "./Pages/AddNewProduct/AddNewProduct";
import AddAuthor from "./Pages/Authors/AddAuthor";
import AddNewPackage from "./Pages/Settings/AddNewPackage";
import GeneralSettings from "./Pages/Settings/GeneralSettings";
import Orders from "./Pages/Shop/Orders";
import Statics from "./Pages/Statics/Statics";
import AddUser from "./Pages/AddUser/AddUser";
import Payment from "./Pages/Payment/Payment";
import { useSelector } from "react-redux";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" exact component={Login} />
        <Route path="/register" exact component={Register} />
        <Route path="/librarians" exact component={Librarians} />
        <Route path="/add-new" exact component={AddNew} />
        <Route path="/add-user" exact component={AddUser} />
        <Route path="/readers" exact component={Readers} />
        <Route path="/categories" exact component={Categories} />
        <Route path="/books" exact component={Books} />
        <Route path="/add-book" exact component={AddNewBook} />
        <Route path="/authors" exact component={Authors} />
        <Route path="/sales" exact component={Sales} />
        <Route path="/payments" exact component={Payment} />
        <Route path="/customer-care" exact component={CustomerCare} />
        <Route path="/schedule" exact component={ScheduleNotifications} />
        <Route path="/bulk" exact component={BulkNotifications} />
        <Route path="/add-slider" exact component={AddSliderImages} />
        <Route path="/mobile-settings" exact component={MobileSettings} />
        <Route path="/packages" exact component={Packages} />
        <Route path="/products" exact component={Shop} />
        <Route path="/add-new-product" exact component={AddNewProduct} />
        <Route path="/orders" exact component={Orders} />
        <Route path="/add-author" exact component={AddAuthor} />
        <Route path="/add-package" exact component={AddNewPackage} />
        <Route path="/general-settings" exact component={GeneralSettings} />
        <Route path="/statistics" exact component={Statics} />
      </Switch>
    </Router>
  );
};
export default Routes;
