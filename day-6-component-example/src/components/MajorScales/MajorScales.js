import { Heading } from "./Heading";

export const MajorScales = (props) => {
  return (
    <div>
      <Heading />
      <p>Pentatonic Scale</p>
      <p>Harmonic Scale</p>
      <button onClick={() => props.setPageNumber(1)}>Prev Page</button>
      {/* <button onClick={() => props.setPageNumber(3)}>Next Page</button> */}
    </div>
  );
};
