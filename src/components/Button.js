import classes from './Button.module.css'

const Button = ({symbol, color, handleClick}) =>{
    return <div className={classes.btnwrap} style={{backgroundColor: color}} onClick={handleClick}>{symbol}</div>
}

export default Button