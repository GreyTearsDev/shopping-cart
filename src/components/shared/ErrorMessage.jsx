export default function ErrorMessage({ message = "Error 404: Page not found" }) {
  return <h2>{message}</h2>;
}
