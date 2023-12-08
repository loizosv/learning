import React from "react";

export default function FormComponent(){
    const [formData, setFormData] = React.useState({
        firstName: "",
        lastName: "",
        email: "",
        comments: "",
        isFriendly: true,
        empoloyment: "",
        favColor: ""
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
        console.log("======================");
        console.log("firstName = " + formData.firstName);
        console.log("lastName = " + formData.lastName);
        console.log("email = " + formData.email);
        console.log("comments = " + formData.comments);
        console.log("isFriendly = " + formData.isFriendly);
        console.log("employment = " + formData.employment);
        console.log("favColor = " + formData.favColor);
        console.log("======================");
    }

    return(
        <form className="form-parent" onSubmit={handleSubmit}>
            <input 
                type="text" placeholder="First Name" name="firstName" 
                onChange={handleChange} value={formData.firstName}
            />
            <input 
                type="text" placeholder="Last Name" name="lastName" 
                onChange={handleChange} value={formData.lastName}
            />
            <input 
                type="email" placeholder="Email" name="email" 
                onChange={handleChange} value={formData.email}
            />
            <textarea 
                placeholder="Comments" name="comments" 
                onChange={handleChange} value={formData.comments}
            />

            <br />
            <input 
                type="checkbox"  id="isFriendly"  name="isFriendly"
                onChange={handleChange} checked={formData.isFriendly}
            />
            
            <label htmlFor="isFriendly" className="specialLabel">Are you friendly?</label>
            <br />
            <br />
            <fieldset>
                <legend>Current employment status</legend>
                
                <input 
                    type="radio" id="unemployed" name="employment"
                    onChange={handleChange} value="unemployed"
                    checked={formData.employment === "unemployed"}
                />
                <label htmlFor="unemployed">Unemployed</label>
                <br />
                
                <input 
                    type="radio" id="part-time" name="employment"
                    onChange={handleChange}  value="part-time"
                    checked={formData.employment === "part-time"}
                />
                <label htmlFor="part-time">Part-time</label>
                <br />
                
                <input 
                    type="radio" id="full-time" name="employment"
                    onChange={handleChange} value="full-time"
                    checked={formData.employment === "full-time"}
                />
                <label htmlFor="full-time">Full-time</label>
                <br />
                
            </fieldset>
            <br />
            <br />
            <label htmlFor="favColor" className="specialLabel">What is your favorite color?</label>
            <br />
            <br />
            <select 
                id="favColor" name="favColor"
                onChange={handleChange} value={formData.favColor}
            >
                <option value="">-- Choose Color --</option>
                <option value="red">Red</option>
                <option value="orange">Orange</option>
                <option value="yellow">Yellow</option>
                <option value="green">Green</option>
                <option value="blue">Blue</option>
                <option value="indigo">Indigo</option>
                <option value="violet">Violet</option>
            </select>
            <br />
            <br />
            <button>Submit</button>
        </form>
    )
}