import { ErrorMessage, Field, Form, Formik } from "formik";
import css from "./LoginForm.module.css";
import { object, string } from "yup";
import { IoMdClose } from "react-icons/io";

const initValue = {
  name: "",
  email: "",
  password: "",
  repeatPassword: "",
};

const LoginForm = ({ toogleForm, closeLogin }) => {
  const RigisterSchema = object().shape({
    name: string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    email: string().email("Must be a valid email").required("Required"),
    password: string().min(8, "Too Short!").required("Required"),
  });
  return (
    <div className={css.loginContainer}>
      <Formik initialValues={initValue} validationSchema={RigisterSchema}>
        <Form className={css.form}>
          <h2 className={css.titileLogin}>Увійти</h2>
          <IoMdClose className={css.iconClose} onClick={closeLogin} />

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

          <button className={css.btnRegistration} type="submit">
            Увійти
          </button>
          <button
            className={css.btnRegistration}
            type="submit"
            onClick={toogleForm}
          >
            Регестрація
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginForm;
