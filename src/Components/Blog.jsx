import React, { useRef } from "react";
import { FaDownload } from "react-icons/fa";
import ReactToPdf from "react-to-pdf";

const Blog = () => {
    const ref = useRef();
    const options = {
        orientation: "landscape",
        unit: "in",
        format: [17, 11],
    };

    return (
        <div className="container mx-auto mb-16">
            <div className="mt-6 text-end mr-6">
                <ReactToPdf targetRef={ref} options={options} filename="blog.pdf">
                    {({ toPdf }) => (
                        <button className="btn btn-neutral-content " onClick={toPdf}>
                            <FaDownload className="inline-block mr-2 text-white"></FaDownload>{" "}
                            Download Pdf
                        </button>
                    )}
                </ReactToPdf>
            </div>
            <div ref={ref}>

                <div tabIndex={0} className="collapse collapse-open border border-base-300 bg-base-100 rounded-box mt-8 mb-8">
                    <div className="collapse-title text-xl font-medium">
                        Q1: Tell us the differences between uncontrolled and controlled
                        components.
                    </div>
                    <div className="collapse-content">
                        <p tabIndex={0} > Ans: Uncontrolled components are those that are managed by the browser's Document Object Model (DOM), while controlled components are those that are managed by React. In other words, controlled components provide developers with more control over the component's behavior, such as handling input validation and managing state changes.</p>
                    </div>
                </div>

                <div tabIndex={0} className="collapse collapse-open border border-base-300 bg-base-100 rounded-box mt-8 mb-8">
                    <div className="collapse-title text-xl font-medium">
                        Q2: How to validate React props using PropTypes?
                    </div>
                    <div className="collapse-content">
                        <p tabIndex={0} > Ans: PropTypes is a library in React that allows developers to verify the type and structure of props that are passed to a component. To utilize PropTypes, first import the library at the top of the file. Then, define the PropTypes for each prop being passed to the component using the propTypes object.</p>
                    </div>
                </div>

                <div tabIndex={0} className="collapse collapse-open border border-base-300 bg-base-100 rounded-box mt-8 mb-8">
                    <div className="collapse-title text-xl font-medium">
                        Q3: Tell us the difference between nodejs and express js.
                    </div>
                    <div className="collapse-content">
                        <p tabIndex={0} > Ans:
                            Node.js is a software platform that allows developers to execute JavaScript code on the server-side. In contrast, Express.js is a web application framework that is built on top of Node.js, and it provides additional functionalities and features for building web applications.</p>
                    </div>
                </div>

                <div tabIndex={0} className="collapse collapse-open border border-base-300 bg-base-100 rounded-box mt-8 mb-8">
                    <div className="collapse-title text-xl font-medium">
                        Q4: What is a custom hook, and why will you create a custom hook?
                    </div>
                    <div className="collapse-content">
                        <p tabIndex={0} > Ans: Custom hooks in React are functions that can be reused across multiple components, allowing developers to extract and share logic and avoid code duplication. Custom hooks can help to improve code readability and maintainability by encapsulating complex logic and making it more modular. By creating custom hooks, developers can also abstract away implementation details and create a more declarative and expressive API for their components.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;
