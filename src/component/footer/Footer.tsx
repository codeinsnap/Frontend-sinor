// Footer.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <div className="bg-black text-white p-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="flex items-center space-x-4">
            <h6 className="text-2xl font-bold">Senior Living Hub</h6>
            <p className="text-sm">A Hub of Care, Comfort, and Community."</p>
          </div>
          <div className="flex justify-end space-x-4">
            <Link to="#" className="text-white">Contact</Link>
            <Link to="/about" className="text-white">About</Link>
            <Link to="#" className="text-white">Services</Link>
            <Link to="/payment" className="text-white">Payment</Link>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p className="text-sm">&copy; {new Date().getFullYear()} Senior Living Hub. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
