import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import './style.css'
import WoodTV8 from './views/wood-tv8'
import AboutMe from './views/about-me'
import OtherProjects from './views/other-projects'
import Videos from './views/videos'
import GraphicalDesign from './views/graphical-design'
import DroneFootage from './views/drone-footage'
import MarketingSocialMedia from './views/marketing-social-media'
import UnderConstruction from './views/under-construction'
import OldBase from './views/old-base'
import ESPNDirecting from './views/espn-directing'
import CurrentBase from './views/current-base'
import HOME from './views/home'
import NotFound from './views/not-found'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route component={WoodTV8} exact path="/wood-tv8" />
        <Route component={AboutMe} exact path="/about-me" />
        <Route component={OtherProjects} exact path="/other-projects" />
        <Route component={Videos} exact path="/videos" />
        <Route component={GraphicalDesign} exact path="/graphical-design" />
        <Route component={DroneFootage} exact path="/drone-footage" />
        <Route
          component={MarketingSocialMedia}
          exact
          path="/marketing-social-media"
        />
        <Route component={UnderConstruction} exact path="/under-construction" />
        <Route component={OldBase} exact path="/old-base" />
        <Route component={ESPNDirecting} exact path="/espn-directing" />
        <Route component={CurrentBase} exact path="/current-base" />
        <Route component={HOME} exact path="/" />
        <Route component={NotFound} path="**" />
        <Redirect to="**" />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
