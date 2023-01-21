export default function Shimmer() {
  const boxUi = [];
  for (let i = 0; i < 50; i++) {
    boxUi.push(
      <div
      key={i}
        className="card"
        style={{ height: "200px", width: "200px", background: "lightgray" }}
      ></div>
    );
  }

  return (
    <>
      <div className="cards-container">{boxUi}</div>
    </>
  );
}
