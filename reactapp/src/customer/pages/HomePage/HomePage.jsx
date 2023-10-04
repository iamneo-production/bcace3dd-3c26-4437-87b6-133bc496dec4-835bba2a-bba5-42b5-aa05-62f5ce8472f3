import React from 'react'
import Maincarousel from '../../components/Homecarousel/Maincarousel'
import HomeSection from '../../components/HomeSection/HomeSection'
import { mens_kurta } from '../../../Data/mens_kurta';


const HomePage = () => {
  return (
    <div>
        <Maincarousel/>
        <div className='space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10'>
            <HomeSection data={mens_kurta} sectionName={"Men's Kurta"}/>
            <HomeSection data={mens_kurta}/>
            <HomeSection data={mens_kurta}/>
            
        </div>
    </div>
  )
}

export default HomePage