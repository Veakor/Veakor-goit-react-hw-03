

import { Formik, Form, Field, ErrorMessage } from 'formik';
const ContactForm = ({ addContact }) => {
    const handleSubmit = (values, { resetForm }) => {
      addContact(values);
      resetForm();
    };
  
    return (
      <div>
        <h2>Add Contact</h2>
        <Formik
          initialValues={{ name: '', number: '' }}
          validate={values => {
            const errors = {};
            if (!values.name) {
              errors.name = 'Required';
            }
            if (!values.number) {
              errors.number = 'Required';
            }
            return errors;
          }}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form>
              <div>
                <label htmlFor="name">Name:</label>
                <Field type="text" id="name" name="name" />
                <ErrorMessage name="name" component="div" />
              </div>
              <div>
                <label htmlFor="number">Number:</label>
                <Field type="text" id="number" name="number" />
                <ErrorMessage name="number" component="div" />
              </div>
              <button type="submit" disabled={isSubmitting}>
                Delete
              </button>
            </Form>
          )}
        </Formik>
      </div>
    );
  };
  
  export default ContactForm;