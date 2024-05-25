import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <h1>EXPLORE OUR STORE</h1>
      <button>
        <Link to="products">Shop now</Link>
      </button>
    </>
  );
}
