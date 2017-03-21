import * as _ from 'lodash';
import * as models from './models';

export default function parser(type: string, items: Object): any {
  return _.map(models[type], model => {
    let value;
    if (typeof items[model.key] === 'boolean') {
      value = items[model.key] ? 'YES' : 'NO';
    } else {
      value = `${items[model.key]}` + (model.units ? ` ${model.units}` : '');
    }
    return {
      value,
      label: model.label,
    }
  });
}
