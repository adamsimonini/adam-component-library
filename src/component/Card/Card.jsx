import React from 'react'
export const Card = ({ title, description, imageSrc }) => {
    return (
        <section className="card">
            <div>{title}</div>
            <div>{description}</div>
            <img src={imageSrc} alt="image alt text" />
        </section>
    )
}
