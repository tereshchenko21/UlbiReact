import PostItem from "./PostItem"
import '../components/PostList.scss';
import { CSSTransition, TransitionGroup, } from 'react-transition-group';

export default function PostList({posts, title, remove}) {


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
                            timeout={500}
                            classNames="postAnim"
                        >
                            <PostItem remove={remove} number={index + 1} post={post}/>
                        </CSSTransition>
                    )
                )}
            </TransitionGroup>
        </div>
    )
}