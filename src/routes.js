import React from "react";
import App from "./App";
// import Sobre from './pages/Sobre';

import { BrowserRouter, Switch, Route } from "react-router-dom";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={App} />
        {/* <Route path="/sobre" component={Sobre} /> */}
        {/* <Route path='*' component={ComponenteDePagina404} /> */}
      </Switch>
    </BrowserRouter>
  );
}
