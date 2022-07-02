import { useEffect } from "react";

export default function useCallApiAfterDelay(
  inputValue: string,
  delay: number = 600
) {
  useEffect(() => {
    const timer = setTimeout(() => {
      if (inputValue !== null && inputValue !== "") {
        return console.log("API call");
      }
    }, delay);
    return () => clearTimeout(timer);
  }, [inputValue]);
}
