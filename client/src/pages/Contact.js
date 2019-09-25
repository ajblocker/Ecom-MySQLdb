import React from 'react';
import Forms from '../Components/Forms';

class Contact extends React.Component {
    render() {
        return (
            <div>
                <div className="contactHeader">
                <h2>Contact us</h2>
                <p>Need to get in touch? Fill in the form below for more information</p>
                </div>
                    <div className="forms">
                        <Forms />
                     </div>
            </div>
        );
        }
    }
    export default Contact;