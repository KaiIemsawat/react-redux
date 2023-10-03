import Modal from "../components/Modal";
import Button from "../components/Button";
import { useState } from "react";

function ModalPage() {
    const [showModal, setShowModal] = useState(false);

    const clickHandler = () => {
        setShowModal(true);
    };
    return (
        <div>
            <Button onClick={clickHandler} primary>
                Open Modal
            </Button>
            {showModal && <Modal />}
        </div>
    );
}

export default ModalPage;
