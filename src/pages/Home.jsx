import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DataTable from 'react-data-table-component';
import './Home.css'

const Home = () => {

   const [day,SetDay] = useState('');
   const [month,SetMonth] = useState('');
   const [year,SetYear] = useState('');
   const [time,SetTime] = useState('');




   const date =()=>{
      const currentDate = new Date();

      const day = currentDate.getDate();
      SetDay(day)
      const month = currentDate.getMonth() + 1; // Months are zero-indexed, so we add 1
      SetMonth(month)
      const year = currentDate.getFullYear();
      SetYear(year)
      const time = currentDate.toLocaleTimeString();
      SetTime(time)
   }
   useEffect(()=>{
      date()
   },[])

   return (<>
   <div className='main_info'>
    <div className='second_card'>
      <div >
         <p>5 Team</p>
      </div>
      <button className='btn btn-success rounded button'>By A New NUmbers!</button>
    </div>
    <div className='main_card'>
      <p>Expiring Soon 0</p>
      <p>Expired</p>
      <p>Trial</p>
    </div>
   </div>
   <div className='Insights_main'>
      <div className='Insights'>
      <div >
         <p>Insights</p>
         <select>
            <option>Today</option>
            <option>Yesterday</option>
            <option>This Week</option>
            <option>This Month</option>
            <option>Custom Time Perioud</option>
         </select>
      </div>
      <div className='date_time'>
         <div>
               <button onClick={date} className='btn btn-success rounded button'>
               <i class="fas fa-light fa-arrows-rotate"></i>  Reffresh</button>
         </div>
         <div>
            <div>Last Updated On :</div>
            <span>{day}/{month}/{year}  {time}</span>
         </div>
      </div>
      </div>
      <div className='call_card'>
         <div className='call'>
         <h3>Call</h3>
            <div className='call_info'>
                  <div >
                     <div>Outgoing Calls : 33</div>
                     <div>Received Calls : 18</div>
                     <div>Total Talk Time Calls : 6</div>
                     <div>Avg. Outgoing Call Duration : 53s</div>
                  </div>
                  <div>
                     <div>Incoming Call : 33</div>
                     <div>Connected Calls : 18</div>
                     <div>Missed Calls : 6</div>
                     <div>Avg. Incoming Call Duration : 0s</div>
                  </div>
            </div>
         </div>
      </div>
      <div className='Customber'>
      <div className='call'>
      <h3>Customber</h3>
         <div className='call_info'>
            <div>
               <div>Unique Customber: 33</div>
               <div> New Custombers : 6</div>
            </div>
            <div>
               <div> New Custombers : 6</div>
            </div>
         </div>
      </div>
      <div className='view_detailsh'>
         <button className='btn btn-success rounded '>View Details Insight</button>
      </div>
      </div>
   </div>
   </>)
};

export default Home;