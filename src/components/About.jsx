import React from 'react';

const About = () => {
    return (
        <div
            className="flex justify-center items-center m-4"
            style={{
                backgroundImage: 'url("your-background-image-url.jpg")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundAttachment: 'fixed',
            }}
        >
            <div className="bg-gray-500 bg-opacity-80 p-6 md:p-10 rounded-2xl shadow-2xl max-w-4xl w-full">
                {/* Skills Section */}
                <section className="mb-8">
                    <h1 className="text-center text-2xl md:text-3xl font-bold text-black py-3 bg-green-600 bg-opacity-75 rounded-lg shadow-md">
                        Skills
                    </h1>
                    <hr className="border-t-4 border-green-500 w-1/2 mx-auto my-4" />
                    <div className="flex flex-wrap justify-center gap-6 text-black font-bold">
                        <ul className="space-y-3 space-x-3 ">
                            <li className="list-disc">ReactJS</li>
                            <li className="list-disc">JavaScript</li>
                            <li className="list-disc">HTML&CSS</li>
                        </ul>
                        <ul className="space-y-3 space-x-3 ">
                        <li className="list-disc">TailwindCSS</li>
                        <li className="list-disc">Vite.js</li>
                        <li className="list-disc">NodeJS</li>
                        </ul>
                        <ul className='space-y-3 space-x-3 '>
                            <li className="list-disc">ExpressJs</li>
                            <li className="list-disc">Data Structures</li>
                            <li className="list-disc">Java</li>
                        </ul>
                    </div>
                </section>

                {/* Education Section */}
                <section className="mb-8">
                    <h1 className="text-center text-2xl md:text-3xl font-bold text-black py-3 bg-green-600 bg-opacity-75 rounded-lg shadow-md">
                        Education
                    </h1>
                    <hr className="border-t-4 border-green-500 w-1/2 mx-auto my-4" />
                    <div className="text-black text-center font-bold space-y-4">
                        <p>BSc (Computer Science): Barwale College, Jalna-431203</p>
                        <p>MSc (Scientific Computing): Savitribai Phule Pune University, Pune-411011</p>
                    </div>
                </section>

                {/* Hobbies Section */}
                <section>
                    <h1 className="text-center text-2xl md:text-3xl font-bold text-black py-3 bg-green-600 bg-opacity-75 rounded-lg shadow-md">
                        Hobbies
                    </h1>
                    <hr className="border-t-4 border-green-500 w-1/2 mx-auto my-4" />
                    <div className="text-black text-center space-y-4 font-bold">
                        <p>Designing</p>
                        <p>Sketching</p>
                        <p>Dance</p>
                        <p>Baking</p>
                        <p>Management / Organizing Activities</p>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default About;
