import { CartItemDescription, CartPageContainer, CartTitle, DeleteButton, ItemBox, ItemName, CartPrice, ItemQuantityBox, MaxQuantityDescription, TotalPrice, CheckOutButton, QuantityButton } from "./CartPageStyle";
import CartContext from "../../../contexts/cartContext";
import { useContext } from "react";
import { numberToCurrency } from "../../../utils/stringsUtils";
import { useNavigate } from "react-router";
import { getTotalPrice } from "./CartPageFucntions";

export default function CartPage() {
    const { cart, setCart } = useContext(CartContext);
    const navigate = useNavigate()
    console.log(getTotalPrice(cart))
    return (
        <CartPageContainer>
            <CartTitle>
                Meu Carrinho
            </CartTitle>
            {
                cart.map(({itemId, itemName, imageUrl, cartQty, maxQty, price }, index) => (
                    <ItemBox key={"CartItem"+index} >
                        <img alt={itemName} src={imageUrl} onClick = {() => navigate(`/items/${itemId}`)} />
                        <CartItemDescription>
                            <ItemName onClick = {() => navigate(`/items/${itemId}`)}>
                                {itemName}
                            </ItemName>
                            <ItemQuantityBox>
                                <QuantityButton isNotAllowed={ cartQty === 1 }> - </QuantityButton>
                                <span>{cartQty}</span>
                                <QuantityButton isNotAllowed={ cartQty === maxQty }> + </QuantityButton>
                            </ItemQuantityBox>
                            <MaxQuantityDescription>
                                ( Disponível: {maxQty} )
                            </MaxQuantityDescription>
                            <DeleteButton>
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
    );
}