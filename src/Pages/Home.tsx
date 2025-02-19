import { useNavigate } from "react-router-dom"
const Home = () => {

    const navigate = useNavigate()
    const handleClick = () =>{
        navigate('/register')
    }
    return (
        <>
           <h1>Home Page</h1> 
           <button id="Sign UP"onClick={handleClick}>Registrasi</button>
        </>
    )
}
export default Home