import { Component, h, Element } from '@stencil/core';
import 'bulmil';

@Component({
  tag: 'sameer-header',
  styleUrl: 'header.scss',
  shadow: true
})

export class SameerHeader {
  
  @Element() el: HTMLElement;

  componentDidLoad() {
    const mobileMenu = this.el.shadowRoot.querySelector('.navbar-menu');
    this.el.shadowRoot.querySelector('.navbar-burger').addEventListener('click', function() {
      this.classList.toggle('is-active');
      mobileMenu.classList.toggle('is-active')
    })
  }

  render() {
    return (
        <bm-navbar color={"is-light"}  >
          <bm-container is-fluid="false" class={"container is-widescreen"}>
            <div class="navbar-brand">
              <h1>Sameer Haque</h1>
              <a
                role="button"
                class="navbar-burger burger"
                aria-label="menu"
                aria-expanded="false"
                data-target="navbarSimpleMenu"
              >
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
              </a>
            </div>

            <div id="navbarSimpleMenu" class="navbar-menu">
            <ul class="navbar-end">
              <li class="nav-item" data-target="#navbarSimpleMenu"> 
                <stencil-route-link url='/' role="link" exact={true} activeClass="active" anchorClass="navbar-item">Home</stencil-route-link>
              </li>
              <li class="nav-item" data-target="#navbarSimpleMenu"> 
                <stencil-route-link url='/blog' exact={true}  anchorClass="navbar-item" activeClass="active">Blog</stencil-route-link>
              </li>
              <li class="nav-item" data-target="#navbarSimpleMenu"> 
                <stencil-route-link url='/contact' exact={true} anchorClass="navbar-item" activeClass="active">Contact</stencil-route-link> 
              </li>
              </ul> 
            </div>
          </bm-container>
        </bm-navbar>
    );
  }
}
