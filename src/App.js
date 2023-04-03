import './App.css';
import AboutUs from './pages/AboutUs/AboutUs';

function App() {
  const text = {title: "hello", subtitle: "lorem lorem lorem"}
  return (
    <div className="App">
      
      <AboutUs text={text} active="false"/>
    </div>
  );
}

export default App;
