import React from 'react';

import { GridTile } from 'material-ui/GridList';
import { CardMedia } from 'material-ui/Card';
import IconButton from 'material-ui/IconButton';
import FlatButton from 'material-ui/FlatButton';
import Fullscreen from 'material-ui/svg-icons/navigation/fullscreen';

import { ExpandPhoto } from './ExpandPhoto';

export class PhotoItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,

        }
    }

    toggleFullscreen = () => {
        this.setState({open: !this.state.open});
    }

    render() {
        return (
            <GridTile
              title={this.props.title}
              actionIcon={<IconButton
                            onClick={this.toggleFullscreen}>
                                <Fullscreen color="white" />
                          </IconButton>}>
                        
                <img src={this.props.src} />

                <ExpandPhoto
                  open={this.state.open}
                  close={this.toggleFullscreen}
                  src={this.props.src}
                  title={this.props.title}
                  subtitle={this.props.author}
                  description={this.props.description}
                  tripId={this.props.tripId}
                  photoId={this.props.photoId} />
            </GridTile>
        )
    }
}