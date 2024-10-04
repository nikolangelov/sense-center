import emailjs from '@emailjs/browser';
import { AnimatedH2 } from '../../components/TransitionH2';
import { createSignal } from 'solid-js';
import { Title, Meta, MetaProvider } from '@solidjs/meta';

function FleurDivider() {
  return (
    <div class="m-auto my-30 md-my-36 position-relative w-80%">
      <div class="divider-shadow overflow-hidden h-0.5 after-block::after after-w-full::after after-h-6::after after-mx-auto::after after-mt--6::after"></div>
      <div class="w-11 h-11 position-absolute position-bottom--6 left-47% bg-#f7f7f7"><img class="position-absolute max-w-7 mx-1.8" src="/assets/output-onlinepngtools.png" /></div>
    </div>
  );
}

export default function Page() {
  const [email, setEmail] = createSignal('');
  const [name, setName] = createSignal('');
  const [text, setText] = createSignal('');
  const [isSubmitted, setIsSubmitted] = createSignal(false);
  const [isModalOpen, setIsModalOpen] = createSignal(false);

  async function sendEmail(e: Event) {
    e.preventDefault();

    const formData = new FormData();
    formData.append('senderEmail', email());
    formData.append('name', name());
    formData.append('text', text());

    try {
      const response = await fetch('http://localhost:3015/send-email', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        setIsSubmitted(true); // Set form as submitted
        setIsModalOpen(true); // Open the success modal
      } else {
        const errorMessage = await response.text();
        alert(`Error sending email: ${errorMessage}`);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while sending the email.');
    }
  }

  const closeModal = () => {
    setIsModalOpen(false);
    setIsSubmitted(false);
  };

  return (
    <>
      <MetaProvider>
        <Meta name="robots" content="noindex" />
        <h1 class="mt-17 font-size-14 md-font-size-16 md-line-height-18 line-height-16">Feedback</h1>

        <div class="mt-20 py-8 px-8 md-px-14 b-rd-3 bg-paper line-height-8 text-justify font-size-4.4" style="box-shadow: 0px 0px 20px 5px rgb(84 89 95 / 10%);">If you have suggestions on how we can improve, please do not hesitate to leave us feedback! Your opinion is very valuable to us and it will be read directly by the owner.</div>

        {!isSubmitted() && !isModalOpen() && (
          <div class="mt-15 mb-35 py-8 px-5 md-px-14 bg-paper b-rd-3 mx-auto" style="box-shadow: 0px 0px 20px 5px rgb(84 89 95 / 10%);">

            <form class="flex-gap-5 flex flex-col py-5" onSubmit={sendEmail} method="post" enctype="multipart/form-data">

              <input type="text" value={name()} onChange={(e) => setName(e.target.value)} placeholder="Name:" class="bg-gray-1 b-none w-full p-3 b-rd-1 c-paper-inv font-serif font-size-4" style="box-shadow: 0 1px 2px rgba(0, 0, 0, .12) inset;" />
              <input type="email" value={email()} onChange={(e) => setEmail(e.target.value)} placeholder="E-mail:" class="bg-gray-1 b-none w-full p-3 b-rd-1 c-paper-inv font-serif font-size-4" style="box-shadow: 0 1px 2px rgba(0, 0, 0, .12) inset;" />
              <textarea value={text()} onChange={(e) => setText(e.target.value)} placeholder="Message:" class="bg-gray-1 b-none w-full pt-3 pl-3 pb-30 b-rd-1 c-paper-inv font-serif font-size-4" style="box-shadow: 0 1px 2px rgba(0, 0, 0, .12) inset;" required />

              <button type="submit" class="cursor-pointer flex flex-justify-center text-center mx-auto py-4 mt-7 px-10 bg-brand hover:bg-brand-second-action-hover transition-colors b-none c-paper b-rd-2 w-full uppercase font-800 font-size-4.4 md-font-size-5" style="letter-spacing: 1px;">Send</button>
            </form>
          </div>
        )}

        {isModalOpen() && (
          <div class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-5">
            <div class="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
              <h2 class="text-2xl font-bold mb-4 mt-1">Success!</h2>
              <p class="mb-5">The form has been sent successfully! We will get back to you as soon as possible.</p>
              <button onClick={closeModal} class="bg-brand text-white px-5 py-3 b-none rounded hover:bg-brand-second-action-hover transition-colors">Close</button>
            </div>
          </div>
        )}
      </MetaProvider>
    </>
  );
}
