import { createSignal, onMount } from 'solid-js';
import { FleurDivider } from "../../components/FleurDivider";
import { Collapse } from "solid-collapse";
import MdiArrowDownDrop from '~icons/mdi/arrow-down-drop';
import { PriceTable } from '../../components/PriceTable';
import { onCleanup } from "solid-js";
import confetti from "canvas-confetti";
function SingleCollapse() {
  const [isExpanded1, setIsExpanded1] = createSignal(false);
  const [isExpanded2, setIsExpanded2] = createSignal(false);
  const [isExpanded3, setIsExpanded3] = createSignal(false);
  const [isExpanded4, setIsExpanded4] = createSignal(false);
  const [isExpanded5, setIsExpanded5] = createSignal(false);
  const [isExpanded6, setIsExpanded6] = createSignal(false);

  return (
    <>
      <div class="flex flex-col gap-8 cursor-pointer">
        <div class="collapsable-button-contact-us b-none b-rd-1 bg-paper px-7 py-2" style="box-shadow: 0px 0px 0px 1.5px #01874c; transition: outline 0.03s ease-out;">
          <button onClick={() => setIsExpanded1(!isExpanded1())} class="flex flex-items-center w-full mx-auto capitalize b-none b-rd-1 bg-paper font-600 py-2 font-size-5 whitespace-nowrap cursor-pointer" style="letter-spacing: -0.01rem;">Appointment details <MdiArrowDownDrop /></button>
          <Collapse value={isExpanded1()} class="transition-all transition-duration-500">
            <p>
              We kindly ask you to respect our technicians' time. Keep your daily activities in mind when making an appointment. Keeping up with our schedule is very important, for the smooth operations of our teams.
              If you need to change your appointment date, please let us know by 12 pm the working day before your change goes live. Otherwise, we may have to charge you for the missed appointment.
              If you arrive late for your appointment, we may need to charge an additional fee due to the disruption and delay it causes to our schedule.
            </p>
            <p>
              If we need to change any scheduled appointments, we'll let you know in advance and agree on a suitable alternative.
            </p>
          </Collapse>
        </div>

        <div class="collapsable-button-contact-us b-none b-rd-1 bg-paper px-7 py-2 cursor-pointer" style="box-shadow: 0px 0px 0px 1.5px #01874c; transition: outline 0.03s ease-out;">
          <button onClick={() => setIsExpanded2(!isExpanded2())} class="flex flex-items-center w-full mx-auto capitalize b-none b-rd-1 bg-paper font-600 py-2 font-size-5 whitespace-nowrap cursor-pointer" style="letter-spacing: -0.01rem;">Parking <MdiArrowDownDrop /></button>
          <Collapse value={isExpanded2()} class="transition-all transition-duration-500">
            <p>
              The parking of our van is crucial, because we use industrial equipment, which is extremely heavy. It is very important to be as close as possible to the property.
            </p>
            <p>
              The easiest and the cheapest way is, if you can provide us with a parking permit or an off-street parking space.
            </p>
            <p>
              If not, the technician will find a suitable parking space and if this incurs any additional costs, they will be added to the final invoice.
            </p>
          </Collapse>
        </div>

        <div class="collapsable-button-contact-us b-none b-rd-1 bg-paper px-7 py-2 cursor-pointer" style="box-shadow: 0px 0px 0px 1.5px #01874c; transition: outline 0.03s ease-out;">
          <button onClick={() => setIsExpanded3(!isExpanded3())} class="flex flex-items-center w-full mx-auto capitalize b-none b-rd-1 bg-paper font-600 py-2 font-size-5 whitespace-nowrap cursor-pointer" style="letter-spacing: -0.01rem;">Equipment and Accessibility <MdiArrowDownDrop /></button>
          <Collapse value={isExpanded3()} class="transition-all transition-duration-500">
            <p>
              It would be greatly appreciated if you could relocate delicate, small, or expensive pieces of furniture for insurance purposes, like lamps and decorations. If possible, position them in a location that won't be disrupted by the cleaning process. We aim to have the floors free of any obstacles.
            </p>
            <p>
              We kindly ask you to remove any personal belongings (building materials), otherwise we reserve the right to add an additional charge to remove them or cancel your booking, and keep your deposit payment.
            </p>
            <p>
              We need access to hot water and an electric provider for our visit.
            </p>
            <p>
              Our equipment weighs over 50 kg. If it needs to be transported manually, additional fees will apply for each floor due to the effort required.
            </p>
          </Collapse>
        </div>

        <div class="collapsable-button-contact-us b-none b-rd-1 bg-paper px-7 py-2 cursor-pointer" style="box-shadow: 0px 0px 0px 1.5px #01874c; transition: outline 0.03s ease-out;">
          <button onClick={() => setIsExpanded4(!isExpanded4())} class="flex flex-items-center w-full mx-auto capitalize b-none b-rd-1 bg-paper font-600 py-2 font-size-5 whitespace-nowrap cursor-pointer" style="letter-spacing: -0.01rem;">Cleaning Process <MdiArrowDownDrop /></button>
          <Collapse value={isExpanded4()} class="transition-all transition-duration-500">
            <p>
              We use a huge selection of professional stain removers for different stains. 95% of the time the stains will come out, but there are 5% of the time when the stain is too old, or worse it has been treated before, which sealed it, or even the fibres are rubbed off, in those cases we are unable to guarantee that the stain will come out.
            </p>
            <p>
              In very rare cases where harsh chemicals like Vanish, Dr. Beckmann, etc, have been used, without visible effect, halos or discolouration of the carpet may occur after professional cleaning. This is caused by the bleaching agents contained in those chemicals. We are not responsible in such cases.
            </p>
            <p>
              Please note, draught marks are not included in the quote unless specified.
            </p>
            <p>
              We take photos before and after the cleaning to document our work and for quality control.
            </p>
          </Collapse>
        </div>

        <div class="collapsable-button-contact-us b-none b-rd-1 bg-paper px-7 py-2 cursor-pointer" style="box-shadow: 0px 0px 0px 1.5px #01874c; transition: outline 0.03s ease-out;">
          <button onClick={() => setIsExpanded5(!isExpanded5())} class="flex flex-items-center w-full mx-auto capitalize b-none b-rd-1 bg-paper font-600 py-2 font-size-5 whitespace-nowrap cursor-pointer" style="letter-spacing: -0.01rem;">Pet Policy <MdiArrowDownDrop /></button>
          <Collapse value={isExpanded5()} class="transition-all transition-duration-500">
            <p>
              As a friendly reminder, if you have pets, we kindly request that you keep them in a separate area or make necessary arrangements during our visit. While we love our furry friends, it's to ensure their safety and our team's comfort during our time on-site.
            </p>
          </Collapse>
        </div>

        <div class="collapsable-button-contact-us b-none b-rd-1 bg-paper px-7 py-2 cursor-pointer" style="box-shadow: 0px 0px 0px 1.5px #01874c; transition: outline 0.03s ease-out;">
          <button onClick={() => setIsExpanded6(!isExpanded6())} class="flex flex-items-center w-full mx-auto capitalize b-none b-rd-1 bg-paper font-600 py-2 font-size-5 whitespace-nowrap cursor-pointer" style="letter-spacing: -0.01rem; font-family: Arial !important;">Payment <MdiArrowDownDrop /></button>
          <Collapse value={isExpanded6()} class="transition-all transition-duration-500">
            <p>
              Payment must be arranged in full upon completion of the job and before the technician leaves.
            </p>
            <p>
              Any complaints should be reported to us within 24hrs of the cleaning.
            </p>
            <p>
              This Confirmation of Booking includes the costs of all materials, equipment and labour based on the above details.
            </p>
          </Collapse>
        </div>
      </div>
    </>
  );
}


