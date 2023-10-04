import Modal from "../components/Modal";
import Button from "../components/Button";
import { useState } from "react";

function ModalPage() {
    const [showModal, setShowModal] = useState(false);

    const clickHandler = () => {
        setShowModal(true);
    };

    const closeHandler = () => {
        setShowModal(false);
    };

    const actionBar = (
        <div>
            <Button onClick={closeHandler} primary>
                I Accept
            </Button>
        </div>
    );

    const modal = (
        <Modal onClose={closeHandler} actionBar={actionBar}>
            <p>Here is an important agreement</p>
        </Modal>
    );

    const dummyParagraph = (
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac
            augue nisl. Etiam congue auctor mattis. Integer odio magna, commodo
            vitae eros eu, blandit commodo ligula. Phasellus eget massa id metus
            cursus elementum. Curabitur iaculis a nibh sit amet viverra. Nunc
            vitae augue ac elit pellentesque mollis efficitur vitae nulla. Orci
            varius natoque penatibus et magnis dis parturient montes, nascetur
            ridiculus mus. Mauris sem augue, sollicitudin et metus tempor,
            aliquet vehicula tellus. Suspendisse sollicitudin tristique quam
            vitae tempor. Sed id velit sed felis sagittis mattis quis vestibulum
            sem. Vivamus at imperdiet augue, sit amet tincidunt purus. Cras
            posuere leo ac vehicula posuere. Curabitur vulputate, enim sit amet
            lacinia ullamcorper, arcu ligula feugiat tortor, non faucibus ex
            risus id nibh. Nam nec pretium sapien. Etiam vestibulum, nisi in
            congue consequat, mi urna convallis orci, in fermentum ante metus at
            enim.
        </p>
    );

    return (
        <div>
            <Button onClick={clickHandler} primary>
                Open Modal
            </Button>
            {showModal && modal}
            {dummyParagraph}
            {dummyParagraph}
            {dummyParagraph}
            {dummyParagraph}
            {dummyParagraph}
            {dummyParagraph}
            {dummyParagraph}
            {dummyParagraph}
            {dummyParagraph}
            {dummyParagraph}
            {dummyParagraph}
            {dummyParagraph}
            {dummyParagraph}
            {dummyParagraph}
        </div>
    );
}

export default ModalPage;
