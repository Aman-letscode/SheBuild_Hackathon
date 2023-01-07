import React from "react";
import { useEffect, useState } from "react";
import './Page.css'
import img from '../Assets/image2.jpg'

function Page() {
  const [texts, setTexts] = useState([]);
  
  useEffect(() => {
      const timeoutIds = [];
      ["S", "I","G", "N", "O", "R", "A"].forEach((text, i) => {
        const timeoutId = setTimeout(() => {
            setTexts((prev) => [...prev, text]);
        }, 200 * i);
        
        timeoutIds.push(timeoutId);
        });
return () => {
  timeoutIds.forEach((id) => clearTimeout(id));
  };
    }, []);
const [text2, setText2] = useState([]);
    useEffect(() => {
      const timeoutIds = [];
      [" We"," are", " here", " to"," serve"," you"].forEach((text2, i) => {
        const timeoutId = setTimeout(() => {
          setText2((prev) => [...prev, text2]);
        }, 200 * i);
  
        timeoutIds.push(timeoutId);
      });
return () => {
  timeoutIds.forEach((id) => clearTimeout(id));
  };
    }, []);
return (<>
  <div className="blue-background">

  <div className="modal-body row">
<div className="col-md-6">
<div>
      <div className="orgName-centre">
      {texts.map((text) => (
            <span className="orgName"> <strong>{text}</strong></span>
      ))}
      </div>
    </div>
    
      
      <div className="orgName-centre">
      {text2.map((text2) => (
            <span className="orgName1"> <>{text2}</></span>
      ))}
      </div>
</div>
<div className="col-md-6">
  <div className="image-area">
    <img  className="image" src={img}></img>
  </div>
</div>
</div>
    
     
   </div>   
    </>
  );
}

export default Page