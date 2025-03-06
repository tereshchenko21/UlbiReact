import classes from '../Button/ButtonCource.module.scss'

export default function ButtonCource({children, style, onClick}) {
    return (
        <button className={classes.buttonCource} onClick={onClick} style={style}>{children}</button>
    )
}