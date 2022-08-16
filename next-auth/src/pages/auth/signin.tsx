import { useDispatch, useSelector } from 'react-redux'
import LoginForm from '../../components/auth/LoginForm'
import Layout from '../../hocs/Layout'

const SignIn = () => {
    const dispatch = useDispatch()
    // const access = useSelector((state) => .access)

    return (
        <Layout>
            <div>
                <LoginForm />
            </div>
            
        </Layout>
    )
}

export default SignIn