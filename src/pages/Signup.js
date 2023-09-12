import React from "react";
import signupImg from "../assets/signup.png";
import Template from "../components/Template";

const Signup = ({setIsLoggedIn}) => {
    return (
        <Template 
            title="Join the millions learning to code with studynotion"
            desc1="Build skills for today,tomorrow and beyond"
            desc2= "Educate yourself to future-proof your career"
            image={signupImg}
            formtype="signup"
            setIsLoggedIn={setIsLoggedIn}

        
        />
    )
}

export default Signup;