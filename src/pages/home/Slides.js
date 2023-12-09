import React, { useState } from 'react';

function Slides({ children }) {
    const [active, setActive] = useState(0);

    const goPrev = () => {
        if (active > 0) {
            setActive(active - 1);
        }
    };

    const goNext = () => {
        if (active < children.length - 1) {
            setActive(active + 1);
        }
    };

    const percentage = -100 * active + '%';

    return (
        <div>
            <div className="slides" style={{ transform: `translate3d(0, ${percentage}, 0)` }}>
                {children.map((child, index) => {
                    if (index === active) {
                        return React.cloneElement(
                            child,
                            { className: child.props.className + ' active' }
                        );
                    }
                    return child;
                })}
            </div>

            <ul className="dots">
                {children.map((child, index) => (
                    <li
                        className={`${index === active ? 'active' : ''}`}
                        style={{
                            transform: index === active ?
                                (index === children.length - 1 ? "translateY(-30px)" : index === 0 && "translateY(30px)") : (index <= active ? "translateY(-5vh)" : "translateY(5vh)")
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