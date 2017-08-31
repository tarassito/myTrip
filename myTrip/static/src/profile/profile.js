import React from "react";
import axios from "axios";

import Paper from 'material-ui/Paper';
import Avatar from 'material-ui/Avatar';
import { Buttons } from './profileButtons';
import { ProfileEdit } from './profileEdit';

import './profile.less';

const profileURL = '/api/v1/profile/';

export default class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.profileID = this.props.match.params.id || '';
        this.state = {
            profile: null
        };
    }

    getProfile = () => {
        axios.get(profileURL)
        .then(response => {
        const profile = response.data;
        this.setState({profile: profile});
    });
    };
    
    componentDidMount(){
        this.getProfile();
    }
    changeImg = img => {
      this.forceUpdate()
    }

  render(){
    const data = this.state.profile
    return (
          <Paper className='MainPaper'  zDepth={2} >
            {data && <Avatar src={this.state.profile.avatar} className='avatar' size={200} />}
            {data && <ProfileEdit profile={data} getProfile={this.getProfile} changeImg={this.changeImg} />}
            <Buttons />
          </Paper>
      );
  };
}
