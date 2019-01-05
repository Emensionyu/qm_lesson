import  * as React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { App } from './app';
import { About, MembersPage ,MemberPageContainer} from './components';
// import { MemberPageContainer } from './components/member/pageContainer';


export const AppRouter: React.StatelessComponent<{}> = () => {
  return (
    <HashRouter>
      <div className="container-fluid">
        <Route component={App}/>
        <Switch>
          <Route exact path='/'  component={About}/>
          <Route path='/about' component={About}/>
          <Route path='/members'component={MembersPage}/>
          <Route path='/member'component={MemberPageContainer}/>
        </Switch>
      </div>
    </HashRouter>
  );
}
