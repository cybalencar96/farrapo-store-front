import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    SigninContainer,
    SigninForm,
} from './SigninStyle.js'
import {
    changeInputs,
    signin
} from './SigninFunction'
import { ButtonLoading } from '../../shared/Loadings.js';
import UnderButtonMessage from '../../shared/UnderButtonMessage.js';
import UserDataContext from '../../../contexts/userDataContext.js';

export default function SigninPage() {
    const navigate = useNavigate();
    const { userData, setUserData } = useContext(UserDataContext);
    const [buttonLoading, setButtonLoading] = useState(false);
    const  [inputs, setInputs] = useState({
        email: '',
        password: '',
    })


    return (
        <SigninContainer>
            <h1>Sign in</h1>
            <SigninForm onSubmit={(e) => signin(e, inputs, navigate, setButtonLoading, setUserData, userData)}>
                <div className='inputs'>
                    <input placeholder="email" type="email" className="tp1"  required
                        onChange={e => changeInputs(e, inputs, setInputs)} value={inputs.email}
                     />
                    <input placeholder="password" type="password" className="tp1" required 
                        onChange={e => changeInputs(e, inputs, setInputs)} value={inputs.password}
                    />
                </div>
                <button type="submit">{buttonLoading ? <ButtonLoading /> : 'Entrar'}</button>
            </SigninForm>
            <UnderButtonMessage disabled = {buttonLoading} onClick = { () => navigate("/signup")}>
                Ainda não possui uma conta? Cadastre-se!
            </UnderButtonMessage>
        </SigninContainer>
    )
}