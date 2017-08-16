import React from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';

import { Card, CardHeader, CardMedia, CardText, CardActions } from 'material-ui/Card';
import { getTrip, formatDate } from './trip_service';
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';
import Checkbox from 'material-ui/Checkbox';
import Comments from "../comment/Comments";
import Divider from 'material-ui/Divider';
import SubHeader from 'material-ui/Subheader';
import TripEditorDescription from './trip_editor_description';
import TripEditorTitle from './trip_editor_title';
import TripNavigation from './trip_navigation';
import TripDelete from './trip_delete';
import './trip.less';

/*
import Checkpoint from 'checkpoint';
import Like from 'like';
import Photo from 'photo'
*/


export default class TripPage extends React.Component {
    constructor(props){
        super(props);
        //get trip id from page id
        this.tripId = this.props.match.params.id;
        this.state = {
            trip: null,
        };
    };


    //get trip data from backend by url with trip id
    getTrip = () => {
        axios.get(`/api/v1/trip/${this.tripId}/`).then(response => {
            const trip = response.data;
            this.setState({trip});
        });
    };

    //add trip data to state and rerender page
    componentDidMount() {
        this.getTrip();
    };


    render() {

        const trip = this.state.trip;

        return (
        <div className="HolyGrail">
            <div className="HolyGrail-body">
                <main className="HolyGrail-content">
                    <Card>

                    {/*
                    render other part of page while trip=null, after componentDidMount,
                    rerender page with trip data
                    */}

                        {trip &&
                            <Card>
                                <CardHeader className='tripPageHeader' >
                                    <div className="tripEdit">
                                        <CardHeader
                                            title={<b>{this.state.trip.title}</b>}
                                            titleStyle={{fontSize: 25}}
                                        />

                                        {/*
                                        trip edit title mode for author
                                        */}

                                        <div className="tripEditIcon">
                                            <TripEditorTitle
                                                trip={this.state.trip}
                                                text={this.state.trip.title}
                                                tripId={this.state.trip.id}
                                                getTrip={this.getTrip}
                                            />
                                        </div>

                                    </div>
                                    <SubHeader>
                                        {formatDate(trip.create_at)}
                                    </SubHeader>
                                </CardHeader>

                                {/*
                                there will be Google Map component
                                */}

                                <CardMedia className='tripGoogleMap'>
                                    <img src="/static/src/img/world_map.jpg" />
                                </CardMedia>

                                {/*
                                there will be <Photo /> component
                                */}

                                <CardMedia className='tripPhotoGallery'>
                                    <h3>Trip Photo Gallery</h3>
                                </CardMedia>

                                {/*
                                trip description
                                */}

                                <div className="tripEdit">
                                    <CardText className='tripDescription'
                                        style={{fontSize: 20}}
                                    >
                                        <h4>Description:</h4>
                                        {trip.description}
                                    </CardText>
                                    <div className="tripEditIcon">
                                        <TripEditorDescription
                                            trip={this.state.trip}
                                            text={this.state.trip.description}
                                            tripId={this.state.trip.id}
                                            getTrip={this.getTrip}/>
                                    </div>
                                </div>

                                {/*
                                there will be <Like /> component
                                */}

                                <div className='tripLikeIcon'>
                                    <CardActions>
                                        <Checkbox
                                        checkedIcon={<ActionFavorite />}
                                        uncheckedIcon={<ActionFavoriteBorder />} />
                                    </CardActions>
                                </div>
                            </Card>
                        };

                        {/*
                        there will be <Comments /> component
                        */}

                        <Card className='tripComments'>
                            <CardHeader
                                title={<h3>Comments</h3>}
                                actAsExpander={true}
                                showExpandableButton={true} />

                            <CardText expandable={true}>
                                {trip && <Comments tripId={this.state.trip.id} />}
                            </CardText>
                        </Card>

                        {/*
                        there will be <Checkpoint /> component
                        */}

                        <Card className='tripCheckpoints'>
                            <CardHeader
                                title={<h3>Checkpoints</h3>}
                                actAsExpander={true}
                                showExpandableButton={true} />

                            <CardText expandable={true}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                                Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed
                                pellentesque.
                                Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis
                                odio.
                            </CardText>
                        </Card>
                    </Card>
                </main>

                {/*
                left side navigation menu

                after getTrip done, add trip data to TripNavigation state
                */}
                <div className="HolyGrail-left">

                    <TripNavigation />
                    <Divider />
                    {trip && <TripDelete tripId={this.state.trip.id} />}

                </div>

                <aside className="HolyGrail-right">
                </aside>
            </div>
            <footer className="footer"></footer>
        </div>
        );
    }
}
