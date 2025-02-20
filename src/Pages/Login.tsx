import { useForm } from "react-hook-form"
import {z} from 'zod'
import { zodResolver } from "@hookform/resolvers/zod"

const dataUSers = [
    { id: 1, name: "Aldo", email: "aldowiranata16@gmail.com", password: "12345678", age:19 },
    { id: 2, name: "Mifta", email: "mifta@gmail.com", password: "12345678", age : 18 }
]

const validationSchema = z.object({
    name : z.string().nonempty(),
    email : z.string().email().nonempty(),
    password : z.string().min(8).nonempty(),
    age: z.number().min(18, { message: "Age must be at least 18" }).max(100, { message: "Age must be at most 100" }),
    
})

type Formdata = z.infer<typeof validationSchema>

const Login = () => {
    const form = useForm<Formdata>({
        resolver : zodResolver(validationSchema)
    })

    const handleLogin = (data : Formdata) =>{

        const user = dataUSers.find((user)=> 
            user.email === data.email &&
            user.password === data.password &&
            user.name === data.name &&
            user.age === data.age
        )

        if(user){
            alert("Login Success")
            return
        }else{
            alert("Login Failed")
        }

    }

    return (
        <div
         onSubmit={form.handleSubmit(handleLogin)}
         className="login-container"
        >
            <h1>Login</h1>
            <form action="">
                <label>
                    Name :
                    <input type="text" {...form.register("name")} />
                </label>
                <span style={{color :"red"}}>{form.formState.errors.name?.message}</span>

                <label>
                    Email
                    <input type="email" {...form.register("email")} />
                </label>
                <span style={{color :"red"}}>{form.formState.errors.email?.message}</span>

                <label >
                    Password :
                    <input type="password" {...form.register("password")} />
                </label>
                <span style={{color : "red"}}>{form.formState.errors.password?.message}</span>

                <label >
                    Age :
                    <input type="number" {...form.register("age", { valueAsNumber: true })} />
                </label>
                <span style={{color : "red"}}>{form.formState.errors.age?.message}</span>

                <button>Login</button>
            </form>

        </div>
    )
}

export default Login 