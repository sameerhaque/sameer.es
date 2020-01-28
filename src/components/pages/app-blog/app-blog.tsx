import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-blog',
  shadow: true
})
export class AppBlog {
  render() {
    return (
      <div class='app-home'>
          <h1>BLOG</h1>
          <p>
            I'm currently trying to build my site using Bulma and StencilJs. Stay tuned for further progress
          </p> 
      </div>
    );
  }
}
