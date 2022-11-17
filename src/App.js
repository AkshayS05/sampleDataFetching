import { useEffect, useState } from 'react';
import Form from './Form';
import List from './List';
import Table from './Table';

function App() {
  const [tab, setTab] = useState('');
  const [data, setData] = useState([]);

  const API_URL = `https://jsonplaceholder.typicode.com/${tab}`;

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(API_URL);
        const listItems = await response.json();
        setData(listItems);
      } catch (err) {
        console.log(err);
      }
    };
    fetchItems();
  }, [tab]);

  return (
    <div className="App">
      <div>
        <Form data={data} setData={setData} tab={tab} setTab={setTab} />
        <ul>
          {/* <List data={data} /> */}
          <Table data={data} />
        </ul>
      </div>
    </div>
  );
}

export default App;
