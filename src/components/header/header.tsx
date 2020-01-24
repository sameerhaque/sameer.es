import { Component, h } from '@stencil/core';
import 'bulmil';

@Component({
  tag: 'sameer-header',
  styleUrl: 'header.scss',
  shadow: true
})
export class SameerHeader {
  render() {
    return (
        <bm-navbar color={"is-light"} >
          <bm-container is-fluid="false" class={"container"} breakpoint={"is-widescreen"}>
            <div class="navbar-brand">
              <h1>Sameer Haque</h1>
              <a
                role="button"
                class="navbar-burger burger"
                aria-label="menu"
                aria-expanded="false"
                data-target="navbarBasicExample"
              >
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
              </a>
            </div>

            <div id="navbarBasicExample" class="navbar-menu">
              <div class="navbar-start">
                <a class="navbar-item">
                  Home
                </a>

                <a class="navbar-item">
                  Documentation
                </a>

                <div class="navbar-item has-dropdown is-hoverable">
                  <a class="navbar-link">
                    More
                  </a>

                  <div class="navbar-dropdown">
                    <a class="navbar-item">
                      About
                    </a>
                    <a class="navbar-item">
                      Jobs
                    </a>
                    <a class="navbar-item">
                      Contact
                    </a>
                    <hr class="navbar-divider" />
                    <a class="navbar-item">
                      Report an issue
                    </a>
                  </div>
                </div>
              </div>

              <div class="navbar-end">
                <div class="navbar-item">
                  <bm-buttons>
                    <bm-button color="is-primary">
                      <strong>Sign up</strong>
                    </bm-button>
                    <bm-button color="is-light">
                      Log in
                    </bm-button>
                  </bm-buttons>
                </div>
              </div>
            </div>
          </bm-container>
        </bm-navbar>
    );
  }
}
