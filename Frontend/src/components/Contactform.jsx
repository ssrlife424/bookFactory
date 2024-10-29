import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

function Contactform() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // Handle form submission, e.g., send data to an API
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-600 bg-opacity-50">
      <div className="p-6 bg-white rounded shadow-lg w-80">
        <h3 className="mb-4 text-lg font-bold">Contact Us</h3>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label className="block mb-1">Name</label>
            <input
              type="text"
              {...register("name", { required: "Name is required" })}
              className="w-full p-2 border"
            />
            {errors.name && (
              <span className="text-red-500">{errors.name.message}</span>
            )}
          </div>
          <div className="mb-4">
            <label className="block mb-1">Email</label>
            <input
              type="email"
              {...register("email", { required: "Email is required" })}
              className="w-full p-2 border"
            />
            {errors.email && (
              <span className="text-red-500">{errors.email.message}</span>
            )}
          </div>
          <div className="mb-4">
            <label className="block mb-1">Message</label>
            <textarea
              {...register("message", { required: "Message is required" })}
              className="w-full p-2 border"
            />
            {errors.message && (
              <span className="text-red-500">{errors.message.message}</span>
            )}
          </div>
          <button
            type="submit"
            className="px-4 py-2 text-white bg-blue-500 rounded"
          >
            Send
          </button>
          <Link to='/'
            type="button"
            className="ml-2 text-gray-500"
          >
            Cancel
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Contactform;
