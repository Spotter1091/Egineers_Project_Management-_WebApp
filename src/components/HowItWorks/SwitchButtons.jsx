import { useState } from "react"
import './SwitchButtons.css'

export default function SwitchButtons() {
    const [isLeftButtonOnLeft, setIsLeftButtonOnLeft] = useState(true);

    const handleButtonClick = () => {
        setIsLeftButtonOnLeft(!isLeftButtonOnLeft)

    }

    return (
        <div>
            {isLeftButtonOnLeft ? (
                <div>
                    <button className="button left-button" onClick={handleButtonClick}>For Engineers</button>
                    <button className="button right-button" onClick={handleButtonClick}>Clients</button>
                </div>
            ) : (
                <div>
                    <button className="button right-button" onClick={handleButtonClick}>For Engineers</button>
                    <button className="button left-button" onClick={handleButtonClick}>Clients</button>
                </div>
            )}
        </div>
    );
};
