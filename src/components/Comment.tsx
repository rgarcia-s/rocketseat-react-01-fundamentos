import { ThumbsUp, Trash } from 'phosphor-react'
import { useState } from 'react'
import { Avatar } from './Avatar'
import styles from './Comment.module.css'

interface CommentProps {
  content: string;
  onDeleteComment: (comment: string) => void;
}

export const Comment = ({ content, onDeleteComment }: CommentProps) => {
  const [applauseCount, setApplauseCount] = useState(0);

  const handleDeleteComment = () => {
    onDeleteComment(content)
  }

  const handleApplauseComment = () => {
    setApplauseCount(state => state + 1);
  }

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="http://github.com/rgarcia-s.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Raul Garcia</strong>
              <time title='15 de junho às 21:37h' dateTime='2022-06-15 21:37:21'>Cerca de 1h atrás</time>
            </div>

            <button onClick={handleDeleteComment} title='Deletar comentário'>
              <Trash size={24} />
            </button>
          </header>
          <p>{content}</p>
        </div>

        <footer>
          <button onClick={handleApplauseComment}>
            <ThumbsUp size={20} />
            Aplaudir <span>{applauseCount}</span>
          </button>
        </footer>
      </div>
    </div>
  )
}
