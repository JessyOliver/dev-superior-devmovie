import { ReactComponent as StarFull} from "assets/img/start-full.svg";
import { ReactComponent as StarHalf} from "assets/img/start-half.svg";
import { ReactComponent as StarEmpty} from "assets/img/start-empty.svg";

import "./styles.css";

type Props = {
  score: number; 
}

type StartProps = {
  fill: number; 
}

// EX:
// getFills(3.5) => [1, 1, 1, 0.5, 0]
// getFills(4.1) => [1, 1, 1, 1, 0.5]
function getFills(score: number) {

  const fills = [0, 0, 0, 0, 0];

  const integerPart = Math.floor(score);

  for (let i = 0; i < integerPart; i++) {
    fills[i] = 1;
  }

  const diff = score - integerPart;
  if (diff > 0) {
    fills[integerPart] = 0.5;
  }

  return fills;
}

function Start( {fill}: StartProps){
  if (fill === 0) {
    return <StarEmpty/>
  }
  else if (fill === 0) {
    return <StarFull/>
  }
  else {
    return <StarHalf/>
  }

}

function MovieStars({score} :Props) {

  const fills = getFills(score);

  return (
    <div className="dsmovie-stars-container">
      <Start fill={fills[0]}/>
      <Start fill={fills[1]}/>
      <Start fill={fills[2]}/>
      <Start fill={fills[3]}/>
      <Start fill={fills[4]}/>
    </div>
  );
}

export default MovieStars;
