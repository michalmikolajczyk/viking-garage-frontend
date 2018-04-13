import * as React from 'react';
import { Link } from 'react-router';
import AppBarVG from '../AppBarVG';
import faqData from './privacyData';

export default function Privacy(props) {
  console.log(faqData);
  const handleSection = (item, key) => (
    <div key={key}>
      <div className="title">{item.sectionTitle}</div>
      {item.sectionData.map(handleSectionData)}
    </div>
  );
  const handleSectionItem = (sectionItem) => {
    return sectionItem.contents.map((item, key) => {
      if (typeof item === 'string') return <p key={key}>{!key && sectionItem.title + ' '}{item}</p>;
      return contentList(item, key);
    });
  };

  const handleSectionData = (item, key) => (
    <div key={key}>
      {handleSectionItem(item)}
    </div>
  );
  
  const contentList = (list, key) => (<ol key={key}>{list.map(contentListItem)}</ol>);
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
