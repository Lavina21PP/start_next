import { cookies } from 'next/headers';
import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async () => {
  const store = await cookies();
  const supportedLanguages = ["lo", "en", "th"];

  let locale = store.get('locale')?.value || 'en';

  // ตรวจสอบว่า locale อยู่ใน supportedLanguages หรือไม่
  if (!supportedLanguages.includes(locale)) {
    locale = 'en';
  }

  const messages = (await import(`../../messages/${locale}.json`)).default;

  return {
    locale,
    messages
  };
});
