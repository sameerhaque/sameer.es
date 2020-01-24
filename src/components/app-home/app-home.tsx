import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css',
  shadow: true
})
export class AppHome {

  render() {
    return (
      <div class='app-home'>
        <p>
          I'm currently trying to build my site using Bulma and StencilJs. Stay tuned for further progress
        </p>
 
      </div>
    );
  }
}
