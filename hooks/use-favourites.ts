"use client";

import { useCallback, useEffect, useSyncExternalStore } from "react";

const STORAGE_KEY = "ibs-sweetener-favourites";
const EMPTY: string[] = [];

type Listener = () => void;

let favouritesCache: string[] = EMPTY;
let hydrated = false;
const listeners = new Set<Listener>();

function emit() {
  for (const listener of listeners) {
    listener();
  }
}

function readFromStorage(): string[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return EMPTY;
    const parsed: unknown = JSON.parse(raw);
    if (!Array.isArray(parsed)) return EMPTY;
    const ids = parsed.filter((id): id is string => typeof id === "string");
    return ids.length > 0 ? ids : EMPTY;
  } catch {
    return EMPTY;
  }
}

function writeToStorage(ids: string[]) {
  favouritesCache = ids.length > 0 ? ids : EMPTY;
  try {
    if (ids.length === 0) {
      localStorage.removeItem(STORAGE_KEY);
    } else {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(ids));
    }
  } catch (error) {
    console.error("Failed to write to storage:", error);
  }
  emit();
}

function subscribe(listener: Listener) {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

function getSnapshot() {
  return favouritesCache;
}

function getServerSnapshot() {
  return EMPTY;
}

function hydrateFromStorage() {
  if (hydrated) return;
  hydrated = true;
  favouritesCache = readFromStorage();
  emit();
}

export function useFavourites() {
  const favourites = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  useEffect(() => {
    hydrateFromStorage();
  }, []);

  const isFavourite = useCallback((id: string) => favourites.includes(id), [favourites]);

  const toggleFavourite = useCallback((id: string) => {
    hydrateFromStorage();
    const current = favouritesCache;
    const next = current.includes(id) ? current.filter((f) => f !== id) : [...current, id];
    writeToStorage(next);
  }, []);

  return { favourites, isFavourite, toggleFavourite };
}
