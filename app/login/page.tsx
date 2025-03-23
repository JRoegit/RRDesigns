import { SignInForm } from "../components/signin-form";

export default function LoginPage(){
    return (
        <div className="flex flex-col items-center object-center h-screen mx-auto w-1/2">
            <SignInForm/>
        </div>
    )
}