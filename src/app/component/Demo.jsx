import React from 'react';

const Demo = () => {
  return (
    <section id="demo" className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold text-secondary mb-4">See BugSprint in Action</h2>
        <p className="text-gray-600 text-lg mb-12">
          Watch this quick demo to understand how our platform helps you fix bugs efficiently.
        </p>

        <div className="relative w-full pb-[56.25%] h-0 overflow-hidden rounded-xl shadow-lg">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ" // Random demo link
            title="BugSprint Demo Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Demo;
