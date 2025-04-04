import Profile from './profil.jsx'
import Button from './button.jsx'

export default function Gallery() {
  const headingstyle = {
    color: "red",
    textAlign: "center",
  }

  const pragrafStyle = {
    color: "blue",
    fontSize: "54px",
    fontWeight:"bold"
  }

  const tambah = (a,b) =>  a+b;
  
  const hasil = tambah(6,5);
  
  return (
    <>
      <h1 style={headingstyle}>Home</h1>
      <Profile />
      <br />
      <a href="#"><Button /></a>
      <p style={pragrafStyle}>{hasil}</p>
    </>
  );
}