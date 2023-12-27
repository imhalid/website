'use client'
import CV from "./cv"

export default function CvModal(): JSX.Element {

 return (
  <div className="test">
      <div
       className='z-20 cv-container relative shadow-2xl rounded-md flex justify-center items-center'
       style={{
        position: 'absolute', 
        top: '15%', 
        left: '50%', 
        transform: 'translate(-50%, 0)',
        width: '100%',
        height: '100%',
       }}
      >
       <CV />
      </div>
  </div>
 )
}