import * as React from 'react';
import { DatePicker } from 'material-ui';
import i from '../i18n';
import IconWrap from '../IconWrap';

interface DatePickerProps {
  icon: string;
  subId: string;
  hintText: string;
  value: Date;
  onChange: (ev, date: Date) => void;
  shouldDisableDate: (inp: Date) => boolean;
}

const paddingLeft = { paddingLeft: 30 };

export default function DatePickerPure(props: DatePickerProps) {
  const {
    icon,
    subId,
    value,
    hintText,
    onChange,
    shouldDisableDate,
  } = props;

  return (
    <div className="filter">
      <IconWrap icon="today" />
      <DatePicker
        id={subId}
        className="input"
        value={value}
        autoOk={true}
        onChange={onChange}
        hintText={hintText}
        fullWidth={true}
        hintStyle={paddingLeft}
        inputStyle={paddingLeft}
        shouldDisableDate={shouldDisableDate}
      />
    </div>
  );
}
