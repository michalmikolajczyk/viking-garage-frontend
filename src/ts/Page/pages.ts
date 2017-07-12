const langCode = typeof navigator !== 'undefined' ? (navigator.language || navigator['userLanguage']).substr(0, 2) : 'en';

export default (() => {
  switch (langCode) {
    case 'pl':
      return {
        owner: {
          title: 'Zarabiaj na swoim motocyklu',
          head: 'Wynajmij swój motocykl i zostań\nczęścią zaufanej motospołeczności.',
          texta: 'W VIKING GARAGE gromadzimy ludzi, którzy dowolnie realizują swoje motocyklowe pasje - od dzielenia się swoim doświadczeniem z początkującymi motocyklistami, po tworzenie customów i naprawę sprzętu motocyklowego.',
          textb: 'To tutaj Twoja pasja może stać się źródłem dodatkowych pieniędzy - od kilkudziesięciu złotych na paliwo po spory biznes prowadzony za pomocą platformy VIKING GARAGE',
          button: 'Zacznij zarabiać teraz',
          dialog: {
            head: 'Wynajmij swój motocykl',
            title: 'Pomożemy Tobie przygotować motocykl do wynajmu',
            body: 'KROK 1\nZostaw nam do siebie kontakt - nasz zespół odezwie się do Ciebie i odpowie na wszelkie pytania\n\nKROK 2\nStwórz ofertę wynajmu - razem z naszym zespołem przygotuj opis motocykla, zdjęcia i ceny\n\nKROK 3\nWynajmuj swój motocykl członkom społeczności z całego świat  i zarabiaj na tym pieniądz',
          },
          success: {
            title: 'Dziękujemy!',
            body: 'Nasz zespół skontaktuje się z Tobą w ciągu 24h i wspólnie stworzycie ofertę dla Twojego motocykla.',
          },
          image1: 'https://res.cloudinary.com/hkhuw4b7v/image/upload/v1499879583/page/owner1.jpg',
          imageb: 'https://res.cloudinary.com/hkhuw4b7v/image/upload/v1499879583/page/owner2.jpg',
        },
        guide: {
          title: 'Zdobywaj umiejętności',
          head: 'Prawdziwa jazda zaczyna się kiedy masz już opanowaną\ntechnikę i znasz trasy, na których możesz rozwinąć prędkość.',
          text: 'Dzięki VIKING GARAGE znajdziesz Przewodników, którzy wskażą Tobie najlepsze miejsca w wybranej okolicy oraz Trenerów, którzy w zależności od poziomu zaawansowania pozwolą Tobie osiągać lepsze wyniki oraz poprawiać umiejętności jazdy motocyklem oraz styl.\n\nNasi Trenerzy i Przewodnicy to praktycy. Zdobywali tytuły na zawodach w Polsce i Europie, uczyli się od najlepszych, a teraz chcą podzielić się swoją wiedzą i doświadczeniem. Kilka godzin jazd z profesjonalistami pomoże przekroczyć wewnętrzne ograniczenia i osiągnąć kolejne poziomy umiejętności.',
          title2: 'Jesteś Trenerem lub Przewodnikiem?',
          head2: 'Dołącz do nas i buduj swoją sieć kontaktów na\ncałym świecie jako Trener lub Przewodnik VIKING GARAGE',
          text2: 'Chcemy dać dostęp naszej społeczności do Trenerów oraz Przewodników  w dowolnym miejscu na świecie. Wyobraź sobie, że możesz poprowadzić trening dla grupy początkujących motocyklistów. Sam proponujesz odpowiadający Tobie termin i ceny. Ze swojej strony zapewniasz profesjonalnie poprowadzone szkolenie, garść informacji z pierwszej ręki o motocyklowych atrakcjach w okolicy oraz niezapomniane doświadczenie - w końcu przyjemność dzielenia się motocyklowymi emocjami sprawia ogromną frajdę.\n\nNasza baza Trenerów i Przewodników po trasach dopiero się rozwija. Dołącz już dziś i rozwijaj swoją sieć kontaktów na całym świecie.',
          button2: 'Zostań naszym Trenerem/Przewodnikiem',
          dialog2: {
            head: 'Skontakuj się z nami',
            title: 'Zostaw nam wiadomość',
            body: '',
          },
          success2: {
            title: 'Dziękujemy!',
            body: 'Nasz zespół skontaktuje się z Tobą w ciągu 24h',
          },
          image1: 'https://res.cloudinary.com/hkhuw4b7v/image/upload/v1499879583/page/guide1.jpg',
          image2: 'https://res.cloudinary.com/hkhuw4b7v/image/upload/v1499879583/page/guide2.jpg',
        },
        mechanic: {
          title: 'Znajdź Mechanika',
          head: 'W VIKING GARAGE znajdziesz sprawdzonych\nMechaników, którzy zadbają o Twój motocykl',
          text: 'Chcemy dać dostęp naszej społeczności do Mechaników w dowolnym miejscu na świecie. Dobrze wiemy, że sprawna maszyna to podstawa.\n\nCzasem zdarza się, że pomimo swoich umiejętności potrzebujesz kogoś kto dokona niezbędnego przeglądu i napraw Twojego motocykla. Jeżeli jesteś zainteresowany nadaniem swojemu motocyklowi niepowtarzalnego wyglądu znajdziesz tu również profesjonalistów, którzy w swoich warsztatach kastomizują motocykle sprawiając by nawet najmniejszy szczegół Twojego motocykla stanowił oryginalną całość.',
          title2: 'Jesteś Mechanikiem?',
          head2: 'Dołącz do nas i buduj swoją sieć kontaktów na\ncałym świecie jako Mechanik VIKING GARAGE.',
          text2: 'Chcemy dać dostęp naszej społeczności do Mechaników  w dowolnym miejscu na świecie.\n\nNasza baza Mechaników dopiero się rozwija. Dołącz już dziś -  poszerzaj grono swoich klientów i buduj renomę swojego warsztatu dzięki systemowi rekomenacji i ocen.',
          button2: 'Zostań naszym Mechanikiem',
          dialog2: {
            head: 'Skontakuj się z nami!',
            title: 'Zostaw nam swoje dane i wiadomość',
            body: '',
          },
          success2: {
            title: 'Dziękujemy!',
            body: 'Nasz zespół skontaktuje się z Tobą w ciągu 24h',
          },
          image1: 'https://res.cloudinary.com/hkhuw4b7v/image/upload/v1499879583/page/mechanic1.jpg',
          image2: 'https://res.cloudinary.com/hkhuw4b7v/image/upload/v1499879583/page/mechanic2.jpg',
        },
        faq: {
          title: 'FAQ',
          text: 'Platforma VIKING GARAGE umożliwia wynajęcie motocykli krótko- i długoterminowo, bezpośrednio od właściciela. Motocykle dostępne są na terenie całej Polski, a także w Portugalii, na Wyspach Kanaryjskich i w Indonezji.\n\nPrawo jazdy nie jest konieczne w przypadku jazdy na torach i w terenie, a przy wynajmie motocykli o pojemności do 125 cm³, do jazdy po ulicy wystarczy kategoria B.\n\nOsoby, które chcą podnosić swoje umiejętności, mogą zainteresować oferty od naszych znajomych, mistrzów Polski w motocross, enduro, freestyle motocross, jak i doświadczonych zawodników i przewodników Enduro w Hiszpanii, Portugalii i w Indonezji.',
        }
      }

    default:
      return {
        owner: {
          title: 'Rent your bike',
          head: 'Become a part of trustworthy motocommunity.',
          texta: 'In VIKING GARAGE we gather people who, in their own way, realizes various motorbike passions - from sharing their experience with beginner motorcyclists, to customizing and repairing motorbikes.',
          textb: 'It is here your passion can become a source of extra money - from a few dollars for fuel to quite big business developed on VIKING GARAGE platform.',
          button: 'Start earning money',
          dialog: {
            head: 'Rent your motorbike',
            title: 'We will help you prepare your motorbike to rent',
            body: 'STEP 1\nLeave us your data contact - our team will contact  you and answer any question.\n\nSTEP 2\nCreate a rental offer - together with our team prepare a description of a motorbike, pictures and prices\n\nSTEP 3\nRent your motorbike to people from all over the world and make money on it',
          },
          success: {
            title: 'Thanks!',
            body: 'Our team will contact you within 24 hours and work together to create an offer of your motorbike.',
          },
          image1: 'https://res.cloudinary.com/hkhuw4b7v/image/upload/v1499879583/page/owner1.jpg',
          imageb: 'https://res.cloudinary.com/hkhuw4b7v/image/upload/v1499879583/page/owner2.jpg',
        },
        guide: {
          title: 'Develop your skills',
          head: 'The real ride starts when you get control over your\nmotorbike and you know the routes where you can speed up.',
          text: 'With VIKING GARAGE, you will find Guides that will show you the best places in your area and Coaches who will help you achieve better results and improve your motorcycle skills and style, depending on your level of progress.\n\nOur Guides and Coaches are professionals. They won titles at competitions in Poland and Europe, they learned from the best and now they are ready to share their knowledge and experience with you. A few hours of driving with pro riders will help you exceed your internal limitations and reach your next skill levels.',
          title2: 'Are you a Guide or Coach?',
          head2: 'Join us and build your network around the\nworld as Guide or Coach on VIKING GARAGE.',
          text2: 'We want to give our community access to Guides and Coaches anywhere in the world. Imagine that you can run a training for a group of beginner motorcyclists. You decide about the the timing and prices. You provide a professional training, first-hand information about motorbike attractions nearby, and an unforgettable experience - after all, the pleasure of sharing motorbike emotion makes it fun.\n\nOur base of Guides and Coaches is still on the road. Join us today and built your network around the world.',
          button2: 'Become our Trainer/Coach',
          dialog2: {
            head: 'Contact us!',
            title: 'Leave us your details and your message',
            body: '',
          },
          success2: {
            title: 'Thanks!',
            body: 'Our team will contact you within 24 hours',
          },
          image1: 'https://res.cloudinary.com/hkhuw4b7v/image/upload/v1499879583/page/guide1.jpg',
          image2: 'https://res.cloudinary.com/hkhuw4b7v/image/upload/v1499879583/page/guide2.jpg',
        },
        mechanic: {
          title: 'Find a Mechanic',
          head: 'At VIKING GARAGE you will find recommended\nMechanics who will take care of your motorcycle.',
          text: 'We want to give our community access to Mechanics anywhere in the world.\n\nSometimes you need someone who will make the necessary review and repair of your motorbike. You can also find professionals who in their workshops customize motorcycles to make even the smallest detail of your bike an original unity.\n\nFind the base of the recommended Mechanics on VIKING GARAGE platform.',
          title2: 'Are you a Mechanic?',
          head2: 'Join us and build your network around\nthe world as a Mechanic on VIKING GARAGE.',
          text2: 'We want to give our community access to Mechanics anywhere in the world.\n\nOur Mechanics base is just growing. Join us today - expand your clients portfolio and build your workshop’s reach with a recommendation and rating system.',
          button2: 'Become our Mechanic',
          dialog2: {
            head: 'Contact us!',
            title: 'Leave us your details and your message',
            body: '',
          },
          success2: {
            title: 'Thanks!',
            body: 'Our team will contact you within 24 hours',
          },
          image1: 'https://res.cloudinary.com/hkhuw4b7v/image/upload/v1499879583/page/mechanic1.jpg',
          image2: 'https://res.cloudinary.com/hkhuw4b7v/image/upload/v1499879583/page/mechanic2.jpg',
        },
        faq: {
          title: 'FAQ',
          text: 'VIKING GARAGE platform allows you to rent motorcycles for short and long term, directly from the owner. Motorcycles are available in Poland, as well as in Portugal, the Canary Islands and Indonesia.\n\nDriving licenses are not required for on-track or off-road driving. Category B is sufficient to rent motorcycles up to 125 cm³ and street bikes.\n\nThose who want to improve their skills may be interested in offers from our friends, Polish motocross, enduro, freestyle motocross champions as well as experienced enduro tour guides in Spain, Portugal and Indonesia.',
        }
      }
  }
})()
