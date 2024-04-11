import classes from './Input.module.css'

const Input =({text,result})=>{
    return <div className={classes.input}>
        <h2 className={classes.result}>{result}</h2>
        <p className={classes.text}>{text}</p>
        
    </div>
}

export default Input