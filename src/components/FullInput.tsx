import React, {ChangeEvent, useState} from 'react';

type FullInputPropsType={
    addMessages:(title:string)=>void
}


export const FullInput = (props: FullInputPropsType) => {
    let[title, setTitle] = useState('')

    const onChangeInputHandler=(event:ChangeEvent<HTMLInputElement>) => {
        setTitle(event.currentTarget.value)
    }

    const onClickButtonHandler = () => {
        props.addMessages(title)
        setTitle('')
    }

    return (
        <div>
            <input value={title} onChange={onChangeInputHandler}/>
            <button onClick={onClickButtonHandler}>+</button>

        </div>
    );
};

