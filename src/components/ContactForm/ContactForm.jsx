import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import css from "./ContactForm.module.css";

const phoneRegExp = /^\d{3}-\d{2}-\d{2}$/;
const minNameLength = 3;
const maxNameLength = 50;

const contactSchema = Yup.object({
  name: Yup.string()
    .required("Name is required")
    .min(minNameLength, "Too short!")
    .max(maxNameLength, "Too long!"),
  number: Yup.string()
    .required()
    .matches(phoneRegExp, "Phone number is not valid"),
});

const ContactForm = ({ addContact }) => {
  const handleSubmit = (values, actions) => {
    addContact(values);

    actions.resetForm();
  };

  const FORM_INITIAL_VALUES = {
    name: "",
    number: "",
  };

  return (
    <Formik
      initialValues={FORM_INITIAL_VALUES}
      validationSchema={contactSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.form}>
        <label className={css.label}>
          <span>Name</span>
          <Field type="text" name="name" className={css.field} />
          <ErrorMessage component="p" name="name" />
        </label>
        <label className={css.label}>
          <span>Number</span>
          <Field type="text" name="number" className={css.field} />
          <ErrorMessage component="p" name="number" />
        </label>
        <button type="submit" className={css.button}>
          Add Contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
