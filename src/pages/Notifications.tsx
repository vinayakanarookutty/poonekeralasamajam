import NewHeader from "../components/NewHeader";
import "../css/notifications.css";
import NotificationCards from "../components/NotificationCards";
// import Footer from "../components/Footer";
// import for data
import notifications_data from "../data/notifications.json";
import Footer from "../components/Footer";

function Notifications() {
    const data = notifications_data.notification;
    console.log(data);

    return (
        <>
            {/* Header */}
            <NewHeader />
            <div className="notifications-container  pt-5">
                {/* Headings */}
                <div className="notification-heading">
                    <p className="notification-title"> Notifications</p>
                    <p className="notification-subheading">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quisquam ullam quidem, delectus sed possimus tenetur,
                        expedita, id corrupti aliquid dolorem facilis totam
                        repellendus asperiores veritatis! Quia vitae placeat
                        suscipit expedita.
                    </p>
                </div>

                {/* Content */}
                <div className="d-flex justify-content-center align-items-center">
                    <div className="notification-content ">
                        {data.map((items) => (
                            <NotificationCards items={items} />
                        ))}
                    </div>
                </div>
            </div>
            {/* <Footer /> */}
            <Footer />
        </>
    );
}

export default Notifications;
