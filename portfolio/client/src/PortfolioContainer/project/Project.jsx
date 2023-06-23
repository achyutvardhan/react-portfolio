import React, { useEffect, useState } from "react";
import "./css/project.css";
import RightBar from "./RightBar";
import LeftBar from "./LeftBar";
export default function Project() {
 let index =0;
  const [details, setDetails] = useState([]);

useEffect(() => {
  const fetchData = async () => {
    const response = await fetch("https://sheetdb.io/api/v1/fuaoyphcu4aja");
    const data = await response.json();
    return data;
  };

  fetchData().then((data) => {
    setDetails(data);
    console.log(data);
  });
}, []);
  return (
    <>
      <div className="externaldiv">
        <div className="internaldiv">
          <p className='heading-project' >PROJECT</p>
          {
            details.map((data)=>{
                 if (index++%2===0) {
                  console.log(index);
                   <RightBar data={data} key={index}/>
                  }
                  else{
                    console.log(index);
                  <LeftBar data={data} key={index}/>}
                    
            })
          }
        </div>
      </div>
    </>
  );
}
