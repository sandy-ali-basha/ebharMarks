import React, { useState } from 'react';

function Slides({ children }) {
    const [active, setActive] = useState(0);

    return (
        <div className='bg'>
            <div
                className="slides"
            >
                {children.map((child, index) => {
                    if (index === active) {
                        return React.cloneElement(
                            child,
                            {
                                className: child.props.className + ' active',
                                style: { ...child.props.style, display: 'block' }
                            }
                        );
                    }
                    return React.cloneElement(
                        child,
                        {
                            style: { ...child.props.style, display: 'none' }
                        }
                    );
                })}
            </div>

            <ul className="dots">
                {children.map((child, index) => (
                    <li
                        className={`${index === active ? 'active' : ''}`}
                        style={{
                            transform: index === active ?
                                (index === children.length - 1 ? "translateY(-30px)" : index === 0 && "translateY(30px)")
                                : (index <= active ? "translateY(-5vh)" : "translateY(5vh)"),
                        }}
                    >
                        <button onClick={() => setActive(index)}>
                            {child.props.title} {/* Display the slide name */}
                        </button>
                    </li>
                ))}

            </ul >
        </div >
    );
}

export default Slides