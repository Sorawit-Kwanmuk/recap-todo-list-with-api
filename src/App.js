import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import AddForm from './components/AddForm';
import Header from './components/Header';
import Lists from './components/Lists';

const url = 'http://localhost:8080';
function App() {
  const [lists, setLists] = useState([]);
  const [refresh, setRefresh] = useState(true);
  //get data #1
  // useEffect(() => {
  //   axios
  //     .get('http://localhost:8080/todo')
  //     .then(response => {
  //       setLists(response.data.todos);
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     });
  // }, []);
  // get data #2
  // useEffect(() => {
  //   try {
  //     const getData = async () => {
  //       let response = await axios.get('http://localhost:8080/todo');
  //       setLists(response.data.todos);
  //     };
  //     getData();
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }, []);

  //get data #3
  useEffect(() => {
    (async () => {
      try {
        let response = await axios.get(`${url}/todo`);
        setLists(response.data.todos);
      } catch (err) {
        console.log(err.message);
      }
    })();
  }, [refresh]);

  const handleClickAdd = async text => {
    try {
      await axios.post(`${url}/todo`, { name: text, status: false });
      setRefresh(previous => !previous);
    } catch (err) {
      console.log(err.message);
    }
  };
  const handleClickDelete = async id => {
    try {
      await axios.delete(`${url}/todo/${id}`);
      setRefresh(previous => !previous);
    } catch (err) {
      console.log(err);
    }
  };

  const handleEdit = async (id, text) => {
    try {
      let { data } = await axios.get(`${url}/todo/${id}`);
      let e_item = data.todo;
      // let response = await axios.get(`${url}/todo/${id}`);
      // let e_item = response.data.todo;
      await axios.put(`${url}/todo/${id}`, { name: text, status: e_item.status });
      setRefresh(previous => !previous);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className='App container-lg border my-4 py-3 rounded bg-light'>
      <Header />
      <AddForm handleClickAdd={handleClickAdd} />
      <Lists
        lists={lists}
        handleClickDelete={handleClickDelete}
        handleEdit={handleEdit}
      />
    </div>
  );
}

export default App;
