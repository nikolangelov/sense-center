import emailjs from '@emailjs/browser';
import { createSignal, createEffect, Show, onMount } from 'solid-js';
import Cookies from 'js-cookie';

declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

const GA_MEASUREMENT_ID = 'G-PWPSS6VWF1'; // Replace with your actual GA4 Measurement ID

const CookieConsent = () => {
  const [showBanner, setShowBanner] = createSignal(true);
  const [showSettings, setShowSettings] = createSignal(false);
  const [cookiePreferences, setCookiePreferences] = createSignal({
    necessary: true,
    functional: false,
    analytics: false,
    advertising: false,
    thirdParty: false
  });

  const loadGoogleAnalytics = () => {
    const script = document.createElement('script');
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    script.async = true;
    document.head.appendChild(script);

    script.onload = () => {
      window.dataLayer = window.dataLayer || [];
      window.gtag = function () { window.dataLayer.push(arguments); }
      window.gtag('js', new Date());
      window.gtag('config', GA_MEASUREMENT_ID, { 'anonymize_ip': true });
    };
  };

  const removeGoogleAnalytics = () => {
    Cookies.remove('_ga');
    Cookies.remove('_gat');
    Cookies.remove('_gid');
    window.gtag && window.gtag('config', GA_MEASUREMENT_ID, { 'send_page_view': false });
    const gaScript = document.querySelector(`script[src^="https://www.googletagmanager.com/gtag/js"]`);
    if (gaScript) {
      gaScript.remove();
    }
  };

  onMount(() => {
    if (typeof window !== 'undefined') {
      const savedPreferences = Cookies.get('cookiePreferences');
      if (savedPreferences) {
        const preferences = JSON.parse(savedPreferences);
        setCookiePreferences(preferences);
        setShowBanner(false);
        if (preferences.analytics) {
          loadGoogleAnalytics();
        }
      } else {
        setShowBanner(true);
      }
    }
  });

  onMount(() => {
    console.log("Component mounted");
    setShowBanner(true);
  });

  const savePreferences = () => {
    Cookies.set('cookiePreferences', JSON.stringify(cookiePreferences()), { expires: 365 });
    setShowBanner(false);
    setShowSettings(false);
    applyPreferences();
  };

  const acceptAll = () => {
    setCookiePreferences({
      necessary: true,
      functional: true,
      analytics: true,
      advertising: true,
      thirdParty: true
    });
    savePreferences();
  };

  const applyPreferences = () => {
    const preferences = cookiePreferences();
    Cookies.set('necessary_cookie', 'true', { expires: 30 });

    if (preferences.functional) {
      Cookies.set('functional_cookie', 'true', { expires: 30 });
    } else {
      Cookies.remove('functional_cookie');
    }

    if (preferences.analytics) {
      Cookies.set('analytics_cookie', 'true', { expires: 30 });
      loadGoogleAnalytics();
    } else {
      Cookies.remove('analytics_cookie');
      removeGoogleAnalytics();
    }

    if (preferences.advertising) {
      Cookies.set('advertising_cookie', 'true', { expires: 30 });
    } else {
      Cookies.remove('advertising_cookie');
    }

    if (preferences.thirdParty) {
      Cookies.set('third_party_cookie', 'true', { expires: 30 });
    } else {
      Cookies.remove('third_party_cookie');
    }
  };

  const CookieCategory = (props: { title: string; description: string; name: 'necessary' | 'functional' | 'analytics' | 'advertising' | 'thirdParty'; }) => (
    <div class="flex flex-col">
      <h4 class="mb-1 mt-2 line-height-6 sm-line-height-6 md-line-height-8 font-size-4 md-font-size-4.5">{props.title}</h4>
      <div class="flex flex-row flex-items-center">
        <input
          class="mr-4 mb-0 flex flex-items-center"
          type="checkbox"
          checked={cookiePreferences()[props.name]}
          disabled={props.name === 'necessary'}
          onChange={(e) => setCookiePreferences({ ...cookiePreferences(), [props.name]: e.target.checked })}
        />
        <p class="text-left word-spacing-widest mb-0 mt-0 flex flex-items-center line-height-5 sm-line-height-6 md-line-height-8 md-font-size-4 font-size-3.2">{props.description}</p>
      </div>
    </div>
  );

  return (
    <>
      <Show when={showBanner()}>
        <div class="fixed inset-0 justify-center items-center z-50">
          <div class="fixed bottom-0 bg-paper rounded-lg shadow-lg w-full flex flex-row flex-justify-between flex-items-center h-18">
            <p class="mb-0 font-size-4.2 ml-8 pb-2">Този сайт използва бисквитки за подобряване на вашето преживяване.</p>
            <div class="flex flex-justify-between flex-items-center mr-15">
              <button class="b-solid b-2 b-brand b-rd-1 bg-brand hover-bg-brand-second-action-hover:hover transition-colors hover-b-brand-second-action-hover:hover font-700 font-size-3.5 uppercase c-paper cursor-pointer mr-2 py-1.5 px-5 line-height-normal" onClick={() => setShowSettings(false)}>Разбирам</button>
              <button class="b-solid b-2 b-brand b-rd-1 bg-paper hover-b-brand-second-action-hover:hover hover-c-brand-second-action-hover:hover transition-colors font-700 font-size-3.5 uppercase c-brand cursor-pointer mr-2 py-1.5 px-5 line-height-normal" onClick={() => setShowSettings(true)}>Настройки на бисквитките</button>
              <a href="/cookie-policy" target="_blank" class="b-solid b-2 b-brand b-rd-1 bg-paper hover-b-brand-second-action-hover:hover hover-c-brand-second-action-hover:hover transition-colors font-700 font-size-3.5 uppercase c-brand cursor-pointer mr-5 py-1.5 px-5 font-sans line-height-normal text-center" style="font-family:'Arial'">Пълна политика за бисквитките</a>
            </div>
          </div>
        </div>
      </Show>

      <Show when={showSettings()}>
        <div class="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50 mt-20 botom-0">
          <div class="bg-paper px-10 pt-8 pb-6 rounded-lg shadow-lg w-11/12 md:w-3/4 lg:w-2/3">
            <h2 class="mb-0 md-mb-8 md-mt-3 mt-0 line-height-7 sm-line-height-6 md-line-height-8 font-size-6 md-font-size-10">Настройки на бисквитките</h2>

            <CookieCategory
              name="necessary"
              title="Строго необходими бисквитки"
              description="Тези бисквитки са необходими за функционирането на сайта и не могат да бъдат изключени."
            />

            <CookieCategory
              name="functional"
              title="Функционални бисквитки"
              description="Тези бисквитки позволяват на уебсайта да предостави подобрена функционалност и персонализация."
            />

            <CookieCategory
              name="analytics"
              title="Аналитични бисквитки"
              description="Тези бисквитки ни помагат да разберем как посетителите взаимодействат с уебсайта."
            />

            <CookieCategory
              name="advertising"
              title="Рекламни бисквитки"
              description="Тези бисквитки се използват за показване на релевантни реклами."
            />

            <CookieCategory
              name="thirdParty"
              title="Бисквитки на трети страни"
              description="Тези бисквитки се задават от външни услуги, които добавяме към страниците."
            />

            <div class="flex justify-center md-justify-end gap-3 mt-1 md-mt-0 pt-0">
              <button class="b-solid b-2 b-brand b-rd-1 bg-brand hover-bg-brand-second-action-hover:hover transition-colors hover-b-brand-second-action-hover:hover font-700 font-size-2.7 md-font-size-4 uppercase c-paper cursor-pointer py-1.5 md-py-3.5 px-4 md-px-5 mt-4 md-mt-10 line-height-4" onClick={savePreferences}>Запази настройки</button>
              <button class="b-solid b-2 b-brand b-rd-1 bg-paper hover-c-brand-second-action-hover:hover transition-colors hover-b-brand-second-action-hover:hover font-700 font-size-2.7 md-font-size-4 uppercase c-brand cursor-pointer py-1.5 md-py-3.5 px-4 md-px-5 mt-4 md-mt-10 line-height-4" onClick={acceptAll}>Приеми всички</button>
              <button class="b-solid b-2 b-brand b-rd-1 bg-paper hover-c-brand-second-action-hover:hover transition-colors hover-b-brand-second-action-hover:hover font-700 font-size-2.7 md-font-size-4 uppercase c-brand cursor-pointer py-1.5 md-py-3.5 px-4 md-px-5 mt-4 md-mt-10 line-height-4" onClick={() => setShowSettings(false)}>Затвори</button>
            </div>
          </div>
        </div>
      </Show>
    </>
  );
};

