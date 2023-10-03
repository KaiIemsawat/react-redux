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

    return (
        <div>
            <Button onClick={clickHandler} primary>
                Open Modal
            </Button>
            {showModal && modal}
        </div>
    );
}

export default ModalPage;
