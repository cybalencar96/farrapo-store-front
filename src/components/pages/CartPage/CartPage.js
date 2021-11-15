import { CartPageContainer, CartTitle, TotalPrice, CheckOutButton, EmptyCartMessage, CartTopBar, EmptyMyCart } from "./CartPageStyle";
import CartContext from "../../../contexts/cartContext";
import { useContext, useState } from "react";
import ItemBox from "../../shared/ItemBox/ItemBox";
import { useNavigate } from "react-router";
import { getTotalPrice, EmptyCart } from "./CartPageFunctions";
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
                        cart.map(( item, index) => (
                            <ItemBox
                                key={`CartItemBox` + index}
                                item = {item}
                                isLoading = {isLoading}
                                setIsLoading = {setIsLoading}
                            />
                        ))
                    }
                    <TotalPrice>
                        Total: {getTotalPrice(cart)}
                    </TotalPrice>
                    <CheckOutButton onClick = {() => navigate("/checkout")}>
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