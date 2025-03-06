import { useRef, useState, createRef } from "react";
import ButtonCource from "./UI/Button/ButtonCource";
import InputCource from "./UI/Input/InputCource";

export default function CreatePost({posts, setPosts, setModalIsOpen}) {

    const titlePostRef = useRef()
    const bodyPostRef = useRef()

    const createNewPost = (e) => {
        e.preventDefault()
        if (!titlePostRef.current.value || !bodyPostRef.current.value) {
            alert('Ошибка в создание поста! Указаны не все данные.')
            setPosts([...posts])
        } else{
            const newPost = {
                id: Date.now(),
                nodeRef: createRef(null),
                title: titlePostRef.current.value,
                body: bodyPostRef.current.value,
            }
            setPosts([...posts, newPost])
            titlePostRef.current.value = ''
            bodyPostRef.current.value = ''
            setModalIsOpen(false)
        }
    }

    return (
        <form className="createPost__form" onSubmit={createNewPost}
            style={{display: 'flex',
                flexDirection: 'column',
                gap: '10px',
                marginTop: '10px',
                alignItems: 'center'
            }}>
            <InputCource ref={titlePostRef} type='text' placeholder='Название поста'/>
            <InputCource ref={bodyPostRef} type='text' placeholder='Содержимое поста'/>
            <ButtonCource>Создать</ButtonCource>
        </form>
    )
}