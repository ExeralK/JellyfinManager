import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import { ScopedElementsMixin } from '@open-wc/scoped-elements/lit-element.js';
import { ExButton } from './atoms/ExButton';
import { ExHeading } from './atoms/ExHeading';

@customElement('main-app')
export class MainApp extends ScopedElementsMixin(LitElement) {
  static styles = css``;

  static scopedElements = {
    'ex-button': ExButton,
    'ex-heading': ExHeading
  };

  render() {
    return html`
      <ex-heading type="h2">Test</ex-heading>
      <ex-button>Test</ex-button>
    `;
  }
}