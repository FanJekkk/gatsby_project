import React,{useState, useEffect} from "react"
import "./layout.css"
import LottieLoader from 'react-lottie-loader'
import rocket from './animation/rocket.json'


const Preloader = () => {
    const [loader, setLoader]=useState(true);
  
    useEffect(()=>{
     setTimeout(()=> {
        setLoader(false)
     }, 4000)
    }, [])
    return (
      
      <>{loader ?
        <div className="LoadContainer">
        <div id = "preloader"><LottieLoader animationData={rocket} /> </div></div> : null
      }
      </>
    )
    }


export default Preloader