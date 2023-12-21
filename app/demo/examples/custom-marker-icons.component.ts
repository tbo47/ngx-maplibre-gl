import { Component } from '@angular/core';
import { MapComponent, MarkerComponent } from '@maplibre/ngx-maplibre-gl';
import { NgFor, NgStyle } from '@angular/common';

@Component({
  selector: 'showcase-demo',
  template: `
    <mgl-map
      [style]="
        'https://api.maptiler.com/maps/streets/style.json?key=get_your_own_OpIi9ZULNHzrESv6T2vL'
      "
      [zoom]="[5]"
      [center]="[-65.017, -16.457]"
      [preserveDrawingBuffer]="true"
    >
      <mgl-marker *ngFor="let feature of geojson.features" [feature]="feature">
        <div
          (click)="alert(feature.properties.message)"
          class="marker"
          [ngStyle]="{
            'background-image':
              'url(https://placekitten.com/g/' +
              feature.properties.iconSize.join('/') +
              '/)',
            width: feature.properties.iconSize[0] + 'px',
            height: feature.properties.iconSize[1] + 'px'
          }"
        ></div>
      </mgl-marker>
    </mgl-map>
  `,
  styleUrls: ['./examples.css', './custom-marker-icons.component.css'],
  standalone: true,
  imports: [MapComponent, NgFor, MarkerComponent, NgStyle],
})
export class CustomMarkerIconsComponent {
  geojson = {
    type: 'FeatureCollection',
    features: [
      {
        type: 'Feature',
        properties: {
          message: 'Foo',
          iconSize: [60, 60],
        },
        geometry: {
          type: 'Point',
          coordinates: [-66.324462890625, -16.024695711685304],
        },
      },
      {
        type: 'Feature',
        properties: {
          message: 'Bar',
          iconSize: [50, 50],
        },
        geometry: {
          type: 'Point',
          coordinates: [-61.2158203125, -15.97189158092897],
        },
      },
      {
        type: 'Feature',
        properties: {
          message: 'Baz',
          iconSize: [40, 40],
        },
        geometry: {
          type: 'Point',
          coordinates: [-63.29223632812499, -18.28151823530889],
        },
      },
    ],
  };

  alert(message: string) {
    alert(message);
  }
}
