import * as React from 'react';
import PersonInfo from './PersonInfo';
import {IState as IListProps} from '../App'

  interface IPersonProps {
    people: {
      name: string,
      age: number,
      url: string,
      note?: string
    }
  }

const List: React.FC<IListProps> = ({people}) => {  
  const peopleList = people.map((person) => {
    return(
    <li className='List'>
      <PersonInfo person={person}/>
    </li>
    )
})
  return(
    <>
    {peopleList}
    </>
  )
};

export default List;
