import { useSelector } from "react-redux";

export default function ShowName() {
  const name = useSelector((state) => {
    return state.name;
  });

  return (
    <div>
      <h2>Show name component - {name.value}</h2>
    </div>
  );
}
