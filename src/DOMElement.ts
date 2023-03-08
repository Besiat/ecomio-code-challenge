export default class DOMElement {
  parent: HTMLElement;
  styles: string | string[];
  element: HTMLElement;

  constructor(
    parent: HTMLElement,
    styles: string | string[],
    text?: Promise<string | string[]> | string | string[], // Better to use await outside this class and accept only string or string[]
    link?: string, // This variable is not used
  ) {
    this.parent = parent;
    this.styles = styles;
    this.element = document.createElement('div');
    this.element = this.addStyles(this.styles); // this is confusing part, better just use this.style(this.styles)
    if (text) this.addText(text); // asynchronous method call without await amy lead to unwanted behaviour
  }

  appendToDom(): HTMLElement {
    const elementAlreadyAppended = this.parent.querySelector(`.${this.styles}`) !== null;
    if (!elementAlreadyAppended) this.parent.appendChild(this.element);
    return this.element;
  }

  prependToDom(overwrite?: boolean): HTMLElement {
    const existedElement = this.parent.querySelector(`:scope > .${this.styles}`);
    if (existedElement) {
      if (overwrite) this.parent.removeChild(existedElement);
      else return this.element;
    }
    this.parent.prepend(this.element);
    return this.element;
  }

  addStyles(styles: string | string[]): HTMLElement {
    // This method is redundant because this.style method applies styles on "element" property of the class, no point returning it
    this.style(this.element, styles);
    return this.element;
  }

  private async addText(text: Promise<string | string[]> | string | string[]) {
    // Accepting text as a promise forces to make this function asynchronous. Probably better only accept string or string[] and just use await outside of this class
    if (text instanceof Promise) text = await text;
    if (typeof text === 'string') {
      this.appendText(text);
    } else
      text.forEach((textElement) => {
        this.appendText(textElement);
      });
  }

  private appendText(text: string) {
    const textElem = document.createElement('span');
    const textNode = document.createTextNode(text);
    textElem.appendChild(textNode);
    this.element.appendChild(textElem);
  }

  //I would name this method "applyStyle" to make it more clear
  private style(elem: HTMLElement, styles: string | string[]): HTMLElement {
    if (typeof styles === 'string') {
      elem.classList.add(styles);
    } else {
      styles.forEach((style) => {
        elem.classList.add(style);
      });
    }
    return elem;
  }
}
