import React from 'react';
import { Link } from 'react-router-dom';

import {List, ListItem} from 'material-ui/List';
import AuthorIcon from 'material-ui/svg-icons/social/person';
import AllTripsIcon from 'material-ui/svg-icons/maps/map';
import FollowersIcon from 'material-ui/svg-icons/action/visibility';
import HelpIcon from 'material-ui/svg-icons/action/help-outline';
import HomeIcon from 'material-ui/svg-icons/action/home';
import Subscribe from "../subscribe/Subscribe";
import './trip.less'


export default class TripNavigation extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            open: false,
        };
    };

    handleOpen = () => {
        this.setState({open: true});
    };

    render() {
        return (
            <div>
                <List>
                    <ListItem
                        key='home'
                        className='buttonHome'
                        primaryText='Home'
                        leftIcon={<HomeIcon />}
                        containerElement={<Link to='/' />}
                    />

                    <ListItem
                        key='trips'
                        className='buttonAllTrips'
                        primaryText='All trips'
                        leftIcon={<AllTripsIcon />}
                        containerElement={<Link to='/trips' />}
                    />

                    <ListItem
                        key='profile'
                        className='buttonProfile'
                        primaryText='Author'
                        leftIcon={<AuthorIcon />}
                        containerElement={<Link to={`/profile/${this.props.userId}`} />}
                    />

                    <ListItem
                        key='followers'
                        className='buttonFollowers'
                        primaryText='Subscribers'
                        leftIcon={<FollowersIcon />}
                        onTouchTap={this.handleOpen}
                    />
                    <ListItem
                        key='help'
                        className='buttonHelp'
                        primaryText='Help'
                        leftIcon={<HelpIcon />}
                        containerElement={<Link to='/help' />}
                    />
                </List>
                <Subscribe
                    open={this.state.open}
                    tripId={this.props.tripId}
                />
            </div>
        );
    }
}