import React from "react";

const Loader = () => {
    return (
        <div className="fixed w-50 h-50 rounded-lg flex items-center justify-center backdrop-blur-md z-50">
            <div className="w-16 h-16 border-3 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
    );
};

export default Loader;
