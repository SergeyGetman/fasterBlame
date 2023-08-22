import React from 'react';
import Button from './button';
import { useNavigate } from 'react-router-dom';
import { MOCK_DATA } from '../mock';

const Coursea = () => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate('/');
  };

  return (
    <>
      {MOCK_DATA.map((item, index) => (
        <div key={index}>
          <h1>{item.title}</h1>
          <h2>{item.subtitle}</h2>
          {item.sections.map((section, sectionIndex) => (
            <div key={sectionIndex}>
              <h1>{section.heading}</h1>
              {section.content && <h2>{section.content}</h2>}
              {section.contentList && (
                <ul>
                  {section.contentList.map((listItem, listItemIndex) => (
                    <li key={listItemIndex}>{listItem}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      ))}
      <Button text="BACK" handleClick={handleBack} />
    </>
  );
};

export default Coursea;
