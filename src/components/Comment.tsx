import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';
import {Avatar} from './Avatar';
import { useState } from 'react';

interface CommentProps{
    content: string;
    onDeleteComment: (comment: string) => void;
}

export function Comment({ content, onDeleteComment }: CommentProps){

    const [likeCount, setLikeCount] = useState(0);

    function handleDeleteComment(){
        onDeleteComment(content);
    }

    function handleLikeComment(){
        setLikeCount((state) => {
            return state + 1
        });
    }

    

    return(
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/gleysonlopespro.png" alt=""/>
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Gleyson Lopes</strong>
                            <time title="15 de janeiro de 2023 às 19:07" dateTime="2023-01-15 19:07:00">
                                Cerca de 1h atrás
                            </time>
                        </div>
                        <button onClick={handleDeleteComment} title="Deletar Comentário">
                            <Trash size={20}/>
                        </button>
                    </header>
                    <p>
                        {content}
                    </p>
                </div>
                <footer>
                    <button onClick={handleLikeComment}>
                    <ThumbsUp/>
                    Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>

            </div>
        </div>
    )
}