import React, { useState, useEffect } from 'react';
import { dataStore } from '../../store/dataStore';
import { useParams } from 'react-router-dom';

function Slides({ children }) {
    const [active, setActive] = useState(0);
    const [display, setDisplay] = dataStore((state) => [
        state.display,
        state.setDisplay,
    ]);

    // Add event listener for wheel event
    useEffect(() => {
        const handleScroll = (e) => {
            if (!display) {
                if (e.deltaY < 0 && active > 0) {
                    setActive(active - 1);
                } else if (e.deltaY > 0 && active < children.length - 1) {
                    setActive(active + 1);
                }
            }
        };

        window.addEventListener('wheel', handleScroll);

        // Clean up event listener on unmount
        return () => {
            window.removeEventListener('wheel', handleScroll);
        };
    }, [active, children.length, display]);

    return (
        <div className='bg'>
            <div className="slides">
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
                        key={index}
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
