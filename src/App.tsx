import React, {useState} from 'react';
import './App.css';
import {Header} from './site/Header';
import {Body} from './site/Body'
import {Footer} from './site/Footer'
import {MouseEvent} from 'react';
import {Button} from './components/Button';
import {FullInput} from './components/FullInput';
import {NewComponent} from './components/NewComponentMap';

function App() {
    let [a, setA]=useState(1)

    const onClickHandler=()=>{
        setA(++a)

    }
    const onClickRemove =() => {
        setA(0)
    }
return (
    <div className='App'>
        <h1>{a}</h1>
        <button onClick={onClickHandler}>Click</button>
        <button onClick={onClickRemove}>Remove</button>

    </div>
)
}

export default App;
// function App() {
//     const [students, setStudents] = useState([
//             {id: 1, name: "James", age: 8},
//             {id: 2, name: "Robert", age: 18},
//             {id: 3, name: "John", age: 28},
//             {id: 4, name: "Michael", age: 38},
//             {id: 5, name: "William", age: 48},
//             {id: 6, name: "David", age: 58},
//             {id: 7, name: "Richard", age: 68},
//             {id: 8, name: "Joseph", age: 78},
//             {id: 9, name: "Thomas", age: 88},
//             {id: 10, name: "Charles", age: 98},
//             {id: 11, name: "Christopher", age: 100},
//         ]
//     )
//     return (
//         <NewComponent students={students}/>
//     );
// }
//
// export default App;
//     function App() {
//     const [message, setMessage] = useState([
//             {message: 'message1'},
//             {message: 'message2'},
//             {message: 'message3'},
//             {message: 'message4'},
//             {message: 'message5'}
//         ]
//     )
//
//         const addMessages=(title:string)=>{
//         let newMessages={message: title};
//             setMessage([newMessages,...message])
//         }
//
//     return (
//         <div className="App">
//             {/*<div>*/}
//             {/*    <input />*/}
//             {/*    <button>+</button>*/}
//             {/*</div>*/}
//             <FullInput addMessages={addMessages}/>
//             {message.map((el, index) => {
//                 return (
//                     <div key={index}>{el.message}</div>
//                 )
//             })}
//         </div>
//     );
// }
//
// export default App;
//

// function App() {
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
// const Button1Foo =(subscruber:string, age: number) => {
//     console.log(subscruber, age)
//
// }
//     const Button2Foo =(subscruber:string) => {
//         console.log(subscruber)
//     }
//     return (
//         <div>
//             <Header titleForHeader={'NEW BODY'}/>
//             <Body titleForBody={'NEW BODY'}/>
//             <Footer titleForFooter={'NEW FOOTER'}/>
            {/*<button onClick={(event:MouseEvent<HTMLButtonElement>) =>onClickHandler('Dmitry')}>MyYouTubeChanel-1</button>*/}
            {/*<button onClick={(event:MouseEvent<HTMLButtonElement>) =>onClickHandler('Ivan')}>MyYouTubeChanel-2</button>*/}
            {/*<button>MyYouTubeChanel-1</button>*/}
            {/*<button>MyYouTubeChanel-2</button>*/}
{/*            <Button name={'MyYouTubeChanel-1'} callBack={()=>Button1Foo('I am Dmitry', 21)}/>*/}
{/*            <Button name={'MyYouTubeChanel-2'} callBack={()=>Button2Foo('I am Ivan')}/>*/}
{/*        </div>*/}
{/*    );*/}
{/*}*/}

{/*export default App;*/}
