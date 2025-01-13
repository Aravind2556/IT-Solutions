import React, { useState } from "react";
import emailjs from "emailjs-com";

export const Internmail = () => {
  const [formData, setFormData] = useState({
    name: "",
    FatherName: "",
    studentID: "",
    email: "",
    AadharNo: "",
    contactNumber: "",
    Course: "",
    collegeName: "",
    qualification: "",
    university: "",
    age: "",
    gender: "",
    state: "",
    district: "",
    address: "",
    pincode: "",
    message: "",
    mode: "Online", 
  });

  console.log("studnet Details",formData)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .send(
        "service_wiicwjt",
        "template_0d57wo5",
        formData,
        "8F9ua55d2Ogw-Dtj4"
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
          setFormData({
            name: "",
            FatherName: "",
            studentID: "",
            email: "",
            AadharNo: "",
            contactNumber: "",
            Course: "",
            collegeName: "",
            qualification: "",
            university: "",
            age: "",
            gender: "",
            state: "",
            district: "",
            address: "",
            pincode: "",
            message: "",
            mode: "Online",
          });
        },
        (error) => {
          alert("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <div className="relative bg-white">
      <div className="relative z-10 flex items-center justify-center min-h-screen">
        <div className="bg-slate-200 p-8 rounded-lg shadow-xl max-w-4xl w-full">
          <h1 className="text-3xl font-bold text-blue-700 mb-6 text-center">
            Contact Us
          </h1>
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {/* Name */}
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="p-3 border rounded-lg"
              required
            />
            {/* Father's Name */}
            <label className="block text-gray-700">Father's Name</label>
            <input
              type="text"
              name="FatherName"
              value={formData.FatherName}
              onChange={handleChange}
              placeholder="Enter your father's name"
              className="p-3 border rounded-lg"
              required
            />
            {/* Student ID */}
            <label className="block text-gray-700">Student ID</label>
            <input
              type="text"
              name="studentID"
              value={formData.studentID}
              onChange={handleChange}
              placeholder="Enter your student ID"
              className="p-3 border rounded-lg"
              required
            />
            {/* Email */}
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="p-3 border rounded-lg"
              required
            />
            {/* Aadhar Number */}
            <label className="block text-gray-700">Aadhar Number</label>
            <input
              type="text"
              name="AadharNo"
              value={formData.AadharNo}
              onChange={handleChange}
              placeholder="Enter your Aadhar number"
              className="p-3 border rounded-lg"
              required
            />
            {/* Contact Number */}
            <label className="block text-gray-700">Contact Number</label>
            <input
              type="text"
              name="contactNumber"
              value={formData.contactNumber}
              onChange={handleChange}
              placeholder="Enter your contact number"
              className="p-3 border rounded-lg"
              required
            />
            {/* Course */}
            <label className="block text-gray-700">Course</label>
            <input
              type="text"
              name="Course"
              value={formData.Course}
              onChange={handleChange}
              placeholder="Enter your course"
              className="p-3 border rounded-lg"
              required
            />
            {/* College Name */}
            <label className="block text-gray-700">College Name</label>
            <input
              type="text"
              name="collegeName"
              value={formData.collegeName}
              onChange={handleChange}
              placeholder="Enter your college name"
              className="p-3 border rounded-lg"
              required
            />
            {/* Qualification */}
            <label className="block text-gray-700">Qualification</label>
            <input
              type="text"
              name="qualification"
              value={formData.qualification}
              onChange={handleChange}
              placeholder="Enter your qualification"
              className="p-3 border rounded-lg"
              required
            />
            {/* University */}
            <label className="block text-gray-700">University</label>
            <input
              type="text"
              name="university"
              value={formData.university}
              onChange={handleChange}
              placeholder="Enter your university"
              className="p-3 border rounded-lg"
              required
            />
            {/* Age */}
            <label className="block text-gray-700">Age</label>
            <input
              type="text"
              name="age"
              value={formData.age}
              onChange={handleChange}
              placeholder="Enter your age"
              className="p-3 border rounded-lg"
              required
            />
            {/* Gender */}
            <label className="block text-gray-700">Gender</label>
            <input
              type="text"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              placeholder="Enter your gender"
              className="p-3 border rounded-lg"
              required
            />
            {/* State */}
            <label className="block text-gray-700">State</label>
            <input
              type="text"
              name="state"
              value={formData.state}
              onChange={handleChange}
              placeholder="Enter your state"
              className="p-3 border rounded-lg"
              required
            />
            {/* District */}
            <label className="block text-gray-700">District</label>
            <input
              type="text"
              name="district"
              value={formData.district}
              onChange={handleChange}
              placeholder="Enter your district"
              className="p-3 border rounded-lg"
              required
            />
            {/* Address */}
            <label className="block text-gray-700">Address</label>
            <textarea
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Enter your address"
              className="p-3 border rounded-lg col-span-1 md:col-span-2"
              required
            />
            {/* Pincode */}
            <label className="block text-gray-700">Pincode</label>
            <input
              type="text"
              name="pincode"
              value={formData.pincode}
              onChange={handleChange}
              placeholder="Enter your pincode"
              className="p-3 border rounded-lg"
              required
            />
            {/* Message */}
            <label className="block text-gray-700">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Enter your message"
              className="p-3 border rounded-lg col-span-1 md:col-span-2"
              required
            />
            {/* Mode */}
            <label className="block text-gray-700 col-span-1 md:col-span-2">
              Mode
            </label>
            <div className="flex gap-4 col-span-1 md:col-span-2">
              <label>
                <input
                  type="radio"
                  name="mode"
                  value="Online"
                  checked={formData.mode === "Online"}
                  onChange={handleChange}
                  className="mr-2"
                />
                Online
              </label>
              <label>
                <input
                  type="radio"
                  name="mode"
                  value="Offline"
                  checked={formData.mode === "Offline"}
                  onChange={handleChange}
                  className="mr-2"
                />
                Offline
              </label>
            </div>
            {/* Submit Button */}
            <button
              type="submit"
              className="bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 col-span-1 md:col-span-2"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
