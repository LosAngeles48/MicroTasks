import React from 'react';
import './App.css';
import {Header} from './site/Header';
import {Body} from './site/Body'
import {Footer} from './site/Footer'
import {MouseEvent} from 'react';
import {Button} from './components/Button';


function App() {
    // const myFirstSubscruber = (event:MouseEvent<HTMLButtonElement>) => {
    //     console.log('Hello Dmitry')
    // };
    //
    // const mySecondSubscruber = () => {
    //     console.log('Hello Ivan')
    // }
    //
    // const onClickHandler=(name:string) => {
    //     console.log(name)
    // }
const Button1Foo =(subscruber:string, age: number) => {
    console.log(subscruber, age)

}
    const Button2Foo =(subscruber:string) => {
        console.log(subscruber)

    }

    return (



        <div>
            <Header titleForHeader={'NEW BODY'}/>
            <Body titleForBody={'NEW BODY'}/>
            <Footer titleForFooter={'NEW FOOTER'}/>
            {/*<button onClick={(event:MouseEvent<HTMLButtonElement>) =>onClickHandler('Dmitry')}>MyYouTubeChanel-1</button>*/}
            {/*<button onClick={(event:MouseEvent<HTMLButtonElement>) =>onClickHandler('Ivan')}>MyYouTubeChanel-2</button>*/}
            {/*<button>MyYouTubeChanel-1</button>*/}
            {/*<button>MyYouTubeChanel-2</button>*/}
            <Button name={'MyYouTubeChanel-1'} callBack={()=>Button1Foo('I am Dmitry', 21)}/>
            <Button name={'MyYouTubeChanel-2'} callBack={()=>Button2Foo('I am Ivan')}/>
        </div>
    );
}

export default App;
