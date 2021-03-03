import React from 'react';
import { Form, Button} from 'react-bootstrap';
import ReCAPTCHA from 'react-google-recaptcha'
import './contactform.scss';
const RECAPTCHA_KEY = '6LeDUXAaAAAAAONuhrtz7jGttcnYQ69yDe0h2aUf';
export default () => {
  return(
    <>
    <div className="contact__form">
      <Form 
        name="contact" 
        method="POST" 
        data-netlify="true"
        data-netlify-recaptcha="true"
        netlify-honeypot="bot-field"
      >

        <input type="hidden" name="form-name" value="contact"/>
        <p hidden>
          <label>Don’t fill this out if you’re human: <input name="bot-field" /></label>
        </p>
        <Form.Group>
          <Form.Control type="text" placeholder="Enter First Name*" name="first-name"/>
        </Form.Group>
        <Form.Group>
          <Form.Control type="text" placeholder="Enter Last Name*" name="last-name"/>
        </Form.Group>
        <Form.Group>
          <Form.Control as="select" name="services[]">
            <option >How can we help you?</option>
            <option value="drupal support">Drupal Support</option>
            <option value="Drupal Development">Drupal Development</option>
            <option value="Drupal Training">Drupal Training</option>
            <option value="Drupal Design">Drupal Design</option>
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group>
          <Form.Control type="text" placeholder="Enter Company Name" />
        </Form.Group>
        <Form.Group controlId="textarea">
          <Form.Label>Add a comment</Form.Label>
          <Form.Control as="textarea" rows={3} name="text-area"/>
        </Form.Group>
       <ReCAPTCHA sitekey={RECAPTCHA_KEY} />
        <Button variant="primary" type="submit">
          Submit
        </Button>
    </Form>
   </div>
    </>
  )
}