export default function AsideBadge(props) {
  const length = props.length;
  const text = length > 100 ? "+99" : `${length}`;
  const count = text.length;
  return (
    <div
      style={{
        width: `${12 + count * 6}px`,
        height: "18px",
        backgroundColor: "tomato",
        borderRadius: "9px",
        position: "absolute",
        left: `${24 - count * 6 * 0.5}px`,
        top: "10px",
        color: "white",
        fontSize: "12px",
        fontWeight: 600,
        textAlign: "center",
      }}
    >
      {text}
    </div>
  );
}
