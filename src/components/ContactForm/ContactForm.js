import React, { Component } from 'react';
import shortid from 'shortid';
import s from '../ContactForm/ContactForm.module.css'

class ContactForm extends Component {
  inputNameId = shortid.generate();
  inputNumberId = shortid.generate();
  state = {
    name: '',
    number: '',
  };
  handleChange = event => {
    const { name, value } = event.currentTarget;
    // [name] - вычисляемые свойства объекта, паттерн
    this.setState({ [name]: value });
  };
  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;
    return (
      <form className={s.form} onSubmit={this.handleSubmit}>
        <label className={s.label} htmlFor={this.inputNameId}>
          Name
          <input className={s.input}
            type="text"
            name="name"
            value={name}
            onChange={this.handleChange}
            id={this.inputNameId}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label className={s.label} htmlFor={this.inputNumberId}>
          Number
          <input className={s.input}
            type="tel"
            name="number"
            value={number}
            onChange={this.handleChange}
            id={this.inputNumberId}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <button className={s.button} type="submit">Add contact</button>
      </form>
    );
  }
}

export default ContactForm;
