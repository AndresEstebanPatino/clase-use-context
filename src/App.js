import './App.css';
import MyPage from './components/without_context/MyPage';
import MyPageContext from './components/with_context/MyPageContext';
function App() {
  return (
    <div className="App">
      <h1>React contex API</h1>
      <hr/>
      <a href='https://es.reactjs.org/docs/context.html' target="__blank">Documentación</a>
      <div> <MyPage/> </div>
      <hr/>
      <div><MyPageContext/></div>
    </div>
  );
}

export default App;

/**
 * SIN context
 * Cambiar el tema de claro a oscuro
 * Cambiar el idioma es/en
 * Simular un inicio de sesión 
 */