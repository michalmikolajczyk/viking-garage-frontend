import * as React from 'react';
import {
  SelectField,
  MenuItem,
  Toggle,
} from 'material-ui';
import IconWrap from '../IconWrap';
import i from '../i18n';

interface SelectFieldProps {
  value: any[];
  onChange: (ev, ind, val) => void;
  selectItems: () => [object];
  selectionRenderer?: (val) => string;
}

const paddingLeft = { paddingLeft: 30 };

export default function SelectFieldPure(props: SelectFieldProps) {
  const {
    value,
    onChange,
    selectItems,
    selectionRenderer,
  } = props;

  return (
    <div className="filter search-select filter-type">
      <IconWrap icon="keyboard_arrow_down" />
      <div className="input">
        <SelectField
          id="search-select"
          multiple={true}
          hintText={i('Select type...')}
          value={value}
          onChange={onChange}
          selectionRenderer={selectionRenderer}
          fullWidth={true}
          hintStyle={paddingLeft}
          labelStyle={paddingLeft}
        >
          {selectItems()}
        </SelectField>
      </div>
    </div>
  );
}
