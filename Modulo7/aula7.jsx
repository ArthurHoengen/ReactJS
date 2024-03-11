import React, {useState} from "react";

export default function EditProfile() {
    const [profile, setProfile] = useState({});

    const handleChange = ({target}) => {
        const {name, value} = target;
        setProfile((prevProfile) => {return{...prevProfile, [name]:value};});
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(JSON.stringify(profile, '', 2));
    };

    return (
        <form>
            <input value = {profile.firstName || ''} name="firstName" type="text" placeholder="First Name" onChange={handleChange}/>
            <input value = {profile.lastName || ''} name="lastName" type="text" placeholder="Last Name" onChange={handleChange}/>
            <input value = {profile.bday || ''} type="date" name="bday" onChange={handleChange}/>
            <input value = {profile.password || ''} type="password" name="password" placeholder="Password" onChange={handleChange}/>
            <button type="submit" onClick={handleSubmit}>Submit</button>
        </form>
    );
}