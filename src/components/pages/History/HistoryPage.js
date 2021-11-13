import { useEffect, useContext, useState, useRef, createRef } from "react";
import { useNavigate } from "react-router-dom";
import UserDataContext from '../../../contexts/userDataContext.js';
import { HistoryContainer, HistoryList } from "./HistoryStyle"
import api from '../../../services/api.js';
import { PageLoading } from "../../shared/Loadings.js";
import { FaGhost, FaArrowDown, FaArrowUp } from "react-icons/fa";
import { getDate, getHour, scrollToNextItem } from "./HistoryFunctions.js";
export default function HistoryPage() {
    const { userData } = useContext(UserDataContext);
    const [purchaseHistory, setPurchaseHistory] = useState([])
    const navigate = useNavigate();
    const [pageLoading, setPageLoading] = useState(true);
    const listRefs = useRef(null);

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
            listRefs.current = res.data.map(() => createRef())

            setPageLoading(false)
        })
        .catch (err => console.log(err))
    }

    if (pageLoading) return <PageLoading />
    return (
        <HistoryContainer>
            {
            purchaseHistory.length === 0 ? <div className='empty'><FaGhost /> <span>Empty history</span></div> : 
            <HistoryList >
                {
                    purchaseHistory.map((item, idx) => (
                        <li ref={listRefs.current[idx]}>
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
                                <p className='size-container'>Comprado em {`${getDate(item.date)} às ${getHour(item.date)}`}</p>
                               
                                <p className='description'>
                                    <span>Descrição</span>
                                    {item.description}
                                </p>
                                <p className='size'>{item.sizeName !== 'N/A' ? `tamanho ${item.sizeName}` : ''}</p>
                            </div>

                            {  idx === 0 ? '' :
                                <div className='arrow-next up'><FaArrowUp  onClick={() => scrollToNextItem(listRefs, 'up', idx)}/></div>
                            }
                            {  idx === purchaseHistory.length-1 ? '' :
                                <div className='arrow-next down'><FaArrowDown  onClick={() => scrollToNextItem(listRefs, 'down', idx)}/></div>
                            }
                        </li>
                    ))
                }
            </HistoryList>
            }
        </HistoryContainer>
    )
} 