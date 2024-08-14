import { useEffect, useState } from 'react';
import '../assets/progressbar.css';

export function ProgressBar() {
  const [startTransition, setStartTransition] =
    useState(false);

  // Start transition after first render and never
  // apply this effect ever again.
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    if (startTransition) {
      return;
    }

    setStartTransition(true);
  });

  return (
    <div className="bar">
      <div
        className={[
          'bar-contents',
          startTransition && 'bar-contents--filled',
        ]
          .filter(Boolean)
          .join(' ')}
      />
    </div>
  );
}

export default function ProgressBars() {
  const [bars, setBars] = useState(0);

  return (
    <div className="wrapper">
      <div>
        <button
          onClick={() => {
            setBars(bars + 1);
          }}>
          Add
        </button>
      </div>
      <div className="bars">
        {Array(bars)
          .fill(null)
          .map((_, index) => (
            <ProgressBar key={index} />
          ))}
      </div>
    </div>
  );
}

