import { faCheckCircle, faCheckSquare, faCircle } from '@fortawesome/free-regular-svg-icons'
import { faPen, faRadiation, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { checkProduct, deleteProduct, getProduct, getProducts } from '../app/app'
import '../products.scss';

function Products() {
    const [products, setProducts] = useState([])
    useEffect(() => {
        handleGetProducts();
    }, [])
    const handleGetProducts = () => {
        getProducts().then((resp) => {
            setProducts(resp.data);
        }).catch(err => { console.log(err) })
    }
    const handleDeleteProduct = (product) => {
        deleteProduct(product).then((resp)=>{
            // handleGetProducts();
            const newProducts = products.filter((p) => p.id != product.id);
            setProducts(newProducts);
        })
        const newProducts = products.filter((p) => p.id != product.id);
        setProducts(newProducts);
    }
    const handleCheckedProduct = (product) => {
        checkProduct(product).then((resp)=>{
            const newProducts = products.map(p => {
            if (p.id == product.id) {
                p.checked = !p.checked
            }
            return p;
        });
        setProducts(newProducts);
        })
       
    }
    return (
        <div className="p-3 test">
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
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        products.map((product, key) => (
                                            <tr key={key}>
                                                <td>{product.id}</td>
                                                <td>{product.name}</td>
                                                <td>{product.price}</td>
                                                <td>
                                                    {
                                                        product.checked == true ? <button className='btn btn-outline-success' onClick={() => handleCheckedProduct(product)}>
                                                            <FontAwesomeIcon icon={faCheckCircle} ></FontAwesomeIcon>
                                                        </button> : <button className='btn btn-outline-danger' onClick={() => handleCheckedProduct(product)}>
                                                            <FontAwesomeIcon icon={faCircle} ></FontAwesomeIcon>
                                                        </button>
                                                    }
                                                </td>
                                                <td>
                                                    <button onClick={() => handleDeleteProduct(product)} className='btn btn-outline-danger'>
                                                        <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
                                                    </button>
                                                    <button className='btn btn-outline-success m-1'>
                                                        <FontAwesomeIcon icon={faPen}></FontAwesomeIcon>
                                                    </button>
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