"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/src/components/ui";

export default function NotFound() {
  const router = useRouter();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-primary">
      <h1 className="mb-4 text-3xl font-bold text-white tracking-tight sm:text-4xl">
        404 – Page Not Found
      </h1>
      <p className="mb-6 max-w-md text-center text-white font-semibold text-lg">
        The page you’re looking for doesn’t exist or has been moved.
      </p>
      <Button variant="outline" onClick={() => router.replace("/")}>
        Go back home
      </Button>
    </main>
  );
}
