import React, { useState } from 'react';
import axios from 'axios';
import moment from 'moment';
import { Link } from 'react-router-dom';

const Medications = () => {
  const [medications, setMedications] = useState([]);
  const [medicationId, setMedicationId] = useState('');
  const [medicationName, setMedicationName] = useState('');
  const [medicationDosage, setMedicationDosage] = useState('');
  const [medicationSchedule, setMedicationSchedule] = useState('');

  const addMedication = () => {
    const newMedication = {
      id: medicationId,
      name: medicationName,
      dosage: medicationDosage,
      schedule: moment(medicationSchedule, 'YYYY/MM/DD').format('YYYY-MM-DDTHH:mm:ss'),
    };

    setMedications([...medications, newMedication]);

    setMedicationId('');
    setMedicationName('');
    setMedicationDosage('');
    setMedicationSchedule('');

    axios
      .post('http://localhost:8080/medications', newMedication)
      .then(response => {
        console.log('Medication saved:', response.data);
        const scheduleTime = moment(newMedication.schedule);
        const currentTime = moment();
        const timeDifference = scheduleTime.diff(currentTime);

        if (timeDifference > 0) {
          setTimeout(() => {
            alert(`It's time to take medication: ${newMedication.name}`);
          }, timeDifference);
        }
      })
      .catch(error => {
        console.error('Error saving medication:', error);
      });
  };

  return (
    <div className='maindiv' style={{marginLeft:"1vw"}}>
      <div style={{  textAlign:"center",fontSize:"large"}}><b>Add Medication</b><hr></hr></div>
     
      <div style={{marginTop:"0vw"}}>
      <div>
        <label>Medication ID:</label>
        <input className='div1'   type="text" value={medicationId} onChange={e => setMedicationId(e.target.value)} />
      </div>
      <div>
        <label>Medication Name:</label>
        <input  className='div2' type="text" value={medicationName} onChange={e => setMedicationName(e.target.value)} />
      </div>
      <div>
        <label>Medication Dosage:</label>
        <input className='div3' type="text" value={medicationDosage} onChange={e => setMedicationDosage(e.target.value)} />
      </div>
      <div>
        <label>Medication Schedule:</label>
        <input className='div4' type="text" value={medicationSchedule} onChange={e => setMedicationSchedule(e.target.value)} />
      </div>
      </div>
      <div style={{fontSize:"large",height:"4vw"}}><button className='addmedbtn' onClick={addMedication}>Add Medication + </button></div>
      

      <div style={{ textAlign:"center",fontSize:"large"}}><b>Recently Added</b><hr></hr></div>
      <div style={{ textAlign:"center",fontSize:"small"}}> add medication to view list</div>
      {medications.map((medication, index) => (
        <div className='addmedlist' key={index}>
          <p>ID: {medication.id}</p>
          <p>Name: {medication.name}</p>
          <p>Dosage: {medication.dosage}</p>
          <p>Schedule: {medication.schedule}</p>
          <hr />
        </div>
      ))}
      
      <Link to="/ElderlyCompanionApp">
        <button className='btn'>Navigate to Daily Reminders</button>
      </Link>

      <Link to="/EmergencyContacts">
        <button className='btn'>Navigate to Emergency Contacts</button>
      </Link>
    </div>
  );
};

export default Medications;





















// import React, { useState } from 'react';
// import axios from 'axios';
// import moment from 'moment';

// const Medications = () => {
//   const [medications, setMedications] = useState([]);
//   const [medicationId, setMedicationId] = useState('');
//   const [medicationName, setMedicationName] = useState('');
//   const [medicationDosage, setMedicationDosage] = useState('');
//   const [medicationSchedule, setMedicationSchedule] = useState('');

//   const addMedication = () => {
//     const newMedication = {
//       id: medicationId,
//       name: medicationName,
//       dosage: medicationDosage,
//       schedule: moment(medicationSchedule, 'YYYY/MM/DD').format('YYYY-MM-DDTHH:mm:ss'),
//     };

//     setMedications([...medications, newMedication]);

//     // Reset input fields
//     setMedicationId('');
//     setMedicationName('');
//     setMedicationDosage('');
//     setMedicationSchedule('');

//     // Send POST request to the Spring Boot backend
//     axios.post('http://localhost:8080/medications', newMedication)
//     .then(response => {
//       console.log('Medication saved:', response.data);
//       // Perform any additional logic after successfully saving the medication
//       const scheduleTime = moment(newMedication.schedule);
//       const currentTime = moment();
//       const timeDifference = scheduleTime.diff(currentTime);

//       if (timeDifference > 0) {
//         setTimeout(() => {
//           alert(`It's time to take medication: ${newMedication.name}`);
//         }, timeDifference);
//       }
   
//     })

//     .catch(error => {
//       console.error('Error saving medication:', error);
//       // Handle the error as needed
//     });
//   };

//   return (
//     <div>
//       <h2>Add Medication</h2>
//       <div>
//         <label>Medication ID:</label>
// </div>         <input type="text" value={medicationId} onChange={(e) => setMedicationId(e.target.value)} />
     
//       <div>
//         <label>Medication Name:</label>
//         <input type="text" value={medicationName} onChange={(e) => setMedicationName(e.target.value)} />
//       </div>
//       <div>
//         <label>Medication Dosage:</label>
//         <input type="text" value={medicationDosage} onChange={(e) => setMedicationDosage(e.target.value)} />
//       </div>
//       <div>
//         <label>Medication Schedule:</label>
//         <input type="text" value={medicationSchedule} onChange={(e) => setMedicationSchedule(e.target.value)} />
//       </div>
//       <button onClick={addMedication}>Add Medication</button>

//       <h2>Medication List</h2>
//       {medications.map((medication, index) => (
//         <div key={index}>
//           <p>ID: {medication.id}</p>
//           <p>Name: {medication.name}</p>
//           <p>Dosage: {medication.dosage}</p>
//           <p>Schedule: {medication.schedule}</p>
//           <hr />
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Medications;
