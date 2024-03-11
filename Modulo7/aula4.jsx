import React, {useState} from 'react';

// regex to match numbers between 1 and 10 digits long
const validPhoneNumber = /^\d{1,10}$/;

export default function PhoneNumber() {
    const handleChange = ({target}) => {
        const [phone, setPhone] = useState("");
        const newPhone = target.value;
        const isValid = validPhoneNumber.test(newPhone);
        if(isValid) {
            setPhone(newPhone);
        }
        return (
            <div className='phone'>
                <label for= 'phone-input'>Phone:</label>
                <input id='phone-input' value={phone} onChange={handleChange}/>
            </div>
        );
    }
}