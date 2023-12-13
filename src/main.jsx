import React from 'react'
import {createRoot} from 'react-dom/client'
import Hero from './components/Hero'
import './index.css'
import Light from './components/Light'
const root=document.getElementById('root')
createRoot(root).render(
  <div >
    <div className=''>
    {/* <Hero/> */}
    <Light/>
    </div>
  </div>
)
