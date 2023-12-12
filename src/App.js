import React from 'react';
import './style.css'
import img from './img/kartinki-na-zadnij-fon-16.jpg'





const BodyCard2 = () => {
  return (
    <>
     <img src={img} className="card-img-top" alt="img"/>
     <div className="card-body">
       <h5 className="card-title">Card title</h5>
       <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
       <a href="#0" className="btn btn-primary">Go somewhere</a>
      </div>
    </>
  )
  
}

const BodyCard1 = () => {
  return (
     <div className="card-body">
       <h5 className="card-title">Card title</h5>
       <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
       <a href="#0" className="btn btn-primary">Go somewhere</a>
     </div> 
  ) 
}

function Card (props) {
  return (
    <div className='card'>
      {props.body}
    </div>  
  )
}


function App() {
  return (
    <>
    <Card body={<BodyCard2/>}/>
    <Card body={<BodyCard1/>}/>
    </>
  );
}

export default App;






