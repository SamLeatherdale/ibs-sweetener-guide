import { WifiOff } from "lucide-react";

export default function OfflinePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-4 px-6 text-center bg-background">
      <div className="p-4 rounded-2xl bg-muted">
        <WifiOff size={32} className="text-muted-foreground" />
      </div>
      <div>
        <h1 className="text-lg font-semibold text-foreground">You are offline</h1>
        <p className="text-sm text-muted-foreground mt-1 max-w-xs">
          Visit the app while online first to cache all sweetener pages for offline use.
        </p>
      </div>
    </main>
  );
}
