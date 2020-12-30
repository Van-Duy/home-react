// import { useState } from 'react'
import Button from './common/Button'

export default function DemoButton() {
  // const [password, setPassword] = useState('');

  return (
    <div className="tcl-container">
      <div className="tcl-row">
        <div className="tcl-col-6 text-center">
          <p>Button mặc định</p>
            <Button color="btn"/>  
          <p>Button  có màu</p>
          <Button color="btn btn-default"/>            
          <Button color="btn btn-primary"/>            
          <Button color="btn btn-category"/>     
          <p>Button  có link</p>      
          <Button 
          color="btn btn-default"
          link="#"
          />   
          <br></br>
          <p>Button  Loading</p>
          <Button 
          color="btn btn-default"
          
          />  

        </div>
      </div>
    </div>
  )
}