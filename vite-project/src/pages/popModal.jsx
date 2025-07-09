//
//  Pop Modal/Page in reactJS web
//
import { useState } from 'react'

export default function popModal() {

    let [modalstatus, setModalstatus] = useState(true)

    return (
        <div>
            <button className='en' type="button" onClick={() => setModalstatus(true)}>Enquiry</button>
            <div className={`modalOverlay ${modalstatus ? 'modalShow' : ''}`} >
                <div className={`ModalDiv ${modalstatus ? 'showModalDiv' : ''}`}>
                    <h3>Enquiry Now <button className='btn btn-danger' onClick={() => setModalstatus(false)}>&times;</button></h3>
                </div>
            </div>
        </div>
    )
}
