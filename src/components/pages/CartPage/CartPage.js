import { CartItemDescription, CartPageContainer, CartTitle, DeleteButton, ItemBox, ItemName, CartPrice, ItemQuantityBox, MaxQuantityDescription, TotalPrice, CheckOutButton, QuantityButton, EmptyCartMessage, CartTopBar, EmptyMyCart } from "./CartPageStyle";
import CartContext from "../../../contexts/cartContext";
import { useContext, useState } from "react";
import { numberToCurrency } from "../../../utils/stringsUtils";
import { useNavigate } from "react-router";
import { deleteItemFromCart, getTotalPrice, updateItemQuantity, EmptyCart } from "./CartPageFunctions";
import BlankSpace from "../../shared/BlankSpace";
import UserDataContext from "../../../contexts/userDataContext";

export default function CartPage() {
    const { cart, setCart } = useContext(CartContext);
    const { userData } = useContext(UserDataContext);
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate()
    
    return (
        <>
            <BlankSpace isShown={isLoading} isLoading={true} isTransparent={true} />
            {cart.length ? 
                <CartPageContainer>
                    <CartTopBar>
                        <CartTitle>
                            Meu Carrinho
                        </CartTitle>
                        <EmptyMyCart onClick = { () => EmptyCart({ userData, setIsLoading, setCart })}>
                            Limpar meu Carrinho
                        </EmptyMyCart>
                    </CartTopBar>
                    {
                        cart.map(({itemId, itemName, imageUrl, cartQty, maxQty, price, userId, visitorId }, index) => (
                            <ItemBox key={"CartItem"+index} >
                                <img alt={itemName} src={imageUrl} onClick = {() => navigate(`/items/${itemId}`)} />
                                <CartItemDescription>
                                    <ItemName onClick = {() => navigate(`/items/${itemId}`)}>
                                        {itemName}
                                    </ItemName>
                                    <ItemQuantityBox>
                                        <QuantityButton
                                            isNotAllowed={cartQty === 1}
                                            onClick={() => updateItemQuantity({ userData, setIsLoading, itemId, quantity: cartQty - 1, maxQty, cart, setCart })}
                                            disabled = {isLoading}
                                        > 
                                            -
                                        </QuantityButton>
                                        <span>{cartQty}</span>
                                        <QuantityButton
                                            isNotAllowed={cartQty === maxQty}
                                            onClick={() => updateItemQuantity({ userData, setIsLoading, itemId, quantity: cartQty + 1, maxQty, cart, setCart })}
                                            disabled = {isLoading}
                                        >
                                            +
                                        </QuantityButton>
                                    </ItemQuantityBox>
                                    <MaxQuantityDescription>
                                        ( Disponível: {maxQty} )
                                    </MaxQuantityDescription>
                                    <DeleteButton onClick={() => deleteItemFromCart({ userData, itemId, setIsLoading, cart, setCart })}>
                                        Excluir
                                    </DeleteButton>
                                </CartItemDescription>
                                <CartPrice>
                                    {numberToCurrency(price*cartQty)}
                                </CartPrice>
                            </ItemBox>
                        ) )
                    }
                    <TotalPrice>
                        Total: {getTotalPrice(cart)}
                    </TotalPrice>
                    <CheckOutButton>
                        Seguir para Checkout
                    </CheckOutButton>
                </CartPageContainer>
                : 
                <CartPageContainer>
                    <EmptyCartMessage>
                        Seu carrinho ainda está vazio! :/ {<br />}
                        Que tal dar uma olhada na homepage? {<br />}
                        Aposto que você vai gostar!
                    </EmptyCartMessage>
                </CartPageContainer>
            }

            </>
    );
}