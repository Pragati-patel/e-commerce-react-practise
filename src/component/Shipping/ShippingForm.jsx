import React from "react";
import { Formik } from "formik";
import * as yup from 'yup';

export default function ShippingForm() {
  const schema=yup.object().shape({
    name: yup.string()
                .min(2, "Mininum 2 characters")
                .max(30, "Maximum 30 characters")
                .required("Your name is required"),
            email: yup.string()
                .email("Invalid email format")
                .required("Your email is required")
               
  })
  return (
    <div className="flex flex-col p-8 w-60 mx-auto">
      <div className="flex">
        <h3>step 1</h3>
        <h1>Shipping</h1>
      </div>
      <Formik
        initialValues={{ email: "" , name:""}}
       
        validationSchema={schema}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col border-2 border-black p-4 w-100"
          >
            <label htmlFor="" className="py-4">
              Full Name
            </label>
            <input
              type="text"
              name='name'
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.name}
              placeholder="Pragati Patel"
              className="outline-none border-b-2 border-black pb-1 "
            />
             {errors.name && touched.name && errors.name}

            <label htmlFor="" className="py-4">
              Email
            </label>
            <input
              type="email"
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              placeholder="example@gmail.com"
              className="outline-none border-b-2 border-black pb-1 "
            />
            {errors.email && touched.email && errors.email}
            <input
              type="password"
              name="password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
            />
            <label htmlFor="" className="py-4">
              Mobile number
            </label>
            <input
              type="number"
              name="num"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.num}
              placeholder="+91-9826926758"
              className="border-b-2 border-black outline-none pb-1 "
            />
            {errors.num && touched.num && errors.num}

            <label htmlFor="" className="py-4">
              Address
            </label>
            <input
              type="text"
              placeholder="Vijay Nagar, Indore"
              className="border-b-2 border-black pb-1 outline-none"
            />
            <label htmlFor="" className="py-4">
              Country
            </label>
            <select
              name=""
              id=""
              className="border-b-2 border-black pb-1 outline-none "
            >
              <option value="India">India</option>
              <option value="US">US</option>
              <option value="UK">UK</option>
            </select>
            <label htmlFor="" className="py-4">
              City
            </label>
            <select
              name=""
              id=""
              className="border-b-2 border-black pb-1 outline-none "
            >
              <option value="Indore">Indore</option>
              <option value="Bhopal">Bhopal</option>
              <option value="Dehli">Dehli</option>
            </select>
            {errors.password && touched.password && errors.password}
            <button
              type="submit"
              disabled={isSubmitting}
              className="my-2 mt-4 p-2 bg-red-600 text-white"
            >
              Submit
            </button>
          </form>
        )}
      </Formik>

    
    </div>
  );
}
