import React, { useState,useEffect } from 'react';
import BreadCrump from './ui/BreadCrump';
const NotificationUI: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [notifications] = useState([
    {
        id: 1,
        title: "Annual General Meeting",
        description: "The annual general meeting will be held on the 25th of June.",
        date: "20-06-2024"
    },
    {
        id: 2,
        title: "Onam Celebrations",
        description: "Join us for Onam celebrations on the 10th of September.",
        date: "22-09-2024"
    },
    {
        id: 3,
        title: "Cultural Program: Kathakali Performance",
        description: "Experience the mesmerizing art of Kathakali on the 15th of July.",
        date: "29-07-2024"
    },
    {
        id: 4,
        title: "Community Health Camp",
        description: "Free health check-ups and consultations available on the 5th of August.",
        date: "28-08-2023"
    },
    {
        id: 5,
        title: "Educational Seminar: Career Guidance",
        description: "Learn about career options and opportunities on the 20th of October.",
        date: "22-10-2020"
    },
    {
        id: 6,
        title: "Sports Day: Annual Cricket Tournament",
        description: "Participate in our annual cricket tournament on the 12th of August.",
        date: "21-08-2020"
    },
    {
        id: 7,
        title: "Cultural Festival: Kerala Piravi",
        description: "Celebrate Kerala Piravi with traditional music, dance, and cuisine on the 1st of November.",
        date: "24-11-2023"
    },
    {
        id: 8,
        title: "Charity Drive: Clothes Donation Campaign",
        description: "Donate clothes for the less fortunate. Collection drive on the 8th of September.",
        date: "20-09-2020"
    }
  ]);

  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const filteredNotifications = notifications.filter(notification =>
    notification.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    notification.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  
  

  return (
    <section id="notification" className="notifications">
      <div className="container">
        <div className="section-title">
        <BreadCrump items={["Notifications"]} />
          <h2>Notifications</h2>
          <input
            type="text"
            placeholder="Search notifications..."
            value={searchTerm}
            onChange={handleSearchChange}
            style={{ width: '100%', padding: '10px', marginTop: '10px', marginBottom: '20px' }}
          />
        </div>
      </div>
      <div>
        <section className="section-50">
        
          <div className="containerp-3">
            <h3 className="m-b-50 heading-line">Latest Notifications <i className="fa fa-bell text-muted"></i></h3>
            <div className="notification-ui_dd-content">
              {filteredNotifications.map(notification => (
                <div key={notification.id} className={`notification-list ${notification? 'notification-list--read' : 'notification-list--unread'}`}>
                  <div className="notification-list_content">
                    <div className="notification-list_detail">
                      <p>{notification.title}</p>
                      <p className="text-muted">{notification.description}</p>
                      <p style={{fontFamily:"sans-serif"}} className="text-muted"><b><small>{notification.date}</small></b></p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center">
              <a href="#" className="btn btn-success">Load more activity</a>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default NotificationUI;
