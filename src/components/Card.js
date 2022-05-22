import '../assets/css/Card.css'
function CardComponent(props) {

    const {title, body} = props

    return(
        <div className='Card'>
            <div className='TitleCard'>{title}</div>
            <div className='BodyCard'>{body}</div>
        </div>
    )
}

export default CardComponent;