import { LitElement, html } from 'lit';
import { property } from 'lit/decorators.js';

export class ExIcon extends LitElement {
  @property({ type: String }) id = '';

  private readonly iconMap: any = {
    beer: () => '',
    home: () => '',
    user: () => '',
    spinner: () => '',
  };

  render() {
    return html`<span>${this.iconMap[this.id]()}</span>`;
  }
}
