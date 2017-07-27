import * as React from 'react';
import { MenuItem } from 'material-ui';
import c, { currencies, changeCurrency } from '../i18n/currency';

interface CurrencySelectionProps { refresh: () => void; }

export default function CurrencySelection(props: CurrencySelectionProps) {
  const currencySelection = currencies.map((val) => {
    return (
      <MenuItem
        key={val}
        value={val}
        primaryText={val}
        checked={val === c()}
        innerDivStyle={{ padding: '0px 16px 0px 45px' }}
        insetChildren={true}
        onTouchTap={() => {
          changeCurrency(val);
          props.refresh();
        }}
      />
    );
  });

  return (
    <MenuItem
      className="menu-item"
      leftIcon={<span className="html-symbol-curr">&#164;</span>}
      primaryText={c()}
      rightIcon={<span className="html-symbol-arrow">&#9662;</span>}
      anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
      innerDivStyle={{ padding: '0px 40px 0px 45px' }}
      menuItems={currencySelection}
    />
  );
}
