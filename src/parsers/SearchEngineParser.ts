export abstract class SearchEngineParser {
  abstract getDestinationRegex(): RegExp;
  abstract getSustainabilityScoreContainer(): HTMLElement | undefined;
  abstract searchEngineClass: string;

  getDestination() {
    const regex = this.getDestinationRegex();
    const match = location.href.match(regex);
    const destinationCode = match ? match[1] : undefined;
    return destinationCode?.toLowerCase();
  }

  getSustainabilityScoreElement(score: number): HTMLElement {
    const parentElement = document.createElement('div');
    parentElement.classList.add(this.searchEngineClass);
    parentElement.classList.add('eco-mio-score');
    parentElement.setAttribute('data-tooltip', 'This is your sustainability score');
    const imageUrl = chrome.runtime.getURL('images/app/ecomio.png');
    const html = this.getSustainabilityScoreHtml(score, imageUrl, this.searchEngineClass);
    parentElement.innerHTML = html;
    return parentElement;
  }

  getSustainabilityScoreHtml(score: number, imageUrl: string, searchEngineClass: string): string {
    return `<span class="score-icon">
              <img src="${imageUrl}"/>
            </span>
            <span>
              ${score}
            </span>`;
  }
}
