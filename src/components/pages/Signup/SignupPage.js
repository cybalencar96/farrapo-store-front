import { useState } from "react"
import { useNavigate } from "react-router-dom"
import  {
    SignupContainer,
    SignUpForm
} from './SignupStyle'

import {
    changeInputs,
    signup,
} from './SignupPageFunctions'


export default function SignupPage() {
    const navigate = useNavigate();

    const  [inputs, setInputs] = useState({
        name: '',
        email: '',
        password: '',
        confirmPass: '',
        gender: '',
        birthDate: '',
        zipCode: '',
        streetNumber: '',
        complement: '',
        phone: '',
        imageUrl: '',
    })

    return (
        <SignupContainer>
            <h1>Sign up</h1>
            <SignUpForm onSubmit={e => signup(e, inputs, navigate)}>
                <div className='inputs'>
                    <input placeholder="name" className="tp1" required
                        onChange={e => changeInputs(e, inputs, setInputs)} value={inputs.name}
                    />
                    <input placeholder="email" type="email" className="tp1"  required
                        onChange={e => changeInputs(e, inputs, setInputs)} value={inputs.email}
                     />
                    <input placeholder="password" type="password" className="tp1" required 
                        onChange={e => changeInputs(e, inputs, setInputs)} value={inputs.password}
                    />
                    <input placeholder="confirm password" type="password" className="tp1" required
                        onChange={e => changeInputs(e, inputs, setInputs)} value={inputs.confirmPass}
                    />

                    <input placeholder="phone number" type="number" className="tp1" 
                        onChange={e => changeInputs(e, inputs, setInputs)} value={inputs.phone}
                    />

                    <input placeholder="image perfil url" type="url" className="tp1" 
                        onChange={e => changeInputs(e, inputs, setInputs)} value={inputs.complement}
                    />

                    <div>
                        <label for="birth" id="birth-label">Data de nascimento:</label><br />
                        <input label="birth" className='birth' placeholder="birth date" type="date" required
                            onChange={e => changeInputs(e, inputs, setInputs)} value={inputs.birthDate}
                        />
                    </div>

                    <div className='genders-container'>
                        <label >Gênero</label><br />
                        <div className="gender-radios">
                            <input type="radio"  className='radio' placeholder="male" name="gender" required
                                onChange={e => changeInputs(e, inputs, setInputs)} 
                            />
                            <label for="male">Masculino</label>

                            <input type="radio" className='radio' placeholder="female" name="gender" 
                                onChange={e => changeInputs(e, inputs, setInputs)}
                            />
                            <label for="female">Feminino</label>

                            <input type="radio" className='radio' placeholder="not_said" name="gender" 
                                onChange={e => changeInputs(e, inputs, setInputs)}
                            />
                            <label for="not_said">Prefiro nao dizer</label>
                        </div>
                    </div>

                    <input placeholder="CEP" className="tp1" required
                        onChange={e => changeInputs(e, inputs, setInputs)} value={inputs.zipCode}
                    />
                    <input placeholder="Número" type="number" className="tp1" required
                        onChange={e => changeInputs(e, inputs, setInputs)} value={inputs.streetNumber}
                    />
                    <input placeholder="Complemento" type="text" className="tp1" 
                        onChange={e => changeInputs(e, inputs, setInputs)} value={inputs.complement}
                    />
                </div>

                <button type="submit">Cadastrar</button>
            </SignUpForm>
            
        </SignupContainer>
    )
}