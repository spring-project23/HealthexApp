import React from 'react';
import { useParams } from 'react-router-dom';

const MedicationDetails = ({ medications }) => {
  const { id } = useParams();

  const medication = medications.find(med => med.id === id);

  if (!medication) {
    return <p>Medication not found.</p>;
  }

  return (
    <div>
      <h2>Medication Details</h2>
      <p>ID: {medication.id}</p>
      <p>Name: {medication.name}</p>
      <p>Dosage: {medication.dosage}</p>
      <p>Schedule: {medication.schedule}</p>
    </div>
  );
};

export default MedicationDetails;
