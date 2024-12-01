import React from "react";
import image6 from "../assets/image6.png";

function Resume() {
    return (
        <div className="flex flex-col items-center justify-center p-4">
            <a
                href="src\assets\Priya_Agrawal (1).pdf"
                download
                className="mb-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300"
            >
                Download Resume
            </a>
            <img
                className="max-w-md w-auto h-auto rounded-md shadow-lg"
                src={image6}
                alt="Resume Thumbnail"
            />
        </div>
    );
}

export default Resume;
