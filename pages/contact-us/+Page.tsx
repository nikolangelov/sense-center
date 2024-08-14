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
      .sendForm('service_itrkdyn', 'template_sfx2ge6', form, 'THs2MxEeIfIAlmqdZ')
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

        <input type="text" name="from_name" placeholder="Name:" class="bg-gray-1 b-none w-full p-3 b-rd-1 c-paper-inv font-serif font-size-4" style="box-shadow: 0 1px 2px rgba(0, 0, 0, .12) inset;" required />

        <input type="email" name="email_id" placeholder="E-mail:" class="bg-gray-1 b-none w-full p-3 b-rd-1 c-paper-inv font-serif font-size-4" style="box-shadow: 0 1px 2px rgba(0, 0, 0, .12) inset;" required />

        <input type="text" name="postcode" id="postcode" placeholder="Post code:" class="bg-gray-1 b-none w-full p-3 b-rd-1 c-paper-inv font-serif font-size-4" style="box-shadow: 0 1px 2px rgba(0, 0, 0, .12) inset;" required></input>

        <input type="text" name="phone" placeholder="Phone:" class="bg-gray-1 b-none w-full p-3 b-rd-1 c-paper-inv font-serif font-size-4" style="box-shadow: 0 1px 2px rgba(0, 0, 0, .12) inset;" required />

        <h4 class="mb-0 mt-6">Service required</h4>
        <span class="flex flex-col md-flex-row md-gap-50" data-name="your-phone">
          <div class="flex flex-col">
            <div>
              <input type="checkbox" id="cleaningserviceID" name="cleaningserviceID" value=" Carpet cleaning" />
              <label for="cleaningserviceID"> Carpet cleaning</label>
            </div>
            <div>
              <input type="checkbox" id="cleaningserviceID" name="cleaningserviceID" value=" Rug cleaning" />
              <label for="cleaningserviceID"> Rug cleaning</label>
            </div>
            <div>
              <input type="checkbox" id="cleaningserviceID" name="cleaningserviceID" value=" Sofa cleaning" />
              <label for="cleaningserviceID"> Sofa cleaning</label>
            </div>
            <div>
              <input type="checkbox" id="cleaningserviceID" name="cleaningserviceID" value=" Mattress cleaning" />
              <label for="cleaningserviceID"> Mattress cleaning</label>
            </div>
            <div>
              <input type="checkbox" id="cleaningserviceID" name="cleaningserviceID" value=" Leather sofa cleaning" />
              <label for="cleaningserviceID"> Leather sofa cleaning</label>
            </div>
          </div>

          <div class="flex flex-col">
            <div>
              <input type="checkbox" id="cleaningserviceID" name="cleaningserviceID" value=" Pillow cleaning" />
              <label for="cleaningserviceID"> Pillow cleaning</label>
            </div>
            <div>
              <input type="checkbox" id="cleaningserviceID" name="cleaningserviceID" value=" Stain removal cleaning" />
              <label for="cleaningserviceID"> Stain removal cleaning</label>
            </div>
            <div>
              <input type="checkbox" id="cleaningserviceID" name="cleaningserviceID" value=" Stain protection cleaning" />
              <label for="cleaningserviceID"> Stain protection cleaning</label>
            </div>
            <div>
              <input type="checkbox" id="cleaningserviceID" name="cleaningserviceID" value=" Antiviral sanitisation service" />
              <label for="cleaningserviceID"> Antiviral sanitisation service</label>
            </div>
            <div>
              <input type="checkbox" id="cleaningserviceID" name="cleaningserviceID" value=" Other" />
              <label for="cleaningserviceID"> Other</label>
            </div>
          </div>
        </span>

        <h4 class="mb-2">How did you find us</h4>
        <span data-name="menu-238">
          <select class="bg-gray-1 b-none w-full p-3 b-rd-1 c-gray-5 font-serif font-size-4" style="box-shadow: 0 1px 2px rgba(0, 0, 0, .12) inset;" aria-invalid="false" name="menu-238">
            <option value="Google" id="howfound">Google</option>
            <option value="Gumtree" id="howfound">Gumtree</option>
            <option value="Yahoo" id="howfound">Yahoo</option>
            <option value="Bing" id="howfound">Bing</option>
            <option value="Facebook" id="howfound">Facebook</option>
            <option value="Twitter" id="howfound">Twitter</option>
            <option value="Fine Carpet Cleaning vehicle" id="howfound">Fine Carpet Cleaning vehicle</option>
            <option value="Recommendation" id="howfound">Recommendation</option>
            <option value="I've used Fine Carpet Cleaning before" id="howfound">I've used Fine Carpet Cleaning before</option>
          </select>
        </span>

        <textarea name="message" placeholder="Message:" class="mt-2 bg-gray-1 b-none w-full pt-3 pl-3 pb-30 b-rd-1 c-paper-inv font-serif font-size-4" style="box-shadow: 0 1px 2px rgba(0, 0, 0, .12) inset;" />
        <input type="submit" value="Request a quote" class="cursor-pointer flex flex-justify-center text-center mx-auto py-4 mt-7 px-10 bg-brand hover-bg-brand-second-action-hover:hover transition-colors b-none c-paper b-rd-2 w-full uppercase font-800 font-size-4.4 md-font-size-5" style="letter-spacing: 1px;" />
      </form>

    </div>
  );
};

