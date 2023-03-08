import { FlightSearchEngine } from './parsers/enums';
import { KayakParser } from './parsers/KayakParser';
import { SearchEngineParser } from './parsers/SearchEngineParser';
import { SkyscannerParser } from './parsers/SkyscannerParser';

export const getCurrentSearchEngine = (host: string): FlightSearchEngine | undefined => {
  if (host.includes(FlightSearchEngine.Kayak)) return FlightSearchEngine.Kayak;
  if (host.includes(FlightSearchEngine.Skyscanner)) return FlightSearchEngine.Skyscanner;
};

export const getSearchEngineParser = (searchEngine: FlightSearchEngine): SearchEngineParser => {
  switch (searchEngine) {
    case FlightSearchEngine.Skyscanner:
      return new SkyscannerParser();
    case FlightSearchEngine.Kayak:
      return new KayakParser();
    default:
      return new SkyscannerParser();
  }
};
