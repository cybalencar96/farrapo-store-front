import { CheckoutContainer, CheckoutTopBar, CheckoutTitle, GoBackToMyCart, TotalPrice } from "./SuccessStyle";
import { useNavigate, useParams } from "react-router";
import {useContext, useEffect, useState } from "react";
import ItemBox from "../../shared/ItemBox/ItemBox";
import { getTotalPrice } from "../CartPage/CartPageFunctions";
import api from "../../../services/api";
import { LoadingHomePage } from "../../shared/Loadings";
import { updateCart } from "../../../utils/localStorage";
import CartContext from "../../../contexts/cartContext";


export default function SuccessPage() {
    const purchaseToken = useParams().purchaseToken;
    const { setCart } = useContext(CartContext);
    const [purchasedItems, setPurchasedItems] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        api.getPurchaseByPurchaseToken(purchaseToken)
            .then(res => {
                if (!res.data.length) {
                    return navigate("/");
                }
                setCart([]);
                updateCart([]);
                setPurchasedItems(res.data);
            })
    }, [])
    
    if (!purchasedItems || !purchasedItems.length) {
        return (
            <CheckoutContainer>
                <LoadingHomePage />
            </CheckoutContainer>
        );
    }

    return (
        <CheckoutContainer>
            <CheckoutTopBar>
                <CheckoutTitle>
                    Parabéns, seu pedido foi realizado com sucesso! :D
                </CheckoutTitle>
                <GoBackToMyCart onClick = {() => navigate("/")}>
                    Voltar para homepage
                </GoBackToMyCart>
            </CheckoutTopBar>
            {
                purchasedItems.map(( item, index) => (
                    <ItemBox
                        key={`CheckoutItemBox` + index}
                        item={{
                            itemName: item.name,
                            imageUrl: item.image,
                            itemId: item.id,
                            cartQty: item.quantity,
                            price: item.price,
                            size: item.sizeName,
                        }}
                        isCheckout = {true}
                    />
                ))
            }
            <TotalPrice>
                Total: {getTotalPrice(purchasedItems)}
            </TotalPrice>
        </CheckoutContainer>
    );
}