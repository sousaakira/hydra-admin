import React from "react";
import { useNavigate } from "react-router";
import '../assets/css/Box.css'

function BoxComponet(props){
    const {title, body, url} = props
    const navigate = useNavigate()
    function handleClick(){
        navigate(url)
    }
    return(
        <div className='BoxCard' onClick={handleClick}>
            <div className='TitleCardBox'>{title}</div>
            <div className='BodyCardBox'>{body}</div>
        </div>
    )
}

export default BoxComponet