import React from "react";

const FooterSection = () => {
  return (
    <footer className="py-12 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
            SE.
          </h1>
          <div className="text-sm text-gray-500 dark:text-gray-500">
            &copy; {new Date().getFullYear()} Sohaib ELASHAB. All rights
            reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
