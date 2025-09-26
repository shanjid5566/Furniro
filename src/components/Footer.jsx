import React from "react";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 mt-12">
      <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand Info */}
        <div>
          <h2 className="text-xl font-bold text-gray-800 mb-4">Funiro.</h2>
          <p className="text-sm text-gray-500 leading-relaxed">
            400 University Drive Suite 200 Coral Gables, <br />
            FL 33134 USA
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-sm font-semibold text-gray-400 mb-4">Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-gray-800 hover:text-gray-600">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-800 hover:text-gray-600">
                Shop
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-800 hover:text-gray-600">
                About
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-800 hover:text-gray-600">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Help */}
        <div>
          <h3 className="text-sm font-semibold text-gray-400 mb-4">Help</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-gray-800 hover:text-gray-600">
                Payment Options
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-800 hover:text-gray-600">
                Returns
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-800 hover:text-gray-600">
                Privacy Policies
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-sm font-semibold text-gray-400 mb-4">
            Newsletter
          </h3>
          <form className="flex items-center  pb-2">
            <input
              type="email"
              placeholder="Enter Your Email Address"
              className="flex-1 bg-transparent text-sm text-gray-700 focus:outline-none placeholder-gray-400 border-b
               border-gray-400 w-8"
            />
            <button
              type="submit"
              className="ml-8 text-sm font-semibold text-gray-800 hover:text-gray-600"
            >
              SUBSCRIBE
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200 mt-6">
        <div className="max-w-6xl mx-auto px-4 py-4 text-sm text-gray-600">
          © 2023 Funiro. All rights reserved
        </div>
      </div>
    </footer>
  );
}
