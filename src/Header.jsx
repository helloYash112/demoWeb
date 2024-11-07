export default function Header({ name, image }) {
  return (
    <div id="header">
      <img src={image} alt={name} />
      <h1>{name}</h1>
    </div>
  );
}
