/*global OpenLayers*/

import React from 'react';

export default class Map extends React.Component {
  constructor(props) {
    props = props || {};
    super(props);
  }

  componentDidMount() {
    const data = JSON.parse(this.props.data);

    console.log(data);

    L.mapbox.accessToken = 'pk.eyJ1IjoibnJrIiwiYSI6Ii14T3NfSzgifQ.0N5h3SI2b6bemxP_1YESIA';

    // create a map in the "map" div, set the view to a given place and zoom
    var map = L.mapbox.map('map', 'mapbox.streets')
      .setView([51.505, -0.09], 13);

    // L.Icon.Default.imagePath = 'http://localhost:3000/images/';

    // var stamenLayer = L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/toner/{z}/{x}/{y}.png', {
    //   attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, under <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>. Data by <a href="http://openstreetmap.org">OpenStreetMap</a>, under <a href="http://creativecommons.org/licenses/by-sa/3.0">CC BY SA</a>.'
    // }).addTo(map);

    // Add a marker in the given location, attach some popup content to it and open the popup
    L.marker([51.5, -0.09]).addTo(map)
      .bindPopup('A pretty CSS3 popup. <br> Easily customizable.')
      .openPopup();
  }

  render() {
    return (
      <div className='map' id='map'></div>
    );
  }
}
