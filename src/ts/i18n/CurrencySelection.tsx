import * as React from 'react';
import { MenuItem } from 'material-ui';
import currency, { currencies, changeCurrency } from '../i18n/currency';

interface CurrencySelectionProps { refresh: () => void; }

export default function CurrencySelection(props: CurrencySelectionProps) {
  const currencySelection = currencies.map((val) => {
    return (
      <MenuItem
        key={val}
        value={val}
        primaryText={val}
        checked={val === currency()}
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
      primaryText={<span>&#164;   {currency()}   &#9662;</span>}
      anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
      innerDivStyle={{ padding: '0px 16px' }}
      menuItems={currencySelection}
    />
  );
}
