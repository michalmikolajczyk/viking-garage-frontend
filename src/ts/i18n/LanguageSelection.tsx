import * as React from 'react';
import { MenuItem } from 'material-ui';
import i, { languages, changeLanguage } from '../i18n';

interface LanguageSelectionProps { refresh: () => void; }

export default function LanguageSelection(props: LanguageSelectionProps) {
  const languageSelection = languages.map((val) => {
    return (
      <MenuItem
        key={val}
        value={val}
        primaryText={val.toUpperCase()}
        checked={val === i()}
        innerDivStyle={{ padding: '0px 16px 0px 45px' }}
        insetChildren={true}
        onTouchTap={() => {
          changeLanguage(val);
          props.refresh();
        }}
      />
    );
  });

  return (
    <MenuItem
      className="menu-item"
      primaryText={<span>&#198;   {i().toUpperCase()}   &#9662;</span>}
      anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
      innerDivStyle={{ padding: '0px 16px' }}
      menuItems={languageSelection}
    />
  );
}
