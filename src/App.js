import './App.css';
import Header from './component/Header/Header';
import Shop from './component/Shop/Shop';

function App() {
  return (
    <div className="container">
     <div className="display">
     <Header></Header>
      <Shop></Shop>
     </div>
    </div>
  );
}

export default App;
