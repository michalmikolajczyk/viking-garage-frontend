import * as React from 'react';
import { Link } from 'react-router';
import AppBarVG from '../AppBarVG';
import i18n from '../i18n';
const i = i18n;

export default function About(props) {
  const imageLaunchpad = 'http://res.cloudinary.com/hkhuw4b7v/image/upload/c_scale,w_4181/v1514066605/__JWA_20171201_cw_00197_huitqj.jpg';
  const imageLama = 'http://res.cloudinary.com/hkhuw4b7v/image/upload/c_scale,w_1680/v1514066592/IMG_0196-kopia_p6zakh.jpg';

  const aboutMSE1 = 'VIKING GARAGE gives access to better motorcycle rentals, from local owners.';
  const aboutMSE2 = 'For the owners, we provide a way to make money on their bike. Return on investment is typically achieved around 50 rentals.';
  const aboutMSE3 = 'For people who want to ride, better rentals are now available. The motorcycles on the platform have good mechanical state. ' + 
    'The helmets and gear are DOT and or ECE certified.';
  const aboutMSE4 = 'We provide insurance from independent brokers, for both the riders and the owners. ' +
    'Also an escrow payment system and rental agreement schemas are available. The rental is direct between our users';
  const aboutMSE5 = 'VIKING GARAGE community selects the good bikes, solid owners and responsible riders. Safety first. Ride.';
    
  const aboutTeam1 = 'We are riders, and our background is in technology and startups.';
  const aboutMichal1 = 'Michal Mikolajczyk, CEO, is a senior full-stack engineer at Toptal. He volunteers as Toptal Warsaw Community Leader. ' +
    'He was nominated to Webby Award in 2015. The ';
  const aboutMichal2 = ' open source project, which he leads, received the Toptal Open Source Grant in November 2017. Rides motocross and enduro.';
  const aboutAsia = 'Joanna Kuzniacka, CAO, was the Head Event Manager of 68th AIESEC International Congress. ' +
    'She also co-authored the book "Power of Exchange". She rides motocross and enduro.';
  const aboutFounders = 'VIKING GARAGE is Google Launchpad Start 2017 alumni.';
  const aboutTeam2 = 'We launched in May 2017 in Poland, and in 4 months there were more than 60 bikes on the platform and 47 rentals. ' +
    'Our clients say, that they no longer want to buy motorcycles, they just want to ride.';
  
  const localLeader1 = 'Portugal: Nuno Alcaide';
  const localLeader2 = 'Bali, Indonesia: Wayan Suwarnata';

  const advisor1 = 'Rudradeb Mitra. An entrepreneur who has built global startups (one with over million dollars revenue). Lived in 10 countries and done business with companies all over the world. Has wide experience on global markets. Mentor of Founders Institute, MIT Enterprise Forum and Polish Agency for Entrepreneurship Development.';
  const advisor2 = 'Zbig John Woznowski. Zbigniew was a founder and CEO of marketing syndicate Supremum 360 which he bootstrapped and run for 12 years, and successfully sold. Then he founded Superdeveloper - 3d online tool for real estate companies. He is a Co-founder of Colab.pl, a tech coworking space in Krakow, Poland. He also founded Second Poland, where he built an online community of over 300,000 avatars. Currently CEO and co-founder of Reality Games - mobile gaming studio that creates games based on Big Data. Their flagship - Landlord Real Estate Tycoon, has over 8 mln of players worldwide.';

  const investors1 = 'We had a 40% month over month growth in 2017. ';
  const investors2 = 'Download our pitch deck, if you want to know more.';
  return (
    <div>
      <AppBarVG {...props} />
      <div className="page">
        <div className="page-body">
          <h1 className="title heading-one page-title">About VIKING GARAGE</h1>
          <img className="image" src={imageLaunchpad} />
          <h2 className="head">{i('Motorcycle Sharing Economy')}</h2>
          <p className="text">{i(`${aboutMSE1}`)}</p>
          <p className="text">{i(`${aboutMSE2}`)}</p>
          <p className="text">{i(`${aboutMSE3}`)}</p>
          <p className="text">{i(`${aboutMSE4}`)}</p>
          <p className="text">{i(`${aboutMSE5}`)}</p>
          <h2 className="head">{i('VIKING GARAGE Team')}</h2>
          <p className="text">{i(`${aboutTeam1}`)}</p>
          <p className="text">{i(`${aboutTeam2}`)}</p>
          <h3 className="subhead">{i('Co-founders')}</h3>
          <p className="text">
            {i(`${aboutMichal1}`)}
            <a href="https://github.com/blockchain-IoT/blockchain-IoT-core" target="_blank">blockchain IoT</a>
            {i(`${aboutMichal2}`)}  
          </p>
          <p className="text">{i(`${aboutAsia}`)}</p>
          <p className="text">{i(`${aboutFounders}`)}</p>
          <img className="image" src={imageLama} />
          <h3 className="subhead">{i('Local leaders')}</h3>
          <p className="text">{i(localLeader1)}</p>
          <p className="text">{i(localLeader2)}</p>
          <h3 className="subhead">{i('Advisors')}</h3>
          <p className="text">{i(advisor1)}</p>
          <p className="text">{i(advisor2)}</p>
          <h2 className="head">{i('For investors')}</h2>
          <p className="text">{i(investors1)}<a href="https://docs.google.com/presentation/d/15bR_0g_aJh1t96uXuhzrOKyGHYBwnmHN8EwZyaOBUWo" target="_blank">{i(investors2)}</a></p>
          <p className="text">{i('Reach out to us at')} <a href="mailto:ride@vikinggarage.com" target="_blank">ride@vikinggarage.com</a>.</p>
        </div>
      </div>
    </div>
  );
}
