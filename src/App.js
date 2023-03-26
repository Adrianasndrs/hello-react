import logo from './logo.svg';
import './App.css';

const magazines = [
  { id: 1, title: 'Second Hand News', isAvailable: true },
  { id: 2, title: 'Never Going Back Again', isAvailable: true },
  { id: 3, title: 'Dont Stop', isAvailable: true },
  { id: 4, title: 'Go Your Own Way', isAvailable: true },
  { id: 5, title: 'Songbird', isAvailable: true },
  { id: 6, title: 'The Chain', isAvailable: true },
  { id: 7, title: 'You Make Loving Fun', isAvailable: true },
  { id: 8, title: 'I Dont Want to Know', isAvailable: true },
  { id: 9, title: 'Oh Daddy', isAvailable: true },
  { id: 10, title: 'Gold Dust Woman', isAvailable: true },
];

function SongList() {
  const listZines = magazines.map(song =>
    <p
      key={song.id}
      style={{
        color: song.isAvailable ? 'white' : 'red'
      }}
    >
      {song.id }
      {song.title}
    </p>
  );
  return (
      <p>{listZines}</p>
  )
}


const album = {
  title: 'Rumors',
  artist: 'Fleetwood Mac',
  published: '1977',
  image: 'https://upload.wikimedia.org/wikipedia/en/f/fb/FMacRumours.PNG',
  width: '264',
  height: '378'
};


function Musicshelf() {
  return (
    <div>
      {/* Components can't return multiple JSX tags unless they are wrapped in a parent element */}
      {/* This is a JSX comment */}
      <h2>{album.title} ({album.published})</h2>
      <p>{album.artist}</p>
      {/* This a conditional that checks if an image exists before displaying it */}
      {album.image &&
      <img
        className="albumCover"
        src={album.image}
        alt={album.title + ' cover'}
        style={{
          width: album.width,
          height: album.height
        }}
      />
      }
    </div>
  );
}

  
function MagicButton() {
  return(
    <>
    <h3>This is a magic button</h3>

    <button onClick={sing}>Magic</button>
    </>
  )
}

function sing() {
  alert('You can go your own way!');
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Musicshelf />
        <SongList />
        <MagicButton />
      </header>
    </div>
  );
}

export default App;
