import { useEffect, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import UserDataContext from '../../../contexts/userDataContext.js';
import CartContext from '../../../contexts/cartContext.js';
import { HistoryContainer, HistoryList } from "./HistoryStyle"
import api from '../../../services/api.js';
import { sendErrorAlert } from "../../../utils/SweetAlert.js";
import { PageLoading } from "../../shared/Loadings.js";
export default function HistoryPage() {
    const { userData } = useContext(UserDataContext);
    const { cart, setCart } = useContext(CartContext);
    const navigate = useNavigate();
    const [pageLoading, setPageLoading] = useState(true);

    useEffect(() => {
        if (userData.userId) {
            renderCart();
        } else {
            navigate('/signin')
        }
    },[])

    function renderCart() {
        api.getCartItems({ userId: userData.userId })
        .then(resp => {
            setCart(resp.data)
        })
    }

    if (pageLoading) return <PageLoading />;
    return (
        <HistoryContainer>
            <HistoryList>
                {
                    cart.map(cartItem => (
                        <li>
                            <div className='left-side'>
                                <img src={cartItem.imageUrl} alt={cartItem.itemName}/>
                            </div>

                            <div className='right-side'>
                                <h2 className='item-name'>{cartItem.itemName}</h2>
                                <p className='price'>R$ {cartItem.price}</p>
                                <div className='size-container'>
                                    tamanho
                                    <p className='size'>{cartItem.size}</p>
                                </div>
                            </div>
                        </li>
                    ))
                }
                
                
            </HistoryList>
        </HistoryContainer>
    )
} 