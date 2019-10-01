import React from 'react';
import Forms from '../Components/Forms';

class Contact extends React.Component {
   
        state = {
          contacts: [],
          error: false
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
      .catch(err => {
        console.log(err)
        this.setState({ err })
      })
      
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
                        {/* {filteredContacts.map(contacts => (
                           <div className="col-4">
                                <p className="contact-name">{contacts.contact_name}:</p>
                                <p className="contact-message">{contacts.contact_message}</p>
                            </div>
                        ))} */}
                    </div>
                    <div className="row contacts">
                        {filteredContacts.map(contacts => (
                            <div className="col-4">
                                    <p className="contact-name">{contacts.contact_name}:</p>
                                    <p className="contact-message">{contacts.contact_message}</p>
                                </div>
                            ))}
                    </div>
            </div>
        );
        }
    }

    export default Contact;