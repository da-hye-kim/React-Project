import logo from './logo.svg';
import './App.css';

function App() {
  //debugger = 내가원하는 지점에서 debugger를 쓰면 자바 디버깅 처럼 값이 잘들어오는지 확인할 수 있다.
  return (
    <div className="App">
      <header className="App-header">
        <a className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="loginPage"><h1>시작 페이지</h1></a>
      </header>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <h1>React Start</h1>
        <p>fuhjysdfjshdfjksdfhsdjkfhsdjkhfjksdhfjksdhfhsd</p>
        <button>누르시오!!!!!!!aaaaaa</button>
      </header> */}
    </div>
  );
}

export default App;
