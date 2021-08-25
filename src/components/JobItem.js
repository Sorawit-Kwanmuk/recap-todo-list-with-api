import { useEffect, useState } from 'react';

function JobItem({ item, handleClickDelete, handleEdit }) {
  const [editMode, setEditMode] = useState(false);
  const [editText, setEditText] = useState('');

  useEffect(() => {
    setEditText(item.name);
  }, [editMode]);

  const handleClickSave = () => {
    handleEdit(item.id, editText);
    setEditMode(false);
  };

  return (
    <div className='col-8'>
      <div className='input-group mb-1'>
        <input
          type='text'
          readOnly={!editMode}
          value={editMode ? editText : item.name}
          className={`form-control ${item.status && 'text-success'}`}
          onChange={e => setEditText(e.target.value)}
        />
        {editMode ? (
          <>
            <button className='btn btn-outline-secondary' onClick={handleClickSave}>
              save
            </button>
            <button
              className='btn btn-outline-secondary'
              onClick={() => setEditMode(false)}>
              Cancel
            </button>
          </>
        ) : (
          <button className='btn btn-outline-secondary' onClick={() => setEditMode(true)}>
            Edit
          </button>
        )}

        <button
          className='btn btn-outline-secondary'
          onClick={() => handleClickDelete(item.id)}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default JobItem;
