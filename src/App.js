import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import Editor from './components/Editor/Editor';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <div className="main">
        <Editor />
      </div>
    </div>
  );
}

export default App;
