import "./aside.css"

export function AsideLeft(){

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
                    <li>Gaming</li>
                    <li>Sport</li>
                    <li>Business</li>
                    <li>Crypto</li>
                    <li>Television</li>
                    <li>Celebrity</li>
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

