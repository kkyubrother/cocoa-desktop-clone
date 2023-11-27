export function durationConvert(duration) {
  if (typeof duration === "string") {
    let multi = -1;
    if (duration.endsWith("ms")) multi = 1;
    else if (duration.endsWith("s")) multi = 1000;
    else throw Error("알 수 없는 형식");

    return parseFloat(duration) * multi;
  } else if (typeof duration === "number") {
    if (Number.isNaN(duration) || Number.isFinite(duration))
      throw Error("값 오류");

    return `${duration}ms`;
  }
  throw Error("타입 오류");
}
