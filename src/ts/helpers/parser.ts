import * as _ from 'lodash';
import i from '../i18n';
import * as models from './models';

export default function parser(schema: string, items: Object): any {
  return _.map(models[schema], model => {
    let value;
    if (typeof items[model.key] === 'boolean') {
      value = items[model.key] ? i('Yes') : i('No');
    } else {
      if (model.units === 'days') {
        value = items[model.key] == 1 ? `${items[model.key]} ${i('day')}` : `${items[model.key]} ${i('days')}`;
      } else {
        value = `${items[model.key]}` + (model.units ? ` ${model.units}` : '');
      }
    }
    return {
      value,
      label: model.label,
    }
  });
}
