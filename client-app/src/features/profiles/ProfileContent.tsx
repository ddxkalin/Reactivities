import { Tab } from "semantic-ui-react"

export default function ProfileContent() {
    const panes = [
        {menuItem: 'About', render: () => <Tab.Pane>About Conent</Tab.Pane>},
        {menuItem: 'Photos', render: () => <Tab.Pane>About Photos</Tab.Pane>},
        {menuItem: 'Events', render: () => <Tab.Pane>About Events</Tab.Pane>},
        {menuItem: 'Followers', render: () => <Tab.Pane>About Followers</Tab.Pane>},
        {menuItem: 'Following', render: () => <Tab.Pane>About Following</Tab.Pane>},
    ];

    return(
        <Tab
            menu={{fluid: true, veritcal: true}}
            menuPosition='right'
            panes={panes}
        />
    )
}