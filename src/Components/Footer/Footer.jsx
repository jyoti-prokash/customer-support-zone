import { FaXTwitter, FaLinkedinIn, FaFacebookF } from "react-icons/fa6";
import { FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
          
          {/* Column 1 */}
          <div>
            <h2 className="text-white text-lg font-semibold mb-4">
              CS — Ticket System
            </h2>
            <p className="text-sm leading-6">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book.
            </p>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="text-white font-medium mb-4">Company</h3>
            <ul className="space-y-3 text-sm">
              <li className="hover:text-white cursor-pointer">About Us</li>
              <li className="hover:text-white cursor-pointer">Our Mission</li>
              <li className="hover:text-white cursor-pointer">Contact Saled</li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="text-white font-medium mb-4">Services</h3>
            <ul className="space-y-3 text-sm">
              <li className="hover:text-white cursor-pointer">
                Products & Services
              </li>
              <li className="hover:text-white cursor-pointer">
                Customer Stories
              </li>
              <li className="hover:text-white cursor-pointer">
                Download Apps
              </li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h3 className="text-white font-medium mb-4">Information</h3>
            <ul className="space-y-3 text-sm">
              <li className="hover:text-white cursor-pointer">
                Privacy Policy
              </li>
              <li className="hover:text-white cursor-pointer">
                Terms & Conditions
              </li>
              <li className="hover:text-white cursor-pointer">
                Join Us
              </li>
            </ul>
          </div>

          {/* Column 5 */}
          <div>
            <h3 className="text-white font-medium mb-4">Social Links</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center gap-3 hover:text-white cursor-pointer">
                <FaXTwitter className="text-white text-sm" />
                @CS — Ticket System
              </li>
              <li className="flex items-center gap-3 hover:text-white cursor-pointer">
                <FaLinkedinIn className="text-white text-sm" />
                @CS — Ticket System
              </li>
              <li className="flex items-center gap-3 hover:text-white cursor-pointer">
                <FaFacebookF className="text-white text-sm" />
                @CS — Ticket System
              </li>
              <li className="flex items-center gap-3 hover:text-white cursor-pointer">
                <FaEnvelope className="text-white text-sm" />
                support@cst.com
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mt-12 pt-6 text-center text-sm">
          © 2025 CS — Ticket System. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;