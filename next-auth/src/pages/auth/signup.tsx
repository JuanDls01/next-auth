import { useState, useEffect } from "react"
import style from '../../styles/forms.module.css'
import { Link } from 'react-router-dom'
import { BiArrowBack } from 'react-icons/bi';
import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import { signup } from '../../redux/actions/auth';
import validator from "../../helpers/inputSignupValidator";

const SignUp = () => {
    const dispatch = useAppDispatch()
    
    useEffect(() => {
        window.scrollTo(0,0)
    }, [])
    
    const [input, setInput] = useState({
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        re_password: '',
    })

    const [inputErrors, setInputErrors] = useState({})

    const inputHandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const result = validator({...input, [e.target.name]: e.target.value});
        setInputErrors(result);
        setInput({...input, [e.target.name]: e.target.value})
    }

    const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(signup(input))
    }

    return (
        <div className={style.formContainner}>
            <h1 className={style.titleForm}>Complete the form to create an account...</h1>
            <form className={style.formContent} onSubmit={(e) => onSubmitHandler(e)}>

                {/* firstName */}
                <div>
                    <label className="block text-sm font-medium text-gray-700">First Name</label>
                    <input 
                        type="text" 
                        name="first_name" 
                        id="first_name" 
                        className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md" 
                        placeholder="First Name"
                        value={input.first_name}
                        onChange={inputHandleChange}
                    />
                </div>
            </form>
        </div>
    )
}

export default SignUp