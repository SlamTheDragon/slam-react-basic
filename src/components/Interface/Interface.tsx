import logo from "../../assets/images/logo192.png"

/**
 * 
 * @description This is your main interface, all components shall pass through here
 * 
 * @returns Interface
 */
export default function Interface() {
    return (
        <div className="interface">
            <img src={logo} alt="logo" />
            <h1>
                Hello World!
            </h1>
        </div>
    );
}