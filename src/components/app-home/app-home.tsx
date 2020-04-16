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
          Marketer & Developer
        </p>
        <br/><br/>
        <p>Reach out to me at <a href="mailto:contact@sameer.es">contact @ sameer.es</a></p>
 
      </div>
    );
  }
}
