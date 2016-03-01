import React from 'react'
import ReactDOM from 'react-dom'


/*
var Marker = function (args, node) {
    this.properties = args;
    this.feature = L.mapbox.featureLayer({
        // this feature is in the GeoJSON format: see geojson.org
        // for the full specification
        type: 'Feature',
        geometry: {
            type: 'Point',
            // coordinates here are in longitude, latitude order because
            // x, y is the standard for GeoJSON and many formats
            coordinates: this.properties.coordinates
        },
        properties: {
            title: this.properties.title,
            description: this.properties.description,
            // one can customize markers by adding simplestyle properties
            // https://www.mapbox.com/foundations/an-open-platform/#simplestyle
            'marker-size': this.properties.size,
            'marker-color': this.properties.color,
            'marker-symbol': this.properties.symbol
        }
    });
};

Marker.prototype.attachTo = function (node) {
    this.feature.addEventListener('mouseover', (function () {
        node.style.borderWidth = '10px'
        node.style.borderColor = this.properties.color
    }).bind(this));
    this.feature.addEventListener('mouseout', (function () {
        node.style.borderWidth = '0px';
    }).bind(this));
    this.feature.addEventListener('click', (function () {
        //$(node).trigger('click');
    }).bind(this));
};
*/

export default class Map extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            color: undefined,
            markers: []
        }
    }

    componentDidMount() {
        var options = {
            zoomControl: false
        };

        var map = L.mapbox.map(ReactDOM.findDOMNode(this), 'boertel.h95nl1fe', options);
        new L.Control.Zoom({ position: 'topright' }).addTo(map);
    }

    render() {
        var style = {
            position: 'fixed',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            width: '100%',
            height: '100%'
        }

        /*
        var markers = this.state.markers.map((marker) => {
            marker.color = this.state.color
            return new Marker(marker)
        })

        var features = markers.map((marker) => marker.feature)
        var group = L.featureGroup(features).addTo(this.map)
        this.map.fitBounds(group.getBounds(), { maxZoom: 14 })
        */

        return <div style={style}></div>
    }
}
