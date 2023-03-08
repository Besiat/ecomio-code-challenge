import { getByCode } from './services/DestinationService';
import { getCurrentSearchEngine, getSearchEngineParser } from './Utils';

export const injectSustainabilityScore = async () => {
  const host = window.location.host;
  const currentSearchEngine = getCurrentSearchEngine(host);

  if (currentSearchEngine === undefined) {
    console.log('This search engine is not supported');
    return;
  }

  const searchEngineParser = getSearchEngineParser(currentSearchEngine);
  const destination = searchEngineParser.getDestination();

  console.log(destination);

  if (destination === undefined) {
    console.log('Destination is not a string');
    return;
  }

  const container = searchEngineParser.getSustainabilityScoreContainer();

  if (container === undefined) {
    console.log('Cannot find parent container');
    return;
  }

  const destinationModel = await getByCode(destination);

  if (destinationModel === undefined) {
    console.log('Cannot find destination model');
    return;
  }

  const sustainabilityScoreElement = searchEngineParser.getSustainabilityScoreElement(
    destinationModel.sustainability_score,
  );

  appendElement(container, sustainabilityScoreElement);
};

const appendElement = (parent: HTMLElement, element: HTMLElement) => {
  const classSelector = `.${[...element.classList].join('.')}`;
  const elementAlreadyAppended = parent.querySelector(classSelector) !== null;

  if (!elementAlreadyAppended) {
    parent.appendChild(element);
  }
};
