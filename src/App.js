import './App.css';
import Game from './Components/Game';

function App() {
  return (
    <div className='w-full h-full overflow-hidden'>    
      
      <div className='bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500'>
      
        <Game />
        
      </div>          

    </div>
  );
}

export default App;
