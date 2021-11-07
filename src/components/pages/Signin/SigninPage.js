import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    SigninContainer,
    SigninForm,
} from './SigninStyle.js'
import {
    changeInputs,
    signin
} from './SigninFunction'

export default function SigninPage() {
    const navigate = useNavigate();

    const  [inputs, setInputs] = useState({
        email: '',
        password: '',
    })


    return (
        <SigninContainer>
            <h1>Sign in</h1>
            <SigninForm onSubmit={(e) => signin(e, inputs, navigate)}>
                <div className='inputs'>
                    <input placeholder="email" type="email" className="tp1"  required
                        onChange={e => changeInputs(e, inputs, setInputs)} value={inputs.email}
                     />
                    <input placeholder="password" type="password" className="tp1" required 
                        onChange={e => changeInputs(e, inputs, setInputs)} value={inputs.password}
                    />
                </div>
                <button type="submit">Entrar</button>
            </SigninForm>
        </SigninContainer>
    )
}