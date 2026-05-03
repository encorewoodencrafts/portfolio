"use client";

import * as React from "react";

/**
 * Captures the time at which a form is mounted, for use as a passive
 * "minimum form fill time" signal in {@link spamCheck}.
 *
 * Why a hook (and not just `useRef(Date.now())`)?
 *   - Calling `Date.now()` during render is impure (lint rule
 *     `react-hooks/purity`), and accessing `ref.current` from a render-time
 *     callback (`handleSubmit(onSubmit)`) trips `react-hooks/refs`.
 *   - This hook stamps the ref inside a mount effect, and exposes a stable
 *     `getMountedAt()` reader plus a `reset()` for re-arming the ref after a
 *     successful submission.
 */
export function useFormTimestamp() {
  const ref = React.useRef<number | null>(null);

  React.useEffect(() => {
    ref.current = Date.now();
  }, []);

  // Stable reader / resetter — both close over the ref, so they don't change
  // between renders and don't read `ref.current` during render either.
  const api = React.useMemo(
    () => ({
      getMountedAt: () => ref.current,
      reset: () => {
        ref.current = Date.now();
      },
    }),
    []
  );

  return api;
}
