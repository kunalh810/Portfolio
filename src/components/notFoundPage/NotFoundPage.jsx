// src/components/NotFoundPage.js
import React from 'react';
import './notFoundPage.css';

const NotFoundPage = () => {
    return (
        <section className="notFoundPage section" id="notFoundPage">
            <h2 className="section__title">404 Not Found</h2>
            <span className="section__subtitle">The page you are looking for does not exist.</span>
        </section>
    );
};

export default NotFoundPage;
