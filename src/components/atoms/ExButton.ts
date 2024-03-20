import { LitElement, html, css } from "lit";
import { customElement } from "lit/decorators.js";
import { orange, black, white } from './../../theme/colors';

@customElement("ex-button")
export class ExButton extends LitElement {
  static styles = css`
    button {
      background-color: ${orange};
      color: ${black};
      border: none;
      padding: 10px 20px;
      font-size: 1em;
      cursor: pointer;
      transition: background-color 0.3s;
      border-radius: 8px;
      font-weight: bold;
      letter-spacing: 0.5px;
    }

    button:hover {
      color: ${white};
    }

    :host {
      display: block;
    }
  `;

  render() {
    return html`
      <button>
        <slot></slot>
      </button>
    `;
  }
}
