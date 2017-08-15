import * as React from 'react';
import {
  Route,
  IndexRoute,
} from 'react-router';
import Container from '../Container';
import Offers from '../Offers';
import Detail from '../Detail';
import NotFound from '../NotFound';
import Page from '../Page';
import Privacy from '../Page/Privacy';

export default (
  <Route path="/" component={Container}>
    <IndexRoute component={Offers} />
    <Route path="/offer/:id(/:url)" component={Detail} />
    <Route path="/page/owner" component={Page} />
    <Route path="/page/guide" component={Page} />
    <Route path="/page/mechanic" component={Page} />
    <Route path="/page/faq" component={Page} />
    <Route path="/privacy-policy" component={Privacy} />
    <Route path="*" component={NotFound} />
  </Route>
);
