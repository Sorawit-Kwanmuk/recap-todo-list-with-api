import JobItem from './JobItem';

function Lists({ lists, handleClickDelete, handleEdit }) {
  return (
    <div className='row justify-content-center pb-3'>
      {lists.map(list => (
        <JobItem
          key={list.id}
          item={list}
          handleClickDelete={handleClickDelete}
          handleEdit={handleEdit}
        />
      ))}
    </div>
  );
}

export default Lists;
