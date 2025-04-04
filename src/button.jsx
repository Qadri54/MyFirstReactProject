export default function Button() {
    const buttonstyle = {
        padding : "10px",
        backgroundColor: "black",
        borderRadius: "10px",
        width: "50px",
        height: "auto",
        color: "white",
        textAlign: "center",
        cursor: "pointer",
        hover: "blue"
      }

      return (
        <div style={buttonstyle}>button</div>
      );
}