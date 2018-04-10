import * as React from 'react';
import { Link } from 'react-router';
import AppBarVG from '../AppBarVG';
import faqData from './FAQdata';

export default function Faq(props) {
  console.log(faqData);
  const handleSection = (item, key) => (
    <div key={key}>
      <div className="title">{item.sectionTitle}</div>
      {item.sectionData.map(handleSectionData)}
    </div>
  );
  const handleSectionData = (item, key) => (
    <div key={key}>
      <p>{key + 1}. {item.title}</p>
      {item.contents.map(handleSectionItem)}
    </div>
  );
  const handleSectionItem = (item, key) => typeof item === 'string' ? <p key={key}>{item}</p> : contentList(item, key);
  const contentList = (list, key) => (<ul key={key}>{list.map(contentListItem)}</ul>);
  const contentListItem = (itm, key) => (<li key={key}>{itm}</li>);
  return (
    <div>
      <AppBarVG {...props} />
      <div className="privacy">
        {faqData.data.map(handleSection)}
      </div>
    </div>
  );
}
