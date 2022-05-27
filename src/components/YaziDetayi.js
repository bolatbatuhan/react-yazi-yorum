import axios from "axios";
import React, { useEffect, useState} from "react";
import {useParams} from "react-router-dom";

const YaziDetayi = (props) =>{
    const params = useParams()
    const {id} = params
    const [YaziDetayi, setYaziDetayi] = useState({})

    useEffect(() => {
        axios.get(`https://react-yazi-yorum.herokuapp.com/posts/${id}`)
        .then(response => {
            setYaziDetayi(response.data)
        })
        .catch(error =>{
            console.log(error)
        })
    }, [])

    return(
    <React.Fragment>
    <h2 className="ui header">{YaziDetayi.title}</h2>
    <p>{YaziDetayi.created_at}</p>
    <p>{YaziDetayi.content} </p>

    </React.Fragment>
    )
}

export default YaziDetayi;