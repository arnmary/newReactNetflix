import React from 'react'
 function Description() {
   const descPStyle= {
    color:' rgb(167, 166, 166)',
    textAlign: 'start'
  }
  return (
   
    <> 
    <div className='descContent'>
         <h1>
            Stranger Things
        </h1>
       <ul className="descriptionList">
           <li className="listItem">2019</li>
           <li className="listItem"><span className='toUp'>Director:</span> <span className="gray">Shawn Levy</span></li>
           <li className="listItem">seasons: <span className="gray">3(5Episodes)</span></li>
       </ul>
       <p style={descPStyle}>
             In 1980s Indiana, a group of young friends witness supernatural forces and <br /> 
             secret government exploits. As they search for answers, the children <br />
             unravel a series of extraordinary mysteries.
       </p>
    </div> 
    </>
      
   
  )
}
export default Description;