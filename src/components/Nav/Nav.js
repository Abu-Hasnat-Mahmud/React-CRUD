import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "../Header/Header";
import PageNotFound from "../PageNotFound/PageNotFound";
import ClientList from "../ClientList/ClientList";
import CreateClient from "../CreateClient/CreateClient";
import Login from "../Login/Login";


// this navigation componet
const Nav = () => {
  
    return (
      <div>
        <Router>
          <Header></Header>

          <Switch>
            <Route exact path="/">
              <ClientList></ClientList>
            </Route>
            <Route exact path="/ClientList">
              <ClientList></ClientList>
            </Route>
  
            <Route exact path="/Login">
              <Login></Login>
            </Route> 
            
            <Route
              exact
              path="/CreateClient"
              render={(props) => <CreateClient {...props} authed={true} />}
            ></Route>
  
            <Route path="*">
              <PageNotFound></PageNotFound>
            </Route>
          </Switch>
        </Router>
      </div>
    );
  
 
};

export default Nav;
