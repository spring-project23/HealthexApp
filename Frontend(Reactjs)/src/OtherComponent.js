
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Medications from './Medications';
import './Medications.css';

const OtherComponent = () => {
  const [medications, setMedications] = useState([]);
  const [showMedications, setShowMedications] = useState(false);

  const fetchMedicationList = () => {
    axios.get('http://localhost:8080/medications')
      .then(response => {
        setMedications(response.data);
        setShowMedications(true); 
      })
      .catch(error => {
        console.error('Error fetching medication list:', error);
      });
  };

  const handleToggleMedications = () => {
    setShowMedications(!showMedications);
  };

  return (
    <div className="medications-container">
      <div>
      <nav className="navbar">
        <h1 className="navbar-title">Healthex</h1>
        {/* <button className="navbar-button" onClick={fetchMedicationList}>
          Get All Medications
        </button> */}
      </nav>
      </div>

      <div>
        <Medications medications={medications} />

        {showMedications && (
          <div  className='meddata' >
            <div style={{}}>
            <div style={{ marginLeft:"1.5vw", width:"50%",border:"1px solid red,display:inline-block",float:'left'}}>
            <h2>Medication Data:</h2></div>
            <div  style={{width:"50%",border:"1px solid red,display:inline-block",float:'right'}}>
            </div>
        </div>
            {showMedications && (
          <button className='btn' onClick={handleToggleMedications}>
            Hide Medications
          </button>
        )}
        
            {medications.map(medication => (
              <div  style={{marginLeft:"1.5vw"}} key={medication.id}>
                <p>ID: {medication.id}</p>
                <p>Name: {medication.name}</p>
                <p>Dosage: {medication.dosage}</p>
                <p>Schedule: {medication.schedule}</p>
                <hr />
              </div>
            ))}
          </div>
        )}

        {!showMedications && (
          <p style={{marginLeft:"2.3vw"}}>Click "Get All Medications" to fetch data.</p>
        )}

{/* <button className="navbar-button" onClick={fetchMedicationList}>
          Get All Medications
        </button> */}
        {!showMedications && (
         <button   style={{marginLeft:"2.2vw"}}e className="btn" onClick={fetchMedicationList}>
         Get All Medications
       </button>
        )}

        {/* {showMedications && (
          <button onClick={handleToggleMedications}>
            Hide Medications
          </button>
        )} */}
      </div>
    </div>
  );
};

export default OtherComponent;






















// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import Medications from './Medications';
// import './Medications.css';

// const OtherComponent = () => {
//   const [medications, setMedications] = useState([]);
//   const [showMedications, setShowMedications] = useState(false);

//   useEffect(() => {
//     fetchMedicationList();
//   }, []);

//   const fetchMedicationList = () => {
//     axios.get('http://localhost:8080/medications')
//       .then(response => {
//         setMedications(response.data);
//       })
//       .catch(error => {
//         console.error('Error fetching medication list:', error);
//       });
//   };

//   const handleToggleMedications = () => {
//     setShowMedications(!showMedications);
//   };

//   return (
//     <div>
//       <nav className="navbar">
//         <h1 className="navbar-title">Health Care App</h1>
//         <button className="navbar-button" onClick={fetchMedicationList}>
//           Get All Medications
//         </button>
//       </nav>

//       <div className="medications-container">
//         <Medications medications={medications} />

//         <h2>Medication Data:</h2>
//         {showMedications && (
//           <div>
//             {medications.map(medication => (
//               <div key={medication.id}>
//                 <p>ID: {medication.id}</p>
//                 <p>Name: {medication.name}</p>
//                 <p>Dosage: {medication.dosage}</p>
//                 <p>Schedule: {medication.schedule}</p>
//                 <hr />
//               </div>
//             ))}
//           </div>
//         )}

//         <button onClick={handleToggleMedications}>
//           {showMedications ? 'Hide Medications' : 'Show Medications'}
//         </button>
//       </div>
//     </div>
//   );
// };

// export default OtherComponent;















// import React, { useState, useEffect } from 'react';
// import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
// import axios from 'axios';
// import Medications from './Medications';
// import MedicationList from './MedicationList';
// import './Medications.css';

// const OtherComponent = () => {
//   const [medications, setMedications] = useState([]);

//   useEffect(() => {
//     fetchMedicationList();
//   }, []);

//   const fetchMedicationList = () => {
//     axios
//       .get('http://localhost:8080/medications')
//       .then(response => {
//         setMedications(response.data);
//       })
//       .catch(error => {
//         console.error('Error fetching medication list:', error);
//       });
//   };

//   return (
//     <Router>
//       <div>
//         <nav className="navbar">
//           <h1 className="navbar-title">Health Care App</h1>
//           <button className="navbar-button" onClick={fetchMedicationList}>
//             Get All Medications
//           </button>
//         </nav>

//         <Switch>
//           <Route exact path="/">
//             <Medications medications={medications} />
//           </Route>
//           <Route path="/medication-list">
//             <MedicationList medications={medications} />
//           </Route>
//         </Switch>
//       </div>
//     </Router>
//   );
// };

// export default OtherComponent;














// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import Medications from './Medications';
// import './Medications.css';

// const OtherComponent = () => {
//   const [medications, setMedications] = useState([]);

//   useEffect(() => {
//     fetchMedicationList();
//   }, []);

//   const fetchMedicationList = () => {
//     axios.get('http://localhost:8080/medications')
//       .then(response => {
//         setMedications(response.data);
//       })
//       .catch(error => {
//         console.error('Error fetching medication list:', error);
//       });
//   };

//   return (
//     <div>
//       <nav className="navbar">
//         <h1 className="navbar-title">Health Care App</h1>
//         <button className="navbar-button" onClick={fetchMedicationList}>Get All Medications</button>
//       </nav>

//       <div className="medications-container">
//         <Medications medications={medications} />

//         <h2>Medication Data:</h2>
//         {medications.map(medication => (
//           <div key={medication.id}>
//             <p>ID: {medication.id}</p>
//             <p>Name: {medication.name}</p>
//             <p>Dosage: {medication.dosage}</p>
//             <p>Schedule: {medication.schedule}</p>
//             <hr />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default OtherComponent;



































// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import Medications from './Medications';
// import './Medications.css';

// const OtherComponent = () => {
//   const [medications, setMedications] = useState([]);

//   useEffect(() => {
//     fetchMedicationList();
//   }, []);

//   const fetchMedicationList = () => {
//     axios.get('http://localhost:8080/medications')
//       .then(response => {
//         setMedications(response.data);
//       })
//       .catch(error => {
//         console.error('Error fetching medication list:', error);
//       });
//   };

//   return (
//     <div>
//       <nav className="navbar">
//         <h1 className="navbar-title">Health Care App</h1>
//         <button className="navbar-button" onClick={fetchMedicationList}>Get All Medications</button>
//       </nav>

//       <div className="medications-container">
//         <Medications medications={medications} />
//       </div>
//     </div>
//   );
// };

// export default OtherComponent;
