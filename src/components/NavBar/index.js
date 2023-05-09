import './index.css'

const NavBar = props => {
  const {currentGameScore, bestScore, isGameOver} = props
  return (
    <nav className="nav-bar">
      <div className="nav-left">
        <img
          className="logo"
          alt="emoji logo"
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
        />
        <h1 className="game-name">Emoji Game</h1>
      </div>
      {!isGameOver && (
        <div className="nav-right">
          <p>Score: {currentGameScore}</p>
          <p>Top Score: {bestScore}</p>
        </div>
      )}
    </nav>
  )
}

export default NavBar
