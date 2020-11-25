import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Mainlogo from '../Images/Mainlogo.png'
 
const AnyReactComponent = ({ text }) => <div className='myMarker'>
        <img src={Mainlogo}/>
        {text}
    </div>;
 
class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 46.47,
      lng: 30.70
    },
    zoom: 11
  };
 
  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100%', width: '100%' }}>
        <GoogleMapReact
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={46.476608}
            lng={30.707310}
          />
        </GoogleMapReact>
      </div>
    );
  }
}
 
export default SimpleMap;