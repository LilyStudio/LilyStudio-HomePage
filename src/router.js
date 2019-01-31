import React from 'react';
import { Router, Route } from 'dva/router';

import IndexPage from './routes/IndexPage';
import RecordPage from './routes/RecordPage';
import RecordInfoPage from './routes/RecordInfoPage';
import ProjectPage from './routes/ProjectPage';
import ProjectInfoPage from './routes/ProjectInfoPage';
import MemberPage from './routes/MemberPage';
import SalonPage from './routes/SalonPage';
import FaqPage from './routes/FaqPage';
import BoardPage from './routes/BoardPage';


function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Route path="/" component={IndexPage} />
      <Route path="/record" component={RecordPage} />
      <Route path="/record/:id" component={RecordInfoPage} />
      <Route path="/project" component={ProjectPage} />
      <Route path="/project/:id" component={ProjectInfoPage} />
      <Route path="/member" component={MemberPage} />
      <Route path="/salon" component={SalonPage} />
      <Route path="/faq" component={FaqPage} />
      <Route path="/board" component={BoardPage} />
    </Router>
  );
}

export default RouterConfig;
