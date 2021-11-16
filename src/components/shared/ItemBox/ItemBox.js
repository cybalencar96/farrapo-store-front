import { ItemBoxContainer, CartItemDescription, ItemName, ItemQuantityBox, QuantityButton, MaxQuantityDescription, DeleteButton, CartPrice, CheckoutDescription } from "./ItemBoxStyle";
import { updateItemQuantity, deleteItemFromCart } from "./ItemBoxFunction";
import { numberToCurrency } from "../../../utils/stringsUtils";
import { useNavigate } from "react-router";
import { useContext } from "react";
import UserDataContext from "../../../contexts/userDataContext";
import CartContext from "../../../contexts/cartContext";

export default function ItemBox({ item, isLoading, setIsLoading, isCheckout }) {
    
    const {itemName,
        imageUrl,
        itemId,
        cartQty,
        maxQty,
        price,
        size } = item
    
    const { cart, setCart } = useContext(CartContext);
    const { userData } = useContext(UserDataContext);
    const navigate = useNavigate();


    return (
        <ItemBoxContainer>
            <img alt={itemName} src={imageUrl} onClick = {() => navigate(`/items/${itemId}`)} />
            <CartItemDescription>
                <ItemName onClick = {() => navigate(`/items/${itemId}`)}>
                    {itemName}
                </ItemName>
                {isCheckout ?
                    <>
                        <CheckoutDescription>
                            Quantidade: {cartQty}
                        </CheckoutDescription>
                        <CheckoutDescription>
                            Tamanho: {size}
                        </CheckoutDescription>
                        <CheckoutDescription>
                            Unidade: {numberToCurrency(price)}
                        </CheckoutDescription>
                    </>
                    :
                    <>
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
                </>
                }
            </CartItemDescription>
            <CartPrice>
                {numberToCurrency(price*cartQty)}
            </CartPrice>
        </ItemBoxContainer>
    );
}