import {useRef, useEffect} from 'react';
import {Icon, Marker, layerGroup} from 'leaflet';
import useMap from '../../hooks/use-map';
import {URL_MARKER_DEFAULT, URL_MARKER_CURRENT} from '../../consts';
import 'leaflet/dist/leaflet.css';
import Location from '../../types/location.ts';
import City from '../../types/city.ts';

type MapProps = {
  city: City;
  points: Location[];
  selectedPoint: Location | undefined;
  mapClass: string;
};

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

const currentCustomIcon = new Icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

function Map(props: MapProps): JSX.Element {
  const {city, points, selectedPoint} = props;

  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      const markerLayer = layerGroup().addTo(map);
      points.forEach((point) => {
        const marker = new Marker({
          lat: point.latitude,
          lng: point.longitude
        });

        marker
          .setIcon(
            selectedPoint !== undefined
            && point.latitude === selectedPoint.latitude
            && point.longitude === selectedPoint.longitude
              ? currentCustomIcon
              : defaultCustomIcon
          )
          .addTo(markerLayer);
      });

      //map.flyTo({lat: city.location.latitude, lng: city.location.longitude}, city.location.zoom);

      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [city.location.latitude, city.location.longitude, city.location.zoom, map, points, selectedPoint]);

  return <div className={props.mapClass} ref={mapRef}></div>;
}

export default Map;
