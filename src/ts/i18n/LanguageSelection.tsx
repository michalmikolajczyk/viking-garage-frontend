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
        innerDivStyle={{ padding: '0px 35px 0px 45px' }}
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
      leftIcon={<span className="html-symbol-ae">&#198;</span>}
      primaryText={i().toUpperCase()}
      rightIcon={<span className="html-symbol-arrow">&#9662;</span>}
      anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
      innerDivStyle={{ padding: '0px 40px 0px 45px' }}
      menuItems={languageSelection}
    />
  );
}