function FleurDivider() {
  return (
    <div class="m-auto my-30 md-my-36 position-relative w-80%">
      <div class="divider-shadow overflow-hidden h-0.5 after-block::after after-w-full::after after-h-6::after after-mx-auto::after after-mt--6::after"></div>
      <div class="w-11 h-11 position-absolute position-bottom--6 left-47% bg-#f7f7f7"><img class="position-absolute max-w-7 mx-1.8" src="/assets/output-onlinepngtools.png" /></div>
    </div>
  );
}

export const ContactUs = () => {
  let form: HTMLFormElement;

  const sendEmail = (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    emailjs
      .sendForm('service_itrkdyn', 'template_0180wcp', form, 'THs2MxEeIfIAlmqdZ')
      .then(
        () => {
          const element = document.getElementById("id01");
          if (element) {
            element.innerHTML = "Success!";
          }
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );
  };

  return (
    <div class="mt-20 py-8 px-5 md-px-14 bg-paper b-rd-3 mx-auto" style="box-shadow: 0px 0px 20px 5px rgb(84 89 95 / 10%);">

      <form id="id01" class="flex-gap-5 flex flex-col py-5" ref={el => form = el as HTMLFormElement} onSubmit={sendEmail}>

        <input type="text" name="from_name" placeholder="Name:" class="mt-3 bg-gray-1 b-none w-full p-3 b-rd-1 c-paper-inv font-serif font-size-4" style="box-shadow: 0 1px 2px rgba(0, 0, 0, .12) inset;" required />

        <input type="email" name="email_id" placeholder="E-mail:" class="bg-gray-1 b-none w-full p-3 b-rd-1 c-paper-inv font-serif font-size-4" style="box-shadow: 0 1px 2px rgba(0, 0, 0, .12) inset;" required />

        <textarea name="message" placeholder="Message:" class="bg-gray-1 b-none w-full pt-3 pl-3 pb-30 b-rd-1 c-paper-inv font-serif font-size-4" style="box-shadow: 0 1px 2px rgba(0, 0, 0, .12) inset;" />

        <input type="submit" value="Send" class="cursor-pointer py-4 mt-7 px-10 bg-brand b-none c-paper b-rd-2 w-full uppercase font-800 font-size-5" style="letter-spacing: 1px;" />

      </form>
    </div>
  );
};

export default function Page() {
  return (
    <>
      <h1 class="mt-17 font-size-14 md-font-size-16 md-line-height-18 line-height-16">Feedback</h1>

      <div class="mt-20 py-8 px-8 md-px-14 b-rd-3 bg-paper line-height-8 text-justify font-size-4.4" style="box-shadow: 0px 0px 20px 5px rgb(84 89 95 / 10%);">If you have suggestions on how we can improve, please do not hesitate to leave us feedback! Your opinion is very valuable to us and it will be read directly by the owner.</div>

      <ContactUs />

      <FleurDivider></FleurDivider>

      <form action="https://formsubmit.co/nikol.angelov396@abv.bg" method="post">
        <input type="text" name="name" required></input>
        <input type="email" name="email" required></input>
        <button type="submit">Send</button>
      </form>

      <CookieConsent />
    </>
  );
}
