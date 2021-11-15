import { useEffect, useState, useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
    ItemPageContainer,
    ItemContainer,
} from './ItemPageStyle';
import api from '../../../services/api';
import Menu from '../../shared/HomePageMenu/HomePageMenu';
import { LoadingItem } from '../../shared/Loadings.js'
import { sendErrorAlert } from '../../../utils/SweetAlert.js';
import UserDataContext from '../../../contexts/userDataContext';
import CartContext from '../../../contexts/cartContext';
import BlankSpace from '../../shared/BlankSpace';
import { addItemToCart, addItemToCartAndCheckout } from './ItemPageFunctions';


export default function ItemPage() {
    const [menu1, setMenu1] = useState('');
    const [menu2, setMenu2] = useState('');
    const [item, setItem] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const { cart, setCart } = useContext(CartContext);
    const locationArr = useLocation().pathname.split('/');
    const itemId = locationArr[locationArr.length - 1]
    const navigate = useNavigate();
    const { userData } = useContext(UserDataContext);

    useEffect(() => {
        setItem('');
        setMenu1('');
        setMenu2('');

        window.scrollTo(0, 0);

        api.getItem(itemId)
            .then(res => {
                setItem(res.data)

                api.getItems({color: res.data.color})
                    .then(resp => {
                        setMenu1(resp.data);
                    })
                    .catch(err => console.log(err.response));

                api.getItems({category: res.data.categories[0]})
                    .then(resp => {
                        setMenu2(resp.data);
                    })
                    .catch(err => console.log(err.response));
            })
            .catch(err => {
                console.log(err)
                sendErrorAlert('Item not found')
                navigate('/')
            });

 
    }, [itemId, navigate]);

    function localAddItemToCart() {
        addItemToCart(setIsLoading, itemId, userData, cart, setCart)
    }

    function localAddItemToCartAndCheckout() {
        addItemToCartAndCheckout(setIsLoading, itemId, userData, cart, setCart, navigate)
    }
    
    return (
        <>
            <BlankSpace isShown={isLoading} isTransparent={true} isLoading={true}/>
            <ItemPageContainer>
                {
                    !item ? <LoadingItem /> : 
                    <ItemContainer>
                        <div className='left-side'>
                            <img src={item.image} alt={item.name}/>
                        </div>

                        <div className='right-side'>
                            <div>
                                {
                                    item.categories.map(categorie =>  <span className='categories'>{categorie} / </span>)
                                }
                            <span className='categories'>{item.color} / </span>
                            </div>
                            <h2 className='item-name'>{item.name}</h2>
                            <p className='price'>R$ {item.price}</p>
                            <p className='qty'>{item.quantity} unidade(s)</p>
                            <div className='buy-button-container'>
                                <button className={item.quantity ? 'iwant' : 'no-item'} onClick={(localAddItemToCartAndCheckout)}>
                                    {item.quantity ? 'Eu quero!' : 'produto vendido'}
                                </button>
                                {   
                                    !item.quantity ? '' :
                                    <button className="add-cart" onClick={localAddItemToCart}>
                                        {item.quantity ? 'Adicionar ao carrinho' : 'produto vendido'}
                                    </button>
                                }
                            </div>
                            <div className='size-container'>
                                tamanho
                                <p className='size'>{item.size}</p>
                            </div>
                            <p className='description'>
                                <span>Descrição</span>
                                {item.description}
                            </p>
                        </div>
                    </ItemContainer>
                }
            

                {
                    !item || !menu1 ? <LoadingItem /> :
                    <Menu
                        title={`Que tal um pouco mais de ${item.color}`}
                        forwardMessage="Me mostre mais!"
                        type="colors"
                        itens = {menu1}
                    />
                }
                {
                    !item || !menu2 ? <LoadingItem /> :
                    <Menu
                        title={`${item.categories[0]} que você também pode gostar`}
                        forwardMessage="Me mostre mais!"
                        type="categories"
                        itens = {menu2}
                    />
                }
                
            </ItemPageContainer>
        </>
    )
}