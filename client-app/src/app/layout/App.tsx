import './styles.css';
import { Container } from 'semantic-ui-react';
import NavBar from './NavBar';
import ActivityDashboard from '../../features/activities/dashboard/ActivityDashboard';
import { observer } from 'mobx-react-lite';
import { Route, Switch, useLocation } from 'react-router-dom';
import ActivityForm from '../../features/activities/form/ActivityForm';
import HomePage from '../../features/activities/home/HomePage';
import ActivityDetails from '../../features/activities/details/ActivityDetails';
import TestErrors from '../../features/activities/errors/TestError';
import { ToastContainer } from 'react-toastify';
import NotFound from '../../features/activities/errors/NotFound';
import ServerError from '../../features/activities/errors/ServerError';
import LoginForm from '../../features/users/LoginForm';

function App() {
  const location = useLocation();
  
  return (
    <>
      <ToastContainer position='bottom-right' hideProgressBar/>
      <Route exact path='/' component={HomePage} />
      <Route
        path={'/(.+)'}
        render={() => (
          <>
            <NavBar />
            <Container style={{ marginTop: '7em' }}>
              <Switch>
                <Route exact path='/activities' component={ActivityDashboard} />
                <Route path='/activities/:id' component={ActivityDetails} />
                <Route key={location.key} path={['/createActivity', '/manage/:id']} component={ActivityForm} />
                <Route path='/errors' component={TestErrors} />
                <Route path='/server-error' component={ServerError} />
                <Route path='/login' component={LoginForm} />
                <Route component={NotFound} />
              </Switch>
            </Container>
          </>
        )}
      />
    </>
  );
}

export default observer(App);
