const langCode = typeof navigator !== 'undefined' ? (navigator.language || navigator['userLanguage']).substr(0, 2) : 'en';

export default (() => {
  switch (langCode) {
    case 'pl':
      return

    default:
      return {
        owner: {
          title: `Zarabiaj na swoim motocyklu`,
          text: `VIKING GARAGE to społeczność, która wielbi motocykle i jazdę na nich. To garaż, do którego można zajrzeć w każdej chwili, aby znaleźć to co najważniejsze - gromadzimy tutaj różnych ludzi, który na swój sposób realizują swoje motocyklowe pasje - od dzielenie się swoim doświadczeniem z początkującymi motocyklistami, po tworzenie customów i naprawę sprzętu motocyklowego.\n\nTo tutaj Twoja pasja może stać się źródłem dodatkowych pieniędzy - od kilkudziesięciu złotych na paliwo po spory biznes prowadzony za pomocą platformy VIKING GARAGE.`,
          button: 'Zacznij zarabiać teraz',
          dialog: {
            title: 'Pomożemy Tobie przygotować motocykl do wynajmu',
            body: `KROK 1\n
Zostaw nam do siebie kontakt - nasz zespół odezwie się do Ciebie i odpowie na wszelkie pytania
\nKROK 2\n
Stwórz ofertę wynajmu - razem z naszym zespołem przygotuj opis motocykla, zdjęcia i ceny
\nKROK 3\n
Wynajmuj swój motocykl członkom społeczności z całego świat  i zarabiaj na tym pieniądz
`,
          },
          success: {
            title: 'Dziękujemy!',
            body: 'Nasz zespół skontaktuje się z Tobą w ciągu 24h\ni wspólnie stworzycie ofertę dla Twojego motocykla.',
          },
        },
        guide: {
          title: `Prawdziwa jazda zaczyna się kiedy masz już opanowaną technikę\ni znasz trasy, na których możesz rozwinąć prędkość.`,
          text: `Dzięki VIKING GARAGE znajdziesz przewodników, którzy wskażą Tobie najlepsze miejsca w wybranej okolicy oraz trenerów, którzy w zależności od poziomu zaawansowania pozwolą Tobie osiągać lepsze wyniki oraz poprawiać umiejętności jazdy motocyklem oraz styl.\n\nNasi trenerzy i przewodnicy to praktycy. Zdobywali tytuły na zawodach w Polsce i Europie, uczyli się od najlepszych, a teraz chcą podzielić się swoją wiedzą i doświadczeniem. Kilka godzin jazd z profesjonalistami pomoże przekroczyć wewnętrzne ograniczenia i osiągnąć kolejne poziomy umiejętności.`,
          button: `skontaktuj się z nami`
        },
        mechanic: {
          title: `Mechanicy`,
          text: `Sprawna maszyna to podstawa. W naszym Garażu masz dostęp tylko i wyłącznie do w pełni sprawnych motocykli. Jednak usterki chodzą po ludziach i motocyklach. Czasem zdarza się, że pomimo swoich umiejętności potrzebujesz kogoś kto zna się na temacie. Bazę mechaników, którzy zajmą się Twoją maszyną znajdziesz na VIKING GARAGE.

Jeżeli jesteś zainteresowany nadaniem swojemu motocyklowi niepowtarzalnego wyglądu znajdziesz tu również profesjonalistów, którzy w swoich warsztatach kastomizują motocykle sprawiając by nawet najmniejszy szczegół Twojego motocykla stanowił oryginalną całość.`,
          button: `Jeżeli chcesz zostać Mechanikiem VIKING GARAGE skontaktuj się z nami`,
        },
        faq: {
          title: ``,
          text: ``,
          button: ``,
        },
      }
  }
})()
