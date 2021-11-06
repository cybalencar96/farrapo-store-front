import {
    SignupContainer
} from './SignupStyle'
import { Outlet } from 'react-router-dom'

export default function SignupPage() {
    return (
        <SignupContainer>
            Signup Page

            <Outlet />
        </SignupContainer>
    )
}