import { Route, Routes } from 'react-router-dom'
import './App.css'
import Button from './Components/Button/button.jsx'
import TextInput from './Components/TextInput/TextInput.jsx'
import TextInputFormContainer from './Components/TextInputForm/TestInputFormContainer'
import TextInputForm from './Components/TextInputForm/TextInputForm'
import StartGame from './pages/Startgame'
import PlayGame from './pages/PlayGame'

function App() {

  return (
    <div>
      {/* <Button text = "Click me 1" onClickHandler={() => console.log("Click me 1")} styleType='Warning'/>
      <Button text = "Click me 2" onClickHandler={() => console.log("Click me 2")} styleType='Error'/>
      <Button text = "Click me 3" onClickHandler={() => console.log("Click me 3")} styleType='Success'/>

      <TextInput
        label="Enter some text"
        placeholder='Enter some text here'
        onChangeHandler={(event) => {
          console.log(event.target.value)
        }}
      />
       */}

        {/* <TextInputFormContainer/> */}

        <Routes>
          <Route path='/start' element={<StartGame/>} />
          <Route path='/play' element={<PlayGame/>} />
          <Route path='/' element={<div>Home</div>} />
        </Routes>

    </div>
  )
}

export default App
