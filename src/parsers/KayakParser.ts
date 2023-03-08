import { SearchEngineParser } from './SearchEngineParser';

export class KayakParser extends SearchEngineParser {
  searchEngineClass = 'kayak';

  getSustainabilityScoreContainer(): HTMLElement | undefined {
    const searchSummaryElement = document.querySelector('[class^="inline-search-container"]');
    if (searchSummaryElement === null) {
      console.log('Cannot find search summary element');
      return;
    }

    const container = searchSummaryElement.querySelector('[class$="-formFieldOutline"]');
    return container as HTMLElement;
  }

  getDestinationRegex(): RegExp {
    return /\/flights\/[a-zA-Z]{3}-([a-zA-Z]{3})/;
  }
}
