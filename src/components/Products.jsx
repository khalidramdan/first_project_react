import { faCheckCircle, faCheckSquare, faCircle } from '@fortawesome/free-regular-svg-icons'
import { faRadiation } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'

function Products() {
    const [products, setProducts] = useState([
        { id: 1, name: "Computer", price: 2300, checked: false },
        { id: 2, name: "Printer", price: 5300, checked: true },
        { id: 3, name: "Smart Phone", price: 3000, checked: true },
        { id: 4, name: "Scan", price: 2300, checked: false },
    ])
    return (
        <div className="p-3">
            <div className="row">
                <div className="col-md-6">
                    <div className='card'>
                        <div className="card-body">
                            <table className='table'>
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Name</th>
                                        <th>Price</th>
                                        <th>Checked</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        products.map((product,key)=>(
                                            <tr key={key}>
                                                <td>{product.id}</td>
                                                <td>{product.name}</td>
                                                <td>{product.price}</td>
                                                <td>
                                                {
                                                    product.checked == true ? <button className='btn btn-outline-success'>
                                                    <FontAwesomeIcon icon={faCheckCircle} ></FontAwesomeIcon>
                                                </button> : <button className='btn btn-outline-danger'>
                                                <FontAwesomeIcon icon={faCircle} ></FontAwesomeIcon>
                                                </button> 
                                                }   
                                                </td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Products