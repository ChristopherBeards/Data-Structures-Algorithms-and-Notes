import React, { Component } from 'react';
import Contact from './Contact';

class Contacts extends Component {
  constructor() {
    super();
    this.state = {
      contacts: [
        {
          id: 1,
          name: 'Lambda School',
          phone: '444-444-4444',
          email: 'something@somewhere.com',
        },
        {
          id: 2,
          name: 'Patrick',
          phone: '555-555-5555',
          email: 'pbot@labs.com',
        },
        {
          id: 3,
          name: 'Sean',
          phone: '666-666-6666',
          email: 'sean@chen.com',
        },
        {
          id: 4,
          name: 'BEEJ',
          phone: '777-777-7777',
          email: 'Bee@j.com',
        },
        {
          id: 1,
          name: 'Debt Collector',
          phone: '888-888-8888',
          email: 'everywhere@rightnow.com',
        },
      ],
    };
  }

  render() {
    const { contacts } = this.state;
    return (
      <div>
        {contacts.map(contact => (
          <Contact key={contact.id} contact={contact} />
        ))}
      </div>
    );
  }
}

export default Contacts;
