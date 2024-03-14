import './App.css';
import axios from 'axios';
import { Button } from 'antd';

function App() {
  axios.get('http://localhost:8080/cats/all').then((response) => {
    console.log('-------9999999', response.data);
  }).catch((error) => {});
  return (
    <div className="App">
      <p>lean react</p>
      <Button type="primary">Button</Button>
    </div>
  );
}

export default App;
