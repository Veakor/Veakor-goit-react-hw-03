

import { Formik, Form, Field } from 'formik';

const ContactForm = ({ addContact }) => {
  return (
    <div>
      <h2>Add Contact</h2>
      <Formik
        initialValues={{ name: '', number: '' }}
        onSubmit={(values, { resetForm }) => {
          addContact(values);
          resetForm();
        }}
      >
        <Form>
          <div>
            <label htmlFor="name">Name:</label>
            <Field type="text" id="name" name="name" style={{ border: '1px solid black', padding: '5px' }} />
          </div>
          <div>
            <label htmlFor="number">Number:</label>
            <Field type="text" id="number" name="number" style={{ border: '1px solid black', padding: '5px' }} />
          </div>
          <button type="submit">Add Contact</button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;


  