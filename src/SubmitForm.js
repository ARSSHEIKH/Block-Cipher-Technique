import React from 'react'
import PermutateKey_10 from './PermutateKey_10'


function SubmitForm  (e, props) {
    e.preventDefault()
    console.log(props)
    return(
    // keyVal = permutateKey_10(keyVal);
        <div>
            <PermutateKey_10/>
            {console.log("submitform")}
            </div>
        
    )
}
export default SubmitForm