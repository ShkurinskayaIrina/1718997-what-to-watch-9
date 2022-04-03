type Props = {
  onAddReview: () => void;
}

function ButtonShowMore({onAddReview}: Props):JSX.Element {

  return (
    <div className="catalog__more">
      <button className="catalog__button" type="button"
        onClick={(evt) => onAddReview()}
      >
          Show more
      </button>
    </div>
  );
}

export default ButtonShowMore;
