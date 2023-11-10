import { create } from "zustand";
import { Subscription } from "@/types/Subscription";

export type LanguageSupported =
    | 'en'
    | 'es'
    | 'fr'
    | 'de'
    | 'bn'
    | 'bho'
    | 'gu'
    | 'hi'
    | 'mr'
    | 'ne'
    | 'pa'
    | 'ru'
    | 'sa'
    | 'ta'
    | 'te'
    | 'ur';

export const LanguageSupportedMap: Record<LanguageSupported, string> = {
    en: "English",
    es: "Spanish",
    de: "German",
    fr: "French",
    bn: "Bengali",
    bho: "Bhojpuri",
    gu: "Gujarati",
    hi: "Hindi",
    mr: "Marathi",
    ne: "Nepali",
    pa: "Punjabi",
    ru: "Russian",
    sa: "Sanskrit",
    ta: "Tamil",
    te: "Telugu",
    ur: "Urdu"
};

interface SubscriptionState {
    subscription: Subscription | null | undefined;
    setSubscription: (subscription: Subscription | null) => void;
}

export const useSubscriptionStore = create<SubscriptionState>((set) => ({
    subscription: undefined,
    setSubscription: (subscription: Subscription | null) => set({subscription}),
}))