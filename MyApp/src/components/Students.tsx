//import React from 'react'

export default function EmpSal() {
    const empData = [
      { StudentName: "Ramu", StudentStudentemail: "ramu@gmail.com", Subject: "PYTHON", Marks: 45 },
      { StudentName: "Raju", Studentemail: "raju@gmail.com", Subject: "JAVA", Marks: 35 },
      { StudentName: "Ramya", Studentemail: "ramya@gmail.com", Subject: "C++", Marks: 25 },
      { StudentName: "John", Studentemail: "john@gmail.com", Subject: "ML", Marks: 65 },
      { StudentName: "Abdul", Studentemail: "abdul@gmail.com", Subject: "CLOUD", Marks: 55 },
    
    ];
  
    // () => ()
  
    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">StudentName</th>
              <th scope="col">Studentemail</th>
              <th scope="col">Subject</th>
              <th scope="col">Marks</th>
            </tr>
          </thead>
          <tbody>
            {empData.map(
                (x)=>( 
                <tr>
                    <td>{x.StudentName}</td>
                    <td>{x.Studentemail}</td>
                    <td>{x.Subject}</td>
                    <td>{x.Marks}</td>
                  </tr>
                 )
            )}
           
          </tbody>
        </table>
      </div>
    );
  }