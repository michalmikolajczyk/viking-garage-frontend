import * as React from 'react';
import { Link } from 'react-router';
import AppBar from '../AppBar';
import AccText from '../Accordion/AccText';
import i from '../i18n';

export default function Grupon() {
  return (
    <div>
      <AppBar />
      <div className="grupon">
        <div>
          Już teraz możesz skorzystać ze zniżek GROUPON, które upoważniają Cię do skorzystania ze zorganizowanych jazd na wybranych motocyklach. Na platformie VIKING GARAGE możesz zarezerwować motocykl w dostępnym terminie i w niższych cenach.
          <br />
          Zorganizowane jazdy na torze to idealne miejsce, aby rozpocząć przygodę z motocyklami. Na miejscu zapoznasz się z różnymi rodzajami motocykli: crossowymi i enduro stworzonymi specjalnie do jazdy po piaszczystych torach i w terenie. Na początku organizator jazd przeprowadzi krótki instruktaż teoretyczny, abyś już po chwili mógł sam wsiąść na motocykl i spróbować swoich sił na torze.
          <br />
          Prawo jazdy nie jest konieczne w przypadku jazdy na torach i w terenie, a przy wynajmie motocykli o pojemności do 125 cm^3, do jazdy po ulicy wystarczy kategoria B.
        </div>

        <AccText header="Motocykle dostępne ze zniżką GROUPON">
          <ul>
            <li>
              KTM SX-F 250 FACTORY EDITION; typ: motocross
            </li>
            <li>
              KTM 125 SX; typ: motocross
            </li>
            <li>
              HUSABERG FE 390; typ: enduro
            </li>
            <li>
              HONDA SuperSound (CLR); typ: scrambler
            </li>
          </ul>
        </AccText>

      </div>
    </div>
  );
}
