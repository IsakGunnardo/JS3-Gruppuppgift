import "./aside.css";
import { useState } from "react";

export function AsideLeft(){
    
    const [toggle, setToggle] = useState(true);
    const handleClick = () => {
        setToggle(!toggle);
      };

    return (
        <aside className="sidebar-left">
            <section>
                <ul className="sidebar-left-ul">
                    <li>Popular</li>
                </ul>
            </section>
            <section>
            <h6>TOPICS</h6>

                <ul className="sidebar-left-ul">
                    <li onClick={handleClick} className="sidebar-left-ul-toggle">Gaming
                        <ul className="sidebar-ul-toggle"  style={{ display: toggle ? 'block' : 'none' }}>
                            <li>  hello </li>
                            <li>  hello </li>
                            <li>  hello </li>
                            <li>  hello </li>
                            <li>  hello </li>

                        </ul>
                    </li>
                    <li>Sport
                    <ul className="sidebar-ul-toggle"></ul>

                    </li>
                    <li>Business
                    <ul className="sidebar-ul-toggle"></ul>

                    </li>
                    <li>Crypto
                    <ul className="sidebar-ul-toggle"></ul>

                    </li>
                    <li>Television
                    <ul className="sidebar-ul-toggle"></ul>

                    </li>
                    <li>Celebrity
                    <ul className="sidebar-ul-toggle"></ul>

                    </li>
                    <button className="sidebar-left-button">See more</button>
                </ul>
            </section>
            <section>
            <h6>RESOURCES</h6>

                <ul className="sidebar-left-ul">
                    <li>About Reddit</li>
                    <li>Advertise</li>
                    <li>Help</li>
                    <button className="sidebar-left-button">See more</button>

                </ul>

                <p>Reddit, inc. © 2023. All rights reserved.</p>
            </section>
        </aside>
    )
}