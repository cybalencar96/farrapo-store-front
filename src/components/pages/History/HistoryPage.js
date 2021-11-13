import { useEffect, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import UserDataContext from '../../../contexts/userDataContext.js';
import { HistoryContainer, HistoryList } from "./HistoryStyle"
import api from '../../../services/api.js';
import { PageLoading } from "../../shared/Loadings.js";
import { FaGhost } from "react-icons/fa";

export default function HistoryPage() {
    const { userData } = useContext(UserDataContext);
    const [purchaseHistory, setPurchaseHistory] = useState('')
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
        api.getPurchaseHistory(userData.token)
        .then(res => {
            setPurchaseHistory(res.data)
            setPageLoading(false)
        })
        .catch (err => console.log(err))
    }

    if (pageLoading) return <PageLoading />
    return (
        <HistoryContainer>
            {
            purchaseHistory.length === 0 ? <div className='empty'><FaGhost /> <span>Empty history</span></div> : 
            <HistoryList>
                {
                    purchaseHistory.map(item => (
                        <li>
                            <div className='left-side'>
                                <img src={item.image} alt={item.name}/>
                            </div>

                            <div className='right-side'>
                                <div>
                                    {
                                        item.categories.map(categorie =>  <span className='categories'>{categorie} / </span>)
                                    }
                                <span className='categories'>{item.colorName} / </span>
                                </div>
                                <h2 className='item-name'>{item.name}</h2>
                                <p className='price'>R$ {item.price}</p>
                                <p className='size-container'>Comprado em {new Date(item.date).toLocaleString()}</p>
                               
                                <p className='description'>
                                    <span>Descrição</span>
                                    {item.description}
                                </p>
                                <p className='size'>{item.sizeName !== 'N/A' ? `tamanho ${item.sizeName}` : ''}</p>
                            </div>
                        </li>
                    ))
                }
            </HistoryList>
            }
        </HistoryContainer>
    )
} 