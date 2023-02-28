import './App.css';
// import { IoMdSearch } from "react-icons/io";
import Rightbar from './components/icon'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <pCep>Clique aqui para inserir seu CEP</pCep>
      </header>
      <header className='Logo-line'>
        <img className='logo-mercado' src='https://giassi.vtexassets.com/assets/vtex.file-manager-graphql/images/80008e05-4c19-431d-bb37-dcae6261752b___18363bd40c1cce9eda85bcfb91a41b18.svg' />
        <Rightbar></Rightbar>
      </header>
      <body>

      </body>
    </div>
  );
}

export default App;