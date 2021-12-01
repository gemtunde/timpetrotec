import React, {useEffect, useState} from 'react'
import { Header } from "./header"
import {About} from './about'
import JsonData from '../data/data.json'


export const Features = (props) => {
  const [landingPageData, setLandingPageData] = useState({});

  useEffect(()=>{
    setLandingPageData(JsonData)
  },[])
  return (
    <>
    <Header data={landingPageData.Header} />
    <About  data={landingPageData.About}/>
    <div id='features' className='text-center'>
      <div className='container'>
        <div className='col-md-10 col-md-offset-1 section-title'>
          <h2>Services</h2>
        </div>
        <div className='row'>
          
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.title}-${i}`} className='col-xs-6 col-md-3' >
                  {' '}
                  <img
                   src={d.smallImage}
                   className='img-responsive'
                  alt={d.title}
                  style={{borderRadius : 20, height:150, width:350}}

          />
                  <h3>{d.title}</h3>
                  <p>{d.text}</p>
                </div>
              ))
            : 'Loading...'}
        </div>
        </div>
      </div>
    </>
  )
}
