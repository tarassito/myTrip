import React from "react";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Tabs, Tab} from 'material-ui/Tabs';
import Paper from 'material-ui/Paper';
import SwipeableViews from 'react-swipeable-views';
import MapsPlace from 'material-ui/svg-icons/maps/place';
import MapsAddLocation from 'material-ui/svg-icons/maps/add-location';
import MapsBeenHere from 'material-ui/svg-icons/maps/beenhere'
import {orange500,green600,yellow500,tealA400,blue500} from 'material-ui/styles/colors';
import './home.less';

let home ={

    imgPaperOne:{
        display:'block',
        margin:'auto',
        width:'100%',

    },
    placePageOne:{
        position:'absolute',
       width: 60,
       height: 60,
       bottom:'30%',
       left:'43.5%'

    },
    paperOneTripText:{
        fontSize:30,
        textAlign:'center',
    },
    placeOneAddPageOne:{
       position:'absolute',
       width: 60,
       height: 60,
       bottom:'37.8%',
       left:'38.5%'
    },
    paperTwoTripText:{
        fontSize:30,
        textAlign:'center',
    },
    placeTwoAddPageOne:{
       position:'absolute',
       width: 60,
       height: 60,
       bottom:'42.5%',
       right:'43.8%'
    },

    paperThreeTripText:{
        fontSize:30,
        textAlign:'center',
    },

    placeThreeAddPageOne:{
       position:'absolute',
       width: 60,
       height: 60,
       bottom:'55%',
       right:'35%'
    },

    paperFourTripText:{
        fontSize:30,
        textAlign:'center',
    },

    placeEndTripPageOne:{
       position:'absolute',
       width: 60,
       height: 60,
       top:'9%',
       right:'45%'
    },
    paperFiveTripText:{
        fontSize:30,
        textAlign:'center',
    },
};

class PaperPageOne extends React.Component{

    constructor(props){
        super(props);
        this.state={
          visibilityLabelOne:'hidden',
          visibilityLabelTwo:'hidden',
          visibilityLabelThree:'hidden',
          visibilityLabelFour:'hidden',
          visibilityLabelFive:'hidden',
        };
        this.onMouseOverTextChangeOne = this.onMouseOverTextChangeOne.bind(this);
        this.onMouseOutTextChangeOne = this.onMouseOutTextChangeOne.bind(this);
        this.onMouseOverTextChangeTwo = this.onMouseOverTextChangeTwo.bind(this);
        this.onMouseOutTextChangeTwo = this.onMouseOutTextChangeTwo.bind(this);
        this.onMouseOverTextChangeThree = this.onMouseOverTextChangeThree.bind(this);
        this.onMouseOutTextChangeThree = this.onMouseOutTextChangeThree.bind(this);
        this.onMouseOverTextChangeFour = this.onMouseOverTextChangeFour.bind(this);
        this.onMouseOutTextChangeFour = this.onMouseOutTextChangeFour.bind(this);
        this.onMouseOverTextChangeFive = this.onMouseOverTextChangeFive.bind(this);
        this.onMouseOutTextChangeFive = this.onMouseOutTextChangeFive.bind(this);
    };

    onMouseOverTextChangeOne(){
        this.setState({
            visibilityLabelOne:'visible'
        });
    }
    onMouseOutTextChangeOne(){
        this.setState({
            visibilityLabelOne:'hidden'
        });
    }
    onMouseOverTextChangeTwo(){
        this.setState({
            visibilityLabelTwo:'visible'
        });
    }
    onMouseOutTextChangeTwo(){
        this.setState({
            visibilityLabelTwo:'hidden'
        });
    }

    onMouseOverTextChangeThree(){
        this.setState({
            visibilityLabelThree:'visible'
        });
    }
    onMouseOutTextChangeThree(){
        this.setState({
            visibilityLabelThree:'hidden'
        });
    }

    onMouseOverTextChangeFour(){
        this.setState({
            visibilityLabelFour:'visible'
        });
    }
    onMouseOutTextChangeFour(){
        this.setState({
            visibilityLabelFour:'hidden'
        });
    }

    onMouseOverTextChangeFive(){
        this.setState({
            visibilityLabelFive:'visible'
        });
    }
    onMouseOutTextChangeFive(){
        this.setState({
            visibilityLabelFive:'hidden'
        });
    }


