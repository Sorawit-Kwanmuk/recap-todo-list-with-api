import { useState } from 'react';

function AddForm({ handleClickAdd }) {
  const [text, setText] = useState('');

  const handleAddClick = () => {
    handleClickAdd(text);
    setText('');
  };

  return (
    <div className='row my-4 pb-4 border-bottom w-75 m-auto'>
      <div className='input-group'>
        <input
          type='text'
          className='form-control'
          onChange={e => setText(e.target.value)}
        />
        <button className='btn btn-outline-primary' onClick={handleAddClick}>
          Add
        </button>
        <button className='btn btn-outline-danger'>Undo</button>
      </div>
    </div>
  );
}

export default AddForm;
