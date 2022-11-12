import logo from './logo.svg';
import './App.css';
import FormInput from './component/FormInput'
import List from './component/List'
import Footer from './component/Footer'
import { DataProvider } from './component/DataProvider'


function App() {
  return (
    <DataProvider>
      <div className="App">
        <h1>To Do List</h1>
        <FormInput />
        <List />
        <Footer />
      </div>
    </DataProvider>
  );
}

export default App;
