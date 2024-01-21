import React, { FunctionComponent } from "react";
import { FaFacebook } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";

// type FooterProps = {};

const Footer: FunctionComponent = () => {
  return (
    <footer className="bg-gray-300">
      <div className="grid justify-items-center grid-cols-1 md:grid-cols-2 max-w-5xl h-auto py-3 mx-auto">
        {/* <div className="w-10/12 grid gap-y-3">
          <h2>Contact Info</h2>
          <div className="mt-2">
            <p>571-344-1978</p>
            <p>Educational Classroom Systems</p>
            <p>525 Harrison Circle Locust Grove, VA 22508</p>
          </div>
        </div> */}
        <div className="w-10/12 grid gap-y-3">
          <h2 className="text-center text-xl">Contact Us</h2>
          <div>
            {/* <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
              First name
            </label> */}
            <div className="mt-2">
              <p>571-344-1978</p>
              <p>Educational Classroom Systems</p>
              <p>525 Harrison Circle Locust Grove, VA 22508</p>
            </div>
            <div className="mt-2">
              <input
                type="text"
                name="first-name"
                id="first-name"
                autoComplete="given-name"
                placeholder="First Name*"
                className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            {/* <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
              Last name
            </label> */}
            <div className="mt-2">
              <input
                type="text"
                name="last-name"
                id="last-name"
                autoComplete="family-name"
                placeholder="Last Name*"
                className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            {/* <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
              Email address
            </label> */}
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="Email Address*"
                className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            {/* <label htmlFor="about" className="block text-sm font-medium leading-6 text-gray-900">
              About
            </label> */}
            <div className="mt-2">
              <textarea
                id="about"
                name="about"
                rows={3}
                className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                defaultValue={""}
                placeholder="Write a message..."
              />
            </div>
          </div>
          <button className="rounded-md bg-indigo-600 w-36 h-fit p-2 text-white justify-self-center mt-4">
            Send
          </button>
        </div>
        <div className="w-10/12 grid gap-y-3 mt-6 md:mt-0">
          <h2 className="text-center text-xl">Follow Us</h2>
          <div className="flex space-x-4 justify-center">
            <FaFacebook size={48} />
            <FaPinterest size={48} />
          </div>
          <div>
            <label
              htmlFor="newsletter"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Sign-up for our e-newsletter!
            </label>
            <div className="mt-2">
              <input
                id="newsletter"
                name="newsletter"
                type="email"
                autoComplete="email"
                className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <button className="rounded-md bg-indigo-600 w-36 h-fit p-2 text-white justify-self-center place-self-end mt-4">
            Subscribe
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
