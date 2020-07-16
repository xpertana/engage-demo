import GRADIANTS from "./GRADIANTS";

export default function genGradiant(name) {
  const colors = GRADIANTS[name] || ["#bf5ae0", "#a811da"];
  const [color1, color2] = colors;
  return (
    <style jsx>{`
      .xpescreen {
        background: ${color2};
        background: -webkit-linear-gradient(to right, ${color1}, ${color2});
        background: linear-gradient(to right, ${color1}, ${color2});
      }
    `}</style>
  );
}
