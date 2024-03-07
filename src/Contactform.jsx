import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';

// ContactForm Component
const ContactForm = () => {
    // State for form data
    const [data, setData] = useState({
        name: "",
        contactNo: "",
        email: "",
        message: "",
    });

    // Destructuring form data
    const { name, email, message, contactNo } = data;

    // Function to handle input change
    const handleChange = e =>
        setData({ ...data, [e.target.name]: e.target.value });

    // Function to handle form submission
    const handleSubmit = async e => {
        e.preventDefault();
        try {
            // POST request to Google Sheets API
            await fetch("https://v1.nocodeapi.com/karan_ed52/google_sheets/GuBMzkmpOoNgumQC?tabId=Sheet1", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify([[name, contactNo, email, message]]),
            });

            // Show success toast
            toast.success("Submit Succesfully");

            // Clear form fields after submitting
            setData({
                name: "",
                contactNo: "",
                email: "",
                message: "",
            });
            // Redirect after submission
            setTimeout(() => {
                window.location.href = '/';
            }, 1000);
        } catch (err) {
            // Log any errors
            console.log(err);
            // Show Submission Failed toast
            toast.success("Submission Failed");
        }
    };

    return (
        <form
            className="bg-green-50 border-red-400 border-b-8 border-t-8  p-5 rounded-3xl shadow-md  w-96"
            onSubmit={handleSubmit}
        >
            <h2 className="text-2xl  font-semibold mb-6">Contact Us</h2>
            <div className="mb-4">
                <label htmlFor="name" className="block text-gray-600 text-sm mb-2">
                    Name
                </label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder='Enter your name'
                    value={name}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                />
            </div>
            <div className="mb-4">
                <label htmlFor="contactNo" className="block text-gray-600 text-sm mb-2">
                    Contact No
                </label>
                <input
                    type="text"
                    id="contactNo"
                    name="contactNo"
                    placeholder='Enter your Contact No'
                    value={contactNo}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                />
            </div>
            <div className="mb-4">
                <label htmlFor="email" className="block text-gray-600 text-sm mb-2">
                    Email
                </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder='Enter your Email'
                    value={email}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                />
            </div>
            <div className="mb-6">
                <label htmlFor="message" className="block text-gray-600 text-sm mb-2">
                    Message
                </label>
                <textarea
                    id="message"
                    name="message"
                    placeholder='Type Message here ....'
                    value={message}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                    rows="4"
                />
            </div>
            {/* Submission Button */}
            <button
                type="submit"
                className="bg-blue-500 text-white w-full p-2 rounded hover:bg-green-400 hover:cursor-pointer"
            >
                Submit
            </button>
        </form>
    );
};

export default ContactForm;
