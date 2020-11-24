// object holding all locale setups
const _locales = {};

// mock angular featuees
const mockProvide = {
   value (key, val) {
      mockProvide[key] = val;
   },
};
export const angular = {
   module(name, requires, configFunction) {
      configFunction(mockProvide);
      _locales[mockProvide.$locale.id] = {
         name: name,
         requires: requires,
         configFunction: configFunction,
         $locale: mockProvide.$locale,
      };
   },
};

// actually set the locale
import moment from 'moment';
import { angular as trueAngular } from 'angular';
export function setLocale (id) {
   trueAngular.module(_locales[id].name, _locales[id].requires, _locales[id].configFunction);
   moment.locale(id);
}
