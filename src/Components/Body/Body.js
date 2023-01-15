import React from 'react'
import styled from 'styled-components'


const Body = () => {
  return (
    <Con id='white'>
      <Box id='dropDown1'>
          <span>HI</span>
          <span>I'm Damilola by name </span>
          <span>I reside in ajegunle</span>
          <hr />
          <span>I'm am full stack engineer</span>
          <span>I love coding</span>
      </Box>
      <Holder>   
     <Button id='open1'
       onClick={() => {
        document.getElementById("dropDown1").style.height = "370px";
        document.getElementById('white').style.background = 'black'; 
        document.getElementById("close1").style.display = "block";
        document.getElementById("open1").style.display = "none";
      }}>
      About Sanni click</Button>
      <Button1 id= "close1"
      onClick={() => {
        document.getElementById('white').style.background = 'yellowgreen'; 
        document.getElementById('dropDown1').style.height = '0'; 
        document.getElementById("open1").style.display = "block";
        document.getElementById("close1").style.display = "none";
      }}
      style = {{
        display: "none"
      }}
      >Close About</Button1>
      </Holder>
    </Con>
  )
}

export default Body

const Con = styled.div`width: 60%;
height: 300px;
margin-top:20px;
display: flex;
justify-content: space-around;
background-color: #5b5b5b;
position: absolute;`

const Box = styled.div`width: 400px;
flex-direction: column;
font-size: 30px;
font-weight: bold;
color: yellowgreen;
display: flex;
justify-content: space-around;
align-items: center;
height: 0;
box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
transition: all;
position: absolute;
top: 60px;
overflow: hidden;
background: whitesmoke;
transition: 350ms;`

const Button = styled.button`padding: 0;
height: 20px;
cursor: pointer;
:hover{
    outline: 5px solid(222,233,0,0.2);
    background: #757575;
    color: yellow;
    border-radius: 5px;

}`

const Holder = styled.div`position: relative;
top: 20px;
width: 300px;
display: flex;
justify-content: space-around;`


const Button1 = styled.button`padding: 0;
height: 20px;
cursor: pointer;
:hover{
    outline: 5px solid(222,233,0,0.2);
    background: white;
    color: red;
    border-radius: 5px;

}`
