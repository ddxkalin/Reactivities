import { observer } from 'mobx-react-lite';
import { useEffect, useState } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import { Button, Segment } from 'semantic-ui-react';
import LoadingComponent from '../../../app/layout/LoadingComponents';
import { useStore } from '../../../app/stores/store';
import { Formik, Form, Field } from 'formik';

export default observer (function ActivityForm() {
    const history = useHistory();
    const {activityStore} = useStore();
    const {loading, loadActivity, loadingInitial} = activityStore;
    const {id} = useParams<{id: string}>();

    const [activity, setActivity] = useState({
        id: '',
        title: '',
        description: '',
        category: '',
        date: '',
        city: '',
        venue: ''
    }) 

    useEffect(() => {
        if (id) loadActivity(id).then(activity => setActivity(activity!))
    }, [id, loadActivity]);

    if (loadingInitial) return <LoadingComponent content='Loading Activity...' />

    return (
        <Segment clearing>
            <Formik enableReinitialize initialValues={activity} onSubmit={values => console.log(values)}>
            {({ handleSubmit }) => (
                <Form className='ui form' onSubmit={handleSubmit} autoComplete='off'>
                    <Field placeholder='Title' name='title' />
                    <Field placeholder='Description' name='description' />
                    <Field placeholder='Category' name='category' />
                    <Field type='date' placeholder='Date' name='date' />
                    <Field placeholder='City' name='city' />
                    <Field placeholder='Venue'  name='venue' />
                    <Button loading={loading} floated='right' positive type='submit' content='Submit' />
                    <Button as={Link} to='/activities' floated='right' type='button' content='Cancel'/>
                </Form>
            )}
            </Formik>
        </Segment>
    )
})