    render(){
        let paper={

            paperOneTripPageOne:{
                position:'absolute',
                backgroundColor:orange500,
                width:200,
                height:50,
                bottom:'27%',
                left:'27%',
                visibility: this.state.visibilityLabelOne,
            },

            paperTwoTripPageOne:{
                position:'absolute',
                backgroundColor:green600,
                width:230,
                height:50,
                bottom:'46%',
                left:'22%',
                visibility: this.state.visibilityLabelTwo,
            },

            paperThreeTripPageOne:{
                position:'absolute',
                backgroundColor:yellow500,
                width:230,
                height:50,
                bottom:'40%',
                right:'25%',
                visibility: this.state.visibilityLabelThree,
            },

            paperFourTripPageOne:{
                position:'absolute',
                backgroundColor:tealA400,
                width:230,
                height:50,
                top:'30%',
                right:'19%',
                visibility: this.state.visibilityLabelFour,
            },

             paperFiveTripPageOne:{
                position:'absolute',
                backgroundColor:blue500,
                width:230,
                height:50,
                top:'20%',
                right:'38%',
                visibility: this.state.visibilityLabelFive,
            },
};
        return(
            <Paper className="paperPageOne" zDepth={2}>
               <img src="static/src/img/trip.jpg" style={home.imgPaperOne}/>
               <MapsPlace style={home.placePageOne}
                          onMouseOver={this.onMouseOverTextChangeOne}
                          onMouseOut={this.onMouseOutTextChangeOne}/>
                <Paper style={paper.paperOneTripPageOne} zDepth={4}>
                    <span style={home.paperOneTripText}>Start trip</span>
                </Paper>

               <MapsAddLocation onMouseOver={this.onMouseOverTextChangeTwo}
                                onMouseOut={this.onMouseOutTextChangeTwo}
                                style={home.placeOneAddPageOne}/>
                <Paper style={paper.paperTwoTripPageOne} zDepth={4}>
                    <span style={home.paperTwoTripText}>Add checkpoint</span>
                </Paper>

               <MapsAddLocation onMouseOver={this.onMouseOverTextChangeThree}
                                onMouseOut={this.onMouseOutTextChangeThree}
                                style={home.placeTwoAddPageOne}/>
                <Paper style={paper.paperThreeTripPageOne} zDepth={4}>
                    <span style={home.paperThreeTripText}>Add checkpoint</span>
                </Paper>

                <MapsAddLocation onMouseOver={this.onMouseOverTextChangeFour}
                                 onMouseOut={this.onMouseOutTextChangeFour}
                                 style={home.placeThreeAddPageOne}/>
                <Paper style={paper.paperFourTripPageOne} zDepth={4}>
                    <span style={home.paperFourTripText}>Add checkpoint</span>
                </Paper>

                <MapsBeenHere onMouseOver={this.onMouseOverTextChangeFive}
                              onMouseOut={this.onMouseOutTextChangeFive}
                              style={home.placeEndTripPageOne}/>
                <Paper style={paper.paperFiveTripPageOne} zDepth={4}>
                    <span style={home.paperFiveTripText}>Finish your trip!</span>
                </Paper>
            </Paper>
        )
    };
}

class PaperPageTwo extends React.Component{

    render(){
        let paperTwo={

            paperOneTripPageOne:{
                position:'relative',
                backgroundColor:orange500,
                width:200,
                height:50,
                bottom:'27%',
                left:'27%',
            },

            paperTwoTripPageOne:{
                position:'relative',
                backgroundColor:green600,
                width:230,
                height:50,
                bottom:'46%',
                left:'22%',

            },

            paperThreeTripPageOne:{
                position:'relative',
                backgroundColor:yellow500,
                width:230,
                height:50,
                bottom:'40%',
                right:'25%',

            },

            paperFourTripPageOne:{
                position:'relative',
                backgroundColor:tealA400,
                width:230,
                height:50,
                top:'30%',
                right:'19%',

            },

             paperFiveTripPageOne:{
                position:'relative',
                backgroundColor:blue500,
                width:230,
                height:50,
                top:'20%',
                right:'38%',

            },
};
        return(
            <Paper className="paperPageOne" zDepth={2}>

                <img src="static/src/img/trip.jpg" style={home.imgPaperOne}/>
                <div>
                <MapsPlace />
                <Paper  zDepth={4}>
                    <span >Start trip</span>
                </Paper>

                <MapsAddLocation />
                <Paper  zDepth={4}>
                    <span >Add checkpoint</span>
                </Paper>

                <MapsAddLocation />
                <Paper  zDepth={4}>
                    <span >Add checkpoint</span>
                </Paper>

                <MapsAddLocation />
                <Paper  zDepth={4}>
                    <span>Add checkpoint</span>
                </Paper>

                <MapsBeenHere />
                <Paper  zDepth={4}>
                    <span >Finish your trip!</span>
                </Paper>
                </div>
            </Paper>
        )
    }
}

class PaperPageThree extends React.Component{
    render(){
       let home={
            paperPageThree:{
                display:'block',
                margin:'auto',
                width:'90%'
            },
             imgPaperThree:{
                display:'block',
                margin:'auto',
                width:'100%',
             }
         };
        return(
            <Paper style={home.paperPageThree} zDepth={2}>

                 <img src="static/src/img/trip.jpg" style={home.imgPaperThree}/>

            </Paper>
        )
    }
}

class HomeTab extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      slideIndex: 0,
    };
    this.handleChange = this.handleChange.bind(this);
    this.onMouseOverSlide = this.onMouseOverSlide.bind(this);
    this.onMouseOutSlide = this.onMouseOutSlide.bind(this);
  }

  handleChange(value){
    this.setState({
      slideIndex: value,
    });
    clearInterval(this.intervalId)
  };

  onMouseOverSlide(){
      clearInterval(this.intervalId)
  };

  onMouseOutSlide(){
      this.intervalId = setInterval(this.timer.bind(this), 5000);
  };

  timer() {
    this.setState({slideIndex: this.state.slideIndex + 1});
    if(this.state.slideIndex >= 3) {
      this.setState({slideIndex: 0})
    }
  }

  componentDidMount() {
      this.intervalId = setInterval(this.timer.bind(this), 5000);
  }

  render() {
        return (
        <div>
        <Tabs
          onChange={this.handleChange}
          value={this.state.slideIndex}
        >
          <Tab label="Share your journey" value={0} />
          <Tab label="Add content" value={1} />
          <Tab label="Social" value={2} />
        </Tabs>
        <SwipeableViews
          index={this.state.slideIndex}
          onChangeIndex={this.handleChange}
          onMouseOver={this.onMouseOverSlide}
          onMouseOut={this.onMouseOutSlide}
        >
          <PaperPageOne/>
          <PaperPageTwo/>
          <PaperPageThree/>
        </SwipeableViews>
      </div>
    )
  }
}
const Home = () => (
  <MuiThemeProvider>
    <HomeTab/>
  </MuiThemeProvider>
);

export default Home;