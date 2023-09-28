import "./index.css";

import { GoBell, GoCloudOffline, GoDatabase } from "react-icons/go";
import Button from "./Button";

function App() {
    const clickHandler = () => {
        console.log("clicked!!");
    };
    return (
        <div>
            <div>
                <Button danger className="mb-5" onClick={clickHandler}>
                    <GoBell />
                    Click Me
                </Button>
            </div>
            <div>
                <Button warning onMouseEnter={clickHandler}>
                    <GoCloudOffline />
                    Buy Now
                </Button>
            </div>
            <div>
                <Button success>
                    <GoDatabase />
                    Test
                </Button>
            </div>
            <div>
                <Button secondary>Anther button</Button>
            </div>
            <div>
                <Button primary>And Anther button</Button>
            </div>
        </div>
    );
}

export default App;
