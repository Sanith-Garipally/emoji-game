import './index.css'

const EmojjiCard = props => {
  const {item, handleOnClickEmoji} = props
  const {id, emojiName, emojiUrl} = item

  const onClickEmoji = () => {
    handleOnClickEmoji(id)
  }
  return (
    <li className="list-item">
      <button className="emoji-button" type="button" onClick={onClickEmoji}>
        <img className="emoji" alt={emojiName} src={emojiUrl} />
      </button>
    </li>
  )
}

export default EmojjiCard
