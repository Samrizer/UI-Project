import React from 'react'
import Section1 from './components/Section1/Section1'
import Section2 from './components/Section2/Section2'

const App = () => {

  const users = [

     {
      img: 'https://plus.unsplash.com/premium_photo-1663047305318-c6debe9f633c?q=80&w=687&auto=format&fit==crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 
      
      intro: '', 
      color: 'royalblue',
      tag: 'Satisfied'
    },
     {
 
img: 'https://plus.unsplash.com/premium_photo-1661769159995-f3af0089875f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHdvcmtpbmd8ZW58MHx8MHx8fDA%3D', 
      
color: 'lightseagreen',
intro: '', 
      
      tag: 'Underserved'

     },
     {

img: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 
      
color: 'lightblue',    

intro: '', 

    
      tag: 'Underbanked'


     },

 {

img: 'https://plus.unsplash.com/premium_photo-1661757403301-ae68e1f1b827?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 
      
   
 color: 'pink',
intro: '', 
      tag: 'Underwear'


     },

     


{


  img: 'https://images.unsplash.com/photo-1570215171424-f74325192b55?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  
  color: 'black',
  
  intro: '',
  tag: 'Average'


}




   

  ]

  return (
    <div>
      <Section1 users={users} />
      <Section2 />
    </div>
  )
}

export default App
