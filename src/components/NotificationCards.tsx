import { Card } from "flowbite-react";
import "../css/notifications.css";
// import for Modals
import { Button, Modal } from "flowbite-react";
import { useState } from "react";

function NotificationCards({ items }) {
    const [openModal, setOpenModal] = useState(false);

    console.log(items);

    return (
        <>
            <div className="d-flex px-5 justify-content-center align-items-center ">
                <Card
                    className="notification-cards"
                    imgSrc={`${items.img}`}
                    style={{ width: "20rem" }}
                    onClick={() => setOpenModal(true)}
                >
                    <h1 className="text-2xl flex flex-col font-bold tracking-tight text-gray-900 dark:text-white">
                        {items.title}
                    </h1>
                    <p className="notification-cards-description">
                        {items.description.substring(0, 100) + "..."}
                    </p>
                </Card>
            </div>

            <Modal
                dismissible
                show={openModal}
                onClose={() => setOpenModal(false)}
            >
                <Modal.Header>
                    <div className="w-full flex flex-col">
                        <p> {items.title}</p>
                        <p
                            style={{
                                color: "grey",
                                fontSize: "16px",
                                letterSpacing: "1.75px",
                            }}
                        >
                            {" "}
                            {items.dated}
                        </p>
                    </div>
                </Modal.Header>
                <Modal.Body>
                    <div className="space-y-6">
                        <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                            {items.description}
                        </p>
                    </div>
                </Modal.Body>
                <Modal.Footer className="flex justify-end">
                    <Button onClick={() => setOpenModal(false)}>Ok</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default NotificationCards;
