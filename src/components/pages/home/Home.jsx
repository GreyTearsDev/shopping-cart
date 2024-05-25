import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <h1>EXPLORE OUR STORE</h1>

      <Link to="products">
        <button>Shop now</button>
      </Link>
    </>
  );
}
