import { Component, h, Element } from '@stencil/core'; 
import Typed from 'typed.js'

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css',
  shadow: true
})
export class AppHome {
  @Element() el: HTMLElement
  private element;

  componentDidLoad() { 
      const options = {
        strings: ['Plan.', 'Create.', 'Grow.'],
        typeSpeed: 150,
        backSpeed: 50,
        loop: true
      };
 
      let typed = new Typed(this.el.shadowRoot.querySelector('.typed') as unknown as string, options);
  }

  render() {
    return ( 
      <div class='app-home'> 
          <div id="typed-strings" >
            <span class="typed"></span>
          </div> 
      </div>
    );
  }
}
