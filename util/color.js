const userColors = [
  {
    main: "#94bfe7",
    sub: "#c3dbf1",
  },
  {
    main: "#8fcbdd",
    sub: "#c1e2ec",
  },
  { main: "#a1b6e9", sub: "#cbd6f2" },
];
export function getRandomUserColor() {
  return userColors[Math.floor(Math.random() * userColors.length)];
}
