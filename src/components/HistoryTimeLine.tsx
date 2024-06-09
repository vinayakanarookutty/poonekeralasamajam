import "../css/home.css";
import pooneHistory1 from "../assets/img/History/PoonemHistory1.jpg"
import pooneHistory2 from "../assets/img/History/poonehistory2001.jpg"
import pooneHistory3 from "../assets/img/History/poonemhistory2.jpg"
import pooneHistory4 from "../assets/img/History/annualday2008.jpg"
import pooneHistory5 from "../assets/img/pks_bckgrnd.jpg"
import pooneHistory6 from "../assets/img/History/womensday2023.jpg"
import BreadCrump from './ui/BreadCrump';
import {  useEffect } from "react";
function HistoryTimeLine() {
// Scroll to the top when the component mounts
useEffect(() => {
  window.scrollTo(0, 0);
}, []);


  return (
    <div className=' max-w-screen overflow-hidden'>
       
      <div className="container_history">
      <BreadCrump items={["History-Timeline"]} />
        <h2 className="mt-5">History</h2>
      
        <p className='mt-5'>
          In pre-Independence days, the population of Pune (then known as Poona) was hardly 2 to 3 lakhs including a few thousands of Malayalees, mainly bachelors,  employed at different Central  Government establishments and  residing at different parts of Pune (Poona). If there was a  concentration (if at all it can be  called a concentration) of a few hundreds of Malayalees, it was at  places like Rasta Peth and Kirkee  (now known as Khadki). The  reason for this concentration of  Malayalees at these places was  that there were a few lodge-cum- eateries run by Malayalees  providing food and shared accommodation at an affordable  cost of less than Rs.50/- per  month/per person.
        </p>
        <p>A few  years after its birth, Poona Keraleeya Samaj (popularly known as PKS) was bifurcated into two separate organizations – one named as ‘East Poona Kerala Samaj’, which was set up Kirkee (Khadki) and the other continued to be known as ‘Poona Keraleeya Samaj’ and remained at its original place at 356, Rasta Peth, where it continues to exist even today.  Poona Keraleeya Samaj was registered with the Charity Commissioner, Pune Region, as a Charitable and Social Organization in the year 1944 under Registration No…….</p>
      </div>

      <div className="history_timeline">
        <div className='timeline_container right_image'>
          <img src={pooneHistory1} alt='amazon'></img>
        </div>
        <div className="timeline_container left-container">

          <div className={`text-box relative`} style={{
            background: `linear-gradient(rgba(0,0,0,1) 0%, rgba(255,255,255,0) 100%),url('${pooneHistory1}')`
          }}  >
            {/* background  */}
            <div className='background w-full h-full absolute top-0 left-0 rounded-[10px] z-10' ></div>
            <div className='relative z-40'>
              <h2> Formation of ‘PKS’</h2>
              <p>1964</p>
              <p>In the past, Central Government employees in Pune earned less than Rs.100 per month.
                Many Malayalees in Pune sent money home to Kerala, leaving little for entertainment.
                Lacking a common place to socialize, some decided to form the 'Poona Keraleeya Samaj'
                in late 1930 at 356, Rasta Peth. Later, the group split into 'East Poona Kerala Samaj'
                in Kirkee and 'Poona Keraleeya Samaj' at Rasta Peth. In 1944, Poona Keraleeya Samaj was
                registered as a charitable and social organization.
              </p>
            </div>
            <span className='left-container-arrow'></span>
          </div>
        </div>
        <div className='timeline_container left_image'>
          <img src={pooneHistory2} alt='amazon'></img>
        </div>
        <div className="timeline_container right-container">

          <div className={`text-box relative `} style={{  background: `linear-gradient(rgba(0,0,0,1) 0%, rgba(255,255,255,0) 100%),url('${pooneHistory2}')` }}>
            {/* background  */}
            <div className='background w-full h-full absolute top-0 left-0 rounded-[10px] z-10' ></div>
            <div className='z-20 relative'>
              <h2> Event Felicitation of Padmashree Mohanlal</h2>
              <p>2002</p>
              <p>The Poona Keraleeya Samaj organized a grand felicitation event to honor the renowned actor Padmashree Mohanlal.
                This celebration recognized Mohanlal's outstanding contributions to Indian cinema and his exceptional talent.
                The event was a significant occasion for the Malayalee community in Pune, providing an opportunity to celebrate
                one of their most illustrious cultural icons. The gathering was marked by heartfelt speeches,
                cultural performances, and a deep sense of pride and admiration for Mohanlal's achievements".
              </p>
            </div>
            <span className='right-container-arrow'></span>
          </div>
        </div>
        <div className='timeline_container right_image'>
          <img src={pooneHistory3} alt='amazon'></img>
        </div>
        <div className="timeline_container left-container">
          <div className={`text-box relative`} style={{  background: `linear-gradient(rgba(0,0,0,1) 0%, rgba(255,255,255,0) 100%),url('${pooneHistory3}')` }}>
            {/* background  */}
            <div className='background w-full h-full absolute top-0 left-0 rounded-[10px] z-10' ></div>
            <div className='z-20 relative'>
              <h2> Onam Celebration</h2>
              <p>2007</p>
              <p>The Poona Keraleeya Samaj organized a vibrant Onam celebration, bringing together the Malayalee community
                in Pune for a day of cultural festivity and joy. The event featured traditional Onam rituals,
                a grand feast (Onam Sadhya), and a variety of cultural performances including music, dance,
                and traditional games. The celebration showcased the rich heritage and customs of Kerala,
                fostering a sense of unity and nostalgia among the attendees. It was a memorable occasion filled with laughter,
                camaraderie, and the shared joy of the harvest festival"
              </p>
            </div>
            <span className='left-container-arrow'></span>
          </div>
        </div>

        <div className='timeline_container left_image'>
          <img src={pooneHistory4} alt='amazon'></img>
        </div>

        <div className="timeline_container right-container">
          <div className={`text-box relative`} style={{  background: `linear-gradient(rgba(0,0,0,1) 0%, rgba(255,255,255,0) 100%),url('${pooneHistory4}')` }}>
            {/* background  */}
            <div className='background w-full h-full absolute top-0 left-0 rounded-[10px] z-10' ></div>
            <div className='z-20 relative'>
              <h2> 45th Anniversary Day And Onam Celebration</h2>
              <p>2008</p>
              <p>The Poona Keraleeya Samaj hosted a grand event combining their Annual Day and Onam celebration,
                emphasizing both the community’s achievements and cultural heritage.
                The Annual Day segment recognized notable contributions from members,
                celebrated milestones, and highlighted the Samaj’s initiatives and successes over the past year.
                This was followed by the vibrant Onam festivities, featuring traditional dances, music, skits,
                and a sumptuous Onam Sadhya feast. The event was a joyful fusion of reflection and celebration,
                strengthening community bonds and honoring Kerala’s rich cultural traditions.
              </p>
            </div>
            <span className='right-container-arrow'></span>
          </div>
        </div>

        <div className='timeline_container right_image'>
          <img src={pooneHistory5} alt='amazon'></img>
        </div>

        <div className="timeline_container left-container">
          <div className={`text-box relative `} style={{  background: `linear-gradient(rgba(0,0,0,1) 0%, rgba(255,255,255,0) 100%),url('${pooneHistory5}')` }}>
            {/* background  */}
            <div className='background w-full h-full absolute top-0 left-0 rounded-[10px] z-10' ></div>
            <div className='relative z-20'>
              <h2> 46th Anniversary Day And Onam Celebration</h2>
              <p>2022</p>
              <p>The Poona Keraleeya Samaj's Annual Day and Onam celebration was a grand affair,
                marked by the presence of distinguished guests, including cine artist Arjun Radhakrishnan
                and Health Minister Shailaja. The Annual Day segment honored the community's achievements
                and showcased notable contributions from its members over the past year. The Onam festivities
                were equally vibrant, featuring traditional dances, music, skits, and the delectable Onam Sadhya feast.
                The presence of the esteemed guests added to the event's prestige, making it a memorable occasion
                that celebrated both community accomplishments and the rich cultural heritage of Kerala's"
              </p>
            </div>
            <span className='left-container-arrow'></span>
          </div>
        </div>
        <div className='timeline_container left_image'>
          <img src={pooneHistory6} alt='amazon'></img>
        </div>
        <div className="timeline_container right-container">
          <div className={`text-box relative `} style={{  background: `linear-gradient(rgba(0,0,0,1) 0%, rgba(255,255,255,0) 100%),url('${pooneHistory6}')` }}>
            {/* background  */}
            <div className='background w-full h-full absolute top-0 left-0 rounded-[10px] z-10' ></div>
            <div className='relative z-20'>
              <h2> Womens Day Celebration</h2>
              <p>2023</p>
              <p>The Poona Keraleeya Samaj organized a special Women's Day celebration, graced by the
                esteemed presence of cine artist Sreelatha Namboothiri. The event highlighted the empowerment
                and achievements of women within the community through inspiring speeches and cultural performances.
                As part of their commitment to social welfare, the Samaj also conducted charitable activities,
                distributing wheelchairs, clothing, and other essential resources to those in need. This celebration
                not only honored women's contributions but also reinforced the Samaj's dedication to
                community service and support.
              </p>
            </div>
            <span className='right-container-arrow'></span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HistoryTimeLine;