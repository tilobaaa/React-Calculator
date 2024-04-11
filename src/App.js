import {useState} from 'react'
import Button from './components/Button';
import './App.css';
import Input from './components/Input';
import {evaluate} from 'mathjs'

function App() {
  const [text, settext]= useState(0)
  const [result,setResult] = useState(0)
  const bgColor = "#be3909"
  
  const clickfxn = (newText)=>{
    if (result !== 0){
      setResult(0)
    }
    if (text=== 0){
      settext(newText)
    }else{
      settext(text=> text + '' + newText)
    }
  }

  const clearFxn = ()=>{
    settext(0)
    setResult(0)
  }

  const answerFxn = ()=>{
    let finalAnswer = evaluate(text)
    setResult(finalAnswer)
    settext(0)
  }

  return (
    <div className="App">
     <div className='calc-wrapper'>
      <div>
        <Input text={text} result = {result} />
      </div>
     <div className='button-wrap'> 
        <Button symbol='7' handleClick={()=>clickfxn('7')}/>
        <Button symbol='8' handleClick={()=>clickfxn('8')}/>
        <Button symbol='9' handleClick={()=>clickfxn('9')}/>
        <Button symbol='+' color={bgColor} handleClick={()=>clickfxn('+')}/>
      </div>
      <div className='button-wrap'> 
        <Button symbol='4' handleClick={()=>clickfxn('4')}/>
        <Button symbol='5' handleClick={()=>clickfxn('5')}/>
        <Button symbol='6' handleClick={()=>clickfxn('6')}/>
        <Button symbol='-' color={bgColor} handleClick={()=>clickfxn('-')}/>
      </div>
      <div className='button-wrap'> 
        <Button symbol='1' handleClick={()=>clickfxn('1')}/>
        <Button symbol='2' handleClick={()=>clickfxn('2')}/>
        <Button symbol='3' handleClick={()=>clickfxn('3')}/>
        <Button symbol='/' color={bgColor} handleClick={()=>clickfxn('/')}/>
      </div>
      <div className='button-wrap'> 
        <Button symbol='.' handleClick={()=>clickfxn('.')}/>
        <Button symbol='0' handleClick={()=>clickfxn('0')}/>
        <Button symbol='*' color={bgColor} handleClick={()=>clickfxn('*')}/>
        <Button symbol='=' color={bgColor} handleClick={answerFxn}/>
      </div>
      <div className='button-wrap'> 
        <Button symbol='sin' handleClick={()=>clickfxn('sin(')}/>
        <Button symbol='cos' handleClick={()=>clickfxn('cos(')}/>
        <Button symbol=')' color={bgColor} handleClick={()=>clickfxn(')')}/>
        <Button symbol='=' color={bgColor} handleClick={answerFxn}/>
      </div>
    
      <Button symbol='CLEAR' color='red' handleClick={clearFxn}/>

     </div>

      
    </div>
  );
}

export default App;
