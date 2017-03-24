import * as _ from 'lodash';
import * as models from './models';

export default function parser(type: string, items: Object): any {
  return _.map(models[type], model => {
    let value;
    if (typeof items[model.key] === 'boolean') {
      value = items[model.key] ? 'Yes' : 'No';
    } else {
      if (model.units === 'days') {
        value = items[model.key] == 1 ? `${items[model.key]} day` : `${items[model.key]} days`;
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
