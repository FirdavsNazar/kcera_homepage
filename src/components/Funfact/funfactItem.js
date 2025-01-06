import React, { useState, useEffect } from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

function FunfactItem({ counterNumber, counterText }) {
    // State to track visibility of the counter
    const [appear, setAppear] = useState(false);

    // Check visibility of the element
    const visibleChangeHandler = (isVisible) => {
        if (isVisible) {
            setAppear(true);
        }
    };

    
    // Parse the number if it's a string (remove periods)
    const rawNumber = typeof counterNumber === "string"
        ? parseInt(counterNumber.replace(/\./g, ''), 10)  // Remove periods and convert to number
        : counterNumber;  // If it's already a number, just use it

    // Format the number with periods for display purposes
    const formattedCounterNumber = new Intl.NumberFormat('de-DE').format(rawNumber);

    return (
        <div className="col-6 col-md-3 text-center">
            <div className="counter-item">
                <h2 className="counter-number">
                    <CountUp
                        start={appear ? 0 : null}
                        end={rawNumber} // Use the raw number for CountUp animation
                    >
                        {({ countUpRef }) => (
                            <div>
                                <span ref={countUpRef} />
                                <VisibilitySensor
                                    onChange={(isVisible) => visibleChangeHandler(isVisible)}
                                >
                                    <span className="sr-only">+</span>
                                </VisibilitySensor>
                            </div>
                        )}
                    </CountUp>
                </h2>

                <h6 className="counter-txt">{counterText}</h6>
            </div>
        </div>
    );
}

export default FunfactItem;
