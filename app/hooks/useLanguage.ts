import { useContext, Context } from "react";

export function useLanguage<T = unknown>({ LanguageContext }: { LanguageContext: Context<T> }) {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used inside LanguageProvider');
  return ctx;
}