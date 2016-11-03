'use strict';

/* global moment:false */

import { config } from './index.config';
import { routerConfig } from './index.route';
import { runBlock } from './index.run';
import { MainController } from './main/main.controller';
import formulas from '../app/components/formulas/formulas.service';
import hsoptimizer from '../app/components/hsoptimizer/hsoptimizer.service';
import maths from '../app/components/maths/maths.service';
import mechanics from '../app/components/mechanics/mechanics.service';
import saveDataAnalyzer from '../app/components/saveDataAnalyzer/savedataanalyzer.service';
import saveDecoder from '../app/components/saveDecoder/savedecoder.service';
import exponential from '../app/components/exponential/exponential.filter';
import units from '../app/components/units/units.filter';
import numberToExport from '../app/components/numberToExport/numbertoexport.filter';

angular.module(
  'clickerHeroes10Hsoptimizer',
  ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngMessages', 'ngAria', 'ngResource', 'ngRoute', 'ui.bootstrap', 'ngclipboard', 'rzModule'])
  .config(config)
  .config(routerConfig)
  .run(runBlock)
  .value('maths', maths)
  .service('formulas', formulas)
  .service('mechanics', mechanics)
  .service('hsoptimizer', hsoptimizer)
  .service('saveDataAnalyzer', saveDataAnalyzer)
  .service('saveDecoder', saveDecoder)
  .filter('exponential', exponential)
  .filter('units', units)
  .filter('numberToExport', numberToExport)
  .controller('MainController', MainController)
