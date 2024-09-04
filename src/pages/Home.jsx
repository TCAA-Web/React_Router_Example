import { useEffect } from "react";

export function Home() {
  // Eksempel på hvorfor det er vigtigt at huske en return i useEffect
  // også kaldet en cleanup function. Når siden "mountes", vil i intervallet starte.
  // Når siden un-mountes (fjernes fra DOM´en) vil return køre og fjerne intervallet
  useEffect(() => {
    console.log("Home page has mounted");
    let t = 0;

    let timer = setInterval(() => {
      console.log("Timer", (t += 1));
    }, 1000);

    return () => {
      console.log("Home page has un-mounted");
      clearInterval(timer);
    };
  }, []);

  return (
    <div>
      <h1>Home page</h1>
    </div>
  );
}
