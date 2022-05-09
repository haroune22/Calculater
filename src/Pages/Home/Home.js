import './Home.css';
import {useState, useRef} from 'react';

function Home() {
const [result, setresult] = useState('');
const input_ref = useRef();

const handleclick = (e)=> {

    setresult(result?.concat(e.target?.name))
}
const clear = () => {
    setresult("")
}
const backspace = ()=> {

setresult(result.slice(0, -1))
}
const root = () => {
    setresult(Math.sqrt(result))
}
const calc = () => {

    try {
        setresult(eval(result).toString())
    } catch (error) {
        setresult('invalid format')
    }
}

return (<>
<div className="Countainer">
<div className='Title'>
Calculator
</div> <br></br>
        <div>
        <input 
            className="Input"
            type="text" 
            ref={input_ref}
            value={result}
            placeholder="Number"
            />
        </div>
    <div className='Buttons'>
    <button onClick={backspace} >←</button>
    <button onClick={clear}>AC</button>
    <button onClick={root} className="">√x</button>
    <button onClick={handleclick} name='.' >.</button>
    <button onClick={handleclick} name='3.1415926536'>π</button>
    <button onClick={handleclick} className="btn" name='0'>0</button>
    <button onClick={handleclick} className="btn" name='1'>1</button>
    <button onClick={handleclick} className="btn" name='2'>2</button>
    <button onClick={handleclick} className="btn" name='3'>3</button>
    <button onClick={handleclick} className="btn" name='4'>4</button>
    <button onClick={handleclick} className="btn" name='5'>5</button>
    <button onClick={handleclick} className="btn" name='6'>6</button>  
    <button onClick={handleclick} className="btn" name='7'>7</button>
    <button onClick={handleclick} className="btn" name='8'>8</button>
    <button onClick={handleclick} className="btn" name='9'>9</button>
    <button onClick={handleclick} name='*'>X</button>
    <button onClick={handleclick} name='-'>-</button>
    <button onClick={handleclick} name='+'>+</button>
    <button onClick={handleclick} name='/'>/</button>
    <button onClick={calc} >=</button>
    </div>
</div>

    
</>
)

}


export default Home;