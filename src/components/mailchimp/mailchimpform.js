import React from 'react';
import PropTypes from 'prop-types'
import sanitize from 'sanitize-html'
import './mailchimp.scss';
import addToMailchimp from 'gatsby-plugin-mailchimp';

class MailchimpForm extends React.Component {
  state = {
    email: '',
    result: '',
    showResult: false,
  }

  handleInputChange = e => {
    const target = e.target
    const value = target.value
    const name = target.name

    this.setState({
      [name]: value,
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    addToMailchimp(this.state.email, {}, this.props.formUrl)
      .then(data => {
        this.setState({
          result: data.result + '. ' + sanitize(data.msg),
          showResult: true,
        })
        setTimeout(() => {
          this.setState({
            result: '',
            showResult: false
          })
        }, 10000);
      })
      .catch(() => {
        this.setState({
          result: 'There was an unknown error. Try again later.',
          showResult: true,
        })
        setTimeout(() => {
          this.setState({
            result: '',
            showResult: false
          })
        }, 10000);
      })
  }

  render() {
   
    return (
      <form onSubmit={this.handleSubmit} className="form-mailchimp">
        <div className="form-element">
          <input
            className="email"
            type="email"
            name="email"
            value={this.state.email}
            onChange={this.handleInputChange}
            placeholder="Enter Email to Join Our Newsletters"
          />
        </div>
        <button type="submit" className="button">Subscribe</button>
        <div className={`result ${this.state.showResult ? "show" : ""}`}>
          <SanitizeHTML html={this.state.result} />
        </div>
        
      </form>
    )
  }
}

const SanitizeHTML = ({ html, options }) => (
  <div dangerouslySetInnerHTML={{__html: sanitize(html, options)}} />
);


MailchimpForm.propTypes = {
  formUrl: PropTypes.string,
}

export default MailchimpForm
