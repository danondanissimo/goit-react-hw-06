import css from "./Contact.module.css";

const Contact = ({ name, number, id, deleteContact }) => {
  return (
    <div className={css.contactContainer}>
      <h1 className={css.name}>{name}</h1>
      <p>{number}</p>
      <button
        type="button"
        onClick={() => {
          deleteContact(id);
        }}
        className={css.button}
      >
        Delete
      </button>
    </div>
  );
};

export default Contact;
