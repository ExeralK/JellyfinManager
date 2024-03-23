import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import { ScopedElementsMixin } from '@open-wc/scoped-elements/lit-element.js';
import { ExButton, ExHeading } from './atoms';

@customElement('main-app')
export class MainApp extends ScopedElementsMixin(LitElement) {
  static styles = css``;

  static scopedElements = {
    'ex-button': ExButton,
  };

  render() {
    return html`
      <h1>Hello World!</h1>
      <ex-button>Test</ex-button>
    `;
  }
}