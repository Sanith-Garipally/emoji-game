import './index.css'

const WinOrLoseCard = props => {
  const {currentGameScore, isGameWon, emojisList, handlePlayAgain} = props
  return (
    <div className="wl-container">
      <div className="wl-score-container">
        <h1 className="game-result">You {isGameWon ? 'Won' : 'Lose'}</h1>
        <div className="gr-container">
          <p className="score-para">{isGameWon ? 'Best Score' : 'Score'}</p>
          <p className="marks-para">
            {currentGameScore}/{emojisList.length}
          </p>
          <button
            className="play-again-btn"
            type="button"
            onClick={handlePlayAgain}
          >
            Play Again
          </button>
        </div>
      </div>
      <div className="wl-img-container">
        {isGameWon ? (
          <img
            className="wl-img"
            alt="win or lose"
            src="https://assets.ccbp.in/frontend/react-js/won-game-img.png"
          />
        ) : (
          <img
            className="wl-img"
            alt="win or lose"
            src="https://assets.ccbp.in/frontend/react-js/lose-game-img.png"
          />
        )}
      </div>
    </div>
  )
}

export default WinOrLoseCard
