  // TODO: Add three test buttons so you can verify every part of your error
  // handling is wired up correctly. Each button targets a different handler:
  //
  // 1. "Crash on next render" → flips a useState flag that causes a child
  //    component to `throw new Error(...)` during render.
  //    => should be caught by <ErrorBoundary>
  //
  // 2. "Unhandled promise rejection" → onClick creates a `Promise.reject(...)`
  //    with no .catch().
  //    => should be caught by the window 'unhandledrejection' listener
  //
  // 3. "Throw from setTimeout" → onClick schedules a setTimeout callback
  //    that throws.
  //    => should be caught by the window 'error' listener
  //
  // After clicking each one, check the console — every error should be
  // prefixed with [error] (your logger), proving it flowed through logger.error.

import { useState } from "react";
import { ErrorBoundary } from "./ErrorBoundary";

  function CrashOnRender() {
    try {
      throw new Error ('Crash during render.');
    } catch (e) {
      console.error(`${e.name}: ${e.message}`)
    }
  }

  function CrashButton() {
    const [crash, setCrash] = useState(false);
    if (crash) return <CrashOnRender />

    return(
      <button onClick={() => {setCrash(true)
        console.log("error 1")
      }}>test #1 </button>
    )
  }


export function IndexPage() {

  return (
    <main className="min-h-screen bg-background">
      <h1 className="text-4xl font-bold">Verkefni 12</h1>
      <p className="mt-2 text-gray-600">
        TODO: Add crash test buttons here (see comments in IndexPage.tsx).
      </p>
      <ErrorBoundary><CrashButton /></ErrorBoundary>
      
      <button onClick={() => {
         Promise.reject()
      }}> test #2 </button>
      <button onClick={() => {
         console.log("error 3")
      }}> test #3</button>
    </main>
  );
}
