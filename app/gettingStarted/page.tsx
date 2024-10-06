import React from 'react';

function GettingStarted() {
    return (
        <div className="bg-gradient-to-r from-blue-500 to-black-500 min-h-screen flex items-center justify-center p-8">
            <div className="bg-white rounded-lg shadow-lg p-10 max-w-2xl w-full">
                <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Getting Started</h1>
                <p className="text-gray-700 text-lg leading-relaxed">
                    <strong>Think And Sketch - Your Personal Digital Whiteboard for Visual Notes</strong>
                    <br /><br />
                    Think And Sketch is a versatile tool designed for individuals who want to create, organize, and refine their visual notes and diagrams. Ideal for students, educators, professionals, and creatives, Think And Sketch provides a seamless experience for capturing and developing your ideas.
                    <br /><br />
                    </p>
                    <strong>Key Features:</strong>
                    <ul className="list-disc list-inside ml-4 mt-2">
                        <li><strong>Intuitive Drawing Tools:</strong> Utilize pens, brushes, and shapes to create freehand drawings and structured diagrams with ease.</li>
                        <li><strong>Rich Text Support:</strong> Add and customize text for annotations, labels, and descriptions to enhance your visual notes.</li>
                        <li><strong>Image and File Insertion:</strong> Incorporate images, PDFs, and other files into your notes for comprehensive visual documentation.</li>
                        <li><strong>Template Library:</strong> Choose from a wide range of pre-made templates to kickstart your projects and streamline your workflow.</li>
                        <li><strong>Autosave and Version Control:</strong> Ensure your work is never lost with automatic saving and easy access to previous versions.</li>
                        <li><strong>Export and Share:</strong> Export your notes in various formats (PDF, PNG, etc.) for easy sharing and printing.</li>
                    </ul>
                    <br />
                    <strong>Why Choose Think And Sketch?</strong>
                    <ul className="list-disc list-inside ml-4 mt-2">
                        <li><strong>User-Friendly Interface:</strong> Designed for ease of use, allowing you to focus on your ideas rather than the tool.</li>
                        <li><strong>Personal Workspace:</strong> Work individually on your projects without the complexities of team collaboration.</li>
                        <li><strong>Flexible and Versatile:</strong> Suitable for educational purposes, business planning, creative brainstorming, and much more.</li>
                    </ul>
                    <br />
                    Experience the power of visual thinking and take your individual projects to the next level. Sign up today and start turning your ideas into impactful visual notes.
            </div>
        </div>
    );
}

export default GettingStarted;
