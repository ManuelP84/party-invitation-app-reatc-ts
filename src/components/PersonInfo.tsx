import * as React from 'react';

interface IPersonInfoProps {
    person: {
        name: string,
        age: number,
        url: string,
        note?: string
      }
}

const PersonInfo: React.FunctionComponent<IPersonInfoProps> = ({person}) => {
  return (
      <>
      <div className='List-header'>
          <img className='List-img' src={person.url}/>
          <h2>{person.name}</h2>
      </div>
      <p>{person.age} years old</p>
      <p className='List-note'>{person.note}</p>
      </>
  );
};

export default PersonInfo;
