import '../components/FilterPosts.scss'

export default function FilterPosts(props) {
    return (
        <div className="filterPosts">
            <input {...props} type="text" 
                placeholder='Поиск...'/>
        </div>
    )
}