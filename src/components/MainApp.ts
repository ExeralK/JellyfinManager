import { LitElement, html, css } from "lit";
import { customElement } from "lit/decorators.js";
import './atoms/ExButton'
// import './atoms/ExHeading'

@customElement("main-app")
export class MainApp extends LitElement {
  static styles = css`
  `;

  render() {
    return html`
      <!-- <ex-heading headType="h1">Hello World</ex-heading> -->
      <!-- Your app content -->
      <!-- <ex-heading headType="h2">Hello World</ex-heading> -->
      <ex-button>Test</ex-button>
    `;
  }
}
