import { useSelector } from "react-redux";

export default function Counter() {
  const count = useSelector((state) => {
    return state.count;
  });

  return (
    <div>
      <h2>Count- {count.value} </h2>

      <button>+1</button>
      <button>-1</button>
    </div>
  );
}
