import { Component } from '@angular/core';
import {
  MapComponent,
  PopupComponent as MglPopupComponent,
} from '@maplibre/ngx-maplibre-gl';

@Component({
  selector: 'showcase-demo',
  template: `
    <mgl-map
      [style]="
        'https://api.maptiler.com/maps/streets/style.json?key=get_your_own_OpIi9ZULNHzrESv6T2vL'
      "
      [zoom]="[3]"
      [center]="[-96, 37.8]"
      [preserveDrawingBuffer]="true"
    >
      <mgl-popup
        [lngLat]="[-96, 37.8]"
        [closeOnClick]="false"
        [className]="'custom-popup-class1 custom-popup-class2'"
      >
        <h1>Hello world !</h1>
      </mgl-popup>
    </mgl-map>
  `,
  styleUrls: ['./examples.css', './popup.component.css'],
  standalone: true,
  imports: [MapComponent, MglPopupComponent],
})
export class PopupComponent {}
