import { ErrorMessage, Field, Form, Formik } from "formik";
import css from "./Registration.module.css";
import { object, string } from "yup";
import { IoMdClose } from "react-icons/io";

const initValue = {
  name: "",
  email: "",
  password: "",
  repeatPassword: "",
};

const Registration = ({ closeRegistration, toogleForm }) => {
  const RigisterSchema = object().shape({
    name: string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    email: string().email("Must be a valid email").required("Required"),
    password: string().min(8, "Too Short!").required("Required"),
  });
  return (
    <div className={css.registrationContainer}>
      <Formik initialValues={initValue} validationSchema={RigisterSchema}>
        <Form className={css.form}>
          <h2 className={css.titleRegistration}>Регестрація</h2>
          <IoMdClose className={css.iconClose} onClick={closeRegistration} />

          <Field
            className={css.formInput}
            type="text"
            name="name"
            placeholder="Введіть ваше ім'я"
          />

          <span className={css.error}>
            <ErrorMessage name="name" as="span" />
          </span>

          <Field
            className={css.formInput}
            type="text"
            name="email"
            placeholder="Пошта"
          />

          <span className={css.error}>
            <ErrorMessage name="email" as="span" />
          </span>

          <Field
            className={css.formInput}
            type="password"
            name="password"
            placeholder="Пароль"
          />

          <span className={css.error}>
            <ErrorMessage name="password" as="span" />
          </span>

          <Field
            className={css.formInput}
            type="password"
            name="repeatPassword"
            placeholder="Повторіть пароль"
          />

          <span className={css.error}>
            <ErrorMessage name="password" as="span" />
          </span>
          <button className={css.btnRegistration} type="submit">
            Регестрація
          </button>
          <button
            className={css.btnRegistration}
            type="submit"
            onClick={toogleForm}
          >
            Увійти
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default Registration;
