// import { useSelector } from "react-redux"

// export default function Account() {

//     const {_id, username, email} = useSelector((state) => {
//         return state.auth.user;
//     });

//   return (
//     <div style={{maxWidth:'600px', margin:'2rem auto', padding:'2rem'}}>
//         <h1 style={{marginBottom:'2rem', textAlign:'center' }}>Account Information</h1>

//         {/* <div style={{
//             backgroundColor: '#f5f5f5',
//             padding: '2rem',
//             borderRadius: '8px',
//             boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
//         }}>
//             <h3>ID - {_id}</h3>
//             <h3>Username - {username}</h3>
//             <h3>Email - {email}</h3>
//         </div> */}
//             <h3>ID - {_id}</h3>
//             <h3>Username - {username}</h3>
//             <h3>Email - {email}</h3>
//     </div>
//   )
// }


import { useSelector } from "react-redux";

export default function Account() {

  const user = useSelector((state) => state.auth.user);

  if (!user) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h3>ID - {user._id}</h3>
      <h3>Username - {user.username}</h3>
      <h3>Email - {user.email}</h3>
    </div>
  );
}


 