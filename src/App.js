import logo from './logo.svg';
import './App.css';
import './style.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1> My Favorite 2023 Tv Shows </h1>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          I've watch a number of tv shows at the beginning of the year 2023. 
          I can say I have a few that are my favorites.
          Their genres range from comedies, reality shows to dance or musicals. 
        </p>
          <table>
            <tr>
            <th colSpan={2}>Top Two</th>
            </tr>

            <tr>
            <td>Dance 100</td>
              
            <td>Broklyn nine-nine</td>
            </tr>
            <tr> 
              <td> <img src="https://static.next-episode.net/tv-shows-images/huge/dance-100.jpg"/></td>
              <td> <img src="https://static.next-episode.net/tv-shows-images/huge/dance-100.jpg"/></td>
            </tr>

            <tr> 
              <td> <img src="https://static.next-episode.net/tv-shows-images/huge/dance-100.jpg"/></td>
              <td> <img src="https://static.next-episode.net/tv-shows-images/huge/dance-100.jpg"/></td>
            </tr>
          </table>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
      </header>
    </div>
  );
}

export default App;
