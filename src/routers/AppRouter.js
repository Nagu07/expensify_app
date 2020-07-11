import React from 'react';
import Header from '../components/Header';
import Dashboard from '../components/Dashboard';
import AddExpense from '../components/AddExpense';
import EditExpense from '../components/EditExpense';
import HelpPage from '../components/Help';
import NotFoundPage from '../components/NotFound';
import {BrowserRouter,Route,Switch} from 'react-router-dom';

const AppRouter = () => (
    <BrowserRouter>
    <div>
        <Header />
        <Switch>
            <Route path="/" component={Dashboard} exact={true}/>
            <Route path="/create" component={AddExpense}/>
            <Route path="/edit/:id" component={EditExpense}/>
            <Route path="/help" component={HelpPage}/>
            <Route component={NotFoundPage}/>
        </Switch>
    </div>
    </BrowserRouter>
);

export default AppRouter;