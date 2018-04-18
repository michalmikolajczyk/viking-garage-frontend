import * as React from 'react';
import { Link } from 'react-router';
import AppBarVG from '../AppBarVG';
import tosData from './TOSdata';

export default function Privacy(props) {
  
  const handleSection = (item, key) => (
    <li key={key}>
      <div className="title tos-title">{item.sectionTitle}</div>
      {handleSectionItem(item.sectionData, key)}
    </li>
  );

  const handleSectionItem = (item, key) => {
    if (typeof item === 'string') return <p key={key}>{item}</p>;
    return (
      <ol key={key}>{item.map(handleSectionDataItem)}</ol>
    );
  };

  const handleSectionDataItem = (item, key) => {
    if (typeof item === 'string') return <li key={key}>{item}</li>;
    return (
      <li key={key}><ol>{item.map(handleSectionDataItem)}</ol></li>
    );
  };

  return (
    <div>
      <AppBarVG {...props} />
      <div className="privacy">
        <h1>Terms of Service</h1>
        <ol className="tos-list">{tosData.data.map(handleSection)}</ol>
      </div>
    </div>
  );
}
