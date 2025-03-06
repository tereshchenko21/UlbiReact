import { useMemo, useState, createRef } from 'react';
import './App.scss';
import PostList from './components/PostList';
import CreatePost from './components/CreatePost';
import MySelect from './components/UI/Select/MySelect';
import FilterPosts from './components/FilterPosts';
import MyModal from './components/UI/MyModal/MyModal';
import ButtonCource from './components/UI/Button/ButtonCource';

function App() {

    const [posts, setPosts] = useState([
        {id: 1, nodeRef: createRef(null), title: 'JavaScript', body: 'JavaScript - язык программирования'},
        {id: 2, nodeRef: createRef(null), title: 'Python', body: 'Python - язык программирования'},
        {id: 3, nodeRef: createRef(null), title: 'React', body: 'React - язык программирования'},
    ])

    const [selectedSort, setSelectedSort] = useState('')
    const [filterPosts, setFilterPosts] = useState('')
    const [modalIsOpen, setModalIsOpen] = useState(false)

    const sortedPosts = useMemo(() => {
        //Мемоилизация, каждый раз когда меняются зависимости{в данном случае posts, selectedSort} функция будет кэшировать данные расчета,
        //и будет вызвана вновь, когда изменяться массив зависимостей{в данном случае posts, selectedSort}
        if (selectedSort) { // если selectedSort тип сортировки указан, то сортируем
            return [...posts].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort])) //разворачиваесм старый массив и сортируем его
        } else {
            return posts
        }
    }, [posts, selectedSort])
    
    const sortedAndSearchPosts = useMemo(() => {
        return sortedPosts.filter(post => post.title.toLowerCase().includes(filterPosts.toLowerCase()))
    }, [filterPosts, sortedPosts])

    function removePost(postID) {
        console.log("Removing post with id:", postID)
        setPosts((post) => post.filter(p => p.id !== postID));
    }

    function sortPosts(sort) {
        setSelectedSort(sort)
    }

    return (
        <div className="App">
            <div className="container">
                <ButtonCource style={{marginTop: '20px'}} 
                    onClick={() => setModalIsOpen(true)}>
                    Создать пост
                </ButtonCource>
                <MyModal modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen}>
                    <CreatePost posts={posts} setPosts={setPosts} setModalIsOpen={setModalIsOpen}/>
                </MyModal>
                <FilterPosts value={filterPosts} 
                    onChange={(e) => setFilterPosts(e.target.value)}/>
                <MySelect defaultValue={'Сортировка'}
                    value={selectedSort}
                    onChange={sortPosts}
                    options={[
                        {value: 'title', name: 'По названию'},
                        {value: 'body', name: 'По описанию'}
                    ]
                }/>
                <PostList remove={removePost} posts={sortedAndSearchPosts} title={'Список постов'}/>
            </div>
        </div>
    );
}

export default App;
