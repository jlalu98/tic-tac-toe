// site header component


import React from 'react';
let style={
    color:'orange',
    height:'100px',
    margin:0,
    borderBottom:'1px solid black',
    backgroundColor:'black'

}

const Siteheader =(props)=>{
    return <h1 style={style}>{props.title} </h1>
}

export default Siteheader;