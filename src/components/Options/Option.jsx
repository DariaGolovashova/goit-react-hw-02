import Notification from "../Notification/Notification";
import css from "./Option.module.css";
export default function Option({
  updateFeedback,
  totalFeedback,
  resetFeedback,
}) {
  return (
    <div className={css.selection}>
      <button className={css.button} onClick={() => updateFeedback("good")}>
        <span className={css.text}> Good</span>
      </button>
      <button className={css.button} onClick={() => updateFeedback("neutral")}>
        <span className={css.text}> Neutral</span>
      </button>

      <button className={css.button} onClick={() => updateFeedback("bad")}>
        <span className={css.text}> Bad</span>
      </button>
      {totalFeedback > 0 && (
        <button className={css.button} onClick={resetFeedback}>
          <span className={css.text}> Reset</span>
        </button>
      )}
    </div>
  );
}
