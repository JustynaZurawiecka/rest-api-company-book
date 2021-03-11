import React from 'react';
import { Switch, Route } from 'react-router-dom';

import MainLayout from './components/layout/MainLayout/MainLayout';

// import routes
import Home from './components/pages/Home/HomePage';
import NotFound from './components/pages/NotFound/NotFoundPage';
import Prices from './components/pages/Prices/PricesPage';
import Order from './components/pages/Order/OrderPage.js';
import ConcertPage from './components/pages/ConcertPage/ConcertPageContainer';
import TicketPage from './components/pages/TicketPage/TicketPageContainer.js';

class App extends React.Component {

  render() {
    return (
      <MainLayout>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/prices" exact component={Prices} />
          <Route path="/order-a-ticket" exact component={Order} />
          <Route path="/concert/:id" exact component={ConcertPage} />
          <Route path="/buy-a-ticket" exact component={TicketPage} />

          <Route component={NotFound} />
        </Switch>
      </MainLayout>
    );
  }

}

export default App;
