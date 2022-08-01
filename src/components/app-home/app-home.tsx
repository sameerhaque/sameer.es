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
        <p>Feel free to reach me at <a href="mailto:contact@sameer.ca">contact@sameer.ca</a></p>
 
      </div>
    );
  }
}
