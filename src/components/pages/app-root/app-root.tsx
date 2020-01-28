import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.scss',
  shadow: true
})
export class AppRoot {

  render() {
    return (
      <div>
        <sameer-header></sameer-header> 
        <div id="page-container"> 
          <div id="content-wrap">
            <bm-container is-fluid="false" class={"container is-widescreen"}>
              <stencil-router>
                <stencil-route-switch scrollTopOffset={0}>
                  <stencil-route url="/" component="app-home" exact={true} />
                  <stencil-route url="/blog" component="app-blog" exact={true} /> 
                  <stencil-route url="/contact" component="app-blog" exact={true} /> 
                </stencil-route-switch>
              </stencil-router>
            </bm-container>
          </div>
 
          <bm-footer>
            <bm-container is-fluid="false" class={"container is-widescreen"}>  
                <ul> 
                  <li><p><a href="">My Github</a></p></li>
                  <li> Hosted on <a href="https://buttercms.com"><img class="butter_logo" src="https://cdn.buttercms.com/PGJPyIwaQ2KnOA8UyKfH" /></a> </li>
                </ul> 
            </bm-container>
          </bm-footer>
        </div>

      </div>
    );
  }
}
