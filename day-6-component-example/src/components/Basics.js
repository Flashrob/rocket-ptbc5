export const Basics = (props) => {
  return (
    <>
      <h1>Ginseng Chicken</h1>
      <button onClick={() => props.setPageNumber(2)}>Next Page</button>
    </>
  );
};
