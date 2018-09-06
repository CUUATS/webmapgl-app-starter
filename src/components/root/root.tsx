import { Component } from '@stencil/core';


@Component({
  tag: 'app-root',
  styleUrl: 'root.scss'
})
export class AppRoot {

  render() {
    return (
      <gl-app label="Web Map GL App Starter">
        <gl-fullscreen slot="end-buttons"></gl-fullscreen>
        <gl-map
            longitude={-88.228878} latitude={40.110319} zoom={12} maxzoom={22}>
          <gl-style url="/app/public/style.json" id="app"></gl-style>
          <gl-style url="https://maps.cuuats.org/basemaps/basic/style.json"
            basemap={true} name="Basic" enabled={true}></gl-style>
        </gl-map>
      </gl-app>
    );
  }
}
