/*global OpenLayers*/

import React from 'react';

export default class Map extends React.Component {
  constructor(props) {
    props = props || {};
    super(props);
  }

  componentDidMount() {
    const data = JSON.parse(this.props.data);

    // Set Mapbox access token
    L.mapbox.accessToken = 'pk.eyJ1IjoibnJrIiwiYSI6Ii14T3NfSzgifQ.0N5h3SI2b6bemxP_1YESIA';

    // Create a map in the "map" div, set the view to a given place and zoom
    var map = L.mapbox.map('map');

    var mapboxTiles = L.tileLayer('https://{s}.tiles.mapbox.com/v4/examples.map-i87786ca/{z}/{x}/{y}.png?access_token=' + L.mapbox.accessToken, {
      attribution: '<a href="http://www.mapbox.com/about/maps/" target="_blank">Terms &amp; Feedback</a>'
    });

    // Update map
    map.addLayer(mapboxTiles);
    map.fitBounds([
      [data.x1, data.y1],
      [data.x2, data.y2]
    ]);

    // Use a special map theme
    // L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png').addTo(map);
    // L.tileLayer('https://dnv9my2eseobd.cloudfront.net/v3/cartodb.map-4xtxp73f/{z}/{x}/{y}.png', {
    //   attribution: 'Mapbox <a href="http://mapbox.com/about/maps" target="_blank">Terms &amp; Feedback</a>'
    // }).addTo(map);

    // var layerGroup = L.layerGroup().addTo(map);

    // L.tileLayer('https://{s}.tiles.mapbox.com/v4/nrk.l0o5j3j9/{z}/{x}/{y}.png?access_token=' + L.mapbox.accessToken, {
    //   attribution: '<a href="http://www.mapbox.com/about/maps/" target="_blank">Terms &amp; Feedback</a>'
    // });

    // L.mapbox.tileLayer('nrk.l0o5j3j9').addTo(layerGroup);
    // L.mapbox.featureLayer('nrk.map-let9lw19').addTo(map);

    // Add a marker in the given location, attach some popup content to it and open the popup
    // L.marker([51.5, -0.09]).addTo(map)
    //   .bindPopup('A pretty CSS3 popup. <br> Easily customizable.')
    //   .openPopup();
  }

  render() {
    return (
      <div className='map' id='map'></div>
    );
  }
}
