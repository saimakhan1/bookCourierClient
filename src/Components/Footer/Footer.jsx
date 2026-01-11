import React from "react";
import {
  BsFacebook,
  BsInstagram,
  BsPinterest,
  BsTwitter,
} from "react-icons/bs";
import { RiInstagramLine } from "react-icons/ri";

const Footer = () => {
  return (
    <div>
      <footer className="bg-gray-200 text-black dark:bg-black dark:text-white py-10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-current">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/"
                  className="hover:text-gray-800 dark:hover:text-white transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/books"
                  className="hover:text-gray-800 dark:hover:text-white transition-colors"
                >
                  Browse Books
                </a>
              </li>
              {/* <li>
                <a
                  href="#"
                  className="hover:text-gray-800 dark:hover:text-white transition-colors"
                >
                  Request Delivery
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-gray-800 dark:hover:text-white transition-colors"
                >
                  My Account
                </a>
              </li> */}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-current">
              Contact Us
            </h3>
            <p className="mb-2">📍 Dhaka, Bangladesh</p>
            <p className="mb-2">📞 +880 1234-567890</p>
            <p className="mb-2">✉️ support@bookcourier.com</p>
            <p>🕒 Available 9 AM – 10 PM</p>
          </div>

          {/* Social Icons */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-current">
              Follow Us
            </h3>
            <div className="flex items-center space-x-6">
              {/* Social icons here */}
              <a href="https://www.facebook.com/hashtag/bookcourier/?_rdr"><BsFacebook></BsFacebook></a>

              <a href="https://www.instagram.com/bookcourier/"><BsInstagram></BsInstagram></a>
              <a href="https://fr.pinterest.com/pin/594686325789374515/"><BsPinterest></BsPinterest></a>
              <a href="https://x.com/expressairlogis"><BsTwitter></BsTwitter></a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-10 pt-5 text-center text-sm text-gray-600 dark:text-gray-400">
          © 2025 BookCourier. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Footer;
