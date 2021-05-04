import logo from './logo.svg';
import NavBar from "./components/navbar";

import { Route, Switch, Redirect } from 'react-router-dom';
import AboutLearning360 from "./components/aboutLearning360";
import Home from "./components/home"
import React, { Component } from 'react';
import Footer from "./components/footer"
import AppsInPlatform from "./components/appsInPlatform"
import AboutMy360 from "./components/aboutMy360"
import SalesAnalytics from './components/saleAnalytics';
import CashFlowAnalytics from './components/cashFlowAnalytics';
import ConsultingService from './components/consultingServices';
import KnowledgeService from './components/knowledgeService';
import ManagedServices from './components/managedServices';
import DataManagement from './components/dataManagement';
import DataIntegration from './components/dataIntegration';
import DataReport from './components/dataReport';
import OpenSource from './components/openSource';


function App() {
  return (
    <React.Fragment>
      <NavBar />
      <main role="main" >
        <Switch>
          <Route path="/aboutLearning" component={AboutLearning360} />
          <Route path="/appsinlearning" component={AppsInPlatform} />
          <Route path="/aboutMy360" component={AboutMy360} />
          <Route path="/salesAnalytics" component={SalesAnalytics} />
          <Route path="/financialAnalytics" component={CashFlowAnalytics} />
          <Route path="/consultingServices" component={ConsultingService} />
          <Route path="/knowledgeServices" component={KnowledgeService} />
          <Route path="/managedServices" component={ManagedServices} />
          <Route path="/dataManagement" component={DataManagement} />
          <Route path="/dataIntegration" component={DataIntegration} />
          <Route path="/dataReport" component={DataReport} />
          <Route path="/openSource" component={OpenSource} />

          <Route path="/home" component={Home} />

          <Route path="/" exact component={Home} />

        </Switch>
      </main>


      <Footer />

    </React.Fragment>
  );
}

export default App;
