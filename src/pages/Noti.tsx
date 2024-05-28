import NotificationTable from "../components/NotificationTable"
import BreadCrump from '../components/ui/BreadCrump';
function Noti() {
//   const data = [
//   {
//     title: 'Water Supply Disruption',
//     message: 'There will be a water supply disruption on 2024-06-01 due to maintenance work. Please store adequate water in advance.',
//     date: '25-05-2024',
//   },
//   {
//     title: 'Annual Meeting',
//     message: 'The annual residents meeting is scheduled for 2024-06-05 at 4:00 PM in the community hall. All residents are requested to attend.',
//     date: '22-05-2024',
//   },
//   {
//     title: 'Garbage Collection',
//     message: 'Due to a public holiday, garbage collection will be postponed to 2024-06-03. Please ensure your waste is properly segregated.',
//     date: '20-05-2024',
//   },

//   {
//     title: 'Power Outage Notice',
//     message: 'There will be a scheduled power outage on 2024-06-10 from 10:00 AM to 2:00 PM for maintenance work. We apologize for any inconvenience caused.',
//     date: '23-06-2024',
//   },
//   {
//     title: 'Festival Celebration',
//     message: 'Join us for the Onam celebration on 2024-08-21 at 5:00 PM in the community park. There will be traditional games and a grand feast.',
//     date: '22-08-2024',
//   },
//   {
//     title: 'Yoga Classes',
//     message: 'Free yoga classes will be conducted every Saturday at 7:00 AM in the clubhouse. All residents are welcome to join.',
//     date: '29-06-2024',
//   },
//   {
//     title: 'Swimming Pool Maintenance',
//     message: 'The swimming pool will be closed for maintenance from 2024-06-15 to 2024-06-20. Please plan accordingly.',
//     date: '10-06-2024',
//   },
//   {
//     title: 'Book Club Meeting',
//     message: 'The next book club meeting will be held on 2024-06-18 at 6:00 PM in the library. The book for discussion is "The Alchemist" by Paulo Coelho.',
//     date: '12-06-2024',
//   },
//   {
//     title: 'Community Cleanup Drive',
//     message: 'Join us for a community cleanup drive on 2024-06-12 at 8:00 AM. Let’s work together to keep our neighborhood clean and green.',
//     date: '11-06-2024',
//   },
// ];

  return (
    <div className='h-screen'>
      
          <div  style={{ backgroundImage: `url(${Image})`,marginTop:"2%" }} className="section-title">
          <h2>Notifications</h2>
          <BreadCrump items={["Notification"]} />
          <p className='mt-3'>
            PKS is a powerhouse in sports and philanthropy. They host events like
            the Ball Badminton Tournament and support International Women's Day with
            aid for the needy. During crises, they step up, providing substantial
            help during floods, earthquakes, and the Covid-19 pandemic. Their ongoing
            support for medical and educational needs showcases their commitment to
            making a difference in people's lives.
          </p>
          
        </div>
{/* <NotificationTable data={data}/> */}


    </div>
  )
}

export default Noti