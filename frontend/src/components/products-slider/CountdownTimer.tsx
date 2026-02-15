import { useEffect, useState } from "react";

interface CountdownTimerProps {
  /** Total countdown duration in seconds */
  initialSeconds: number;
}

export const CountdownTimer: React.FC<CountdownTimerProps> = ({
  initialSeconds,
}) => {
  const [timeLeft, setTimeLeft] = useState<number>(initialSeconds);

  useEffect(() => {
    if (timeLeft <= 0) return;

    const intervalId = window.setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => window.clearInterval(intervalId);
  }, [timeLeft]);

  const hours = String(Math.floor(timeLeft / 3600)).padStart(2, "0");
  const minutes = String(
    Math.floor((timeLeft % 3600) / 60)
  ).padStart(2, "0");
  const seconds = String(timeLeft % 60).padStart(2, "0");

  return (
    <div className="flex items-center gap-x-2">
      <span className="timer-box">{seconds}</span>
      <p className="text-white">:</p>
      <span className="timer-box">{minutes}</span>
      <p className="text-white">:</p>
      <span className="timer-box">{hours}</span>
    </div>
  );
};
