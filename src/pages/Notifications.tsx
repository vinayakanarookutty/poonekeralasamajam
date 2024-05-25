import "../css/notifications.css";
import NotificationCards from "../components/NotificationCards";
// import Footer from "../components/Footer";
// import for data
import notifications_data from "../data/notifications.json";


function Notifications() {
    const data = notifications_data.notification;
    console.log(data);

    return (
        <>
            {/* Header */}
            {/* <NewHeader /> */}
            <div className="notifications-container  pt-5">
                {/* Headings */}
                <div className="notification-heading justify-between w-75">
                    <p className="notification-title">Events</p>
                    <div>
                        <input
                            type="text"
                            style={{
                                letterSpacing: "3px",
                                borderRadius: "20px",
                                width: " 350px",
                            }}
                            placeholder="Search for any events"
                            className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>

                {/* Content */}
                <div className="" >
                    <h1 className="notification-title">Upcoming Events</h1>
                </div>
                {/* <div className="d-flex justify-content-center align-items-center">
                    <div className="notification-content ">
                        {data.map((items) => (
                            <NotificationCards items={items} />
                        ))}
                    </div>
                </div> */}
            </div>
            {/* <Footer /> */}
            {/* <Footer /> */}
        </>
    );
}

export default Notifications;
