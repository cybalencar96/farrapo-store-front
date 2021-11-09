import { useState } from "react"
import { useNavigate } from "react-router-dom"
import  {
    SignupContainer,
    SignUpForm
} from './SignupStyle'

import {
    signup,
} from './SignupPageFunctions'
import { ButtonLoading } from '../../shared/Loadings.js';
import UnderButtonMessage from "../../shared/UnderButtonMessage";


export default function SignupPage() {
    const navigate = useNavigate();
    const [buttonLoading, setButtonLoading] = useState(false);
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

    function changeInput(e, input) {
        const inputPlaceholder = e.target.placeholder;
        const inputValue = e.target.value;
    
        Object.keys(inputs).forEach(function(attribute){
                if (attribute !== 'gender' && attribute === input) {
                    inputs[attribute] = inputValue
                }
    
                if (input === 'gender' && attribute === 'gender') {
                    inputs[attribute] = inputPlaceholder
                }
    
                setInputs({...inputs})
        });
    }

    return (
        <SignupContainer>
            <h1>Sign up</h1>
            <SignUpForm onSubmit={e => signup(e, inputs, navigate, setButtonLoading)}>
                <div className='inputs'>
                    <input placeholder="name" className="tp1" required
                        onChange={e => changeInput(e, 'name')} value={inputs.name}
                    />
                    <input placeholder="email" type="email" className="tp1"  required
                        onChange={e => changeInput(e, 'email')} value={inputs.email}
                     />
                    <input placeholder="password" type="password" className="tp1" required 
                        onChange={e => changeInput(e, 'password')} value={inputs.password}
                    />
                    <input placeholder="confirm password" type="password" className="tp1" required
                        onChange={e => changeInput(e, 'confirmPass')} value={inputs.confirmPass}
                    />

                    <input placeholder="phone number" type="number" className="tp1" 
                        onChange={e => changeInput(e, 'phone')} value={inputs.phone}
                    />

                    <input placeholder="image perfil url" type="url" className="tp1" 
                        onChange={e => changeInput(e, 'imageUrl')} value={inputs.imageUrl}
                    />

                    <div>
                        <label for="birth" id="birth-label">Data de nascimento:</label><br />
                        <input label="birth" className='birth' placeholder="birth date" type="date" required
                            onChange={e => changeInput(e, 'birthDate')} value={inputs.birthDate}
                        />
                    </div>

                    <div className='genders-container'>
                        <label >Gênero</label><br />
                        <div className="gender-radios">
                            <input type="radio"  className='radio' placeholder="male" name="gender" required
                                onChange={e => changeInput(e, 'gender')} 
                            />
                            <label for="male">Masculino</label>

                            <input type="radio" className='radio' placeholder="female" name="gender" 
                                onChange={e => changeInput(e, "gender")}
                            />
                            <label for="female">Feminino</label>

                            <input type="radio" className='radio' placeholder="not_said" name="gender" 
                                onChange={e => changeInput(e, "gender")}
                            />
                            <label for="not_said">Prefiro nao dizer</label>
                        </div>
                    </div>

                    <input placeholder="CEP" className="tp1" required
                        onChange={e => changeInput(e, 'zipCode')} value={inputs.zipCode}
                    />
                    <input placeholder="Número" type="number" className="tp1" required
                        onChange={e => changeInput(e, 'streetNumber')} value={inputs.streetNumber}
                    />
                    <input placeholder="Complemento" type="text" className="tp1" 
                        onChange={e => changeInput(e, 'complement')} value={inputs.complement}
                    />
                </div>

                <button type="submit">{buttonLoading ? <ButtonLoading /> : 'Cadastrar'}</button>
            </SignUpForm>
            <UnderButtonMessage disabled = {buttonLoading} onClick = { () => navigate("/signin")}>
                Já possui uma conta? Faça seu login!
            </UnderButtonMessage>
            
        </SignupContainer>
    )
}