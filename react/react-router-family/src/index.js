import React from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link, Switch,Redirect} from 'react-router-dom';
// Redirect 跳转到第一个链接

function AnimationExample() {
  return (
    <Router>
      <Route 
        render={({location}) => (
          <div style={styles.fill}>
            {/*JSON.stringify(location)*/}
            <Route
            exact
            path="/"
            render={()=><Redirect to="/hsl/10/90/50"/>}
            />
            <ul style={styles.nav}>
              <NavLink to="/hsl/10/90/50">Red</NavLink>
              <NavLink to="/hsl/120/100/40">Green</NavLink>
              <NavLink to="/rgb/33/150/243">Blue</NavLink>
              <NavLink to="/rgb/240/98/246">Pink</NavLink>
            </ul>

            <div style={styles.content}>
              <Switch location={location}>
                <Route exact path="/hsl/:h/:s/:l" component={HSL} />
                <Route exact path="/rgb/:r/:g/:b" component={RGB} />
              </Switch >
            </div>
          </div>
        )}
      />
    </Router>
  );
}

function NavLink(props) {
  return (
    <li style={styles.navItem}>
      <Link {...props}/>
    </li>
  )
}

function HSL({ match: { params } }) {
  return (
    <div
      style={{
        ...styles.fill,
        ...styles.hsl,
        background: `hsl(${params.h}, ${params.s}%, ${params.l}%)`
      }}>
      hsl({params.h}, {params.s}%, {params.l}%) 
    </div>
  )
}

function RGB({ match: { params } }) {
  return (
    <div
      style={{
        ...styles.fill,
        ...styles.rgb,
        background: `rgb(${params.r}, ${params.g}, ${params.b})`
      }}
    >
      rgb(
      {params.r}, {params.g}, {params.b})
    </div>
  );
}

const styles = {};
styles.fill = {
  position: "absolute",
  left: 0,
  top: 0,
  bottom: 0,
  right: 0
};
styles.content = {
  ...styles.fill,
  top: '40px',
  textAlign: 'center'
}
styles.nav = {
  position: "absolute",
  padding: 0,
  margin: 0,
  top: 0,
  height: "40px",
  width: "100%",
  display: 'flex'
}
styles.navItem = {
  flex: 1,
  textAlign: 'center',
  listStyleType: 'none',
  padding: '10px'
}
styles.hsl = {
  ...styles.fill,
  color: "white",
  paddingTop: "20px",
  fontSize: "30px"
};

styles.rgb = {
  ...styles.fill,
  color: "white",
  paddingTop: "20px",
  fontSize: "30px"
};
ReactDOM.render ( <AnimationExample />, document.getElementById('root'))
