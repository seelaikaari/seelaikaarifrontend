import { FaArrowsSpin } from "react-icons/fa6";
import { TiTick } from "react-icons/ti";
import { FaTruckLoading } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { LuPackageX } from "react-icons/lu";
import { LuPackageCheck } from "react-icons/lu";
import cancelpopup from "../../assets/images/icons/cancel.png"
import "./Orderdetail.css"
import { useState } from "react";
const Orderdetail = () => {
    const [cancelPopup,setCancelPopup]= useState(false)
    return (
        <>
            <section className="orderinfo-table-wrapper">
                <table className="orderinfo-table">
                    <thead>
                        <tr>
                            <th>Order Id</th>
                            <th>Product Name</th>
                            <th>Order Status</th>
                            <th>Payment Status</th>
                            <th>Total</th>
                            <th>Address</th>
                            <th>Actions </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>#123456</td>
                            <td>IPhone</td>
                            <td>
                                <span className="pros-ord"><FaArrowsSpin/>Processing</span>
                            </td>
                            <td>
                                <span className="pros-ord"> <TiTick/>Paid</span>
                                </td>
                            <td>120</td>
                            <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae animi, id voluptatum ab excepturi ipsam dolor?</td>
                            
                            <td>
                                <div className="btn-wrapper-ord-inf">
                                    <button className="cancel-order-btn" onClick={()=>setCancelPopup(true)}>Cancel</button>
                                    <button className="track-order-btn">Track</button>
                                </div>    
                            </td>
                        </tr>
                        <tr>
                            <td>#123456</td>
                            <td>IPhone</td>
                            <td>
                                <span className="pros-ord"><FaTruckLoading/>Shipped</span>
                            </td>
                            <td><span className="pros-cancel">  <IoClose/>UnPaid</span></td>
                            <td>120</td>
                            <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae animi, id voluptatum ab excepturi ipsam dolor?</td>
                            
                            <td>
                                <div className="btn-wrapper-ord-inf">
                                    <button className="cancel-order-btn">Cancel</button>
                                    <button className="track-order-btn">Track</button>
                                </div>    
                            </td>
                        </tr>
                        <tr>
                            <td>#123456</td>
                            <td>IPhone</td>
                            <td>
                                <span className="pros-ord"><LuPackageCheck/>Delivered</span>
                            </td>
                            <td> <span  className="pros-ord cash-del"> Cash On Delivery</span> </td>
                            <td>120</td>
                            <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae animi, id voluptatum ab excepturi ipsam dolor?</td>
                            
                            <td>
                                <div className="btn-wrapper-ord-inf">
                                    <button className="cancel-order-btn">Cancel</button>
                                    <button className="track-order-btn">Track</button>
                                </div>    
                            </td>
                        </tr>
                        <tr>
                            <td>#123456</td>
                            <td>IPhone</td>
                            <td>
                                <span className="pros-cancel"><LuPackageX/>Cancelled</span>
                            </td>
                            <td><span className="pros-cancel ">  <IoClose/>Refund</span></td>
                            <td>120</td>
                            <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae animi, id voluptatum ab excepturi ipsam dolor?</td>
                            
                            <td>
                                <div className="btn-wrapper-ord-inf">
                                    <button className="cancel-order-btn">Cancel</button>
                                    <button className="track-order-btn">Track</button>
                                </div>    
                            </td>
                        </tr>
                    </tbody>
                </table>
            </section>
            {
                cancelPopup &&
                <div className="cancel-popup-wrapper">
                <div className="cancel-popup-inner text-center">
                    <img src={cancelpopup} width="63px" alt="" />
                    <h3 className="pop-can-tit">Do you really want to cancel this product?</h3>
                    
                    <div className="pop-can-order">
                        <button className="btn-keep-popup" onClick={()=>setCancelPopup(false)}>
                            Keep  Order
                        </button>
                        <button className="btn-Cancel-popup">
                            Cancel the Order
                        </button>
                    </div>
                </div>
            </div>
            }
            
        </>
    )
}

export default Orderdetail
