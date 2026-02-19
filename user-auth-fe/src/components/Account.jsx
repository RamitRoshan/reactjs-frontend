// import { useSelector } from "react-redux";

// export default function Account() {

//   const user = useSelector((state) => state.auth.user);

//   if (!user) {
//     return <p>Loading...</p>;
//   }

//   return (
//     <div>
//       <h3>ID - {user._id}</h3>
//       <h3>Username - {user.username}</h3>
//       <h3>Email - {user.email}</h3>
//     </div>
//   );
// }

import { useSelector } from "react-redux";

export default function Account() {

  const user = useSelector((state) => state.auth.user);

  if (!user) {
    return <p style={{ fontSize: "18px", textAlign: "center" }}>Loading...</p>;
  }

  return (
    <div
      style={{
        maxWidth: "500px",
        margin: "50px auto",
        padding: "25px",
        borderRadius: "10px",
        boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
        backgroundColor: "#f9fafb",
        textAlign: "center"
      }}
    >
      <h3 style={{ color: "#353e43", marginBottom: "15px" }}>
        ID - {user._id}
      </h3>

      <h3 style={{ color: "#353e43", marginBottom: "15px" }}>
        Username - {user.username}
      </h3>

      <h3 style={{ color: "#353e43" }}>
        Email - {user.email}
      </h3>
    </div>
  );
}



 