function Header() {
  return (
    <div className='row justify-content-evenly align-items-end border-bottom pb-2'>
      <h1 className='col-5 '>TodoLists (with API)</h1>
      <p className='col-3 mb-0'>
        {new Date().toLocaleDateString('en-Us', {
          day: 'numeric',
          month: 'short',
          weekday: 'short',
          year: 'numeric',
        })}
      </p>
    </div>
  );
}

export default Header;
