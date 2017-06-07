const langCode = typeof navigator !== 'undefined' ? (navigator.language || navigator['userLanguage']).substr(0, 2) : 'en';

export default (() => {
  switch (langCode) {
    case 'pl':
      return

    default:
      return {
        owner: {
          title: `Zarabiaj na VIKING GARAGE\nwynajmując swoje motocykle`,
          text: `VIKING GARAGE to społeczność, która wielbi motocykle i jazdę na nich. To garaż, do którego można zajrzeć w każdej chwili, aby znaleźć to co najważniejsze - gromadzimy tutaj różnych ludzi, który na swój sposób realizują swoje motocyklowe pasje - od dzielenie się swoim doświadczeniem z początkującymi motocyklistami, po tworzenie customów i naprawę sprzętu motocyklowego.\n\nTo tutaj Twoja pasja może stać się źródłem dodatkowych pieniędzy - od kilkudziesięciu złotych na paliwo po spory biznes prowadzony za pomocą platformy VIKING GARAGE.`,
          button: 'Zacznij zarabiać na swoim motocyklu',
        },
        guide: {
          title: `Prawdziwa jazda zaczyna się kiedy masz już opanowaną technikę\ni znasz trasy, na których możesz rozwinąć prędkość.`,
          text: `Dzięki VIKING GARAGE znajdziesz przewodników, którzy wskażą Tobie najlepsze miejsca w wybranej okolicy oraz trenerów, którzy w zależności od poziomu zaawansowania pozwolą Tobie osiągać lepsze wyniki oraz poprawiać umiejętności jazdy motocyklem oraz styl.\n\nNasi trenerzy i przewodnicy to praktycy. Zdobywali tytuły na zawodach w Polsce i Europie, uczyli się od najlepszych, a teraz chcą podzielić się swoją wiedzą i doświadczeniem. Kilka godzin jazd z profesjonalistami pomoże przekroczyć wewnętrzne ograniczenia i osiągnąć kolejne poziomy umiejętności.`,
          button: `skontaktuj się z nami`
        },
        mechanic: {
          title: ``,
          text: ``,
          button: ``,
        },
        faq: {
          title: ``,
          text: ``,
          button: ``,
        },
      }

      }
})()
