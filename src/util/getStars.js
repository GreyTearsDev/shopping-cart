export default function getStars(rate) {
    let stars = "";
    for (let i = 0; i < 5; i++) {
      if (rate === null || rate === undefined) return;
      (i < (rate)) ? stars += "★" : stars += "☆";
    }
    return stars;
  }
