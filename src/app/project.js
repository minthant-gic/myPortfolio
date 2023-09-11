import React from 'react';

const Project = () => {
    return (
        <div>
            <div className="text-3xl font-mono font-bold mt-10 ml-4">
                Projects
            </div>
            <div className="flex mt-4">
                <div className="w-1/3 h-16">
                    <div className="bg-red-600">Hello</div>
                </div>
                <div className="w-1/3 h-16 ml-6">
                    <div className="bg-blue-600">Hello</div>
                </div>
                <div className="w-1/3 h-16 ml-6">
                    <div className="bg-purple-600">Hello</div>
                </div>
            </div>
        </div>
    );
};

export default Project;