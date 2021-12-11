'use strict';

const patients = [
  {id: 1, name: 'charlie brown', birthDate: '1996-08-24'},
  {id: 2, name: 'curt cobem', birthDate: '1950-09-02'},
  {id: 3, name: 'mané garrincha', birthDate: '1900-01-01'}
];


module.exports.getPatients = async (event) => {

  console.log(event)

  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        patients
      },
      null,
      2
    ),
  };
};

module.exports.getPatient = async (event) => {

  console.log(event)

  const { patientId } = event.pathParameters

  const patient = patients.find((patient) => patient.id == patientId)
   
  if(patient === undefined) {
    return {
      statusCode: 404,
      body: JSON.stringify({
        error: "patient not found"
      }, null, 2)
    }
  }


  return {
    statusCode: 200,
    body: JSON.stringify(patient, null, 2),
  };
};
