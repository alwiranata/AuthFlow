import { useNavigate } from "react-router"

const Register = () => {
    const navigate = useNavigate()
    const handleNavigate = () => {
        navigate("/")
    }
    return (
        <>
            <h1>Register</h1>
            <button onClick={handleNavigate }>Home</button>
        </>

    )
}
export default Register