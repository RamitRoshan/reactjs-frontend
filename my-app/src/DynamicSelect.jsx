/* eslint-disable react-hooks/exhaustive-deps */
// import { useEffect, useState } from "react";

// export default function DynamicSelect() {

//     const clients = [      
//   {
//     id: 1,
//     name: "Acme Corporation",
//   },
//   {
//     id: 2,
//     name: "TechNova Solutions",
//   },
//   {
//     id: 3,
//     name: "GreenField Organics",
//   }
// ];


// const projects = [
//   {
//     id: 101,
//     title: "Inventory Management System",
//     budget: 50000,
//     status: "In Progress",
//     clientId: 1
//   },
//   {
//     id: 102,
//     title: "Company Website Redesign",
//     budget: 15000,
//     status: "Completed",
//     clientId: 1
//   },
//   {
//     id: 103,
//     title: "Mobile App Development",
//     budget: 80000,
//     status: "In Progress",
//     clientId: 2
//   },
//   {
//     id: 104,
//     title: "Cloud Migration",
//     budget: 60000,
//     status: "Pending",
//     clientId: 2
//   },
//   {
//     id: 105,
//     title: "Organic Supply Chain Platform",
//     budget: 45000,
//     status: "Planning",
//     clientId: 3
//   }
// ];

//     const [selectedClientId, setSelectedClientId] =  useState("");
//     const [projectId, setProjectId] = useState({});

//     //reset projects, when client changes
//     useEffect(() => { 
//         // eslint-disable-next-line react-hooks/set-state-in-effect
//         setProjectId("");
//     }, [selectedClientId]);
 
  

    
//     //using filter on projects based on selected client
//     const filteredProjects = projects.filter(
//     project => project.clientId === Number(selectedClientId)
//     );

    


//     return (
//         <div>
//             <h2>Select Client -</h2>

//             <select value={selectedClientId} 
//             onChange={e => setSelectedClientId(e.target.value)}>
//                 <option value="">Select client</option>
//                 {clients.map((ele) => {
//                     return <option key={ele.id} value={ele.id}>client name: {ele.name}
//                     </option>
//                 })}
//             </select>

//             <h2>Select Project -</h2>

//             {/* disabled until client selected */}
//             <select disabled ={!selectedClientId}
//             value={projectId} 
//             onChange={e => setProjectId(e.target.value)}>
//                 <option value="">Select Project</option>

//                 {filteredProjects.map((ele) => {
//                     return <option key={ele.id} value={ele.id}>Projects: {ele.title}
//                     </option>
//                 })}
//             </select>
            
//         </div>

//     );
// }


import { useState, useEffect } from 'react'; 

export default function DynamicSelect() {

    const [selectedClientId, setSelectedClientId] = useState(""); 
    const [selectedProjectId, setSelectedProjectid] = useState(""); 
    const [clientProjects, setClientProjects] = useState([]); 


    const clients = [
  {
    id: 1,
    name: "Acme Corporation",
  },
  {
    id: 2,
    name: "TechNova Solutions",
  },
  {
    id: 3,
    name: "GreenField Organics",
  }
    ];

    const projects = [
  {
    id: 101,
    title: "Inventory Management System",
    budget: 50000,
    status: "In Progress",
    clientId: 1
  },
  {
    id: 102,
    title: "Company Website Redesign",
    budget: 15000,
    status: "Completed",
    clientId: 1
  },
  {
    id: 103,
    title: "Mobile App Development",
    budget: 80000,
    status: "In Progress",
    clientId: 2
  },
  {
    id: 104,
    title: "Cloud Migration",
    budget: 60000,
    status: "Pending",
    clientId: 2
  },
  {
    id: 105,
    title: "Organic Supply Chain Platform",
    budget: 45000,
    status: "Planning",
    clientId: 3
  }
    ];

    useEffect(() => {
        if(selectedClientId) {
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setSelectedProjectid(""); 
            const result = projects.filter(ele => ele.clientId == selectedClientId); 
            setClientProjects(result); 
        }
    }, [selectedClientId]); 

    // helper function 
    const getClient = (clientId) => {
        return clients.find(ele => ele.id == clientId); 
    }

    // helper function 
    const getProject = (projectId) => {
        return projects.find(ele => ele.id == projectId); 
    }

    return (
        <div>
            <h2>Dynamic Select</h2>
            <div>
                <label>Select Client : </label>
                <select value={selectedClientId} onChange={e => setSelectedClientId(e.target.value)}>
                    <option value="">Select</option>
                    { clients.map((ele) => {
                        return <option key={ele.id} value={ele.id}> { ele.name } </option>
                    })}
                </select>
            </div>
            <div>
                <label>Select Project :</label>
                <select value={selectedProjectId} onChange={e => setSelectedProjectid(e.target.value)} disabled={selectedClientId == ""}>
                    <option value="">Select</option>
                    {clientProjects.map((ele) => {
                        return <option key={ele.id} value={ele.id}> { ele.title }</option>
                    })}
                </select>
                { (selectedClientId && selectedProjectId) && <p>You have selected client {getClient(selectedClientId)?.name} and project { getProject(selectedProjectId)?.title}  </p>}
            </div>
        </div>
    )
}