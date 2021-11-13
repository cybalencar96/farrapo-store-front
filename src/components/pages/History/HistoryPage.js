import { useEffect, useContext, useState, useRef, createRef } from "react";
import { useNavigate } from "react-router-dom";
import UserDataContext from '../../../contexts/userDataContext.js';
import { HistoryContainer, HistoryList } from "./HistoryStyle"
import api from '../../../services/api.js';
import { PageLoading } from "../../shared/Loadings.js";
import { FaGhost, FaArrowDown, FaArrowUp } from "react-icons/fa";

export default function HistoryPage() {
    const { userData } = useContext(UserDataContext);
    const [purchaseHistory, setPurchaseHistory] = useState([])
    const navigate = useNavigate();
    const [pageLoading, setPageLoading] = useState(true);
    const listRefs = useRef(null);
    const [actualView, setActualView] = useState(0);

    useEffect(() => {
        if (userData.userId) {
            renderCart();
        } else {
            navigate('/signin')
        }
    },[])

    function renderCart() {
        api.getPurchaseHistory("2035f9f7-0709-4711-9ff2-0874c20e85c1")
        .then(res => {
            setPurchaseHistory(res.data)
            listRefs.current = res.data.map(() => createRef())
            console.log(listRefs)

            setPageLoading(false)
        })
        .catch (err => console.log(err))
    }

    function getDate (date) {
        return (new Date(date).toLocaleString()).split(' ')[0]
    }

    function getHour (date) {
        return (new Date(date).toLocaleString()).split(' ')[1]
    }

    function scrollToNextItem(dir, idx) {
        window.scrollTo({
            top: listRefs.current[dir === 'down' ? idx+1 : idx-1].current.offsetTop - 100,
            behavior: 'smooth'
        })
    }

    if (pageLoading) return <PageLoading />
    return (
        <HistoryContainer>
            {
            purchaseHistory.length === 0 ? <div className='empty'><FaGhost /> <span>Empty history</span></div> : 
            <HistoryList>
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
                                <div className='arrow-next up'><FaArrowUp  onClick={() => scrollToNextItem('up', idx)}/></div>
                            }
                            {  idx === purchaseHistory.length-1 ? '' :
                                <div className='arrow-next down'><FaArrowDown  onClick={() => scrollToNextItem('down', idx)}/></div>
                            }
                        </li>
                    ))
                }
            </HistoryList>
            }
        </HistoryContainer>
    )
} 