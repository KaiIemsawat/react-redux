import "bulma/css/bulma.css";

import ProfileCard from "./ProfileCard";

import AlexaImg from "./images/alexa.png";
import CortanaImg from "./images/cortana.png";
import SiriImg from "./images/siri.png";

function App() {
    return (
        <div>
            <section className="hero is-primary">
                <div className="hero-body">
                    <p className="title">
                        <div>Personal Digital Assistantas</div>
                    </p>
                </div>
            </section>

            <div className="container">
                <section className="section">
                    <div className="columns">
                        <div className="column is-4">
                            <ProfileCard
                                title="Alexa"
                                handle="@alexa99"
                                image={AlexaImg}
                                description="Alexa bla bla blaaaaaaa blahhh bla bla baaaaaaaaahhhh"
                            />
                        </div>
                        <div className="column is-4">
                            <ProfileCard
                                title="Cortana"
                                handle="@cortana32"
                                image={CortanaImg}
                                description="Cortana bla bla blaaaaaaa blahhh bla bla baaaaaaaaahhhh"
                            />
                        </div>
                        <div className="column is-4">
                            <ProfileCard
                                title="Siri"
                                handle="@siri01"
                                image={SiriImg}
                                description="Siri bla bla blaaaaaaa blahhh bla bla baaaaaaaaahhhh"
                            />
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default App;
