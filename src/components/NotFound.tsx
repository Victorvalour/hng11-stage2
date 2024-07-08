import React from "react";

const NotFound: React.FC = () => {
  return (
    <div className="text-center p-8">
      <h1 className="text-4xl text-[#ff0000]">404 - Page Not Found</h1>
      <p className="text-lg text-[#666]">
        Sorry, the page you are looking for does not exist.
      </p>
    </div>
  );
};

export default NotFound;
