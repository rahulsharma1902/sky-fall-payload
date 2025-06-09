import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import styles from "./myForm.module.css";

const MyForm = () => {
  const [successCheck, setSuccessCheck] = useState(false);
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      console.log(data);
      const formData = new FormData();
      formData.append("Email", data?.email);
      formData.append("Phone", data?.phoneNubmer);

      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbw-M5HxOYW69x93VI6A8JxVKyj404M_Pyh4gVcKioruxYFw8clsLdIJTo3zvW-sYqdFhg/exec",
        {
          method: "POST",
          body: formData,
        }
      );
      console.log(response);
      if (response.ok) {
        setSuccessCheck(true);
      } else {
        setSuccessCheck(false);
      }
    } catch (error) {
      console.log("Error creating:", error);
      setSuccessCheck(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="px-5 py-4">
      {successCheck === false && loading === false ? (
        <>
          <div className="pb-2">
            <h2 className="f-32 f-c-p text-center">Join the waitlist</h2>
          </div>
          <div className={styles.inputContainer}>
            <label
              htmlFor="businessEmail"
              className={`f-14 f-c-s ff-i ${styles.formInputLabel}`}
            >
              Business E-mail
            </label>
            <input
              id="businessEmail"
              type="email"
              placeholder="Enter your mail"
              className={`${styles.formInput} ${
                errors.email && styles.errorInput
              }`}
              {...register("email", {
                required: "E-mail is required for waitlist",
              })}
            />
            {errors.email && (
              <p className={`f-12 ff-i  ${styles.errorInputTxt}`}>
                {errors.email.message}
              </p>
            )}
          </div>
          <div className={styles.inputContainer}>
            <label
              htmlFor="phoneNumber"
              className={`f-14 f-c-s ff-i ${styles.formInputLabel}`}
            >
              Phone number (Optional)
            </label>
            <input
              id="phoneNumber"
              className={`${styles.formInput}`}
              placeholder="Enter your contact number"
              type="tel"
              {...register("phoneNubmer")}
            />
          </div>
          <div className={`py-4`}>
            <button
              type="submit"
              className={`${styles.submitBtn} f-20 ff-j fw-bold`}
              disabled={loading}
            >
              {loading ? "Submitting..." : "Submit"} 
            </button>
          </div>
        </>
      ) : (
        <>
          <div
            className={`${styles.successContainer} d-flex jsutify-content-center align-items-center flex-column`}
          >
            <div
              className={`d-flex jsutify-content-center align-items-center flex-column`}
            >
              <span className={`${styles.checkContainer}`}>
                <img src={"/images/icon/check.svg"} width={22} height={15} />
              </span>
              <h3 className={`f-30 ff-j f-c-p pt-4 pb-5`}>
                Submitted successfully
              </h3>
            </div>
            <p className={`f-20 ff-i f-c-s p-4 f-w-100`}>
              We will get in touch shortly!
            </p>
          </div>
        </>
      )}
    </form>
  );
};

export default MyForm;
