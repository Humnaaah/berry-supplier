import React from 'react'
import AboutUi from '../UI/AboutUi';
import member1 from '../../Assets/tariq-removebg-preview.png'
import member2 from '../../Assets/team2.jpg'
import member3 from '../../Assets/team3.jpg'
import member4 from '../../Assets/team4.jpg'
import member5 from '../../Assets/team5.jpg'
import member6 from '../../Assets/team6.jpg'
import member7 from '../../Assets/team7.jpg'
import member8 from '../../Assets/team8.jpg'
import member9 from '../../Assets/team9.jpg'
import member10 from '../../Assets/team10.jpg'

let Team=[
    {
        img:member1,
        name:'Tariq Farid',
        designation:'Founder & CEO'
    },
    {
        img:member2,
        name:'Jamie Davis ',
        designation:'VP. Supply Chain'
    },
    {
        img:member3,
        name:'Horacio Martin',
        designation:'Sr. Director'
    },
    {
        img:member4,
        name:'Marcela Chavez ',
        designation:'Director Supply Chain'
    },
   
    {
        img:member5,
        name:'Simon Kon ',
        designation:'Sr. Manager'
    },
    {
        img:member6,
        name:'Katelyn McNeil ',
        designation:'Manager Supply Chain'
    },
    {
        img:member7,
        name:'Bryant Asdavut ',
        designation:'Financial Analyst'
    },
    {
        img:member8,
        name:'Rosaile Luna ',
        designation:'Director Supply Chain'
    },
    {
        img:member9,
        name:'Delia Harris',
        designation:'Store Support Coordinator'
    },
    {
        img:member10,
        name:'Tommy Stango',
        designation:'Supply Chain Coordinator'
    },
    
]
const About=()=>{
    return <AboutUi data={Team}/>
}

export default About