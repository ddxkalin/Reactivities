import { useEffect, useState } from 'react';
import './styles.css';
import { Container } from 'semantic-ui-react';
import { Activity } from '../models/activity';
import NavBar from './NavBar';
import ActivityDashboard from '../../features/activities/dashboard/ActivityDashboard';
import { v4 as uuidv4 } from 'uuid';
import agent from '../api/agent';
import LoadingComponent from './LoadingComponents';
import { useStore } from '../stores/store';
import { observer } from 'mobx-react-lite';

function App() {
  const {activityStore} = useStore();

  const [activities, setActivities] = useState<Activity[]>([]);
  const [selectedActivity, setSelectedActivity] = useState<Activity | undefined>(undefined);
  const [editMode, setEditMode] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    activityStore.loadActivities();
  }, [activityStore])

  function handleSelectActivity(id: string) {
    setSelectedActivity(activities.find(x => x.id === id));
  }

  function handleCancelSelectActivity() {
    setSelectedActivity(undefined);
  }

  function handleFormOpen(id?: string) {
    id ? handleSelectActivity(id) : handleCancelSelectActivity();
    activityStore.openForm(id);
  }

  function handleFormClose() {
    activityStore.closeFrom();
  }

  function handleDeteleActivity(id: string) {
    setSubmitting(true);
    agent.Activities.delete(id).then(() => {
      setActivities([...activities.filter(x => x.id !== id)]);
      setSubmitting(false);
    })
  }

  function handleCreateOrEditActivity(activity: Activity) {
    setSubmitting(true);
    if(activity.id) {
      agent.Activities.update(activity).then(() => {
        setActivities([...activities.filter(x => x.id !== activity.id), activity])
        activityStore.closeFrom();
        setSelectedActivity(activity);
        setSubmitting(false);
      })
    } else {
      activity.id = uuidv4();
      agent.Activities.create(activity).then(() => {
        setActivities([...activities, activity]);
        activityStore.closeFrom();
        setSelectedActivity(activity);
        setSubmitting(false);
      })
    }
  }

  if (activityStore.loadingInitial) return <LoadingComponent content='Loading Reactivities..' />

  return (
    <>
      <NavBar />
      <Container style={{ marginTop: '7em'}}>
        <ActivityDashboard 
          activities={activityStore.activities}
          createOrEdit={handleCreateOrEditActivity}
          deleteActivity={handleDeteleActivity}
          submitting={submitting}
          />
      </Container>
      </>
  );
}

export default observer(App);
