import PostItem from "./PostItem"
import '../components/PostList.scss';
import { CSSTransition, TransitionGroup, } from 'react-transition-group';
import { useRef } from 'react';

export default function PostList({posts, title, remove}) {

    const nodeRef = useRef(null);

    if (!posts.length) {
        return (
            <div style={{textAlign: 'center', fontSize: '28px'}}>Посты не найдены!</div>
        )
    }

    return (
        <div className="posts">
            <h1 style={{textAlign: 'center'}} className='posts__title'>
                {title}
            </h1>
            <TransitionGroup>
                {posts.map((post, index) => (
                        <CSSTransition
                            key={post.id}
                            nodeRef={nodeRef}
                            timeout={500}
                            classNames="post"
                            onEnter={() => console.log("Entering:", post.id)}
                            onEntering={() => console.log("EnteringActive:", post.id)}
                            onExit={() => console.log("Exiting:", post.id)}
                            onExiting={() => console.log("ExitingActive:", post.id)}
                        >
                            <PostItem remove={remove} number={index + 1} post={post} nodeRef={nodeRef}/>
                        </CSSTransition>
                    )
                )}
            </TransitionGroup>
        </div>
    )
}