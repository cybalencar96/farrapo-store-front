import { useState } from "react"
import { useNavigate } from "react-router-dom"
import  {
    SignupContainer,
    SignUpForm
} from './SignupStyle'

import {
    sendErrorAlert,
    sendSuccessAlert
} from '../../../utils/SweetAlert'

import api from "../../../services/api"

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

    function changeInputs(e) {
        const inputPlaceholder = e.target.placeholder;
        const inputValue = e.target.value;

        if (inputPlaceholder === 'name') {
            setInputs({
                ...inputs,
                name: inputValue
            })
        }
        if (inputPlaceholder === 'email') {
            setInputs({
                ...inputs,
                email: inputValue
            })
        }
        if (inputPlaceholder === 'password') {
            setInputs({
                ...inputs,
                password: inputValue
            })
        }

        if (inputPlaceholder === 'confirm password') {
            setInputs({
                ...inputs,
                confirmPass: inputValue
            })
        }

        if (inputPlaceholder === 'birth date') {
            setInputs({
                ...inputs,
                birthDate: inputValue
            })
        }

        if (inputPlaceholder === 'phone number') {
            setInputs({
                ...inputs,
                phone: inputValue
            })
        }

        if (inputPlaceholder === 'image perfil url') {
            setInputs({
                ...inputs,
                imageUrl: inputValue
            })
        }

        if ((inputPlaceholder + ' ' + inputValue) === 'male on') {
            setInputs({
                ...inputs,
                gender: 'male'
            })
        }

        if ((inputPlaceholder + ' ' + inputValue) === 'female on') {
            setInputs({
                ...inputs,
                gender: 'female'
            })
        }

        if ((inputPlaceholder + ' ' + inputValue) === 'not_said on') {
            setInputs({
                ...inputs,
                gender: 'not_said'
            })
        }

        if (inputPlaceholder === 'CEP') {
            setInputs({
                ...inputs,
                zipCode: inputValue
            })
        }

        if (inputPlaceholder === 'Número') {
            setInputs({
                ...inputs,
                streetNumber: inputValue
            })
        }

        if (inputPlaceholder === 'Complemento') {
            setInputs({
                ...inputs,
                complement: inputValue
            })
        }
    }

    function signup(e) {
        e.preventDefault();

        if (inputs.password !== inputs.confirmPass) {
            sendErrorAlert("password and confirmation must match")
        }

        api.signup({
            name: inputs.name,
            email: inputs.email,
            password: inputs.password,
            genderName: inputs.gender,
            birthDate: new Date(inputs.birthDate).getTime(),
            zipCode: inputs.zipCode,
            streetNumber: inputs.streetNumber,
            complement: inputs.complement,
            phone: inputs.phone,
            imageUrl: inputs.imageUrl,
        })
        .then(res => {
            sendSuccessAlert()
            navigate('/signin')
        })
        .catch(err => {
            switch (err.response.status) {
                case 409: sendErrorAlert('Email already exists. Please signin or try another one')
                    break;
                case 400: sendErrorAlert(err.response.data)
                    break;
                default: sendErrorAlert('Something went wrong!')
                    break;
            }
        })
    }

    return (
        <SignupContainer>
            <h1>Sign up</h1>
            <SignUpForm onSubmit={e => signup(e)}>
                <div className='inputs'>
                    <input placeholder="name" className="tp1" required
                        onChange={e => changeInputs(e)} value={inputs.name}
                    />
                    <input placeholder="email" type="email" className="tp1"  required
                        onChange={e => changeInputs(e)} value={inputs.email}
                     />
                    <input placeholder="password" type="password" className="tp1" required
                        onChange={e => changeInputs(e)} value={inputs.password}
                    />
                    <input placeholder="confirm password" type="password" className="tp1" required
                        onChange={e => changeInputs(e)} value={inputs.confirmPass}
                    />

                    <input placeholder="phone number" type="number" className="tp1" 
                        onChange={e => changeInputs(e)} value={inputs.phone}
                    />

                    <input placeholder="image perfil url" type="url" className="tp1" 
                        onChange={e => changeInputs(e)} value={inputs.complement}
                    />

                    <div>
                        <label for="birth" id="birth-label">Data de nascimento:</label><br />
                        <input label="birth" placeholder="birth date" type="date" required
                            onChange={e => changeInputs(e)} value={inputs.birthDate}
                        />
                    </div>

                    <div>
                        <label>Gênero</label><br />
                        <div className="gender-radios">
                            <input type="radio" placeholder="male" name="gender" required
                                onChange={e => changeInputs(e)} 
                            />
                            <label for="male">Masculino</label>

                            <input type="radio" placeholder="female" name="gender" 
                                onChange={e => changeInputs(e)}
                            />
                            <label for="female">Feminino</label>

                            <input type="radio" placeholder="not_said" name="gender" 
                                onChange={e => changeInputs(e)}
                            />
                            <label for="not_said">Prefiro nao dizer</label>
                        </div>
                    </div>

                    <input placeholder="CEP" className="tp1" required
                        onChange={e => changeInputs(e)} value={inputs.zipCode}
                    />
                    <input placeholder="Número" type="number" className="tp1" required
                        onChange={e => changeInputs(e)} value={inputs.streetNumber}
                    />
                    <input placeholder="Complemento" type="text" className="tp1" 
                        onChange={e => changeInputs(e)} value={inputs.complement}
                    />
                </div>

                <button type="submit">Cadastrar</button>
            </SignUpForm>
            
        </SignupContainer>
    )
}