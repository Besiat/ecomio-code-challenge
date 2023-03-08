import { injectSustainabilityScore } from './SustainabilityScoreInjector';

console.log(
  '****************************************\n\neco.mio - Main content script running\n\n****************************************',
);

window.addEventListener('load', injectSustainabilityScore);
