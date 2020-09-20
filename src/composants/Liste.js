import React, { Component } from 'react'
import Contact from './contact/Contact'
import { Consumer } from '../Context'

export default class Liste extends Component {
  // AJOUTER DANS CONTEXT.JS
  // supprime = (id) => {
  //     const nvContacts = this.state.contacts.filter(contact =>
  //       contact.id !== id)

  //       this.setState({
  //         contacts : nvContacts
  //       })
  //   }

  render () {
    return (
      <Consumer>
        {value => {
          return (
            <>
              <h1 className='display-4 my-4'>Nos contacts : </h1>
              {value.contacts.map(contact =>
                <Contact
                  key={contact.id}
                  id={contact.id}
                  nom={contact.nom}
                  email={contact.email}
                  tel={contact.tel}
                  // supprimeClick={() => this.supprime(contact.id)}
                />
              )}
            </>
          )
        }}
      </Consumer>
    )
  }
}
