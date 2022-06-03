import * as React from 'react';
import {IState as IAddToListProps} from '../App'


const AddToList: React.FunctionComponent<IAddToListProps> = (props) => {

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

  const clickHandler = () => {

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
            type="text" 
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
            onChange={(e) => changeHandler}
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
