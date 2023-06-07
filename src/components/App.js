
import React,{useState} from "react";
import './../styles/App.css';

const App = () => {
  const[flag,setFlag] = useState(false);
  const handleShow = ()=>{
           setFlag(true);
  }
  const handleClose = () =>{
       setFlag(false)
  }

  return (
    <div>
        {/* Do not remove the main div */}
        
        <button className="btn" onClick={handleShow} >Show Model</button> <br/> &nbsp;
        {flag ? ( <div className="model-overlay">
           <button className="model-close" onClick={handleClose}>Close</button>
           <p>This is the content of the model</p>
       </div>) : ("")}
      

    </div>
  )
}

export default App
