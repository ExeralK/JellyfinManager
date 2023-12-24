import { LitElement, html, css } from "lit";
import { customElement } from "lit/decorators.js";
import './atoms/ExButton'

@customElement("main-app")
export class MainApp extends LitElement {
  static styles = css`
  `;

  render() {
    return html`
      <h1>Welcome to My App</h1>
      <!-- Your app content -->
      <ex-button>Test</ex-button>
    `;
  }
}
