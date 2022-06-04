import * as React from 'react';
import {IState as Props} from '../App'

interface IProps {
    people: Props["people"]
    setPeople: React.Dispatch<React.SetStateAction<Props["people"]>>
}

const AddToList: React.FunctionComponent<IProps> = ({people, setPeople}) => {

  const [input, setInput] = React.useState({
      name: "",
      age: "",
      note: "",
      img: ""
  })  

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>): void => {
    setInput({
        ...input,
        [e.target.name]: e.target.value
    })
  }

  const clickHandler = (): void => {
    if(!input.name || !input.age || !input.img){
        return
    }
    setPeople([
        ...people,
        {
            name: input.name,
            age: parseInt(input.age),
            url: input.age,
            note: input.note
        } 
    ])
    setInput({
        name: "",
        age: "",
        note: "",
        img: ""
    })
  }


  return(
      <div className='AddToList'>
        <input 
            type="text" 
            placeholder="Name" 
            className="AddToList-input" 
            value={input.name}
            onChange={changeHandler}
            name="name"
        />
        <input 
            type="number" 
            placeholder="Age" 
            className="AddToList-input" 
            value={input.age}
            onChange={changeHandler}
            name="age"
        />
        <input 
            type="text" 
            placeholder="Image URL" 
            className="AddToList-input" 
            value={input.img}
            onChange={changeHandler}
            name="img"
        />
        <textarea 
            placeholder="Notes" 
            className="AddToList-input" 
            value={input.note}
            onChange={changeHandler}
            name="note"
        />
        <button 
            className='AddToList-btn'
            type='button'
            onClick={clickHandler}
        > 
            Add to list!
        </button>
      </div>
  ) ;
};

export default AddToList;
