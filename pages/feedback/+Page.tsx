import emailjs from '@emailjs/browser';

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

        <input type="submit" value="Send" class="cursor-pointer hover-bg-brand-second-action-hover:hover transition-colors py-4 mt-7 px-10 bg-brand b-none c-paper b-rd-2 w-full uppercase font-800 font-size-5" style="letter-spacing: 1px;" />

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

      <form action="https://formsubmit.co/office@finecarpetcleaning.co.uk" method="post">
        <input type="text" name="name" required></input>
        <input type="email" name="email" required></input>
        <button type="submit">Send</button>
      </form>
    </>
  );
}
