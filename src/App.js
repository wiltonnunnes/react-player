import './App.css';
import Player from './Component/Player';
import video from './video.mp4';

function App() {
  return (
    <Player 
      url={video} 
      width={640} 
      height={360}
    />
  );
}

export default App;
