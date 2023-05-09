import {Component} from 'react'
import NavBar from '../NavBar'
import WinOrLoseCard from '../WinOrLoseCard'
import EmojiCard from '../EmojiCard'
import './index.css'

class EmojiGame extends Component {
  state = {
    currentGameScore: 0,
    bestScore: 0,
    currentGameEmojisListIds: [],
    isGameOver: false,
    isGameWon: false,
  }

  handlePlayAgain = () => {
    this.setState({
      currentGameScore: 0,
      currentGameEmojisListIds: [],
      isGameOver: false,
      isGameWon: false,
    })
  }

  handleOnClickEmoji = emojiId => {
    const {currentGameEmojisListIds, currentGameScore, bestScore} = this.state
    const {emojisList} = this.props
    if (currentGameEmojisListIds.includes(emojiId)) {
      // Which means our emoji selected twice results in game over
      // if currentScore is more than best score update it
      this.setState({
        currentGameScore,
        bestScore: currentGameScore > bestScore ? currentGameScore : bestScore,
        currentGameEmojisListIds: [],
        isGameOver: true,
      })
    } else {
      // currentScore === emojisList length which means game won and game finished
      // eslint-disable-next-line no-lonely-if
      if (currentGameScore === emojisList.length - 1) {
        this.setState({
          currentGameScore: currentGameScore + 1,
          bestScore: currentGameScore + 1,
          currentGameEmojisListIds: [],
          isGameOver: true,
          isGameWon: true,
        })
      } else {
        // Game is continuing Not won on lose yet
        this.setState(prevState => ({
          currentGameScore: prevState.currentGameScore + 1,
          currentGameEmojisListIds: [
            ...prevState.currentGameEmojisListIds,
            emojiId,
          ],
        }))
      }
    }
  }

  render() {
    const {currentGameScore, bestScore, isGameOver, isGameWon} = this.state
    const {emojisList} = this.props
    return (
      <div className="bg-container">
        <NavBar
          currentGameScore={currentGameScore}
          bestScore={bestScore}
          isGameOver={isGameOver}
        />
        <div className="content-container">
          <div className="section-container">
            {isGameOver ? (
              <WinOrLoseCard
                currentGameScore={currentGameScore}
                bestScore={bestScore}
                isGameWon={isGameWon}
                emojisList={emojisList}
                handlePlayAgain={this.handlePlayAgain}
              />
            ) : (
              <ul className="emoji-list-container">
                {emojisList.map(object => (
                  <EmojiCard
                    key={object.id}
                    item={object}
                    handleOnClickEmoji={this.handleOnClickEmoji}
                  />
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default EmojiGame
/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.
