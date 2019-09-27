import React from 'react';
import Forms from '../Components/Forms';

class Contact extends React.Component {
   
        state = {
          contacts: []
        }
    
    componentDidMount() {
        //make GET request to endpoint
      fetch('/api/contacts')
      //parses the output to JSON
      .then(res => res.json())
      //sets the value of state to the output from the API call
      .then((data) => {
        this.setState({ contacts: data })
      })
      //logs any error
      .catch(console.log)
    }
    render() {
        const { contacts } = this.state;
        let filteredContacts = contacts;

                
        return (
            <div>
                <div className="contactHeader">
                <h2>Contact us</h2>
                <p>Need to get in touch? Fill in the form below for more information</p>
                </div>
                    <div className="forms">
                        <Forms />
                        {filteredContacts.map(contacts => (
                           <div className="contacts">
                                <p className="contact-name">{contacts.contact_name}:</p>
                                <p className="contact-message">{contacts.contact_message}</p>
                            </div>
                        ))}
                    </div>
            </div>
        );
        }
    }

    
// const Contacts = ({ contacts }) => {
//     return (
//         {contacts.map((contact) => (
//     <div>
//         <div className="contactHeader">
//         <h2>Contact us</h2>
//         <p>Need to get in touch? Fill in the form below for more information</p>
//         </div>
//             <div className="forms">
//                 <Forms />
//              </div>
//     </div>
//         ))}  
//     );
// }
    export default Contact;