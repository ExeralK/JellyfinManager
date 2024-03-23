import { LitElement, html } from 'lit';
import { property } from 'lit/decorators.js';

export class ExHeading extends LitElement {
  @property({ type: String }) type: 'h1' | 'h2' | 'h3' | 'h4';

  private readonly headingMap = {
    h1: () => html`<h1><slot></slot></h1>`,
    h2: () => html`<h2><slot></slot></h2>`,
    h3: () => html`<h3><slot></slot></h3>`,
    h4: () => html`<h4><slot></slot></h4>`,
  };

  render() {
    return this.headingMap[this.type]();
  }
}
