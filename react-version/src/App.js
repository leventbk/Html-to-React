import logo from './logo.svg';
import './App.css';
import Navigation from './components/navigation';
import Profile from './components/profile';
import TweetForm from './components/tweetForm';
import TweetList from './components/tweetList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
<Navigation/>
<Profile/>
<TweetForm/>
<TweetList/>
      </header>
    </div>
  );
}

export default App;
