import React, { useContext, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";

import { API, seAuthToken } from "./apiConfig/api";
import { UserContext } from "./context/UserContext";
import LandingPage from "./pages/landingPage/LandingPage";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

import HomePage from "./pages/homePage/HomePage";
import AdminPage from "./pages/adminPage/AdminPage";
import ProfilePage from "./pages/profilePage/ProfilePage";
import MyCollection from "./pages/mycollection/MyCollection";
import AddLiterature from "./pages/addliterature/AddLiterature";

// Jika di localstorage ada token  maka eksesusi fungsi setAuthToken untuk menaruh token di localstorage
if (localStorage.token) seAuthToken(localStorage.token);

function App() {
  const [state, dispatch] = useContext(UserContext);

  useEffect(() => {
    const loadUser = async () => {
      try {
        const res = await API.get("/auth");

        dispatch({
          type: "USER_LOADED",
          payload: res.data.data.user,
        });
      } catch (err) {
        dispatch({
          type: "AUTH_ERROR",
        });
      }
    };

    loadUser(); //Setiap kali kita mangakses/merefres app kita maka fungsi loadUser akan dijalankan
  }, []);

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <PrivateRoute exact path="/home" component={HomePage} />
          <PrivateRoute exact path="/admin" component={AdminPage} />
          <PrivateRoute exact path="/profile" component={ProfilePage} />
          <PrivateRoute exact path="/my-collection" component={MyCollection} />
          <PrivateRoute
            exact
            path="/add-literature"
            component={AddLiterature}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