export default function Page() {
  const [email, setEmail] = createSignal('');
  const [subject, setSubject] = createSignal('');
  const [name, setName] = createSignal('');
  const [postCode, setPostCode] = createSignal('');
  const [phone, setPhone] = createSignal('');
  const [text, setText] = createSignal('');
  const [otherText, setOtherText] = createSignal('');
  const [attachments, setAttachments] = createSignal<File[]>([]);
  const [selectedServices, setSelectedServices] = createSignal<string[]>([]);
  const [howFound, setHowFound] = createSignal('');
  const [isSubmitted, setIsSubmitted] = createSignal(false);
  const [isModalOpen, setIsModalOpen] = createSignal(false);
  const [isUploading, setIsUploading] = createSignal(false);
  const [progress, setProgress] = createSignal(0); // Progress state

  const [isOpen, setIsOpen] = createSignal(true);

  // Launch confetti effect
  const launchConfetti = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });
  };


  // Automatically trigger confetti when the component is mounted
  onCleanup(() => {
    if (isOpen()) launchConfetti();
  });

  const handleRadioChange = (event: { target: { value: string; }; }) => {
    setHowFound(event.target.value);
    if (event.target.value !== 'Other') {
      setOtherText('');
    }
  };

  async function sendEmail(e: Event) {
    e.preventDefault();
    setIsUploading(true); // Start upload
    setProgress(0); // Reset progress

    const formData = new FormData();
    formData.append('senderEmail', email());
    formData.append('subject', subject());
    formData.append('name', name());
    formData.append('postCode', postCode());
    formData.append('phone', phone());
    formData.append('text', text());
    formData.append('howFound', howFound());

    if (attachments()) {
      for (let i = 0; i < attachments().length; i++) {
        formData.append('attachments', attachments()[i]);
      }
    }

    formData.append('services', selectedServices().join(', '));

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        setIsSubmitted(true);
        setIsModalOpen(true);
      } else {
        const errorMessage = await response.text();
        alert(`Error sending email: ${errorMessage}`);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while sending the email.');
    } finally {
      setIsUploading(false); // End upload
    }
  }

  const handleFileChange: (event: Event) => void = (event) => {
    const input = event.target as HTMLInputElement;
    const files = input.files;
    if (files) {
      setAttachments([...attachments(), ...Array.from(files)]);
    }
  };

  const handleCheckboxChange = (event: { target: { value: string; checked: boolean; }; }) => {
    const value = event.target.value;
    const services = selectedServices();
    if (event.target.checked) {
      setSelectedServices([...services, value]);
    } else {
      setSelectedServices(services.filter(service => service !== value));
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setIsSubmitted(false);
  };

  return (
    <>

      <h1 class="mt-17 font-size-14 md-font-size-16 md-line-height-18 line-height-16 pb-8">Contacts</h1>

      <div class="bg-paper b-rd-3" style="box-shadow: 0px 0px 20px 5px rgb(84 89 95 / 10%);">
        <div class="flex flex-col md-flex-row flex-justify-between flex-items-center pb-2 pt-7 md-pt-10 md-pt-8 px-2 w-90% m-auto">
          <div class="font-sans font-500 font-size-4.5 md-font-size-5 uppercase flex-nowrap flex">Email us:</div>
          <div class="font-sans font-500 font-size-4.5 md-font-size-5"><a class="color-paper-link-hover hover-color-paper-link:hover" href="mailto:office@finecarpetcleaning.co.uk" target="_blank" rel="noopener">office@finecarpetcleaning.co.uk</a></div>
        </div>
        <hr class="w-90% h-2px b-hidden bg-paper-border" />
        <div class="flex flex-justify-between py-3 md-py-2 px-1 w-90% m-auto">
          <div class="font-sans font-500 font-size-4.5 md-font-size-5 uppercase">Call mobile :</div>
          <div class="font-sans font-500 font-size-4.5 md-font-size-5"><a class="color-paper-link-hover hover-color-paper-link:hover" href="tel:+44 7874 333 356" target="_blank" rel="noopener">+44 7874 333 356</a></div>
        </div>
        <hr class="w-90% h-2px b-hidden bg-paper-border" />
        <div class="flex flex-justify-between py-3 md-py-2 px-1 w-90% m-auto">
          <div class="font-sans font-500 font-size-4.5 md-font-size-5 uppercase">Call landline :</div>
          <div class="font-sans font-500 font-size-4.5 md-font-size-5"><a class="color-paper-link-hover hover-color-paper-link:hover" href="tel:+44 2036 370 033" target="_blank" rel="noopener">+44 2036 370 033</a></div>
        </div>
        <hr class="w-90% h-2px b-hidden bg-paper-border" />
        <div class="flex flex-justify-between py-3 md-py-2 px-1 w-90% m-auto">
          <div class="font-sans font-500 font-size-4.5 md-font-size-5 uppercase">Call Whatsapp :</div>
          <div class="font-sans font-500 font-size-4.5 md-font-size-5"><a class="color-paper-link-hover hover-color-paper-link:hover" href="https://wa.me/+447874333356" target="_blank" rel="noopener">+44 7874 333 356</a></div>
        </div>
        <hr class="w-90% h-2px b-hidden bg-paper-border" />
        <div class="flex flex-justify-between pt-3 pb-7 md-py-2 px-1 w-90% m-auto">
          <div class="font-sans font-500 font-size-4.5 md-font-size-5 uppercase">Message Whatsapp :</div>
          <div class="font-sans font-500 font-size-4.5 md-font-size-5 whitespace-nowrap"><a class="color-paper-link-hover hover-color-paper-link:hover" href="https://wa.me/+447874333356" target="_blank" rel="noopener">Click to chat</a></div>
        </div>
        <hr class="w-90% md-block hidden h-2px b-hidden bg-paper-border" />
        <div class="md-flex hidden flex-col flex-justify-center py-3 md-py-2 w-90% m-auto">
          <div class="font-sans font-500 font-size-4.5 md-font-size-5 uppercase mx-auto mb-7 mt-4">Message Whatsapp:</div>
          <img src="/assets/QR-code.png" alt="QR code" class="md-w-15% w-30% mx-auto mb-5" />
        </div>
      </div>

      <FleurDivider />

      <h2>Request a quote</h2>

      {!isSubmitted() && !isModalOpen() && (
        <div class="mt-15 mb-35 py-8 px-5 md-px-14 bg-paper b-rd-3 mx-auto" style="box-shadow: 0px 0px 20px 5px rgb(84 89 95 / 10%);">

          <form class="flex-gap-5 flex flex-col py-5" onSubmit={sendEmail} method="post" enctype="multipart/form-data">
            <input type="email" value={email()} onChange={(e) => setEmail(e.target.value)} placeholder="E-mail:" class="bg-gray-1 b-none w-full p-3 b-rd-1 c-paper-inv font-sans font-size-4" style="box-shadow: 0 1px 2px rgba(0, 0, 0, .12) inset;" required />
            <input type="text" value={name()} onChange={(e) => setName(e.target.value)} placeholder="Name:" class="bg-gray-1 b-none w-full p-3 b-rd-1 c-paper-inv font-sans font-size-4" style="box-shadow: 0 1px 2px rgba(0, 0, 0, .12) inset;" required />
            <input type="text" value={postCode()} onChange={(e) => setPostCode(e.target.value)} placeholder="Post code:" class="bg-gray-1 b-none w-full p-3 b-rd-1 c-paper-inv font-sans font-size-4" style="box-shadow: 0 1px 2px rgba(0, 0, 0, .12) inset;" required />
            <input type="tel" value={phone()} onChange={(e) => setPhone(e.target.value)} placeholder="Phone:" class="bg-gray-1 b-none w-full p-3 b-rd-1 c-paper-inv font-sans font-size-4" style="box-shadow: 0 1px 2px rgba(0, 0, 0, .12) inset;" required />

            <h4 class="mb-0 mt-6">Service required</h4>

            <span class="flex flex-col md-flex-row md-gap-50" data-name="your-phone">
              <div class="flex flex-col">
                <label>
                  <input type="checkbox" value="Carpet cleaning" onChange={handleCheckboxChange} />
                  Carpet cleaning
                </label>
                <label>
                  <input type="checkbox" value="Rug cleaning" onChange={handleCheckboxChange} />
                  Rug cleaning
                </label>
                <label>
                  <input type="checkbox" value="Sofa cleaning" onChange={handleCheckboxChange} />
                  Sofa cleaning
                </label>
                <label>
                  <input type="checkbox" value="Mattress cleaning" onChange={handleCheckboxChange} />
                  Mattress cleaning
                </label>
                <label>
                  <input type="checkbox" value="Leather sofa cleaning" onChange={handleCheckboxChange} />
                  Leather sofa cleaning
                </label>
              </div>

              <div class="flex flex-col">
                <label>
                  <input type="checkbox" value="Pillow cleaning" onChange={handleCheckboxChange} />
                  Pillow cleaning
                </label>
                <label>
                  <input type="checkbox" value="Stain removal cleaning" onChange={handleCheckboxChange} />
                  Stain removal cleaning
                </label>
                <label>
                  <input type="checkbox" value="Stain protection cleaning" onChange={handleCheckboxChange} />
                  Stain protection cleaning
                </label>
                <label>
                  <input type="checkbox" value="Antiviral sanitisation service" onChange={handleCheckboxChange} />
                  Antiviral sanitisation service
                </label>
                <label>
                  <input type="checkbox" value="Other" onChange={handleCheckboxChange} />
                  Other
                </label>
              </div>
            </span>

            <textarea value={text()} onChange={(e) => setText(e.target.value)} placeholder="Message:" class="mt-2 bg-gray-1 b-none w-full pt-3 pl-3 pb-30 b-rd-1 c-paper-inv font-sans font-size-4" style="box-shadow: 0 1px 2px rgba(0, 0, 0, .12) inset;" />

            <h4 class="mb-2">How did you find us</h4>

            <div class="flex flex-col">
              <label>
                <input type="radio" name="howfound" value="Google" onChange={handleRadioChange} />
                Google
              </label>
              <label>
                <input type="radio" name="howfound" value="Bing" onChange={handleRadioChange} />
                Bing
              </label>
              <label>
                <input type="radio" name="howfound" value="Gumtree" onChange={handleRadioChange} />
                Gumtree
              </label>
              <label>
                <input type="radio" name="howfound" value="Facebook" onChange={handleRadioChange} />
                Facebook
              </label>
              <label>
                <input type="radio" name="howfound" value="Recommendation" onChange={handleRadioChange} />
                Recommendation
              </label>
              <label>
                <input type="radio" name="howfound" value="I've used Fine Carpet Cleaning before" onChange={handleRadioChange} />
                I've used Fine Carpet Cleaning before
              </label>
              <label>
                <input type="radio" name="howfound" value="Other" onChange={handleRadioChange} />
                Other
              </label>
            </div>

            {howFound() === 'Other' && (
              <textarea
                value={otherText()}
                onChange={(e) => setOtherText(e.target.value)}
                placeholder="Please specify: (Optional)"
                class="mt-2 bg-gray-1 b-none w-full pt-3 pl-3 pb-30 b-rd-1 c-paper-inv font-sans font-size-4"
                style="box-shadow: 0 1px 2px rgba(0, 0, 0, .12) inset;"
              />
            )}

            <label class="pt-3">Upload images (Optional):</label>
            <input type="file" id="email-input" multiple onChange={handleFileChange} />

            <button type="submit" class="cursor-pointer flex flex-justify-center text-center mx-auto py-4 mt-7 px-10 bg-brand hover:bg-brand-second-action-hover transition-colors b-none c-paper b-rd-2 w-full uppercase font-800 font-size-4.4 md-font-size-5" style="letter-spacing: 1px;">Request a quote</button>
          </form>
        </div>
      )}

      {isUploading() && (
        <div class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div class="bg-white p-6 rounded-lg shadow-lg w-64">
            <h3 class="text-lg font-semibold mb-3">Submitting...</h3>
            <div class="w-full bg-gray-200 rounded h-4 overflow-hidden">
              <div
                class="progress-bar-contacts-form h-full rounded bg-blue-500"
                style={{
                  animation: 'smoothProgress 20s linear forwards'
                }}
              />
            </div>
          </div>
        </div>
      )}

      {isModalOpen() && (
        isOpen() && (
          <div class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div class="bg-white p-8 rounded-lg shadow-lg max-w-md w-full relative flex flex-col items-center justify-center">
              {/* Right decorative SVG */}

              <svg class="absolute -right-10 top-1/2 transform -translate-y-1/2 w-15 h-15 " enable-background="new 0 0 512 512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m378.553 355.648-333.436 145.085c-21.735 8.65-43.335-12.764-34.874-34.572l145.709-338.684" fill="#ffb636" /><path d="m10.243 466.161 11.58-26.916c.993-1.514 1.983-3.03 2.977-4.543 57.597-87.744 116.038-174.952 176.475-260.768l67.765 69.46c-51.13 35.102-217.15 206.669-251.925 252.177-7.57-6.963-11.249-18.128-6.872-29.41z" fill="#ffd469" /><path d="m304.382 204.434c61.854 61.854 95.685 128.308 75.564 148.43-20.121 20.121-86.575-13.71-148.43-75.564s-95.685-128.308-75.564-148.43 86.575 13.709 148.43 75.564z" fill="#a06c33" /><path d="m155.601 327.572c0 6.012-4.874 10.885-10.885 10.885s-10.885-4.873-10.885-10.885 4.873-10.885 10.885-10.885 10.885 4.873 10.885 10.885z" fill="#f7f9aa" /><path d="m501.986 213.16c0 8.628-6.994 15.622-15.622 15.622s-15.622-6.994-15.622-15.622 6.994-15.622 15.622-15.622 15.622 6.994 15.622 15.622zm-104.323 208.022c-8.628 0-15.622 6.994-15.622 15.622s6.994 15.622 15.622 15.622 15.622-6.994 15.622-15.622-6.995-15.622-15.622-15.622z" fill="#ffb636" /><path d="m355.949 79.523c-1.34 9.065-7.197 17.072-16.07 21.968-6.126 3.38-13.33 5.137-20.807 5.137-2.354 0-4.734-.174-7.117-.526-5.288-.782-10.581.016-14.52 2.189-1.766.974-4.8 3.105-5.293 6.438-.492 3.333 1.796 6.251 3.203 7.694 3.058 3.135 7.725 5.381 12.849 6.22.141.015.281.02.422.041 21.619 3.196 37.061 20.32 34.421 38.173-1.34 9.066-7.197 17.073-16.071 21.969-6.126 3.38-13.329 5.137-20.806 5.137-2.354 0-4.734-.174-7.117-.526-5.287-.783-10.582.015-14.521 2.189-1.766.974-4.8 3.105-5.293 6.438-.79 5.349 5.778 12.411 16.47 13.991 5.817.86 9.836 6.273 8.976 12.091-.782 5.29-5.328 9.092-10.52 9.092-.519 0-1.043-.038-1.571-.116-21.619-3.196-37.06-20.321-34.421-38.173 1.34-9.066 7.197-17.073 16.071-21.969 8.055-4.444 17.972-6.082 27.924-4.611 5.288.781 10.58-.016 14.52-2.189 1.766-.974 4.8-3.105 5.293-6.438.777-5.262-5.577-12.171-15.963-13.898-.17-.017-.341-.031-.512-.056-9.951-1.472-18.971-5.908-25.395-12.493-7.077-7.254-10.367-16.614-9.026-25.681 1.34-9.065 7.197-17.072 16.07-21.968 8.055-4.444 17.972-6.082 27.924-4.611 5.286.78 10.581-.016 14.52-2.189 1.766-.974 4.8-3.105 5.293-6.438.492-3.333-1.796-6.251-3.203-7.694-3.142-3.22-7.977-5.516-13.267-6.297-5.817-.86-9.836-6.273-8.976-12.091.859-5.818 6.274-9.832 12.091-8.977 9.951 1.472 18.971 5.908 25.395 12.493 7.078 7.255 10.368 16.615 9.027 25.681z" fill="#bea4ff" /><path d="m81.731 159.689c0 9.777-7.926 17.703-17.703 17.703s-17.703-7.926-17.703-17.703 7.926-17.703 17.703-17.703 17.703 7.925 17.703 17.703zm316.445-20.453c-11.296 0-20.452 9.157-20.452 20.452s9.157 20.452 20.452 20.452 20.452-9.157 20.452-20.452-9.156-20.452-20.452-20.452zm-182.647 256.663c-11.296 0-20.452 9.157-20.452 20.452s9.157 20.452 20.452 20.452c11.296 0 20.452-9.157 20.452-20.452s-9.156-20.452-20.452-20.452zm271.303-93.646c3.093-5.989.745-13.352-5.244-16.445-2.388-1.232-5.238-2.868-8.538-4.761-28.993-16.633-89.319-51.242-160.352 6.109-5.245 4.234-6.063 11.919-1.829 17.163 4.233 5.245 11.917 6.065 17.163 1.829 58.035-46.856 104.882-19.985 132.871-3.928 3.403 1.952 6.617 3.796 9.483 5.276 1.791.925 3.705 1.363 5.591 1.363 4.42 0 8.687-2.408 10.855-6.606z" fill="#ff6e83" /><path d="m434.834 62.776c0 6.012-4.874 10.885-10.885 10.885-6.012 0-10.885-4.873-10.885-10.885s4.873-10.885 10.885-10.885c6.012-.001 10.885 4.873 10.885 10.885zm-388.51-50.882c-6.012 0-10.885 4.873-10.885 10.885s4.873 10.885 10.885 10.885 10.886-4.873 10.886-10.885-4.874-10.885-10.886-10.885zm170.681 142.057c1.231-2.414 2.749-5.163 4.356-8.073 8.154-14.771 19.32-34.999 19.992-58.559.807-28.304-13.934-54.002-43.812-76.38-5.187-3.885-12.539-2.828-16.421 2.357-3.884 5.186-2.829 12.538 2.357 16.421 23.75 17.788 35.01 36.411 34.425 56.933-.51 17.872-9.697 34.516-17.08 47.889-1.701 3.083-3.309 5.994-4.713 8.747-2.945 5.771-.654 12.836 5.116 15.781 1.708.872 3.529 1.285 5.323 1.285 4.267 0 8.384-2.338 10.457-6.401z" fill="#59cafc" /></svg>

              <svg style="transform: scaleX(-1);"
                class="absolute -left-10  transform -translate-y-1/2 w-15 h-15" enable-background="new 0 0 512 512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m378.553 355.648-333.436 145.085c-21.735 8.65-43.335-12.764-34.874-34.572l145.709-338.684" fill="#ffb636" /><path d="m10.243 466.161 11.58-26.916c.993-1.514 1.983-3.03 2.977-4.543 57.597-87.744 116.038-174.952 176.475-260.768l67.765 69.46c-51.13 35.102-217.15 206.669-251.925 252.177-7.57-6.963-11.249-18.128-6.872-29.41z" fill="#ffd469" /><path d="m304.382 204.434c61.854 61.854 95.685 128.308 75.564 148.43-20.121 20.121-86.575-13.71-148.43-75.564s-95.685-128.308-75.564-148.43 86.575 13.709 148.43 75.564z" fill="#a06c33" /><path d="m155.601 327.572c0 6.012-4.874 10.885-10.885 10.885s-10.885-4.873-10.885-10.885 4.873-10.885 10.885-10.885 10.885 4.873 10.885 10.885z" fill="#f7f9aa" /><path d="m501.986 213.16c0 8.628-6.994 15.622-15.622 15.622s-15.622-6.994-15.622-15.622 6.994-15.622 15.622-15.622 15.622 6.994 15.622 15.622zm-104.323 208.022c-8.628 0-15.622 6.994-15.622 15.622s6.994 15.622 15.622 15.622 15.622-6.994 15.622-15.622-6.995-15.622-15.622-15.622z" fill="#ffb636" /><path d="m355.949 79.523c-1.34 9.065-7.197 17.072-16.07 21.968-6.126 3.38-13.33 5.137-20.807 5.137-2.354 0-4.734-.174-7.117-.526-5.288-.782-10.581.016-14.52 2.189-1.766.974-4.8 3.105-5.293 6.438-.492 3.333 1.796 6.251 3.203 7.694 3.058 3.135 7.725 5.381 12.849 6.22.141.015.281.02.422.041 21.619 3.196 37.061 20.32 34.421 38.173-1.34 9.066-7.197 17.073-16.071 21.969-6.126 3.38-13.329 5.137-20.806 5.137-2.354 0-4.734-.174-7.117-.526-5.287-.783-10.582.015-14.521 2.189-1.766.974-4.8 3.105-5.293 6.438-.79 5.349 5.778 12.411 16.47 13.991 5.817.86 9.836 6.273 8.976 12.091-.782 5.29-5.328 9.092-10.52 9.092-.519 0-1.043-.038-1.571-.116-21.619-3.196-37.06-20.321-34.421-38.173 1.34-9.066 7.197-17.073 16.071-21.969 8.055-4.444 17.972-6.082 27.924-4.611 5.288.781 10.58-.016 14.52-2.189 1.766-.974 4.8-3.105 5.293-6.438.777-5.262-5.577-12.171-15.963-13.898-.17-.017-.341-.031-.512-.056-9.951-1.472-18.971-5.908-25.395-12.493-7.077-7.254-10.367-16.614-9.026-25.681 1.34-9.065 7.197-17.072 16.07-21.968 8.055-4.444 17.972-6.082 27.924-4.611 5.286.78 10.581-.016 14.52-2.189 1.766-.974 4.8-3.105 5.293-6.438.492-3.333-1.796-6.251-3.203-7.694-3.142-3.22-7.977-5.516-13.267-6.297-5.817-.86-9.836-6.273-8.976-12.091.859-5.818 6.274-9.832 12.091-8.977 9.951 1.472 18.971 5.908 25.395 12.493 7.078 7.255 10.368 16.615 9.027 25.681z" fill="#bea4ff" /><path d="m81.731 159.689c0 9.777-7.926 17.703-17.703 17.703s-17.703-7.926-17.703-17.703 7.926-17.703 17.703-17.703 17.703 7.925 17.703 17.703zm316.445-20.453c-11.296 0-20.452 9.157-20.452 20.452s9.157 20.452 20.452 20.452 20.452-9.157 20.452-20.452-9.156-20.452-20.452-20.452zm-182.647 256.663c-11.296 0-20.452 9.157-20.452 20.452s9.157 20.452 20.452 20.452c11.296 0 20.452-9.157 20.452-20.452s-9.156-20.452-20.452-20.452zm271.303-93.646c3.093-5.989.745-13.352-5.244-16.445-2.388-1.232-5.238-2.868-8.538-4.761-28.993-16.633-89.319-51.242-160.352 6.109-5.245 4.234-6.063 11.919-1.829 17.163 4.233 5.245 11.917 6.065 17.163 1.829 58.035-46.856 104.882-19.985 132.871-3.928 3.403 1.952 6.617 3.796 9.483 5.276 1.791.925 3.705 1.363 5.591 1.363 4.42 0 8.687-2.408 10.855-6.606z" fill="#ff6e83" /><path d="m434.834 62.776c0 6.012-4.874 10.885-10.885 10.885-6.012 0-10.885-4.873-10.885-10.885s4.873-10.885 10.885-10.885c6.012-.001 10.885 4.873 10.885 10.885zm-388.51-50.882c-6.012 0-10.885 4.873-10.885 10.885s4.873 10.885 10.885 10.885 10.886-4.873 10.886-10.885-4.874-10.885-10.886-10.885zm170.681 142.057c1.231-2.414 2.749-5.163 4.356-8.073 8.154-14.771 19.32-34.999 19.992-58.559.807-28.304-13.934-54.002-43.812-76.38-5.187-3.885-12.539-2.828-16.421 2.357-3.884 5.186-2.829 12.538 2.357 16.421 23.75 17.788 35.01 36.411 34.425 56.933-.51 17.872-9.697 34.516-17.08 47.889-1.701 3.083-3.309 5.994-4.713 8.747-2.945 5.771-.654 12.836 5.116 15.781 1.708.872 3.529 1.285 5.323 1.285 4.267 0 8.384-2.338 10.457-6.401z" fill="#59cafc" /></svg>

              {/* Success message */}
              <h2 class="text-2xl font-bold mb-4">Success!</h2>
              <p class="text-center mb-4">Your action was successful!</p>

              {/* Close button */}
              <button onClick={closeModal} class="bg-blue-500 text-white py-2 px-4 rounded">
                Close
              </button>
            </div>
          </div>
        ))}

      <FleurDivider />

      <h2>Helpful steps before our team arrives</h2>

      <SingleCollapse />

      <FleurDivider />

      <h2>Working hours</h2>

      <PriceTable
        title="Day"
        items={[
          { label: "Monday", value: "7:30 - 19:00" },
          { label: "Tuesday", value: "7:30 - 19:00" },
          { label: "Wednesday", value: "7:30 - 19:00" },
          { label: "Thursday", value: "7:30 - 19:00" },
          { label: "Friday", value: "7:30 - 19:00" },
          { label: "Saturday", value: "9:00 - 18:00" },
          { label: "Sunday", value: "9:00 - 18:00" },
        ]}
      />

      <FleurDivider />

      <div class="m-10% mb-3% flex flex-wrap flex-justify-center md-gap-15 gap-10">
        <a href="/prices"><button class="cursor-pointer outline-none bg-brand-second-action hover-bg-brand-second-action-hover:hover font-size-5 font-600 w-200px h-60px c-paper flex flex-items-center flex-justify-center relative b-solid b-rd-3 b-4 b-brand-second-action hover-b-brand-second-action-hover:hover whitespace-normal line-height-6 word-spacing-0.5 py-9" style="box-shadow: 0 0 0 3px rgba(255, 255, 255, .9) inset; letter-spacing: 0.05rem;">PRICES</button></a>
        <a href="/services"><button class="cursor-pointer outline-none bg-brand-action hover-bg-brand-action-hover:hover font-size-5 font-600 w-200px h-60px c-paper flex flex-items-center flex-justify-center relative b-solid b-rd-3 b-4 b-brand-action hover-b-brand-action-hover:hover whitespace-normal line-height-6 word-spacing-0.5 py-9" style="box-shadow: 0 0 0 3px rgba(255, 255, 255, .9) inset; letter-spacing: 0.05rem;">SERVICES</button></a>
      </div>
    </>
  );
}

