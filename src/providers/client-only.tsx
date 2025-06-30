"use client";

import { useEffect, useState } from "react";

/**
 * Komponen ini memastikan children-nya hanya di-render di sisi client,
 * setelah komponen berhasil di-mount. Ini mencegah hydration mismatch.
 */
export function ClientOnly({ children }: { children: React.ReactNode }) {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    // Selama di server atau sebelum mount, jangan render apa-apa (atau tampilkan skeleton)
    return null;
  }

  return <>{children}</>;
}
