import '../components/PostItem.scss'

export default function PostItem(props) {
    return (
        <div className="post">
            <div className="post__content">
                <div className="post__data">
                    <div className="post__id">
                        {props.number}.
                    </div>
                    <div className="post__title">
                        {props.post.title}
                    </div>
                </div>
                <div className="post__body">
                    {props.post.body}
                </div>
            </div>
            <button onClick={() => props.remove(props.post.id)} className="post__delete-button">Удалить</button>
        </div>
    )
}