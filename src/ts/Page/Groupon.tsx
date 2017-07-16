import * as React from 'react';
import { Link } from 'react-router';
import AppBar from '../AppBar';
import Raido from '../Raido';
import GrouponMap from './GrouponMap';
import AccText from '../Accordion/AccText';

export default function Grupon() {
  return (
    <div>
      <AppBar />
      <div className="header mobile-tablet-hid">
        <div className="title">
          <div>VIKING</div>
          <div className="below">
            GA<span className="replace">R<Raido /></span>AGE
          </div>
        </div>
        <div className="groupon-logo">
          <img src="https://res.cloudinary.com/hkhuw4b7v/image/upload/v1500232121/groupon_logo_tpslhq.png" />
        </div>
      </div>
      <div className="groupon">
        <div className="wrap">
          <div className="groupon-logo-mob mobile-tablet-only">
            <img src="https://res.cloudinary.com/hkhuw4b7v/image/upload/v1500232121/groupon_logo_tpslhq.png" />
          </div>

          <div className="subwrap">
            Już teraz możesz skorzystać ze zniżek GROUPON, które upoważniają Cię do skorzystania ze zorganizowanych jazd na wybranych motocyklach. Na platformie VIKING GARAGE możesz zarezerwować motocykl w dostępnym terminie i w niższych cenach.
            <br />
            <br />
            Zorganizowane jazdy na torze to idealne miejsce, aby rozpocząć przygodę z motocyklami. Na miejscu zapoznasz się z różnymi rodzajami motocykli: crossowymi i enduro stworzonymi specjalnie do jazdy po piaszczystych torach i w terenie. Na początku organizator jazd przeprowadzi krótki instruktaż teoretyczny, abyś już po chwili mógł sam wsiąść na motocykl i spróbować swoich sił na torze.
            <br />
            <br />
            Prawo jazdy nie jest konieczne w przypadku jazdy na torach i w terenie, a przy wynajmie motocykli o pojemności do 125 cm3, do jazdy po ulicy wystarczy kategoria B.
          </div>

          <AccText header="Motocykle dostępne ze zniżką GROUPON" open={true}>
            <ul className="sublist">
              <li>
                <p className="bold">KTM SX-F 250 FACTORY EDITION;</p> typ: motocross
              </li>
              <li>
                <p className="bold">KTM 125 SX;</p> typ: motocross
              </li>
              <li>
                <p className="bold">HUSABERG FE 390;</p> typ: enduro
              </li>
              <li>
                <p className="bold">HONDA SuperSound (CLR);</p> typ: scrambler
              </li>
            </ul>
          </AccText>

          <AccText header="GROUPON Krok po kroku" open={true}>
            <ul className="sublist">
              <li>
                <p className="bold">Krok 1.</p> Sprawdź dostępne terminy
              </li>
              <li>
                <p className="bold">Krok 2.</p> Zarezerwuj motocykle oznaczone logotypem GROUPON
              </li>
              <li>
                <p className="bold">Krok 3.</p> Poczekaj na e-mail potwierdzający Twoją rezerwację
              </li>
              <li>
                <p className="bold">Krok 4.</p> Przyjedź pod wskazane miejsce na tor
              </li>
            </ul>
          </AccText>

          <AccText header="Szczegóły oferty GROUPON" open={true}>
          <div className="subacc">
            <p className="bold">
              Wybierz 1 z 3 opcji:
            </p>
            <ul className="sublist">
              <li>
                210 zł zamiast 300 zł za godzinną jazdę
              </li>
              <li>
                350 zł zamiast 500 zł za 2-godzinną jazdę
              </li>
              <li>
                490 zł zamiast 700 zł za 3-godzinną jazdę
              </li>
            </ul>
            <p className="bold">Ważność kuponu: </p>
            <p>2 miesiące</p>
            <br />
            <br />
            <p className="bold">Wymagania: </p>
            <p>
              zabroniona jest jazda po spożyciu alkoholu i innych środkach odurzających, przed jazdą należy podpisać regulamin dostarczony przez organizatora
            </p>
            <br />
            <br />
            <GrouponMap />
            <p className="bold">Pogoda: </p>
            <p>
              Jazda może zostać przesunięta na inny dzień w przypadku niekorzystnych warunków atmosferycznych.
            </p>
            <br />
            <br />
            <p className="bold">Obowiązujący strój: </p>
            <p>
              Pamiętaj, aby zabrać wygodne ubrania, które mogą zostać zabrudzone. Obowiązkowo zabierz buty powyżej kostek, które ochronią Twoje stopy. Organizator jazd zapewni na miejscu: kask i gogle, ochraniacze na łokcie, kolana, klatkę piersiową.
            </p>
          </div>
          </AccText>

          <AccText header="Dodatkowe informacje" open={true}>
          <div className="subacc">
            Nie musisz drukować grouponu – wystarczy, że pokażesz go na urządzeniu mobilnym.
            W przypadku nieodwołania rezerwacji z min. 24-godzinnym wyprzedzeniem Groupon przepada.
            Od każdego uczestnika jazd wymagane jest zapoznanie się i podpisanie regulaminu  oraz oświadczenia.
            W razie jakichkolwiek pytań zapraszamy do kontaktu pod numer telefonu: <a href="tel:+48667772402">+48 667 772 402</a>
          </div>
          </AccText>

          <AccText header="Więcej o VIKING GARAGE" open={true}>
          <div className="subacc">
            VIKING GARAGE umożliwia wynajęcie motocykli krótko- i długoterminowo, bezpośrednio od właściciela. Motocykle dostępne są na terenie całej Polski - i już niedługo - na całym świecie.
            <p className="center">
              Więcej ofert znajdziesz <Link to="/">tutaj</Link>.
            </p>
            Osoby, które chcą podnosić swoje umiejętności, mogą zainteresować oferty od naszych znajomych, mistrzów Polski w motocross, enduro, freestyle motocross. Zapraszamy do kontaktu indywidualnego pod numerem telefonu: <a href="tel:+48667772402">+48 667 772 402</a>
          </div>
          </AccText>

        </div>
      </div>
    </div>
  );
}
