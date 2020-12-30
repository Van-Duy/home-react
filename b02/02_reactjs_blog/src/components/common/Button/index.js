import './button.css';
import { useEffect, useState } from 'react';


export default function Button({
    color,
    link,
    loadingParent,
}) {
    const [LocalLoading,setLoading] = useState(false);

    useEffect(() => {
        if(link) {
          
        }
    }, [link])

    function loadingButton() {
         if(loadingParent){
             setLoading(loadingParent);
         }
         setLoading(true);
         
    }
    
    return(
        <div>
            {
                LocalLoading && 
                (<i
                className="fa fa-refresh fa-spin"
                style={{ marginRight: "5px" }}
                />)
            }
            <button
             className={color}
             onClick={loadingButton}
             >Secondary
            </button>
        </div>
    );
}