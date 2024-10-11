
import './App.css'
// import '/style.css'
// import memetv from './assets/images/memecoin.png'

function App() {

  return (
    <>
      <div className='main-wrap'>
        <h1>GAMES</h1>
        <div className='pick-card'>
          <img src='/assets/images/memetv.png' alt="memecoin-png" />
          <div className='outline'>
            <div className='content'>
              <p className='p-l'> PICK A CARD</p>
              <p className='p-small'>PLAY DAILY TO BOOST</p>
              <p className='p-small'>YOUR SCORE</p>
              <button className='play-btn'>
                PLAY<span className='p-small arrow'>{'>'}</span>
              </button>
            </div>
          </div>
        </div>
        <div className='games'>
          <div className='games-wrapper'>
            <div className='fun-quiz'>
              <p className='games-text-1'>FUNQUIZ</p>
              <p className='games-text-2'>GAME</p>
            </div>
            <button className='game-btn'>PLAY {'>'}</button>
          </div>
          <div className='games-wrapper'>
            <div className='word-scramble'>
              <p className='games-text-1'>WORD</p>
              <p className='games-text-2'>SCRAMBLE</p>
            </div>
            <button className='game-btn'>PLAY {'>'}</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
