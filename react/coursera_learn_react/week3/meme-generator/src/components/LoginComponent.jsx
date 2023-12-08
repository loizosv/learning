import React from "react";

function LoginComponent(){

    const [formData, setFormData] = React.useState({
        email: "",
        password: "",
        passwordConfirm: true,
        agreeTermsAndConditions: true
    })
    
    function handleChange(event){

        const {name, value, type, checked} = event.target

        setFormData(prevFormData => {
            return{
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }

    function handleSubmit(event){
        event.preventDefault();
        let passwordMatch = false;

        console.log("======================");
        console.log("email = " + formData.email);
        console.log("password = " + formData.password);
        console.log("passwordConfirm = " + formData.passwordConfirm);
        console.log("agreeTermsAndConditions = " + formData.agreeTermsAndConditions);
        console.log("======================");

        if(formData.password === formData.passwordConfirm){
            passwordMatch = true;
            console.log("Login was successful");

            if(formData.agreeTermsAndConditions === true){
                console.log("Thanks for accepting our Terms & Conditions");
            }

        }else{
            passwordMatch = false;
            console.error("Pasword doesn't match");
        }

    }


    return(
        <div className="form-container">
            <form className="form" onSubmit={handleSubmit}>
                <input 
                    type="email" placeholder="Email address" className="form--input"
                    name="email" onChange={handleChange}
                />
                <input 
                    type="password" placeholder="Password" className="form--input"
                    name="password" onChange={handleChange}
                />
                <input 
                    type="password"  placeholder="Confirm password" className="form--input"
                    name="passwordConfirm" onChange={handleChange}
                />
                
                <div className="form--marketing">
                    <input
                        id="okayToEmail" type="checkbox"
                        name="agreeTermsAndConditions" onChange={handleChange}
                    />
                    <label htmlFor="okayToEmail">I agree to the <a>Terms & Conditions</a>!</label>
                </div>
                <button className="form--submit">Sign up</button>
            </form>
        </div>
    )
}

export default LoginComponent