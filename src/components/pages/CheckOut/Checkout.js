import { changeInputValue, forwardUserToLogin, submitCheckout } from "./CheckoutFunctions";

import { useContext, useState } from "react";
import { CheckoutContainer, CheckoutForm, CheckoutTitle, CheckoutTopBar, FinishPurchaseButton, FormTitle, GoBackToMyCart, Input, Inputs, Label } from "./CheckoutStyle";
import UserDataContext from "../../../contexts/userDataContext";
import CartContext from "../../../contexts/cartContext";
import { useNavigate } from "react-router";
import ItemBox from "../../shared/ItemBox/ItemBox";

export default function Checkout() {

    const { userData } = useContext(UserDataContext);
    const { cart } = useContext(CartContext);
    const navigate = useNavigate();
    const [inputValues, setInputValues] = useState({ name: "", cpf: "", adress: "", number: "", complement: "", city: "", state: "" });

    const inputs = [
        { label: "Nome*", type: "text", atribute: "name", size: "large" },
        { label: "CPF*", type: "number", atribute: "cpf", size: "large" },
        { label: "Endereço*", type: "text", atribute: "adress", size: "large" },
        { label: "Numero", type: "number", atribute: "number", size: "small" },
        { label: "Complemento", type: "text", atribute: "complement", size: "large" },
        { label: "Cidade*", type: "text", atribute: "city", size: "large" },
        { label: "UF*", type: "text", atribute: "state", size: "small" },
    ]

    if (!cart || !cart.length) {
        navigate("/")
    }

    if (!userData.token) {
        forwardUserToLogin(navigate)
    }

    return (
        <CheckoutContainer>
            <CheckoutTopBar>
                <CheckoutTitle>
                    Confira seu pedido!
                </CheckoutTitle>
                <GoBackToMyCart onClick = {() => navigate("/my-cart")}>
                    Voltar para o carrinho
                </GoBackToMyCart>
            </CheckoutTopBar>
            {
                cart.map(( item, index) => (
                    <ItemBox
                        key={`CheckoutItemBox` + index}
                        item={item}
                        isCheckout = {true}
                    />
                ))
            }
            <CheckoutForm onSubmit={ (e) => submitCheckout(e, inputValues)}>
                <FormTitle>
                    Insira seus dados de entrega
                </FormTitle>
                <Inputs>
                    {
                        inputs.map(({ label, type, atribute, size }, index) => (
                            <div>
                                <Label>
                                    {label}:
                                </Label>
                                <Input
                                    type={type}
                                    size={size}
                                    value={inputValues[atribute]}
                                    onChange={(e) => changeInputValue(e, inputValues, setInputValues, atribute) }
                                />
                           </div> 
                        ))
                    }
                </Inputs>
                <FinishPurchaseButton type = "submit">
                    Finalizar a compra
                </FinishPurchaseButton>
            </CheckoutForm>
        </CheckoutContainer>
    );
}