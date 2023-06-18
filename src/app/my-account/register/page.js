import Register from "@/Components/register/Register"
import SignIn from "@/Components/signin/SignIn"

export const metadata = {
  
  title: `New User Registration`,
  description: 'This is an E-commerce website',
}

const RegisterPage = () => {

  return (

   <main>
    <Register/>
   </main>
  )
}

export default RegisterPage