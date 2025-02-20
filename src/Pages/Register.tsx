import { useState } from "react"
import { useNavigate } from "react-router"

const Register = () => {
    const navigate = useNavigate()
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [age, setAge] = useState(0)
    const [error, setError] = useState("")

    const handleAgeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let value = Number(e.target.value);
        if (value < 0) value = 0; 
        if (value > 100) value = 100;
        setAge(value);
    };
    const handleSubmit = () => {
        if (name === "" || email === "" || password === "" || age === 0) {
            setError("Please fill all the fields")
            return
        }
        if (!email.includes('@')) {
            setError("Email is not valid")
            return
        }
        if (password.length < 8) {
            setError("Password must be atleast 8 characters")
            return
        }
        if (age < 18 || age > 100) {
            setError("Age must be between 18 and 100")
            return
        }

        setError("")
        alert("Registered sucessfully")
        navigate("/login")

    }
    const handleNavigate = () => {
        navigate("/")
    }
    return (
        <div style={{
            margin: "auto",
            width: "70px",
            maxWidth: "200px",
            display: "flex",
            flexDirection: "column",
            gap: "10px"
        }}>
            <h1>Register</h1>
            {error && <p style={{ color: "red", width: "150px" }}>{error}</p>}
            <label htmlFor="name">
                Name :
                <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </label>
            <label htmlFor="email">
                Email :
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </label>
            <label htmlFor="password">
                Password :
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </label>
            <label htmlFor="age">
                Age :
                <input
                    style={{ width: "170px" }}
                    type="number"
                    id="age"
                    value={age}
                    onChange={handleAgeChange}
                />
            </label>
            <button onClick={handleSubmit}>Resgiter</button>
            <button style={{ width: "" }} onClick={handleNavigate}>Home</button>
        </div>

    )
}
export default Register