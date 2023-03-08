import { SearchEngineParser } from './SearchEngineParser';

export class SkyscannerParser extends SearchEngineParser {
  searchEngineClass = 'skyscanner';

  getSustainabilityScoreContainer(): HTMLElement | undefined {
    const searchSummaryElement = document.getElementById('flights-search-summary-root');
    if (searchSummaryElement === null) {
      console.log('Cannot find search summary element');
      return;
    }

    const container = searchSummaryElement.querySelector('[class^="SearchDetails_places_"]');
    return container as HTMLElement;
  }

  getDestinationRegex(): RegExp {
    return /\/transport\/flights\/[a-zA-Z]{3}\/([a-zA-Z]{3})\//;
  }
}
