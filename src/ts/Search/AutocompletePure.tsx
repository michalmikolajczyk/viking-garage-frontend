import * as React from 'react';
import { AutoComplete } from 'material-ui';
import IconWrap from '../IconWrap';
import i from '../i18n';

interface AutocompleteProps {
  icon: string;
  subId: string;
  aria?: string;
  hintText?: string;
  searchText?: string;
  dataSource: any[];
  dataConfig?: { text: string; value: string };
  onNewRequest: (det, ind) => void;
  onUpdateInput: (inp: string) => void;
}

export default function AutocompletePure(props: AutocompleteProps) {
  const {
    icon,
    subId,
    aria,
    hintText,
    searchText,
    dataConfig,
    dataSource,
    onNewRequest,
    onUpdateInput,
  } = props;

  return (
    <div className="filter">
      <IconWrap icon={icon} aria={aria} />
      <div className="input">
        <AutoComplete
          id={subId}
          hintText={hintText}
          searchText={searchText}
          maxSearchResults={5}
          openOnFocus={true}
          filter={AutoComplete.noFilter}
          onNewRequest={onNewRequest}
          onUpdateInput={onUpdateInput}
          dataSource={dataSource}
          dataSourceConfig={dataConfig}
          fullWidth={true}
          hintStyle={{ paddingLeft: 30 }}
        />
      </div>
    </div>
  );
}
