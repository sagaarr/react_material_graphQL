import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Dashboard } from "./pages/Dashboard";
import { userRoute } from "./utils/constants/RouteEnum";
import { Launchs } from "./pages/Launchs";
import { Rockets } from "./pages/Rockets";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { ApolloProvider } from "@apollo/client";
import client from "./utils/Https/provider";

function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path={userRoute.home} component={Dashboard} />
          <Route path={userRoute.launches} component={Launchs} />
          <Route path={userRoute.rockets} component={Rockets} />
        </Switch>
        {/* <Footer/> */}
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
