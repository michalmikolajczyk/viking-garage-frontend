#!/bin/bash
sed -i '389s/.*/              if (itemValue \&\& itemValue.type \&\& (itemValue.type.muiName === _MenuItem2.default.muiName || itemValue.type.muiName === _Divider2.default.muiName)) {/' node_modules/material-ui/AutoComplete/AutoComplete.js
