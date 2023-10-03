import Button from "../components/Button";

import { GoBell, GoCloudOffline, GoDatabase } from "react-icons/go";

function ButtonPage() {
    const clickHandler = () => {};
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

export default ButtonPage;
