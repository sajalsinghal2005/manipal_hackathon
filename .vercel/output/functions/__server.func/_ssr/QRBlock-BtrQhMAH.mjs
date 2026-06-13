import { j as jsxRuntimeExports } from "../_libs/react.mjs";
function QRBlock({ size = 180, seed = "hostelx" }) {
  const grid = 21;
  const cells = [];
  let h = 0;
  for (let i = 0; i < seed.length; i++) h = h * 31 + seed.charCodeAt(i) >>> 0;
  for (let i = 0; i < grid * grid; i++) {
    h = h * 1103515245 + 12345 >>> 0;
    cells.push((h & 1) === 1);
  }
  const isFinder = (r, c) => {
    const inBox = (r0, c0) => r >= r0 && r < r0 + 7 && c >= c0 && c < c0 + 7;
    if (!(inBox(0, 0) || inBox(0, grid - 7) || inBox(grid - 7, 0))) return null;
    const lr = inBox(0, 0) ? r : inBox(0, grid - 7) ? r : r - (grid - 7);
    const lc = inBox(0, 0) ? c : inBox(0, grid - 7) ? c - (grid - 7) : c;
    if (lr === 0 || lr === 6 || lc === 0 || lc === 6) return true;
    if (lr >= 2 && lr <= 4 && lc >= 2 && lc <= 4) return true;
    return false;
  };
  const s = size / grid;
  return /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { width: size, height: size, viewBox: `0 0 ${size} ${size}`, className: "rounded-xl bg-white p-2", children: Array.from({ length: grid }).map(
    (_, r) => Array.from({ length: grid }).map((_2, c) => {
      const f = isFinder(r, c);
      const on = f ?? cells[r * grid + c];
      if (!on) return null;
      return /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: c * s, y: r * s, width: s, height: s, fill: "#0b1226", rx: s * 0.15 }, `${r}-${c}`);
    })
  ) });
}
export {
  QRBlock as Q
};
