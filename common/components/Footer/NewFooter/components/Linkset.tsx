import React from 'react';

import { translateRaw } from 'translations';
import './Linkset.scss';

const LINK_COLUMNS = [
  {
    heading: translateRaw('NEW_FOOTER_TEXT_6'),
    links: [
      {
        title: 'Woolongs.com',
        link: 'https://www.wallet.woolongs.com/'
      },
      {
        title: translateRaw('NEW_FOOTER_TEXT_7'),
        link: 'https://support.woolongs.com/'
      },
      {
        title: translateRaw('NEW_FOOTER_TEXT_8'),
        link: 'https://about.woolongs.com/'
      },
      {
        title: translateRaw('NEW_FOOTER_TEXT_9'),
        link: 'mailto:press@woolongs.com'
      },
      {
        title: translateRaw('NEW_FOOTER_TEXT_10'),
        link: 'https://about.woolongs.com/privacy/'
      }
    ]
  },
  {
    heading: translateRaw('NEW_FOOTER_TEXT_11'),
    links: [
      {
        title: 'Ledger Wallet',
        link: 'https://www.ledgerwallet.com'
      },
      {
        title: 'TREZOR',
        link: 'https://shop.trezor.io'
      },
      {
        title: 'ether.card',
        link: 'https://ether.cards'
      }
    ]
  },
  {
    heading: translateRaw('NEW_FOOTER_TEXT_12'),
    links: [
      {
        title: 'EtherAddressLookup',
        link:
          'https://chrome.google.com/webstore/detail/etheraddresslookup/pdknmigbbbhmllnmgdfalmedcmcefdfn'
      },
      {
        title: 'EtherScamDB',
        link: 'https://etherscamdb.info/'
      },
      {
        title: 'MoneroVision',
        link: 'https://monerovision.com/'
      },
      {
        title: 'eWoolong Desktop App',
        link: 'https://github.com/woolong-coin/ewoolong-wallet/releases'
      },
      {
        title: 'Ambo Mobile App',
        link: 'https://ambo.io'
      }
    ]
  }
];

export default function Linkset() {
  return (
    <section className="Linkset">
      {LINK_COLUMNS.map(({ heading, links }) => (
        <section key={heading} className="Linkset-column">
          <h2>{heading}</h2>
          <ul>
            {links.map(({ title, link }) => (
              <li key={title}>
                <a href={link}>{title}</a>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </section>
  );
}
