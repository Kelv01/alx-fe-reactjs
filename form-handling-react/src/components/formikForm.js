import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

// Validation schema
const validationSchema = Yup.object({
  username: Yup.string().required("Username is required"),
  email: Yup.string().email("Invalid email format").required("Email is required"),
  password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
});

function FormikForm() {
  return (
    <Formik
      initialValues={{ username: "", email: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        console.log("Formik submitted:", values);

        // Simulate API request
        fetch("https://jsonplaceholder.typicode.com/users", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(values),
        })
          .then((res) => res.json())
          .then((data) => console.log("API response:", data))
          .catch((err) => console.error("Error:", err));

        resetForm();
      }}
    >
      {() => (
        <Form className="flex flex-col gap-4 max-w-sm mx-auto p-4 border rounded">
          <h2 className="text-lg font-bold">Register (Formik)</h2>

          <Field name="username" type="text" placeholder="Username" className="border p-2 rounded" />
          <ErrorMessage name="username" component="div" className="text-red-500" />

          <Field name="email" type="email" placeholder="Email" className="border p-2 rounded" />
          <ErrorMessage name="email" component="div" className="text-red-500" />

          <Field name="password" type="password" placeholder="Password" className="border p-2 rounded" />
          <ErrorMessage name="password" component="div" className="text-red-500" />

          <button type="submit" className="bg-green-500 text-white py-2 rounded hover:bg-green-600">
            Register
          </button>
        </Form>
      )}
    </Formik>
  );
}

export default FormikForm;
