import React from 'react'
import "./Services.css"
import data from "../../constants/data";
const Services = () => {
  return (
    <div className='services section__padding bg__whitesmoke'>
<div className="container">
    <div className="services__content grid">
        {
            data.services.map((services,index)=>{
                return(
                    <div className="services__content--item text__center" key={index}>
<img src={services.img} className='icon' alt="" />
<h4 className='text__upper text'>{services.title}</h4>
<p className='para__text text__grey'>{services.text}</p>
                    </div>
                )
            })
        }
    </div>
</div>
    </div>
  )
}

export default Services