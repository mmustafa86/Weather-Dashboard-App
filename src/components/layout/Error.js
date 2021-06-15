import React from 'react'
import { Alert} from "react-bootstrap";



const Error = props => {
    return (

        <Alert  variant="danger" className="rounded my-3 shadow-lg" style={{ width: "40rem" }}>
        No result found
      </Alert>
    )
}

Error.propTypes = {

}

export default Error
