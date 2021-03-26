import React from 'react'
import { Route, Switch } from 'react-router'
import AddWebinar from '../Components/AddWebinar'
import Admin from '../Components/Admin'
import EditWebinar from '../Components/EditWebinar'
import Home from '../Components/Home'
import { Navbar } from '../Components/Navbar'
import ViewWebinars from '../Components/ViewWebinars'

function Routing() {
    return (
        <div>
            <Navbar/>
          <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/admin" exact component={Admin} />
              <Route path="/newWebinar" exact component={AddWebinar} />
              <Route path="/edit/:id" exact component={EditWebinar} />
              <Route path="/:id" exact component={ViewWebinars} />
              </Switch>  
        </div>
    )
}

export default Routing
