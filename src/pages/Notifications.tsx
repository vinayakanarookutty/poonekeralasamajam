import { TextInput } from "flowbite-react";
import "../css/notifications.css";
import notifications_data from "../data/notifications.json";
import NotificationCards from "../components/NotificationCards";
import NewHeader from "../components/NewHeader";
import Footer from "../components/Footer";

function Notifications() {
    const data = notifications_data.notification;
    console.log(data);

    return (
        <>
            <NewHeader />
            <div className="event-container">
                <div className="event-header">
                    <p>Events </p>
                    <TextInput
                        className="event-search"
                        placeholder="Search for Events"
                    />
                </div>

                <div className="event-contents">
                    <div className="event-upcomming">
                        <p> Upcomming Events</p>
                        <div className="event-cards">
                            {data.map((items) => (
                                <NotificationCards items={items} />
                            ))}
                        </div>
                    </div>

                    <div className="event-completed">
                        <p> Completed Events</p>
                        <div className="event-cards">
                            {data.map((items) => (
                                <NotificationCards items={items} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Notifications;
