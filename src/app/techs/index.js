import angular from 'angular';

import {tech} from './tech';
import {techs} from './techs';

export const techsModule = 'techs';

angular
  .module(techsModule, [])
  .component('portfolioTech', tech)
  .component('portfolioTechs', techs);