export default function Page() {
  return (
    <>
      <h1 class="mt-17 font-size-14 md-font-size-16 md-line-height-18 line-height-16 pb-8">Contacts</h1>

      <div class="bg-paper b-rd-3" style="box-shadow: 0px 0px 20px 5px rgb(84 89 95 / 10%);">
        <div class="flex flex-justify-between pb-2 pt-10 md-pt-8 px-2 w-90% m-auto">
          <div class="font-sans font-500 font-size-4.5 md-font-size-5 uppercase">Call landline:</div>
          <div class="font-sans font-500 font-size-4.5 md-font-size-5">098 0202 2050</div>
        </div>
        <hr class="w-90% h-2px b-hidden bg-paper-border" />
        <div class="flex flex-justify-between py-3 md-py-2 px-1 w-90% m-auto">
          <div class="font-sans font-500 font-size-4.5 md-font-size-5 uppercase">Call mobile:</div>
          <div class="font-sans font-500 font-size-4.5 md-font-size-5">098 0202 2050</div>
        </div>
        <hr class="w-90% h-2px b-hidden bg-paper-border" />
        <div class="flex flex-justify-between py-3 md-py-2 px-1 w-90% m-auto">
          <div class="font-sans font-500 font-size-4.5 md-font-size-5 uppercase">Call Whatsapp:</div>
          <div class="font-sans font-500 font-size-4.5 md-font-size-5">098 0202 2050</div>
        </div>
        <hr class="w-90% h-2px b-hidden bg-paper-border" />
        <div class="flex flex-justify-between py-3 md-py-2 px-1 w-90% m-auto">
          <div class="font-sans font-500 font-size-4.5 md-font-size-5 uppercase">Email us:</div>
          <div class="font-sans font-500 font-size-4.5 md-font-size-5">098 0202 2050</div>
        </div>
        <hr class="w-90% h-2px b-hidden bg-paper-border" />
        <div class="flex flex-justify-between pt-3 pb-10 md-pb-3 md-py-2 px-1 w-90% m-auto">
          <div class="font-sans font-500 font-size-4.5 md-font-size-5 uppercase">Message Whatsapp:</div>
          <div class="font-sans font-500 font-size-4.5 md-font-size-5 whitespace-nowrap">098 0202 2050</div>
        </div>
        <hr class="w-90% md-block hidden h-2px b-hidden bg-paper-border" />
        <div class="md-flex hidden flex-col flex-justify-center py-3 md-py-2 w-90% m-auto">
          <div class="font-sans font-500 font-size-4.5 md-font-size-5 uppercase mx-auto mb-7 mt-4">Message Whatsapp:</div>
          <img src="/assets/QR_Code_example.png" alt="QR code" class="md-w-15% w-30% mx-auto mb-5" />
        </div>
      </div>

      <FleurDivider></FleurDivider>

      <h2>Request a quote</h2>

      <ContactUs />

      <FleurDivider></FleurDivider>

      <h2>Working hours</h2>

      <table class="w-full mx-auto font-sans">
        <thead style="box-shadow: 0px 20px 20px 1px rgb(84 89 95 / 10%);">
          <tr class="h-20">
            <td class="c-paper bg-#2e5c47 font-size-7 pl-5 b-rd-lt-3"><strong>Day</strong></td>
            <td class="c-paper bg-#2e5c47 font-size-7 pl-5 b-rd-rt-3"><strong>Time</strong></td>
          </tr>
        </thead>
        <tbody style="box-shadow: 0px 20px 20px 1px rgb(84 89 95 / 10%);">
          <tr>
            <td class="bg-paper pl-5 py-2 font-500">Monday</td>
            <td class="bg-paper pl-5 py-2 font-500">from 9:00 - 18:00</td>
          </tr>
          <tr>
            <td class="bg-paper pl-5 py-2 font-500">Tuesday</td>
            <td class="bg-paper pl-5 py-2 font-500">from 9:00 - 18:00</td>
          </tr>
          <tr>
            <td class="bg-paper pl-5 py-2 font-500">Wednesday</td>
            <td class="bg-paper pl-5 py-2 font-500">from 9:00 - 18:00</td>
          </tr>
          <tr>
            <td class="bg-paper pl-5 py-2 font-500">Thursday</td>
            <td class="bg-paper pl-5 py-2 font-500">from 9:00 - 18:00</td>
          </tr>
          <tr>
            <td class="bg-paper pl-5 py-2 font-500">Friday</td>
            <td class="bg-paper pl-5 py-2 font-500">from 9:00 - 18:00</td>
          </tr>
          <tr>
            <td class="bg-paper pl-5 py-2 font-500">Saturday</td>
            <td class="bg-paper pl-5 py-2 font-500">from 9:00 - 18:00</td>
          </tr>
          <tr>
            <td class="bg-paper pl-5 py-2 font-500">Sunday</td>
            <td class="bg-paper pl-5 py-2 font-500">from 9:00 - 18:00</td>
          </tr>
          <tr>
            <td class="b-rd-lb-3 b-rd-rb-3 bg-#2e5c47 h-6" colspan="3" style="box-shadow: 0px 20px 20px 1px rgb(247 247 247/ 100%);"><p class="font-size-3.5 md-font-size-4 px-5 md-my-7 c-paper md-line-height-0 line-height-6 word-spacing-0.5">*We also offer performing services out of working hours and at night, which will be included in the final price.</p></td>
          </tr>
        </tbody>
      </table>

      <FleurDivider></FleurDivider>

      <div class="mb--10"></div>
    </>
  );
}

