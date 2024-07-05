import RiArrowRightSLine from '~icons/ri/arrow-right-s-line';
import RiArrowLeftSLine from '~icons/ri/arrow-left-s-line';
import RiCloseFill from '~icons/ri/close-fill';
import "solid-slider/slider.css";
import { createSignal, Show } from 'solid-js';
import RiYoutubeFill from '~icons/ri/youtube-fill';
import { JSX } from 'solid-js/jsx-runtime';

function FleurDivider () {
	return (
		<div class="m-auto my-36 position-relative w-80%">
			<div class="divider-shadow overflow-hidden h-0.5 after-block::after after-w-full::after after-h-6::after after-mx-auto::after after-mt--6::after"></div>
			<div class="w-11 h-11 position-absolute position-bottom--6 left-47% bg-#f7f7f7"><img class="position-absolute max-w-7 mx-1.8" src="assets/output-onlinepngtools.png" /></div>
		</div>
	);
}


function App() {
  const [filter, setFilter] = createSignal("all");

  const items = [
    { id: 1, className: "filterDiv 5-stars", text: "Item 1" },
    { id: 2, className: "filterDiv 4-stars", text: "Item 2" },
    { id: 3, className: "filterDiv 3-stars", text: "Item 3" },
    { id: 4, className: "filterDiv 2-stars", text: "Item 4" },
    { id: 5, className: "filterDiv 1-star", text: "Item 5" }
  ];

  const filteredItems = () => {
    return items.map(item => ({
      ...item,
      show: filter() === "all" || item.className.includes(filter())
    }));
  };

  return (
    <div class="flex flex-justify-between flex-wrap">
      <div class="flex flex-col flex-justify-center gap-0">
        <p class="font-size-16 m-b-7 m-t-0 m-x-auto" style="font-family:'Roboto'">4.8</p>
        <div>
          {[...Array(5)].map(() => (
            <img class="w-5" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" />
          ))}
        </div>
        <p class="font-400 m-b-0 m-t-1 m-x-auto" style="font-family:'Roboto'">119 reviews</p>
      </div>

      <div class="w-80%">
        {['all', '5-stars', '4-stars', '3-stars', '2-stars', '1-star'].map(rating => (
          <div class="flex flex-items-center my-2 flex-nowrap">
            <button
              class={`b-none cursor-pointer font-size-4 flex whitespace-nowrap mr-2 b-rd-1 ${rating === 'all' ? 'bg-transparent underline' : 'bg-paper-border hover-bg-transparent:hover'} p-y-2.5 p-x-3 mb-1`}
              style="font-family:'Roboto'"
              onClick={() => setFilter(rating)}
            >
              {rating === 'all' ? 'Show all' : `${rating.replace('-', ' ')}`}
            </button>
            {rating !== 'all' && (
              <>
                <div class="b-rd-3 h-4 bg-gray-3 w-80% overflow-hidden whitespace-nowrap m-r-2">
                  <div class="b-rd-3 h-4 bg-#ffbe22" style={{ width: getWidth(rating) }}></div>
                </div>
                <div class="number-of-reviews-in-new-rvs">({getReviewCount(rating)})</div>
              </>
            )}
          </div>
        ))}
      </div>

      <div class="container">
        {filteredItems().map(item => (
          <div class={item.className + (item.show ? " show" : " hidden")}>
            {item.text}
          </div>
        ))}
      </div>
    </div>
  );
}

function getWidth(rating: string) {
  switch (rating) {
    case '5-stars':
      return '100%';
    case '4-stars':
      return '7.62%';
    case '3-stars':
      return '0.95%';
    case '2-stars':
      return '0.95%';
    case '1-star':
      return '3.81%';
    default:
      return '0';
  }
}

function getReviewCount(rating: string) {
  switch (rating) {
    case '5-stars':
      return '104';
    case '4-stars':
      return '9';
    case '3-stars':
      return '1';
    case '2-stars':
      return '1';
    case '1-star':
      return '4';
    default:
      return '0';
  }
}

function StarReview(props: {src: string | undefined; name: number | boolean | Node | JSX.ArrayElement | (string & {}) | null | undefined; date: number | boolean | Node | JSX.ArrayElement | (string & {}) | null | undefined; reviewText: number | boolean | Node | JSX.ArrayElement | (string & {}) | null | undefined; }) {
  return (
    <div class="filterDiv 5-stars">
      <table class="m-y-25 5-stars w-70% m-auto border-style-solid b-gray-2" style="border-width: 1px 0px 1px 0px;">
        <tbody>
          <tr>
            <td class="top-row-of-new-google-review flex flex-justify-between flex-items-center">
              <div class="profile-pic-and-name-in-review flex flex-items-center gap-4">
                <img class="w-12 h-12" src={props.src} alt="profile"/>
                <p class="flex flex-col"><b>{props.name}</b>{props.date}</p>
              </div>
                <img class="w-10 h-10" src="/assets/GoogleLogoPNGImage.png" alt="Google logo"/>
            </td>
            </tr>
            <tr>
              <td class="p-t-5 p-b-2">
                <img class="m-r-2 w-5" src="/assets/google-star-review-logo-e1706350894182.png" alt="star"/>
                <img class="m-r-2 w-5" src="/assets/google-star-review-logo-e1706350894182.png" alt="star"/>
                <img class="m-r-2 w-5" src="/assets/google-star-review-logo-e1706350894182.png" alt="star"/>
                <img class="m-r-2 w-5" src="/assets/google-star-review-logo-e1706350894182.png" alt="star"/>
                <img class="w-5" src="/assets/google-star-review-logo-e1706350894182.png" alt="star"/>
              </td>
            </tr>
            <tr>
            <td class="p-b-4 font-300 font-size-5" style="font-family:'Roboto', sans-serif;">{props.reviewText}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

function FiveStarReview(props: {src: string | undefined; name: number | boolean | Node | JSX.ArrayElement | (string & {}) | null | undefined; date: number | boolean | Node | JSX.ArrayElement | (string & {}) | null | undefined; reviewText: number | boolean | Node | JSX.ArrayElement | (string & {}) | null | undefined; }) {
  return (
    <div class="filterDiv 5-stars">
      <table class="m-y-25 5-stars w-70% m-auto border-style-solid b-gray-2" style="border-width: 1px 0px 1px 0px;">
        <tbody>
          <tr>
            <td class="top-row-of-new-google-review flex flex-justify-between flex-items-center">
              <div class="profile-pic-and-name-in-review flex flex-items-center gap-4">
                <img class="w-12 h-12" src={props.src} alt="profile"/>
                <p class="flex flex-col"><b>{props.name}</b>{props.date}</p>
              </div>
                <img class="w-10 h-10" src="/assets/GoogleLogoPNGImage.png" alt="Google logo"/>
            </td>
            </tr>
            <tr>
              <td class="p-t-5 p-b-2">
                <img class="m-r-2 w-5" src="/assets/google-star-review-logo-e1706350894182.png" alt="star"/>
                <img class="m-r-2 w-5" src="/assets/google-star-review-logo-e1706350894182.png" alt="star"/>
                <img class="m-r-2 w-5" src="/assets/google-star-review-logo-e1706350894182.png" alt="star"/>
                <img class="m-r-2 w-5" src="/assets/google-star-review-logo-e1706350894182.png" alt="star"/>
                <img class="w-5" src="/assets/google-star-review-logo-e1706350894182.png" alt="star"/>
              </td>
            </tr>
            <tr>
            <td class="p-b-4 font-300 font-size-5" style="font-family:'Roboto', sans-serif;">{props.reviewText}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

function FourStarReview(props: {src: string | undefined; name: number | boolean | Node | JSX.ArrayElement | (string & {}) | null | undefined; date: number | boolean | Node | JSX.ArrayElement | (string & {}) | null | undefined; reviewText: number | boolean | Node | JSX.ArrayElement | (string & {}) | null | undefined; }) {
  return (
    <div class="filterDiv 4-stars">
      <table class="m-y-25 4-stars w-70% m-auto border-style-solid b-gray-2" style="border-width: 1px 0px 1px 0px;">
        <tbody>
          <tr>
            <td class="top-row-of-new-google-review flex flex-justify-between flex-items-center">
              <div class="profile-pic-and-name-in-review flex flex-items-center gap-4">
                <img class="w-12 h-12" src={props.src} alt="profile"/>
                <p class="flex flex-col"><b>{props.name}</b>{props.date}</p>
              </div>
                <img class="w-10 h-10" src="/assets/GoogleLogoPNGImage.png" alt="Google logo"/>
            </td>
            </tr>
            <tr>
              <td class="p-t-5 p-b-2">
                <img class="m-r-2 w-5" src="/assets/google-star-review-logo-e1706350894182.png" alt="star"/>
                <img class="m-r-2 w-5" src="/assets/google-star-review-logo-e1706350894182.png" alt="star"/>
                <img class="m-r-2 w-5" src="/assets/google-star-review-logo-e1706350894182.png" alt="star"/>
                <img class="m-r-2 w-5" src="/assets/google-star-review-logo-e1706350894182.png" alt="star"/>
                <img class="w-5" src="/assets/output-onlinepngtools-e1707480352597.png" alt="star"/>
              </td>
            </tr>
            <tr>
            <td class="p-b-4 font-300 font-size-5" style="font-family:'Roboto', sans-serif;">{props.reviewText}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

function ThreeStarReview(props: {src: string | undefined; name: number | boolean | Node | JSX.ArrayElement | (string & {}) | null | undefined; date: number | boolean | Node | JSX.ArrayElement | (string & {}) | null | undefined; reviewText: number | boolean | Node | JSX.ArrayElement | (string & {}) | null | undefined; }) {
  return (
    <div class="filterDiv 4-stars">
      <table class="m-y-25 4-stars w-70% m-auto border-style-solid b-gray-2" style="border-width: 1px 0px 1px 0px;">
        <tbody>
          <tr>
            <td class="top-row-of-new-google-review flex flex-justify-between flex-items-center">
              <div class="profile-pic-and-name-in-review flex flex-items-center gap-4">
                <img class="w-12 h-12" src={props.src} alt="profile"/>
                <p class="flex flex-col"><b>{props.name}</b>{props.date}</p>
              </div>
                <img class="w-10 h-10" src="/assets/GoogleLogoPNGImage.png" alt="Google logo"/>
            </td>
            </tr>
            <tr>
              <td class="p-t-5 p-b-2">
                <img class="m-r-2 w-5" src="/assets/google-star-review-logo-e1706350894182.png" alt="star"/>
                <img class="m-r-2 w-5" src="/assets/google-star-review-logo-e1706350894182.png" alt="star"/>
                <img class="m-r-2 w-5" src="/assets/google-star-review-logo-e1706350894182.png" alt="star"/>
                <img class="m-r-2 w-5" src="/assets/output-onlinepngtools-e1707480352597.png" alt="star"/>
                <img class="w-5" src="/assets/output-onlinepngtools-e1707480352597.png" alt="star"/>
              </td>
            </tr>
            <tr>
            <td class="p-b-4 font-300 font-size-5" style="font-family:'Roboto', sans-serif;">{props.reviewText}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

function TwoStarReview(props: {src: string | undefined; name: number | boolean | Node | JSX.ArrayElement | (string & {}) | null | undefined; date: number | boolean | Node | JSX.ArrayElement | (string & {}) | null | undefined; reviewText: number | boolean | Node | JSX.ArrayElement | (string & {}) | null | undefined; }) {
  return (
    <div class="filterDiv 4-stars">
      <table class="m-y-25 4-stars w-70% m-auto border-style-solid b-gray-2" style="border-width: 1px 0px 1px 0px;">
        <tbody>
          <tr>
            <td class="top-row-of-new-google-review flex flex-justify-between flex-items-center">
              <div class="profile-pic-and-name-in-review flex flex-items-center gap-4">
                <img class="w-12 h-12" src={props.src} alt="profile"/>
                <p class="flex flex-col"><b>{props.name}</b>{props.date}</p>
              </div>
                <img class="w-10 h-10" src="/assets/GoogleLogoPNGImage.png" alt="Google logo"/>
            </td>
            </tr>
            <tr>
              <td class="p-t-5 p-b-2">
                <img class="m-r-2 w-5" src="/assets/google-star-review-logo-e1706350894182.png" alt="star"/>
                <img class="m-r-2 w-5" src="/assets/google-star-review-logo-e1706350894182.png" alt="star"/>
                <img class="m-r-2 w-5" src="/assets/output-onlinepngtools-e1707480352597.png" alt="star"/>
                <img class="m-r-2 w-5" src="/assets/output-onlinepngtools-e1707480352597.png" alt="star"/>
                <img class="w-5" src="/assets/output-onlinepngtools-e1707480352597.png" alt="star"/>
              </td>
            </tr>
            <tr>
            <td class="p-b-4 font-300 font-size-5" style="font-family:'Roboto', sans-serif;">{props.reviewText}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

function OneStarReview(props: {src: string | undefined; name: number | boolean | Node | JSX.ArrayElement | (string & {}) | null | undefined; date: number | boolean | Node | JSX.ArrayElement | (string & {}) | null | undefined; reviewText: number | boolean | Node | JSX.ArrayElement | (string & {}) | null | undefined; }) {
  return (
    <div class="filterDiv 4-stars">
      <table class="m-y-25 4-stars w-70% m-auto border-style-solid b-gray-2" style="border-width: 1px 0px 1px 0px;">
        <tbody>
          <tr>
            <td class="top-row-of-new-google-review flex flex-justify-between flex-items-center">
              <div class="profile-pic-and-name-in-review flex flex-items-center gap-4">
                <img class="w-12 h-12" src={props.src} alt="profile"/>
                <p class="flex flex-col"><b>{props.name}</b>{props.date}</p>
              </div>
                <img class="w-10 h-10" src="/assets/GoogleLogoPNGImage.png" alt="Google logo"/>
            </td>
            </tr>
            <tr>
              <td class="p-t-5 p-b-2">
                <img class="m-r-2 w-5" src="/assets/google-star-review-logo-e1706350894182.png" alt="star"/>
                <img class="m-r-2 w-5" src="/assets/output-onlinepngtools-e1707480352597.png" alt="star"/>
                <img class="m-r-2 w-5" src="/assets/output-onlinepngtools-e1707480352597.png" alt="star"/>
                <img class="m-r-2 w-5" src="/assets/output-onlinepngtools-e1707480352597.png" alt="star"/>
                <img class="w-5" src="/assets/output-onlinepngtools-e1707480352597.png" alt="star"/>
              </td>
            </tr>
            <tr>
            <td class="p-b-4 font-300 font-size-5" style="font-family:'Roboto', sans-serif;">{props.reviewText}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default function Page() {
  return (
    <>

<h1>What our clients say about us</h1>

<App></App>


<FiveStarReview
  src="/assets/profile-pics-reviews/unnamed-1.png"
  reviewText="Great Service. Highly recommended!"
  name="Ivaylo Ivanov"
  date="January 2024"
/>

<div class="filterDiv 5-stars mt-12% flex flex-wrap flex-justify-center">
	<button class="outline-none bg-brand-action hover-bg-brand-action-hover:hover font-size-6 font-600 w-200px h-60px c-paper flex flex-items-center flex-justify-center relative b-solid b-rd-3 b-4 b-brand-action hover-b-brand-action-hover:hover whitespace-normal line-height-6 word-spacing-0.5 py-9" style="box-shadow: 0 0 0 3px rgba(255, 255, 255, .9) inset; letter-spacing: 0.05rem;"><a href="https://g.co/kgs/PFX6tTG" target="_blank" rel="noopener" class="c-paper font-size-5">READ MORE IN GOOGLE</a></button>
</div>

<div class="filterDiv 5-stars"><FleurDivider></FleurDivider></div>

<FourStarReview      
  src="/assets/profile-pics-reviews/unnamed.png"
  reviewText="Excellent service very quick only took a hour, carpet very clean all stains cleaned.
    front room stairs corridor landing’s small bedroom great service.
    Only waiting for carpet to completely dry should take a hour mostly dried.
    Thank you I was was satisfied with service, the technician was very polite & Professional."
  name="Robert Nyame"
  date="January 2024"
  >
</FourStarReview>

<div class="filterDiv 4-stars"><button class="greenbutton"><a href="https://g.co/kgs/doBtnwu" target="_blank" rel="noopener">READ MORE IN GOOGLE</a></button></div>

<div class="filterDiv 4-stars"><FleurDivider></FleurDivider></div>

<FiveStarReview      
  src="/assets/profile-pics-reviews/unnamed-49.png"
  reviewText="I had my carpet cleaned by Nikolay from Fine Carpet Cleaning. What a fantastic job he did ! He is very professional, efficient and organised in the way he works. My carpet looks new again. I highly recommend."
  name="Samanta Federico"
  date="January 2024"
  >
</FiveStarReview>

<div class="filterDiv 5-stars"><button class="greenbutton"><a href="https://g.co/kgs/WxWf2Bm" target="_blank" rel="noopener">READ MORE IN GOOGLE</a></button></div>

<div class="filterDiv 5-stars"><FleurDivider></FleurDivider></div>

<FiveStarReview      
  src="/assets/profile-pics-reviews/unnamed-2.png"
  reviewText="Thank you for the great customer service and for the outstanding job you have done. We love our carper even more now.
Gergana"
  name="Gergana Georgieva"
  date="January 2024"
  >
</FiveStarReview>

<div class="filterDiv 5-stars"><button class="greenbutton"><a href="https://g.co/kgs/vD8tsDc" target="_blank" rel="noopener">READ MORE IN GOOGLE</a></button></div>

<div class="filterDiv 5-stars"><FleurDivider></FleurDivider></div>

<FiveStarReview      
  src="/assets/profile-pics-reviews/unnamed-3.png"
  reviewText="Very pleased with the results of my carpets being cleaned. Easy process from start to finish helped by very friendly Maya who arranged it all. Would certainly use this company again."
  name="Rosalind Faw"
  date="December 2023"
  >
</FiveStarReview>

<div class="filterDiv 5-stars"><button class="greenbutton"><a href="https://g.co/kgs/ou1h8h8" target="_blank" rel="noopener">READ MORE IN GOOGLE</a></button></div>

<div class="filterDiv 5-stars"><FleurDivider></FleurDivider></div>

<FiveStarReview      
  src="/assets/profile-pics-reviews/unnamed-7-1.png"
  reviewText="Very good carpet cleaning"
  name="david o'brien"
  date="December 2023"
  >
</FiveStarReview>

<div class="filterDiv 5-stars"><button class="greenbutton"><a href="https://g.co/kgs/DNM8JQd" target="_blank" rel="noopener">READ MORE IN GOOGLE</a></button></div>

<div class="filterDiv 5-stars"><FleurDivider></FleurDivider></div>

<FourStarReview      
  src="/assets/profile-pics-reviews/unnamed-4.png"
  reviewText="Excellent cleaning company! Very happy with the service all carpet strains gone."
  name="Ladine Oconnor"
  date="November 2023"
  >
</FourStarReview>

<div class="filterDiv 4-stars"><button class="greenbutton"><a href="https://g.co/kgs/mmNDw9P" target="_blank" rel="noopener">READ MORE IN GOOGLE</a></button></div>

<div class="filterDiv 4-stars"><FleurDivider></FleurDivider></div>

<OneStarReview      
  src="/assets/profile-pics-reviews/unnamed-5.png"
  reviewText="Was very mislead by the positive reviews. I was debating whether to just leave it or say something but a few days have passed now and I am very unhappy with the service. I was told my white shaggy rug could be as good as new and deep cleaned, only to have it look exactly the same after. The website said £28, but I was told it needs a deeper clean with urine removal which is £65. The rug smelt and looked EXACTLY the same after completion. £65 I was charged for a Hoover that done nothing. They gave me 10% off when I complained and then start saying they don’t know until they try, which felt so misleading telling me they could before I paid. I would have understood if this was made clear before payment, but it Was said with such certainty, even right before they started I said can we definitely make it good as new, and he literally said “yes absolutely” straight to my face. Money down the drain. Avoid at all costs!"
  name="Brad Merry"
  date="November 2023"
  >
</OneStarReview>

<div class="filterDiv 1-stars"><button class="greenbutton"><a href="https://g.co/kgs/wmTCMU8" target="_blank" rel="noopener">READ MORE IN GOOGLE</a></button></div>

<div class="filterDiv 1-stars"><FleurDivider></FleurDivider></div>

<OneStarReview      
  src="/assets/profile-pics-reviews/unnamed-6.png"
  reviewText="Very dissapoined. While the customer service itself is very friendly and professional, the work itself is absolutely useless. I paid £160 to clean my sofa, send photos, videos and explained that the sofa is natural leather. All I wanted,was just to refereh my leather sofa a bit. However I saw 0 difference from before and after. ;( what a waste of money."
  name="E M"
  date="November 2023"
  >
</OneStarReview>

<div class="filterDiv 1-stars"><button class="greenbutton"><a href="https://g.co/kgs/1d7AfUe" target="_blank" rel="noopener">READ MORE IN GOOGLE</a></button></div>

<div class="filterDiv 1-stars"><FleurDivider></FleurDivider></div>

<FiveStarReview      
  src="/assets/profile-pics-reviews/unnamed-7.png"
  reviewText="My carpet was in really bad shape, Fine Carpet Cleaning came around and it looks perfect!
Will be definitely using their services again"
  name="Erica Baptista"
  date="November 2023"
  >
</FiveStarReview>

<div class="filterDiv 5-stars"><button class="greenbutton"><a href="https://g.co/kgs/B2g8cw9" target="_blank" rel="noopener">READ MORE IN GOOGLE</a></button></div>

<div class="filterDiv 5-stars"><FleurDivider></FleurDivider></div>

<FiveStarReview      
  src="/assets/profile-pics-reviews/unnamed-8.png"
  reviewText="Good company - very responsive via email & fairly priced. On the day the guys were punctual, polite and did a good thorough job."
  name="Rachel Ellis"
  date="October 2023"
  >
</FiveStarReview>

<div class="filterDiv 5-stars"><button class="greenbutton"><a href="https://g.co/kgs/k6KFKDf" target="_blank" rel="noopener">READ MORE IN GOOGLE</a></button></div>

<div class="filterDiv 5-stars"><FleurDivider></FleurDivider></div>

<FiveStarReview      
  src="/assets/profile-pics-reviews/unnamed-2.png"
  reviewText="Real professionals"
  name="G B"
  date="October 2023"
  >
</FiveStarReview>

<div class="filterDiv 5-stars"><button class="greenbutton"><a href="https://g.co/kgs/vkoHNfC" target="_blank" rel="noopener">READ MORE IN GOOGLE</a></button></div>

<div class="filterDiv 5-stars"><FleurDivider></FleurDivider></div>

<FiveStarReview      
  src="/assets/profile-pics-reviews/unnamed-9.png"
  reviewText="Very happy with the service . The carpet cleaning man did a great job. Was very friendly and on time . And it was a great price"
  name="Katrina Scott"
  date="August 2023"
  >
</FiveStarReview>

<div class="filterDiv 5-stars"><button class="greenbutton"><a href="https://g.co/kgs/bkiybKv" target="_blank" rel="noopener">READ MORE IN GOOGLE</a></button></div>

<div class="filterDiv 5-stars"><FleurDivider></FleurDivider></div>

<FiveStarReview      
  src="/assets/profile-pics-reviews/unnamed-62.png"
  reviewText="Excellent carpet cleaning service"
  name="Sheikh Khanom"
  date="August 2023"
  >
</FiveStarReview>

<div class="filterDiv 5-stars"><button class="greenbutton"><a href="https://g.co/kgs/8hyCUc5" target="_blank" rel="noopener">READ MORE IN GOOGLE</a></button></div>

<div class="filterDiv 5-stars"><FleurDivider></FleurDivider></div>

<FiveStarReview      
  src="/assets/profile-pics-reviews/unnamed-59.png"
  reviewText="Great service, would recommend."
  name="Peter Tobin"
  date="June 2023"
  >
</FiveStarReview>

<div class="filterDiv 5-stars"><button class="greenbutton"><a href="https://g.co/kgs/55SK7Dy" target="_blank" rel="noopener">READ MORE IN GOOGLE</a></button></div>

<div class="filterDiv 5-stars"><FleurDivider></FleurDivider></div>

<FiveStarReview      
  src="/assets/profile-pics-reviews/unnamed-10.png"
  reviewText="Yavor and his team have been more than helpful to our short-term rentals business. Not only they've dealt with old stains and left our carpets like brand new, but we are very grateful for their professionalism."
  name="Alena Mineva"
  date="July 2023"
  >
</FiveStarReview>

<div class="filterDiv 5-stars"><button class="greenbutton"><a href="https://g.co/kgs/8muBPZV" target="_blank" rel="noopener">READ MORE IN GOOGLE</a></button></div>

<div class="filterDiv 5-stars"><FleurDivider></FleurDivider></div>

<FiveStarReview      
  src="/assets/profile-pics-reviews/unnamed-11.png"
  reviewText="Great job from start to finish: competitive quotation, efficient arrangements before appointment, technician arrived exactly on time, efficient clean and stain protection with powerful modern equipment. Very happy with the whole process and will use them again."
  name="Kirsten Pansegrouw"
  date="July 2023"
  >
</FiveStarReview>

<div class="filterDiv 5-stars"><button class="greenbutton"><a href="https://g.co/kgs/hcnd2zs" target="_blank" rel="noopener">READ MORE IN GOOGLE</a></button></div>

<div class="filterDiv 5-stars"><FleurDivider></FleurDivider></div>

<FiveStarReview      
  src="/assets/profile-pics-reviews/unnamed-12.png"
  reviewText="Excellent service, cost and great communication! Provided stain removal for a carpet. Highly recommended!"
  name="Helder Oliveira"
  date="July 2023"
  >
</FiveStarReview>

<div class="filterDiv 5-stars"><button class="greenbutton"><a href="https://g.co/kgs/Shz3uGZ" target="_blank" rel="noopener">READ MORE IN GOOGLE</a></button></div>

<div class="filterDiv 5-stars"><FleurDivider></FleurDivider></div>

<FourStarReview      
  src="/assets/profile-pics-reviews/unnamed-45-1.png"
  reviewText=""
  name="Ramya Kaza"
  date="May 2023"
  >
</FourStarReview>

<div class="filterDiv 4-stars"><button class="greenbutton"><a href="https://maps.app.goo.gl/aGJwRnPuUjGgZ44e7" target="_blank" rel="noopener">READ MORE IN GOOGLE</a></button></div>

<div class="filterDiv 4-stars"><FleurDivider></FleurDivider></div>

<FiveStarReview      
  src="/assets/profile-pics-reviews/unnamed-32-1.png"
  reviewText=""
  name="Martin Parzulov"
  date="April 2023"
  >
</FiveStarReview>

<div class="filterDiv 5-stars"><button class="greenbutton"><a href="https://maps.app.goo.gl/aGJwRnPuUjGgZ44e7" target="_blank" rel="noopener">READ MORE IN GOOGLE</a></button></div>

<div class="filterDiv 5-stars"><FleurDivider></FleurDivider></div>

<FiveStarReview      
  src="/assets/profile-pics-reviews/unnamed-13.png"
  reviewText="First time we used Fine Carpet Cleaning London, we sourced their add on Gumtree and I must say I was taken back with the level of service we received.
We had a 2 bedroom apartment carpet wash, booked the appointment for the very next day.
Technician came on time and done a fantastic job, very friendly, always add a smile on his face & most importantly did not make a mess of the property.
Highly recommended, looking forward to using their services again."
  name="Quest London"
  date="March 2023"
  >
</FiveStarReview>

<div class="filterDiv 5-stars"><button class="greenbutton"><a href="https://g.co/kgs/tUWswMy" target="_blank" rel="noopener">READ MORE IN GOOGLE</a></button></div>

<div class="filterDiv 5-stars"><FleurDivider></FleurDivider></div>

<FourStarReview      
  src="/assets/profile-pics-reviews/unnamed-43-1.png"
  reviewText=""
  name="Kam Pindoria"
  date="March 2023"
  >
</FourStarReview>

<div class="filterDiv 4-stars"><button class="greenbutton"><a href="https://maps.app.goo.gl/aGJwRnPuUjGgZ44e7" target="_blank" rel="noopener">READ MORE IN GOOGLE</a></button></div>

<div class="filterDiv 4-stars"><FleurDivider></FleurDivider></div>

<FiveStarReview      
  src="/assets/profile-pics-reviews/unnamed-21-1.png"
  reviewText=""
  name="Tereza Aleksieva"
  date="March 2023"
  >
</FiveStarReview>

<div class="filterDiv 5-stars"><button class="greenbutton"><a href="https://maps.app.goo.gl/aGJwRnPuUjGgZ44e7" target="_blank" rel="noopener">READ MORE IN GOOGLE</a></button></div>

<div class="filterDiv 5-stars"><FleurDivider></FleurDivider></div>

<FiveStarReview      
  src="/assets/profile-pics-reviews/unnamed-37-1.png"
  reviewText=""
  name="Samir Patel"
  date="March 2023"
  >
</FiveStarReview>

<div class="filterDiv 5-stars"><button class="greenbutton"><a href="https://maps.app.goo.gl/aGJwRnPuUjGgZ44e7" target="_blank" rel="noopener">READ MORE IN GOOGLE</a></button></div>

<div class="filterDiv 5-stars"><FleurDivider></FleurDivider></div>

<FiveStarReview      
  src="/assets/profile-pics-reviews/unnamed-14.png"
  reviewText="This is my second time using this specific company I highly recommened them as they are excellent, my sofa had some stains and general dirt and it has come up very clean the person was informative and tidy he was polite and friendly and I am very impressed by how my sofa cleaned up very well. Also further too this the person that manages the phone is always friendly and polite and understanding, very competent at his job and offers reasonable prices. I will most definitely recommend this company and everything they have done. Also the person arrived within the allocated time slot.
Highly recommened
Reasonable price
Friendly
Arrived on time
Introduced himself
And clean and tidy
Thank you"
  name="Sonia Lavinia"
  date="March 2023"
  >
</FiveStarReview>

<div class="filterDiv 5-stars"><button class="greenbutton"><a href="https://g.co/kgs/ZYgUE1Y" target="_blank" rel="noopener">READ MORE IN GOOGLE</a></button></div>

<div class="filterDiv 5-stars"><FleurDivider></FleurDivider></div>

<FiveStarReview      
  src="/assets/profile-pics-reviews/unnamed-58.png"
  reviewText="Polite and professional, easy communication and better price than other pushy businesses in the area"
  name="Richard Kaye"
  date="March 2023"
  >
</FiveStarReview>

<div class="filterDiv 5-stars"><button class="greenbutton"><a href="https://g.co/kgs/vRWF2mo" target="_blank" rel="noopener">READ MORE IN GOOGLE</a></button></div>

<div class="filterDiv 5-stars"><FleurDivider></FleurDivider></div>

<FiveStarReview      
  src="/assets/profile-pics-reviews/unnamed-8-1.png"
  reviewText="Nice men clean good"
  name="Waqas Ali"
  date="February 2023"
  >
</FiveStarReview>

<div class="filterDiv 5-stars"><button class="greenbutton"><a href="https://g.co/kgs/1pmB9CL" target="_blank" rel="noopener">READ MORE IN GOOGLE</a></button></div>

<div class="filterDiv 5-stars"><FleurDivider></FleurDivider></div>

<FiveStarReview      
  src="/assets/profile-pics-reviews/unnamed-5.png"
  reviewText="Would recommend this company. Would definitely use them again. On time and very polite service"
  name="Bernice Gilbert"
  date="January 2023"
  >
</FiveStarReview>

<div class="filterDiv 5-stars"><button class="greenbutton"><a href="https://g.co/kgs/gX19KLa" target="_blank" rel="noopener">READ MORE IN GOOGLE</a></button></div>

<div class="filterDiv 5-stars"><FleurDivider></FleurDivider></div>

<FiveStarReview      
  src="/assets/profile-pics-reviews/unnamed-15.png"
  reviewText="Had sofa frames cleaned, they look brand new! You cannot get better price with great quality.
I had food stains and water mark all gone!!
5 star🌟"
  name="Adil Mukhtar"
  date="December 2022"
  >
</FiveStarReview>

<div class="filterDiv 5-stars"><button class="greenbutton"><a href="https://g.co/kgs/Ab8W62q" target="_blank" rel="noopener">READ MORE IN GOOGLE</a></button></div>

<div class="filterDiv 5-stars"><FleurDivider></FleurDivider></div>

<FiveStarReview      
  src="/assets/profile-pics-reviews/unnamed-11-1.png"
  reviewText="Very satisfied"
  name="Ka Po Yuen"
  date="December 2022"
  >
</FiveStarReview>

<div class="filterDiv 5-stars"><button class="greenbutton"><a href="https://g.co/kgs/wAMjUnN" target="_blank" rel="noopener">READ MORE IN GOOGLE</a></button></div>

<div class="filterDiv 5-stars"><FleurDivider></FleurDivider></div>

<FiveStarReview      
  src="/assets/profile-pics-reviews/unnamed-21-1.png"
  reviewText=""
  name="ken chapman"
  date="December 2022"
  >
</FiveStarReview>

<div class="filterDiv 5-stars"><button class="greenbutton"><a href="https://maps.app.goo.gl/aGJwRnPuUjGgZ44e7" target="_blank" rel="noopener">READ MORE IN GOOGLE</a></button></div>

<div class="filterDiv 5-stars"><FleurDivider></FleurDivider></div>

<FiveStarReview      
  src="/assets/profile-pics-reviews/unnamed-16.png"
  reviewText="I have used this company four times now and each time have been really pleased with their service.
Their pricing is very competitive and on occasion when they have had to go over an area twice to achieve perfect results there hasn’t been a surcharge.
I will definitely use them again and would recommend them to anyone."
  name="Laraine Good"
  date="November 2022"
  >
</FiveStarReview>

<div class="filterDiv 5-stars"><button class="greenbutton"><a href="https://g.co/kgs/pWRvU1L" target="_blank" rel="noopener">READ MORE IN GOOGLE</a></button></div>

<div class="filterDiv 5-stars"><FleurDivider></FleurDivider></div>

<OneStarReview      
  src="/assets/profile-pics-reviews/unnamed-54.png"
  reviewText="The carpet smelled awful after the cleaning. They cleaned it in less than 30 mins whereas the previous cleaning company took an hour to do the job. Was not impressed with the job that was done and would not use again."
  name="Amandeep Singh"
  date="October 2022"
  >
</OneStarReview>

<div class="filterDiv 1-stars"><button class="greenbutton"><a href="https://g.co/kgs/S8gT3sP" target="_blank" rel="noopener">READ MORE IN GOOGLE</a></button></div>

<div class="filterDiv 1-stars"><FleurDivider></FleurDivider></div>

<FiveStarReview      
  src="/assets/profile-pics-reviews/unnamed-12-1.png"
  reviewText="Excellent service"
  name="linda miller"
  date="October 2022"
  >
</FiveStarReview>

<div class="filterDiv 5-stars"><button class="greenbutton"><a href="https://g.co/kgs/cJ9dNZd" target="_blank" rel="noopener">READ MORE IN GOOGLE</a></button></div>

<div class="filterDiv 5-stars"><FleurDivider></FleurDivider></div>

<FiveStarReview      
  src="/assets/profile-pics-reviews/unnamed-17.png"
  reviewText="Second time using. I'm not easy impressed. On time, good job, clean, professional and courteous just like last time so recommended to a friend already. Will use again."
  name="Les Johnston"
  date="October 2022"
  >
</FiveStarReview>

<div class="filterDiv 5-stars"><button class="greenbutton"><a href="https://g.co/kgs/NebqKpZ" target="_blank" rel="noopener">READ MORE IN GOOGLE</a></button></div>

<div class="filterDiv 5-stars"><FleurDivider></FleurDivider></div>

<FourStarReview      
  src="/assets/profile-pics-reviews/unnamed-56.png"
  reviewText="it was very good experience but I think the guy who cleaned my carpet lacked detergent or something effective in the high traffic carpet as nothing changed after cleaning 🧹"
  name="Islam Bashir"
  date="June 2022"
  >
</FourStarReview>

<div class="filterDiv 4-stars"><button class="greenbutton"><a href="https://g.co/kgs/PbGgPJC" target="_blank" rel="noopener">READ MORE IN GOOGLE</a></button></div>

<div class="filterDiv 4-stars"><FleurDivider></FleurDivider></div>

<FiveStarReview      
  src="/assets/profile-pics-reviews/unnamed-63.png"
  reviewText="Very Professional service fast response excellent work completed"
  name="Sheree Davenport"
  date="June 2022"
  >
</FiveStarReview>

<div class="filterDiv 5-stars"><button class="greenbutton"><a href="https://g.co/kgs/WvSpNo6" target="_blank" rel="noopener">READ MORE IN GOOGLE</a></button></div>

<div class="filterDiv 5-stars"><FleurDivider></FleurDivider></div>

<FiveStarReview      
  src="/assets/profile-pics-reviews/unnamed-35-1.png"
  reviewText=""
  name="Zina Wilkinson"
  date="July 2022"
  >
</FiveStarReview>

<div class="filterDiv 5-stars"><button class="greenbutton"><a href="https://maps.app.goo.gl/aGJwRnPuUjGgZ44e7" target="_blank" rel="noopener">READ MORE IN GOOGLE</a></button></div>

<div class="filterDiv 5-stars"><FleurDivider></FleurDivider></div>

<FiveStarReview      
  src="/assets/profile-pics-reviews/unnamed-18.png"
  reviewText="Very professional and friendly service. Carpets were brand new, amazing work. Very clean and the products used smelt really nice and fresh."
  name="Nima Mohamed"
  date="June 2022"
  >
</FiveStarReview>

<div class="filterDiv 5-stars"><button class="greenbutton"><a href="https://g.co/kgs/T4X36GH" target="_blank" rel="noopener">READ MORE IN GOOGLE</a></button></div>

<div class="filterDiv 5-stars"><FleurDivider></FleurDivider></div>

<FiveStarReview      
  src="/assets/profile-pics-reviews/unnamed-54.png"
  reviewText="Very professional communication throughout and excellent cleaning service from the technician. This is the third time I’ve used this company."
  name="Alkesh C"
  date="May 2022"
  >
</FiveStarReview>

<div class="filterDiv 5-stars"><button class="greenbutton"><a href="https://g.co/kgs/DXwa4g2" target="_blank" rel="noopener">READ MORE IN GOOGLE</a></button></div>

<div class="filterDiv 5-stars"><FleurDivider></FleurDivider></div>

<FiveStarReview      
  src="/assets/profile-pics-reviews/unnamed-14-1.png"
  reviewText=""
  name="Martin Angelov"
  date="May 2022"
  >
</FiveStarReview>

<div class="filterDiv 5-stars"><button class="greenbutton"><a href="https://maps.app.goo.gl/aGJwRnPuUjGgZ44e7" target="_blank" rel="noopener">READ MORE IN GOOGLE</a></button></div>

<div class="filterDiv 5-stars"><FleurDivider></FleurDivider></div>

<FiveStarReview      
  src="/assets/profile-pics-reviews/unnamed-19.png"
  reviewText="Excellent! We were very happy with both the quality of the service and also the value for money. We will definitely be using their services again."
  name="Baljinder kaur"
  date="May 2022"
  >
</FiveStarReview>

<div class="filterDiv 5-stars"><button class="greenbutton"><a href="https://g.co/kgs/mquiyKX" target="_blank" rel="noopener">READ MORE IN GOOGLE</a></button></div>

<div class="filterDiv 5-stars"><FleurDivider></FleurDivider></div>

<FiveStarReview      
  src="/assets/profile-pics-reviews/unnamed-38-1.png"
  reviewText=""
  name="Abz Mujib"
  date="May 2022"
  >
</FiveStarReview>

<div class="filterDiv 5-stars"><button class="greenbutton"><a href="https://maps.app.goo.gl/aGJwRnPuUjGgZ44e7" target="_blank" rel="noopener">READ MORE IN GOOGLE</a></button></div>

<div class="filterDiv 5-stars"><FleurDivider></FleurDivider></div>

<FiveStarReview      
  src="/assets/profile-pics-reviews/unnamed-57.png"
  reviewText="Very happy with the service. The stains and marks are all gone. Carpet looks very clean."
  name="Hatim Shah"
  date="May 2022"
  >
</FiveStarReview>

<div class="filterDiv 5-stars"><button class="greenbutton"><a href="https://g.co/kgs/9JdjcBy" target="_blank" rel="noopener">READ MORE IN GOOGLE</a></button></div>

<div class="filterDiv 5-stars"><FleurDivider></FleurDivider></div>

<FiveStarReview      
  src="/assets/profile-pics-reviews/unnamed-55.png"
  reviewText="I've used Fine Carpet Cleaning for my business premises and my home and they provide an excellent service."
  name="Gerald Powell"
  date="April 2022"
  >
</FiveStarReview>

<div class="filterDiv 5-stars"><button class="greenbutton"><a href="https://g.co/kgs/hDnPJux" target="_blank" rel="noopener">READ MORE IN GOOGLE</a></button></div>

<div class="filterDiv 5-stars"><FleurDivider></FleurDivider></div>

<FiveStarReview      
  src="/assets/profile-pics-reviews/unnamed-41-1.png"
  reviewText=""
  name="Flori Rizea"
  date="April 2022"
  >
</FiveStarReview>

<div class="filterDiv 5-stars"><button class="greenbutton"><a href="https://maps.app.goo.gl/aGJwRnPuUjGgZ44e7" target="_blank" rel="noopener">READ MORE IN GOOGLE</a></button></div>

<div class="filterDiv 5-stars"><FleurDivider></FleurDivider></div>

<FiveStarReview      
  src="/assets/profile-pics-reviews/unnamed-20-1.png"
  reviewText=""
  name="Marc Yallop"
  date="April 2022"
  >
</FiveStarReview>

<div class="filterDiv 5-stars"><button class="greenbutton"><a href="https://maps.app.goo.gl/aGJwRnPuUjGgZ44e7" target="_blank" rel="noopener">READ MORE IN GOOGLE</a></button></div>

<div class="filterDiv 5-stars"><FleurDivider></FleurDivider></div>

<FiveStarReview      
  src="/assets/profile-pics-reviews/unnamed-15-1.png"
  reviewText=""
  name="Patricia Mbock"
  date="April 2022"
  >
</FiveStarReview>

<div class="filterDiv 5-stars"><button class="greenbutton"><a href="https://maps.app.goo.gl/aGJwRnPuUjGgZ44e7" target="_blank" rel="noopener">READ MORE IN GOOGLE</a></button></div>

<div class="filterDiv 5-stars"><FleurDivider></FleurDivider></div>

<FiveStarReview      
  src="/assets/profile-pics-reviews/unnamed-5.png"
  reviewText="Would recommend this company. Would definitely use them again. On time and very polite service"
  name="Bernice Gilbert"
  date="April 2022"
  >
</FiveStarReview>

<div class="filterDiv 5-stars"><button class="greenbutton"><a href="https://g.co/kgs/eTUjHXP" target="_blank" rel="noopener">READ MORE IN GOOGLE</a></button></div>

<div class="filterDiv 5-stars"><FleurDivider></FleurDivider></div>

<FiveStarReview      
  src="/assets/profile-pics-reviews/unnamed-25-1.png"
  reviewText=""
  name="Ralph W"
  date="February 2022"
  >
</FiveStarReview>

<div class="filterDiv 5-stars"><button class="greenbutton"><a href="https://maps.app.goo.gl/aGJwRnPuUjGgZ44e7" target="_blank" rel="noopener">READ MORE IN GOOGLE</a></button></div>

<div class="filterDiv 5-stars"><FleurDivider></FleurDivider></div>

<FiveStarReview      
  src="/assets/profile-pics-reviews/unnamed-20.png"
  reviewText="I have used Fine Carpet Cleaning for years and need I say they turn our home to new each time they come to do the carpet cleaning. Staffs are very helpful when it comes to flexibility they always deliver the utmost returning that new carpet smell. I will highly recommend Fine Carpet Cleaning Ltd anytime any day.
Moved home recently and we resumed business as usual.....use Fine Carpet Cleaning you won't regret"
  name="Grace Agbo"
  date="January 2022"
  >
</FiveStarReview>

<div class="filterDiv 5-stars"><button class="greenbutton"><a href="https://g.co/kgs/pXnzWnt" target="_blank" rel="noopener">READ MORE IN GOOGLE</a></button></div>

<div class="filterDiv 5-stars"><FleurDivider></FleurDivider></div>

<FiveStarReview      
  src="/assets/profile-pics-reviews/unnamed-25.png"
  reviewText=""
  name="Minsung Kim"
  date="January 2022"
  >
</FiveStarReview>

<div class="filterDiv 5-stars"><button class="greenbutton"><a href="https://maps.app.goo.gl/aGJwRnPuUjGgZ44e7" target="_blank" rel="noopener">READ MORE IN GOOGLE</a></button></div>

<div class="filterDiv 5-stars"><FleurDivider></FleurDivider></div>

<FiveStarReview      
  src="/assets/profile-pics-reviews/unnamed-21.png"
  reviewText="Very efficient and friendly. Excellent at keeping the client informed and sticking to the times agreed. Nicky worked very quickly and thoroughly. I was very happy with the result and will be using them again shortly."
  name="Judith Hd"
  date="December 2021"
  >
</FiveStarReview>

<div class="filterDiv 5-stars"><button class="greenbutton"><a href="https://g.co/kgs/7G8CfAu" target="_blank" rel="noopener">READ MORE IN GOOGLE</a></button></div>

<div class="filterDiv 5-stars"><FleurDivider></FleurDivider></div>

<FiveStarReview      
  src="/assets/profile-pics-reviews/unnamed-1-2.png"
  reviewText="Brilliant service, polite technician. Would recommend to everyone."
  name="Suly Mayet"
  date="December 2021"
  >
</FiveStarReview>

<div class="filterDiv 5-stars"><button class="greenbutton"><a href="https://g.co/kgs/qZomRen" target="_blank" rel="noopener">READ MORE IN GOOGLE</a></button></div>

<div class="filterDiv 5-stars"><FleurDivider></FleurDivider></div>

<FiveStarReview      
  src="/assets/profile-pics-reviews/unnamed-16-1.png"
  reviewText=""
  name="Bee Sounds (DJ)"
  date="December 2021"
  >
</FiveStarReview>

<div class="filterDiv 5-stars"><button class="greenbutton"><a href="https://maps.app.goo.gl/aGJwRnPuUjGgZ44e7" target="_blank" rel="noopener">READ MORE IN GOOGLE</a></button></div>

<div class="filterDiv 5-stars"><FleurDivider></FleurDivider></div>

<FiveStarReview      
  src="/assets/profile-pics-reviews/unnamed-9-1.png"
  reviewText="Excellent customer service"
  name="Natasha Osborne"
  date="November 2021"
  >
</FiveStarReview>

<div class="filterDiv 5-stars"><button class="greenbutton"><a href="https://g.co/kgs/1EFfXJP" target="_blank" rel="noopener">READ MORE IN GOOGLE</a></button></div>

<div class="filterDiv 5-stars"><FleurDivider></FleurDivider></div>

<FiveStarReview      
  src="/assets/profile-pics-reviews/unnamed-27-1.png"
  reviewText="Excellent customer service"
  name="wasiu bankole"
  date="November 2021"
  >
</FiveStarReview>


<div class="filterDiv 5-stars"><button class="greenbutton"><a href="https://maps.app.goo.gl/aGJwRnPuUjGgZ44e7" target="_blank" rel="noopener">READ MORE IN GOOGLE</a></button></div>

<div class="filterDiv 5-stars"><FleurDivider></FleurDivider></div>

<ThreeStarReview      
  src="/assets/profile-pics-reviews/unnamed-9-1.png"
  reviewText="Was okay, the price was decent but unfortunately they couldn’t get 75% of the stains out of my carpet although I’d sent them pictures beforehand, and I had to ask them to go over certain areas and stains they could remove."
  name="Nazia Uddin"
  date="October 2021"
  >
</ThreeStarReview>

<div class="filterDiv 3-stars"><button class="greenbutton"><a href="https://g.co/kgs/bajEL9E" target="_blank" rel="noopener">READ MORE IN GOOGLE</a></button></div>

<div class="filterDiv 3-stars"><FleurDivider></FleurDivider></div>

<FiveStarReview      
  src="/assets/profile-pics-reviews/unnamed-2-1.png"
  reviewText="Punctual, professional and reasonable price. Highly recommended."
  name="Naser Mehrabi"
  date="October 2021"
  >
</FiveStarReview>

<div class="filterDiv 5-stars"><button class="greenbutton"><a href="https://g.co/kgs/bhxXcc8" target="_blank" rel="noopener">READ MORE IN GOOGLE</a></button></div>

<div class="filterDiv 5-stars"><FleurDivider></FleurDivider></div>

<FiveStarReview      
  src="/assets/profile-pics-reviews/unnamed-60.png"
  reviewText="Amazing results, super professional service and attention to details , highly recommend the company"
  name="Temenujka Mollova"
  date="October 2021"
  >
</FiveStarReview>

<div class="filterDiv 5-stars"><button class="greenbutton"><a href="https://g.co/kgs/JXgQacL" target="_blank" rel="noopener">READ MORE IN GOOGLE</a></button></div>

<div class="filterDiv 5-stars"><FleurDivider></FleurDivider></div>

<FiveStarReview      
  src="/assets/profile-pics-reviews/unnamed-36-1.png"
  reviewText=""
  name="Tom Pegg"
  date="September 2021"
  >
</FiveStarReview>

<div class="filterDiv 5-stars"><button class="greenbutton"><a href="https://maps.app.goo.gl/aGJwRnPuUjGgZ44e7" target="_blank" rel="noopener">READ MORE IN GOOGLE</a></button></div>

<div class="filterDiv 5-stars"><FleurDivider></FleurDivider></div>

<FiveStarReview      
  src="/assets/profile-pics-reviews/unnamed-23.png"
  reviewText="Fine carpet cleaning did a great job cleaning the carpets in my house. They were reasonably priced and very professional throughout. I highly recommend them."
  name="Sandra Ebeledike"
  date="August 2021"
  >
</FiveStarReview>

<div class="filterDiv 5-stars"><button class="greenbutton"><a href="https://g.co/kgs/6pSvf2H" target="_blank" rel="noopener">READ MORE IN GOOGLE</a></button></div>

<div class="filterDiv 5-stars"><FleurDivider></FleurDivider></div>

<FiveStarReview      
  src="/assets/profile-pics-reviews/unnamed-28-1.png"
  reviewText=""
  name="A M"
  date="August 2021"
  >
</FiveStarReview>

<div class="filterDiv 5-stars"><button class="greenbutton"><a href="https://maps.app.goo.gl/aGJwRnPuUjGgZ44e7" target="_blank" rel="noopener">READ MORE IN GOOGLE</a></button></div>

<div class="filterDiv 5-stars"><FleurDivider></FleurDivider></div>

<FiveStarReview      
  src="/assets/profile-pics-reviews/unnamed-5.png"
  reviewText="Very great and fast service 🤩 highly recommend"
  name="Becks Bucks"
  date="August 2021"
  >
</FiveStarReview>

<div class="filterDiv 5-stars"><button class="greenbutton"><a href="https://g.co/kgs/xYbBwht" target="_blank" rel="noopener">READ MORE IN GOOGLE</a></button></div>

<div class="filterDiv 5-stars"><FleurDivider></FleurDivider></div>

<FiveStarReview      
  src="/assets/profile-pics-reviews/unnamed-61.png"
  reviewText="Very good service and very professional. High standard and I definitely recommend them."
  name="Taty Lima"
  date="August 2021"
  >
</FiveStarReview>

<div class="filterDiv 5-stars"><button class="greenbutton"><a href="https://g.co/kgs/VvwEYrf" target="_blank" rel="noopener">READ MORE IN GOOGLE</a></button></div>

<div class="filterDiv 5-stars"><FleurDivider></FleurDivider></div>

<FiveStarReview      
  src="/assets/profile-pics-reviews/unnamed-24.png"
  reviewText="Fine Carpet Cleaning were really well priced, turned up on time, did a really good job, my carpets are like new! Will use for all carpet cleaning and upholstery cleaning in future."
  name="Gemma Louise"
  date="August 2021"
  >
</FiveStarReview>

<div class="filterDiv 5-stars"><button class="greenbutton"><a href="https://g.co/kgs/X7npnPK" target="_blank" rel="noopener">READ MORE IN GOOGLE</a></button></div>

<div class="filterDiv 5-stars"><FleurDivider></FleurDivider></div>

<FiveStarReview      
  src="/assets/profile-pics-reviews/unnamed-25.png"
  reviewText="Have used them twice and they are wonderful. Good cleaning, friendly and accommodating service. Definitely recommend!"
  name="Munish Thairani"
  date="July 2021"
  >
</FiveStarReview>

<div class="filterDiv 5-stars"><button class="greenbutton"><a href="https://g.co/kgs/CvZn1wG" target="_blank" rel="noopener">READ MORE IN GOOGLE</a></button></div>

<div class="filterDiv 5-stars"><FleurDivider></FleurDivider></div>

<FiveStarReview      
  src="/assets/profile-pics-reviews/unnamed-22-1.png"
  reviewText=""
  name="David Mcall"
  date="July 2021"
  >
</FiveStarReview>

<div class="filterDiv 5-stars"><button class="greenbutton"><a href="https://maps.app.goo.gl/aGJwRnPuUjGgZ44e7" rel="noopener">READ MORE IN GOOGLE</a></button></div>

<div class="filterDiv 5-stars"><FleurDivider></FleurDivider></div>

<FourStarReview      
  src="/assets/profile-pics-reviews/unnamed-10-1.png"
  reviewText="Thanks for your service."
  name="Curly Treats"
  date="July 2021"
  >
</FourStarReview>

<div class="filterDiv 4-stars"><button class="greenbutton"><a href="https://g.co/kgs/Pe5KAST" target="_blank" rel="noopener">READ MORE IN GOOGLE</a></button></div>

<div class="filterDiv 4-stars"><FleurDivider></FleurDivider></div>

<FourStarReview      
  src="/assets/profile-pics-reviews/unnamed-42-1.png"
  reviewText=""
  name="Yara Evans"
  date="July 2021"
  >
</FourStarReview>

<div class="filterDiv 4-stars"><button class="greenbutton"><a href="https://maps.app.goo.gl/aGJwRnPuUjGgZ44e7" target="_blank" rel="noopener">READ MORE IN GOOGLE</a></button></div>

<div class="filterDiv 4-stars"><FleurDivider></FleurDivider></div>

<FiveStarReview      
  src="/assets/profile-pics-reviews/unnamed-18-1.png"
  reviewText=""
  name="Diner Chowdhury"
  date="May 2021"
  >
</FiveStarReview>

<div class="filterDiv 5-stars"><button class="greenbutton"><a href="https://maps.app.goo.gl/aGJwRnPuUjGgZ44e7" target="_blank" rel="noopener">READ MORE IN GOOGLE</a></button></div>

<div class="filterDiv 5-stars"><FleurDivider></FleurDivider></div>

<FiveStarReview      
  src="/assets/profile-pics-reviews/unnamed-23-1.png"
  reviewText=""
  name="Rumyana Nedeva"
  date="May 2021"
  >
</FiveStarReview>

<div class="filterDiv 5-stars"><button class="greenbutton"><a href="https://maps.app.goo.gl/aGJwRnPuUjGgZ44e7" target="_blank" rel="noopener">READ MORE IN GOOGLE</a></button></div>

<div class="filterDiv 5-stars"><FleurDivider></FleurDivider></div>

<FiveStarReview      
  src="/assets/profile-pics-reviews/unnamed-26.png"
  reviewText="The best service i have ever used! They were very helpful and the price was reasonable. I can’t recommend them enough"
  name="ege cevik"
  date="April 2021"
  >
</FiveStarReview>

<div class="filterDiv 5-stars"><button class="greenbutton"><a href="https://g.co/kgs/yyqKtzc" target="_blank" rel="noopener">READ MORE IN GOOGLE</a></button></div>

<div class="filterDiv 5-stars"><FleurDivider></FleurDivider></div>

<FiveStarReview      
  src="/assets/profile-pics-reviews/unnamed-17-1.png"
  reviewText=""
  name="Kevin Sampson"
  date="February 2021"
  >
</FiveStarReview>

<div class="filterDiv 5-stars"><button class="greenbutton"><a href="https://maps.app.goo.gl/aGJwRnPuUjGgZ44e7" target="_blank" rel="noopener">READ MORE IN GOOGLE</a></button></div>

<div class="filterDiv 5-stars"><FleurDivider></FleurDivider></div>

<TwoStarReview      
  src="/assets/profile-pics-reviews/unnamed-27.png"
  reviewText="The shaggy rug could not be cleaned properly due to it being a high pile rug. the machine they use is an industrial powerful machine but no way it can pick up all rubbish etc."
  name="yusuf Mohammed"
  date="January 2021"
  >
</TwoStarReview>

<div class="filterDiv 2-stars"><button class="greenbutton"><a href="https://g.co/kgs/AUfMKLe" target="_blank" rel="noopener">READ MORE IN GOOGLE</a></button></div>

<div class="filterDiv 2-stars"><FleurDivider></FleurDivider></div>

<FourStarReview      
  src="/assets/profile-pics-reviews/unnamed-39-1.png"
  reviewText="The shaggy rug could not be cleaned properly due to it being a high pile rug. the machine they use is an industrial powerful machine but no way it can pick up all rubbish etc."
  name="Srikanth Vemuri"
  date="December 2020"
  >
</FourStarReview>

<div class="filterDiv 4-stars"><button class="greenbutton"><a href="https://maps.app.goo.gl/aGJwRnPuUjGgZ44e7" target="_blank" rel="noopener">READ MORE IN GOOGLE</a></button></div>

<div class="filterDiv 4-stars"><FleurDivider></FleurDivider></div>

<FiveStarReview      
  src="/assets/profile-pics-reviews/unnamed-28.png"
  reviewText="I am very happy with the service I received, the friendly and professional man who came to deep clean my floors and a few pieces of furniture. After lockdown things were in dire need of a clean and he took his time paying attention to detail. I will re-book for a 'Covid Clean' since I am moving home soon, ensuring my new flat is sanitised by these professionals. Thank you Fine Carpet Cleaning London :)"
  name="A L"
  date="November 2020"
  >
</FiveStarReview>

<div class="filterDiv 5-stars"><button class="greenbutton"><a href="https://g.co/kgs/vbZ2Lyn" target="_blank" rel="noopener">READ MORE IN GOOGLE</a></button></div>

<div class="filterDiv 5-stars"><FleurDivider></FleurDivider></div>

<FiveStarReview      
  src="/assets/profile-pics-reviews/unnamed-29.png"
  reviewText="This was the second time I used Fine Carpet cleaning. On both ocassions I found getting a quote and booking an appointment quick and easy. The person who did the cleanning was polite and very efficient with minimal disruption to my home. Very pleased with results including a difficult stain which was removed successfully."
  name="Christine Rajah"
  date="November 2020"
  >
</FiveStarReview>

<div class="filterDiv 5-stars"><button class="greenbutton"><a href="https://g.co/kgs/PD49URx" target="_blank" rel="noopener">READ MORE IN GOOGLE</a></button></div>

<div class="filterDiv 5-stars"><FleurDivider></FleurDivider></div>

<FourStarReview      
  src="/assets/profile-pics-reviews/unnamed-3-1.png"
  reviewText="All in all was satisfied with the work and a reasonable price."
  name="Isaac Tamir"
  date="November 2020"
  >
</FourStarReview>

<div class="filterDiv 4-stars"><button class="greenbutton"><a href="https://g.co/kgs/AjqjNic" target="_blank" rel="noopener">READ MORE IN GOOGLE</a></button></div>

<div class="filterDiv 4-stars"><FleurDivider></FleurDivider></div>

<FiveStarReview      
  src="/assets/profile-pics-reviews/unnamed-24-1.png"
  reviewText=""
  name="aelis3"
  date="November 2020"
  >
</FiveStarReview>

<div class="filterDiv 5-stars"><button class="greenbutton"><a href="https://maps.app.goo.gl/aGJwRnPuUjGgZ44e7" target="_blank" rel="noopener">READ MORE IN GOOGLE</a></button></div>

<div class="filterDiv 5-stars"><FleurDivider></FleurDivider></div>

<FiveStarReview      
  src="/assets/profile-pics-reviews/unnamed-30.png"
  reviewText="I would recommend this company. Their machinery is industrial and robust, they did an excellent job on my carpets, very thorough and all the stains came out. They were professional and costs were very reasonable."
  name="Anna Townsend"
  date="September 2020"
  >
</FiveStarReview>

<div class="filterDiv 5-stars"><button class="greenbutton"><a href="https://g.co/kgs/AS8CV6x" target="_blank" rel="noopener">READ MORE IN GOOGLE</a></button></div>

<div class="filterDiv 5-stars"><FleurDivider></FleurDivider></div>

<FiveStarReview      
  src="/assets/profile-pics-reviews/unnamed-31.png"
  reviewText="They did a fantastic job removing an old paint stain from my carpet, The cleaner was on time, professional and fast. I can't thank them enough! Def recommend. Again, thank you -Bianca"
  name="Bianca"
  date="September 2020"
  >
</FiveStarReview>

<div class="filterDiv 5-stars"><button class="greenbutton"><a href="https://g.co/kgs/khvbEmJ" target="_blank" rel="noopener">READ MORE IN GOOGLE</a></button></div>

<div class="filterDiv 5-stars"><FleurDivider></FleurDivider></div>

<FiveStarReview      
  src="/assets/profile-pics-reviews/unnamed-30-1.png"
  reviewText=""
  name="FAHAD HASSAN"
  date="September 2020"
  >
</FiveStarReview>

<div class="filterDiv 5-stars"><button class="greenbutton"><a href="https://maps.app.goo.gl/aGJwRnPuUjGgZ44e7" target="_blank" rel="noopener">READ MORE IN GOOGLE</a></button></div>

<div class="filterDiv 5-stars"><FleurDivider></FleurDivider></div>

<FiveStarReview      
  src="/assets/profile-pics-reviews/unnamed-4-1.png"
  reviewText="Really pleased with the service, would recommend again"
  name="Graeme Smith"
  date="September 2020"
  >
</FiveStarReview>

<div class="filterDiv 5-stars"><button class="greenbutton"><a href="https://g.co/kgs/szpgisF" target="_blank" rel="noopener">READ MORE IN GOOGLE</a></button></div>

<div class="filterDiv 5-stars"><FleurDivider></FleurDivider></div>

<FiveStarReview      
  src="/assets/profile-pics-reviews/unnamed-19-1.png"
  reviewText=""
  name="Zakaria Ahmed"
  date="September 2020"
  >
</FiveStarReview>

<div class="filterDiv 5-stars"><button class="greenbutton"><a href="https://maps.app.goo.gl/aGJwRnPuUjGgZ44e7" target="_blank" rel="noopener">READ MORE IN GOOGLE</a></button></div>

<div class="filterDiv 5-stars"><FleurDivider></FleurDivider></div>

<FiveStarReview      
  src="/assets/profile-pics-reviews/unnamed-68.png"
  reviewText="Very pleased with how my settee came out , gentleman was very polite"
  name="mandy rhys"
  date="September 2020"
  >
</FiveStarReview>

<div class="filterDiv 5-stars"><button class="greenbutton"><a href="https://g.co/kgs/kTX6dRc" target="_blank" rel="noopener">READ MORE IN GOOGLE</a></button></div>

<div class="filterDiv 5-stars"><FleurDivider></FleurDivider></div>

<FiveStarReview      
  src="/assets/profile-pics-reviews/unnamed-40-1.png"
  reviewText=""
  name="Miguel Pelaez"
  date="August 2020"
  >
</FiveStarReview>

<div class="filterDiv 5-stars"><button class="greenbutton"><a href="https://maps.app.goo.gl/aGJwRnPuUjGgZ44e7" target="_blank" rel="noopener">READ MORE IN GOOGLE</a></button></div>

<div class="filterDiv 5-stars"><FleurDivider></FleurDivider></div>

<FiveStarReview      
  src="/assets/profile-pics-reviews/unnamed-32.png"
  reviewText="Yes we was very pleased with the outcome of the cleaning of our carpets we have used them a couple of times now & both times were great thanks again ⭐️⭐️⭐️⭐️⭐️"
  name="STONE TONE"
  date="July 2020"
  >
</FiveStarReview>

<div class="filterDiv 5-stars"><button class="greenbutton"><a href="https://g.co/kgs/VPCnNMq" target="_blank" rel="noopener">READ MORE IN GOOGLE</a></button></div>

<div class="filterDiv 5-stars"><FleurDivider></FleurDivider></div>

<FiveStarReview      
  src="/assets/profile-pics-reviews/unnamed-5-1.png"
  reviewText="very good service.!!
highly recommend"
  name="Maria Calota"
  date="July 2020"
  >
</FiveStarReview>

<div class="filterDiv 5-stars"><button class="greenbutton"><a href="https://g.co/kgs/68Ui1kg" target="_blank" rel="noopener">READ MORE IN GOOGLE</a></button></div>

<div class="filterDiv 5-stars"><FleurDivider></FleurDivider></div>

<FiveStarReview      
  src="/assets/profile-pics-reviews/unnamed-67.png"
  reviewText="Excellent service, on time, fast and great attention to detail!"
  name="Gregor Bran"
  date="July 2020"
  >
</FiveStarReview>

<div class="filterDiv 5-stars"><button class="greenbutton"><a href="https://g.co/kgs/nnNX8tD" target="_blank" rel="noopener">READ MORE IN GOOGLE</a></button></div>

<div class="filterDiv 5-stars"><FleurDivider></FleurDivider></div>

<FiveStarReview      
  src="/assets/profile-pics-reviews/unnamed-33.png"
  reviewText="These guys are truly excellent at what they do, their prices are reasonable and their customer service is second to none. They really are best in the business."
  name="G Jones"
  date="June 2020"
  >
</FiveStarReview>

<div class="filterDiv 5-stars"><button class="greenbutton"><a href="https://g.co/kgs/dJggvx6" target="_blank" rel="noopener">READ MORE IN GOOGLE</a></button></div>

<div class="filterDiv 5-stars"><FleurDivider></FleurDivider></div>

<FiveStarReview      
  src="/assets/profile-pics-reviews/unnamed-33-1.png"
  reviewText=""
  name="Ruth Elman"
  date="March 2020"
  >
</FiveStarReview>

<div class="filterDiv 5-stars"><button class="greenbutton"><a href="https://maps.app.goo.gl/aGJwRnPuUjGgZ44e7" target="_blank" rel="noopener">READ MORE IN GOOGLE</a></button></div>

<div class="filterDiv 5-stars"><FleurDivider></FleurDivider></div>

  <a class="top-class-of-new-google-reviews" href="https://maps.app.goo.gl/aGJwRnPuUjGgZ44e7" target="_blank" rel="noopener">
<div class="filterDiv 5-stars"><table class="google-reviews-in-new-reviews-page 5-stars">
<tbody>
<tr>
<td class="top-row-of-new-google-review">
  <div class="profile-pic-and-name-in-review">
    <img class="skip-lazy" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/02/unnamed-34-1.png"/>
    <p><b>Tina Nelan</b>March 2020</p></div>
    <img class="skip-lazy google-logo-in-new-reviews" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/02/GoogleLogoPNGImage.png"/>
</td>
</tr>
<tr>
<td>
  <img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt=""/>
  <img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt=""/>
  <img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt=""/>
  <img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt=""/>
  <img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt=""/>
</td>
</tr>
</tbody>
</table>
</div>
</a>

<div class="filterDiv 5-stars"><button class="greenbutton"><a href="https://maps.app.goo.gl/aGJwRnPuUjGgZ44e7" target="_blank" rel="noopener">READ MORE IN GOOGLE</a></button></div>

<div class="filterDiv 5-stars"><FleurDivider></FleurDivider></div>

  <a href="https://g.co/kgs/jGu6ivH" target="_blank" rel="noopener">
<div class="filterDiv 5-stars"><table class="google-reviews-in-new-reviews-page 5-stars">
<tbody>
<tr>
<td class="top-row-of-new-google-review">
  <div class="profile-pic-and-name-in-review">
    <img class="skip-lazy" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/02/unnamed-34.png"/>
    <p><b>Colin Burnell</b>February 2020</p></div>
    <img class="skip-lazy google-logo-in-new-reviews" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/02/GoogleLogoPNGImage.png"/>
</td>
</tr>
<tr>
<td>
  <img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt=""/>
  <img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt=""/>
  <img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt=""/>
  <img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt=""/>
  <img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt=""/>
</td>
</tr>
<tr>
<td class="google-review-text">Great company! Professional from beginning to end. Booking was really easy, the guys arrived on time with all the equipment needed to carry out the work. The carpets looked amazing by the time they had finished. Will definitely be using them again.
</td>
</tr>
</tbody>
</table>
</div>
</a>

<div class="filterDiv 5-stars"><button class="greenbutton"><a href="https://g.co/kgs/jGu6ivH" target="_blank" rel="noopener">READ MORE IN GOOGLE</a></button></div>

<div class="filterDiv 5-stars"><FleurDivider></FleurDivider></div>

  <a class="top-class-of-new-google-reviews" href="https://g.co/kgs/Mtqa3sd" target="_blank" rel="noopener">
<div class="filterDiv 5-stars"><table class="google-reviews-in-new-reviews-page 5-stars">
<tbody>
<tr>
<td class="top-row-of-new-google-review">
  <div class="profile-pic-and-name-in-review">
    <img class="skip-lazy" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/02/unnamed-6-1.png"/>
    <p><b>Eva Hertegovina</b>February 2020</p></div>
    <img class="skip-lazy google-logo-in-new-reviews" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/02/GoogleLogoPNGImage.png"/>
</td>
</tr>
<tr>
<td>
  <img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt=""/>
  <img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt=""/>
  <img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt=""/>
  <img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt=""/>
  <img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt=""/>
</td>
</tr>
<tr>
<td class="google-review-text">professional, reliable, quick and good service
</td>
</tr>
</tbody>
</table>
</div>
</a>

<div class="filterDiv 5-stars"><button class="greenbutton"><a href="https://g.co/kgs/Mtqa3sd" target="_blank" rel="noopener">READ MORE IN GOOGLE</a></button></div>

<div class="filterDiv 5-stars"><FleurDivider></FleurDivider></div>

  <a href="https://g.co/kgs/Joce2cU" target="_blank" rel="noopener">
<div class="filterDiv 5-stars"><table class="google-reviews-in-new-reviews-page 5-stars">
<tbody>
<tr>
<td class="top-row-of-new-google-review">
  <div class="profile-pic-and-name-in-review">
    <img class="skip-lazy" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/02/unnamed-35.png"/>
    <p><b>esamiga</b>January 2020</p></div>
    <img class="skip-lazy google-logo-in-new-reviews" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/02/GoogleLogoPNGImage.png"/>
</td>
</tr>
<tr>
<td>
  <img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt=""/>
  <img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt=""/>
  <img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt=""/>
  <img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt=""/>
  <img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt=""/>
</td>
</tr>
<tr>
<td class="google-review-text">We have had an excellent experience with Fine Carpet Cleaning London. From the first moment we contacted them right to point of completing the work, this company has been extremely professional, and accommodating. They have also been very honest and professional, explaining from the beginning what could or could not be achieved from the process. Their communication has also been excellent, always timely, professional and efficient.
Fine Carpet Cleaning London do a lot more than carpets. They managed to save/rescue our new faux leather sofa (ivory colour) from red wine splashes/spray. I truly thought we would have to buy a new sofa, but fortunately, that will not be necessary. Our sofa is now looking as good as new, although the red wine stains were removed 4 days after the splashes occurred! They also cleaned the carpet in our living room, which also suffered from the red wine incident. Now it looks lovely, nice and clean.
We are also very pleased with the gentleman that came to do the work, as he had a very pleasant manner and respectful demeanour.
So yes, based on our experience, we would highly recommend the services of this company.
</td>
</tr>
</tbody>
</table>
</div>
</a>

<div class="filterDiv 5-stars"><button class="greenbutton"><a href="https://g.co/kgs/Joce2cU" target="_blank" rel="noopener">READ MORE IN GOOGLE</a></button></div>

<div class="filterDiv 5-stars"><FleurDivider></FleurDivider></div>

  <a class="top-class-of-new-google-reviews" href="https://g.co/kgs/13rYXrv" target="_blank" rel="noopener">
<div class="filterDiv 5-stars"><table class="google-reviews-in-new-reviews-page 5-stars">
<tbody>
<tr>
<td class="top-row-of-new-google-review">
  <div class="profile-pic-and-name-in-review">
    <img class="skip-lazy" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/02/unnamed-65.png"/>
    <p><b>Alexander</b>January 2020</p></div>
    <img class="skip-lazy google-logo-in-new-reviews" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/02/GoogleLogoPNGImage.png"/>
</td>
</tr>
<tr>
<td>
  <img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt=""/>
  <img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt=""/>
  <img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt=""/>
  <img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt=""/>
  <img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt=""/>
</td>
</tr>
<tr>
<td class="google-review-text">Cleaned three rugs. On time, fast, quality work. Would order again.
</td>
</tr>
</tbody>
</table>
</div>
</a>

<div class="filterDiv 5-stars"><button class="greenbutton"><a href="https://g.co/kgs/13rYXrv" target="_blank" rel="noopener">READ MORE IN GOOGLE</a></button></div>

<div class="filterDiv 5-stars"><FleurDivider></FleurDivider></div>

  <a href="https://g.co/kgs/EZw3kK4" target="_blank" rel="noopener">
<div class="filterDiv 5-stars"><table class="google-reviews-in-new-reviews-page 5-stars">
<tbody>
<tr>
<td class="top-row-of-new-google-review">
  <div class="profile-pic-and-name-in-review">
    <img class="skip-lazy" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/02/unnamed-36.png"/>
    <p><b>Adil Hussain</b>December 2019</p></div>
    <img class="skip-lazy google-logo-in-new-reviews" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/02/GoogleLogoPNGImage.png"/>
</td>
</tr>
<tr>
<td>
  <img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt=""/>
  <img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt=""/>
  <img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt=""/>
  <img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt=""/>
  <img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt=""/>
</td>
</tr>
<tr>
<td class="google-review-text">Great experience! Fast efficient service, no nonsense pricing, easy to work with and within a 5 minute phone call everything was arranged for the following day. Carpet is a lot more fresher and cleaner - industrial grade carpet cleaning machine used. Highly recommend!
</td>
</tr>
</tbody>
</table>
</div>
</a>

<div class="filterDiv 5-stars"><button class="greenbutton"><a href="https://g.co/kgs/EZw3kK4" target="_blank" rel="noopener">READ MORE IN GOOGLE</a></button></div>

<div class="filterDiv 5-stars"><FleurDivider></FleurDivider></div>

  <a href="https://g.co/kgs/Xrd7TYQ" target="_blank" rel="noopener">
<div class="filterDiv 5-stars"><table class="google-reviews-in-new-reviews-page 5-stars">
<tbody>
<tr>
<td class="top-row-of-new-google-review">
  <div class="profile-pic-and-name-in-review">
    <img class="skip-lazy" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/02/unnamed-37.png"/>
    <p><b>Noreen Manji</b>December 2019</p></div>
    <img class="skip-lazy google-logo-in-new-reviews" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/02/GoogleLogoPNGImage.png"/>
</td>
</tr>
<tr>
<td>
  <img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt=""/>
  <img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt=""/>
  <img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt=""/>
  <img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt=""/>
  <img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt=""/>
</td>
</tr>
<tr>
<td class="google-review-text">Brilliant service, prompt time keeping, and friendly team .
Fine carpet cleaning did an amazing job they were here on time and the technician advised me fully on what he was going to do and how, and when they finished they left no mess .
I would 100% recommend this company to family and friends and will def use them again in 6 months time .
</td>
</tr>
</tbody>
</table>
</div>
</a>

<div class="filterDiv 5-stars"><button class="greenbutton"><a href="https://g.co/kgs/Xrd7TYQ" target="_blank" rel="noopener">READ MORE IN GOOGLE</a></button></div>

<div class="filterDiv 5-stars"><FleurDivider></FleurDivider></div>

  <a href="https://g.co/kgs/MDqhAAB" target="_blank" rel="noopener">
<div class="filterDiv 5-stars"><table class="google-reviews-in-new-reviews-page 5-stars">
<tbody>
<tr>
<td class="top-row-of-new-google-review">
  <div class="profile-pic-and-name-in-review">
    <img class="skip-lazy" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/02/unnamed-38.png"/>
    <p><b>Cvetelina Andonova</b>November 2019</p></div>
    <img class="skip-lazy google-logo-in-new-reviews" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/02/GoogleLogoPNGImage.png"/>
</td>
</tr>
<tr>
<td>
  <img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt=""/>
  <img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt=""/>
  <img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt=""/>
  <img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt=""/>
  <img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt=""/>
</td>
</tr>
<tr>
<td class="google-review-text">Fine Carpet Cleaning has been cleaning the carpets and upholstery in our house for the past three years.They have always been extremely efficient, quick to respond and providing professional service. We are happy to recommend their company to everyone who needs best quality of steam carpet cleaning!
</td>
</tr>
</tbody>
</table>
</div>
</a>

<div class="filterDiv 5-stars"><button class="greenbutton"><a href="https://g.co/kgs/MDqhAAB" target="_blank" rel="noopener">READ MORE IN GOOGLE</a></button></div>

<div class="filterDiv 5-stars"><FleurDivider></FleurDivider></div>

  <a class="top-class-of-new-google-reviews" href="https://g.co/kgs/eoxxVoR" target="_blank" rel="noopener">
<div class="filterDiv 5-stars"><table class="google-reviews-in-new-reviews-page 5-stars">
<tbody>
<tr>
<td class="top-row-of-new-google-review">
  <div class="profile-pic-and-name-in-review">
    <img class="skip-lazy" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/02/unnamed-66.png"/>
    <p><b>Marek</b>November 2019</p></div>
    <img class="skip-lazy google-logo-in-new-reviews" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/02/GoogleLogoPNGImage.png"/>
</td>
</tr>
<tr>
<td>
  <img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt=""/>
  <img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt=""/>
  <img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt=""/>
  <img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt=""/>
  <img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt=""/>
</td>
</tr>
<tr>
<td class="google-review-text">Very effective and quick service! Highly recommend this company!
</td>
</tr>
</tbody>
</table>
</div>
</a>

<div class="filterDiv 5-stars"><button class="greenbutton"><a href="https://g.co/kgs/eoxxVoR" target="_blank" rel="noopener">READ MORE IN GOOGLE</a></button></div>

<div class="filterDiv 5-stars"><FleurDivider></FleurDivider></div>

  <a href="https://g.co/kgs/vxLLccL" target="_blank" rel="noopener">
<div class="filterDiv 5-stars"><table class="google-reviews-in-new-reviews-page 5-stars">
<tbody>
<tr>
<td class="top-row-of-new-google-review">
  <div class="profile-pic-and-name-in-review">
    <img class="skip-lazy" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/02/unnamed-39.png"/>
    <p><b>Fernando Mendonca</b>October 2019</p></div>
    <img class="skip-lazy google-logo-in-new-reviews" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/02/GoogleLogoPNGImage.png"/>
</td>
</tr>
<tr>
<td>
  <img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt=""/>
  <img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt=""/>
  <img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt=""/>
  <img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt=""/>
  <img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt=""/>
</td>
</tr>
<tr>
<td class="google-review-text">My carpet is brilliant, clean looks like new!I called in the morning to book for the same day and they came in same day. Quickly and efficient ! Really recommend.
</td>
</tr>
</tbody>
</table>
</div>
</a>

<div class="filterDiv 5-stars"><button class="greenbutton"><a href="https://g.co/kgs/vxLLccL" target="_blank" rel="noopener">READ MORE IN GOOGLE</a></button></div>

<div class="filterDiv 5-stars"><FleurDivider></FleurDivider></div>

  <a href="https://g.co/kgs/LDKcDa9" target="_blank" rel="noopener">
<div class="filterDiv 5-stars"><table class="google-reviews-in-new-reviews-page 5-stars">
<tbody>
<tr>
<td class="top-row-of-new-google-review">
  <div class="profile-pic-and-name-in-review">
    <img class="skip-lazy" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/02/unnamed-40.png"/>
    <p><b>Freshn Up Cleaning</b>September 2019</p></div>
    <img class="skip-lazy google-logo-in-new-reviews" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/02/GoogleLogoPNGImage.png"/>
</td>
</tr>
<tr>
<td>
  <img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt=""/>
  <img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt=""/>
  <img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt=""/>
  <img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt=""/>
  <img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt=""/>
</td>
</tr>
<tr>
<td class="google-review-text">Fine Carpet Cleaning are the best in the business, they are very professional, knowledgable and always offer the best advice. They provide a 1st class service every single time.
</td>
</tr>
</tbody>
</table>
</div>
</a>

<div class="filterDiv 5-stars"><button class="greenbutton"><a href="https://g.co/kgs/LDKcDa9" target="_blank" rel="noopener">READ MORE IN GOOGLE</a></button></div>

<div class="filterDiv 5-stars"><FleurDivider></FleurDivider></div>

  <a href="https://g.co/kgs/RhcAJzy" target="_blank" rel="noopener">
<div class="filterDiv 5-stars"><table class="google-reviews-in-new-reviews-page 5-stars">
<tbody>
<tr>
<td class="top-row-of-new-google-review">
  <div class="profile-pic-and-name-in-review">
    <img class="skip-lazy" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/02/unnamed-41.png"/>
    <p><b>Gyula Egri</b>August 2019</p></div>
    <img class="skip-lazy google-logo-in-new-reviews" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/02/GoogleLogoPNGImage.png"/>
</td>
</tr>
<tr>
<td>
  <img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt=""/>
  <img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt=""/>
  <img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt=""/>
  <img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt=""/>
  <img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt=""/>
</td>
</tr>
<tr>
<td class="google-review-text">Very professional ! Turned up in time , easy to communicate ! Highly recommended .
Will keep using they services , already booked another appointment with them .
Thank you guys !
</td>
</tr>
</tbody>
</table>
</div>
</a>

<div class="filterDiv 5-stars"><button class="greenbutton"><a href="https://g.co/kgs/RhcAJzy" target="_blank" rel="noopener">READ MORE IN GOOGLE</a></button></div>

<div class="filterDiv 5-stars"><FleurDivider></FleurDivider></div>

  <a href="https://g.co/kgs/yYw4au5" target="_blank" rel="noopener">
<div class="filterDiv 5-stars"><table class="google-reviews-in-new-reviews-page 5-stars">
<tbody>
<tr>
<td class="top-row-of-new-google-review">
  <div class="profile-pic-and-name-in-review">
  <img class="skip-lazy" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/02/unnamed-42.png"/>
  <p><b>bruce madeiros</b>August 2019</p></div>
  <img class="skip-lazy google-logo-in-new-reviews" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/02/GoogleLogoPNGImage.png"/>
</td>
</tr>
<tr>
<td>
  <img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt=""/>
  <img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt=""/>
  <img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt=""/>
  <img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt=""/>
  <img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt=""/>
</td>
</tr>
<tr>
<td class="google-review-text">I was very please with the cleaning of my two carpets and more importantly my wife was pleased. I would certainly recommend this company
Regards
Bruce madeiros
</td>
</tr>
</tbody>
</table>
</div>
</a>

<div class="filterDiv 5-stars"><button class="greenbutton"><a href="https://g.co/kgs/yYw4au5" target="_blank" rel="noopener">READ MORE IN GOOGLE</a></button></div>

<div class="filterDiv 5-stars"><FleurDivider></FleurDivider></div>

  <a href="https://g.co/kgs/gQk6Qa9" target="_blank" rel="noopener">
<div class="filterDiv 5-stars"><table class="google-reviews-in-new-reviews-page 5-stars">
<tbody>
<tr>
<td class="top-row-of-new-google-review">
  <div class="profile-pic-and-name-in-review">
    <img class="skip-lazy" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/02/unnamed-43.png"/>
    <p><b>Alina Matei</b>July 2019</p></div>
    <img class="skip-lazy google-logo-in-new-reviews" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/02/GoogleLogoPNGImage.png"/>
</td>
</tr>
<tr>
<td>
  <img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt=""/>
  <img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt=""/>
  <img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt=""/>
  <img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt=""/>
  <img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt=""/>
</td>
</tr>
<tr>
<td class="google-review-text">Very professional, quiet and efficient! Truly recommend. Definitely I will use them again. A big thank you .
</td>
</tr>
</tbody>
</table>
</div>
</a>

<div class="filterDiv 5-stars"><button class="greenbutton"><a href="https://g.co/kgs/gQk6Qa9" target="_blank" rel="noopener">READ MORE IN GOOGLE</a></button></div>

<div class="filterDiv 5-stars"><FleurDivider></FleurDivider></div>

  <a class="top-class-of-new-google-reviews" href="https://g.co/kgs/cXZdW3N" target="_blank" rel="noopener">
<div class="filterDiv 5-stars"><table class="google-reviews-in-new-reviews-page 5-stars">
<tbody>
<tr>
<td class="top-row-of-new-google-review">
  <div class="profile-pic-and-name-in-review">
    <img class="skip-lazy" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/02/unnamed-44.png"/>
    <p><b>Julie Parker</b>July 2019</p></div>
    <img class="skip-lazy google-logo-in-new-reviews" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/02/GoogleLogoPNGImage.png"/>
</td>
</tr>
<tr>
<td>
  <img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt=""/>
  <img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt=""/>
  <img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt=""/>
  <img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt=""/>
  <img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt=""/>
</td>
</tr>
<tr>
<td class="google-review-text">Great service. Easy to book. Reliable and did a good job at a reasonable price.
</td>
</tr>
</tbody>
</table>
</div>
</a>

<div class="filterDiv 5-stars"><button class="greenbutton"><a href="https://g.co/kgs/cXZdW3N" target="_blank" rel="noopener">READ MORE IN GOOGLE</a></button></div>

<div class="filterDiv 5-stars"><FleurDivider></FleurDivider></div>

  <a class="top-class-of-new-google-reviews" href="https://g.co/kgs/EpxL3Bv" target="_blank" rel="noopener">
<div class="filterDiv 5-stars"><table class="google-reviews-in-new-reviews-page 5-stars">
<tbody>
<tr>
<td class="top-row-of-new-google-review">
  <div class="profile-pic-and-name-in-review">
  <img class="skip-lazy" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/02/unnamed-45.png"/>
  <p><b>Nasima Mamun</b>June 2019</p></div>
  <img class="skip-lazy google-logo-in-new-reviews" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/02/GoogleLogoPNGImage.png"/>
</td>
</tr>
<tr>
<td>
  <img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt=""/>
  <img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt=""/>
  <img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt=""/>
  <img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt=""/>
  <img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt=""/>
</td>
</tr>
<tr>
<td class="google-review-text">Great service, carpets cleaned very professionally. Definatley recommend.
Thank you
</td>
</tr>
</tbody>
</table>
</div>
</a>

<div class="filterDiv 5-stars"><button class="greenbutton"><a href="https://g.co/kgs/EpxL3Bv" target="_blank" rel="noopener">READ MORE IN GOOGLE</a></button></div>

<div class="filterDiv 5-stars"><FleurDivider></FleurDivider></div>

  <a class="top-class-of-new-google-reviews" href="https://maps.app.goo.gl/aGJwRnPuUjGgZ44e7" target="_blank" rel="noopener">
<div class="filterDiv 1-stars"><table class="google-reviews-in-new-reviews-page 1-stars">
<tbody>
<tr>
<td class="top-row-of-new-google-review">
  <div class="profile-pic-and-name-in-review">
  <img class="skip-lazy" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/02/unnamed-44-1.png"/>
  <p><b>Ismahan Mohamed</b>June 2019</p></div>
  <img class="skip-lazy google-logo-in-new-reviews" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/02/GoogleLogoPNGImage.png"/>
</td>
</tr>
<tr>
<td>
  <img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt=""/>
  <img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/02/output-onlinepngtools-e1707480352597.png" alt=""/>
  <img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/02/output-onlinepngtools-e1707480352597.png" alt=""/>
  <img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/02/output-onlinepngtools-e1707480352597.png" alt=""/>
  <img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/02/output-onlinepngtools-e1707480352597.png" alt=""/>
</td>
</tr>
</tbody>
</table>
</div>
</a>

<div class="filterDiv 1-stars"><button class="greenbutton"><a href="https://maps.app.goo.gl/aGJwRnPuUjGgZ44e7" target="_blank" rel="noopener">READ MORE IN GOOGLE</a></button></div>

<div class="filterDiv 1-stars"><FleurDivider></FleurDivider></div>

  <a href="https://g.co/kgs/EEdgL91" target="_blank" rel="noopener">
<div class="filterDiv 5-stars"><table class="google-reviews-in-new-reviews-page 5-stars">
<tbody>
<tr>
<td class="top-row-of-new-google-review">
  <div class="profile-pic-and-name-in-review">
    <img class="skip-lazy" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/02/unnamed-46.png"/>
    <p><b>Kirsty Scallan</b>May 2019</p></div>
    <img class="skip-lazy google-logo-in-new-reviews" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/02/GoogleLogoPNGImage.png"/>
</td>
</tr>
<tr>
<td>
  <img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt=""/>
  <img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt=""/>
  <img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt=""/>
  <img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt=""/>
  <img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt=""/>
</td>
</tr>
<tr>
<td class="google-review-text">excellent service. Prompt replies, easy online payment and they pitched up on time on the day!
</td>
</tr>
</tbody>
</table>
</div>
</a>

<div class="filterDiv 5-stars"><button class="greenbutton"><a href="https://g.co/kgs/EEdgL91" target="_blank" rel="noopener">READ MORE IN GOOGLE</a></button></div>

<div class="filterDiv 5-stars"><FleurDivider></FleurDivider></div>

  <a class="top-class-of-new-google-reviews" href="https://g.co/kgs/P67YWGw" target="_blank" rel="noopener">
<div class="filterDiv 5-stars"><table class="google-reviews-in-new-reviews-page 5-stars">
<tbody>
<tr>
<td class="top-row-of-new-google-review"><div class="profile-pic-and-name-in-review"><img class="skip-lazy" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/02/unnamed-47.png" /><p><b>Bola Osifeso</b>April 2019</p></div><img class="skip-lazy google-logo-in-new-reviews" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/02/GoogleLogoPNGImage.png"/>
</td>
</tr>
<tr>
<td><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt=""/><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt=""/><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt=""/><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt=""/><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt=""/></td>
</tr>
<tr>
<td class="google-review-text">They left my carpet super clean and spot free. Totally faultless service .
</td>
</tr>
</tbody>
</table>
</div>
</a>

<div class="filterDiv 5-stars"><button class="greenbutton"><a href="https://g.co/kgs/P67YWGw" target="_blank" rel="noopener">READ MORE IN GOOGLE</a></button></div>

<div class="filterDiv 5-stars"><FleurDivider></FleurDivider></div>

  <a class="top-class-of-new-google-reviews" href="https://g.co/kgs/zgWWvob" target="_blank" rel="noopener">
<div class="filterDiv 5-stars"><table class="google-reviews-in-new-reviews-page 5-stars">
<tbody>
<tr>
<td class="top-row-of-new-google-review"><div class="profile-pic-and-name-in-review"><img class="skip-lazy" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/02/unnamed-48.png"/><p><b>Keith Hickey</b>January 2019</p></div><img class="skip-lazy google-logo-in-new-reviews" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/02/GoogleLogoPNGImage.png"/>
</td>
</tr>
<tr>
<td><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt=""/><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt=""/><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt=""/><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt=""/><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt=""/></td>
</tr>
<tr>
<td class="google-review-text">Great guys for commercial or domestic work
Always do a good job at a reasonable cost and very helpful
Can get out stains where you think all is lost!
Totally recommended
</td>
</tr>
</tbody>
</table>
</div>
</a>

<div class="filterDiv 5-stars"><button class="greenbutton"><a href="https://g.co/kgs/zgWWvob" target="_blank" rel="noopener">READ MORE IN GOOGLE</a></button></div>

<div class="filterDiv 5-stars"><FleurDivider></FleurDivider></div>

  <a href="https://g.co/kgs/4kvuGga" target="_blank" rel="noopener">
<div class="filterDiv 5-stars"><table class="google-reviews-in-new-reviews-page 5-stars">
<tbody>
<tr>
<td class="top-row-of-new-google-review"><div class="profile-pic-and-name-in-review"><img class="skip-lazy" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/02/unnamed-49.png"/><p><b>Slavka Shinina</b>June 2018</p></div><img class="skip-lazy google-logo-in-new-reviews" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/02/GoogleLogoPNGImage.png"/>
</td>
</tr>
<tr>
<td><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt=""/><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt=""/><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt=""/><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt=""/><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt=""/></td>
</tr>
<tr>
<td class="google-review-text">Great job!I recommend Fine Carpet Cleaning highly-reasonable prices with hard working staff!!!Well done!
</td>
</tr>
</tbody>
</table>
</div>
</a>

<div class="filterDiv 5-stars"><button class="greenbutton"><a href="https://g.co/kgs/4kvuGga" target="_blank" rel="noopener">READ MORE IN GOOGLE</a></button></div>

<div class="filterDiv 5-stars"><FleurDivider></FleurDivider></div>

  <a class="top-class-of-new-google-reviews" href="https://g.co/kgs/xnaaQvp" target="_blank" rel="noopener">
<div class="filterDiv 5-stars"><table class="google-reviews-in-new-reviews-page 5-stars">
<tbody>
<tr>
<td class="top-row-of-new-google-review"><div class="profile-pic-and-name-in-review"><img class="skip-lazy" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/02/unnamed-64.png"/><p><b>Janette Hodgkinson</b>May 2018</p></div><img class="skip-lazy google-logo-in-new-reviews" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/02/GoogleLogoPNGImage.png"/>
</td>
</tr>
<tr>
<td><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt=""/><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt=""/><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt=""/><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt=""/><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt=""/></td>
</tr>
<tr>
<td class="google-review-text">Fantastic prompt polite and reliable service. very clean carpets!
</td>
</tr>
</tbody>
</table>
</div>
</a>

<div class="filterDiv 5-stars"><button class="greenbutton"><a href="https://g.co/kgs/xnaaQvp" target="_blank" rel="noopener">READ MORE IN GOOGLE</a></button></div>

<div class="filterDiv 5-stars"><FleurDivider></FleurDivider></div>

  <a href="https://g.co/kgs/NPfBU6W" target="_blank" rel="noopener">
<div class="filterDiv 5-stars"><table class="google-reviews-in-new-reviews-page 5-stars">
<tbody>
<tr>
<td class="top-row-of-new-google-review"><div class="profile-pic-and-name-in-review"><img class="skip-lazy" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/02/unnamed-69.png"/><p><b>Ted2.0</b>April 2018</p></div><img class="skip-lazy google-logo-in-new-reviews" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/02/GoogleLogoPNGImage.png"/>
</td>
</tr>
<tr>
<td><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt=""/><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt=""/><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt=""/><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt=""/><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt=""/></td>
</tr>
<tr>
<td class="google-review-text">Had an old sofa from the 1960s steam cleaned and it went from smelling like a wet dog to fresh as a daisy.
</td>
</tr>
</tbody>
</table>
</div>
</a>

<div class="filterDiv 5-stars"><button class="greenbutton"><a href="https://g.co/kgs/NPfBU6W" target="_blank" rel="noopener">READ MORE IN GOOGLE</a></button></div>

<div class="filterDiv 5-stars"><FleurDivider></FleurDivider></div>

  <a href="https://g.co/kgs/f9QJZVm" target="_blank" rel="noopener">
<div class="filterDiv 5-stars"><table class="google-reviews-in-new-reviews-page 5-stars">
<tbody>
<tr>
<td class="top-row-of-new-google-review"><div class="profile-pic-and-name-in-review"><img class="skip-lazy" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/02/unnamed-50.png"/><p><b>Jason Block</b>September 2016</p></div><img class="skip-lazy google-logo-in-new-reviews" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/02/GoogleLogoPNGImage.png"/>
</td>
</tr>
<tr>
<td><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt=""/><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt=""/><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt=""/><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt=""/><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt=""/></td>
</tr>
<tr>
<td class="google-review-text">I was extremely pleased with the carpet cleaning service provided,would like to recommend the Fine Carpet Cleaning service to any Londoner. They are punctual, hard working, polite and the results are impressive to say the least. My carpets look amazing. Best wishes, J.
</td>
</tr>
</tbody>
</table>
</div>
</a>

<div class="filterDiv 5-stars"><button class="greenbutton"><a href="https://g.co/kgs/f9QJZVm" target="_blank" rel="noopener">READ MORE IN GOOGLE</a></button></div>

<div class="filterDiv 5-stars"><FleurDivider></FleurDivider></div>

  <a href="https://g.co/kgs/5gExcVH" target="_blank" rel="noopener">
<div class="filterDiv 5-stars"><table class="google-reviews-in-new-reviews-page 5-stars">
<tbody>
<tr>
<td class="top-row-of-new-google-review"><div class="profile-pic-and-name-in-review"><img class="skip-lazy" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/02/unnamed-51.png" width="40" height="40" data-skip-lazy="1" /><p><b>georgi valchev</b>October 2016</p></div><img class="skip-lazy google-logo-in-new-reviews" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/02/GoogleLogoPNGImage.png"/>
</td>
</tr>
<tr>
<td><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt=""/><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt=""/><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /></td>
</tr>
<tr>
<td class="google-review-text">I was extremely delighted of the service provided by Fine Carpet. My cousine very recently moved to South Kensington as the whole entire house needed proper brushing. Good timing, courtesy service, professional performance followed by the " wow " effect after we came back to the property. Six stars of Five indeed, keep it that way guys!
Highly recommended
</td>
</tr>
</tbody>
</table>
</div>
</a>

<div class="filterDiv 5-stars"><button class="greenbutton"><a href="https://g.co/kgs/5gExcVH" target="_blank" rel="noopener">READ MORE IN GOOGLE</a></button></div>

<div class="filterDiv 5-stars"><FleurDivider></FleurDivider></div>

  <a href="https://g.co/kgs/J74rnVo" target="_blank" rel="noopener">
<div class="filterDiv 5-stars"><table class="google-reviews-in-new-reviews-page 5-stars">
<tbody>
<tr>
<td class="top-row-of-new-google-review"><div class="profile-pic-and-name-in-review"><img class="skip-lazy" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/02/unnamed-52.png"/><p><b>Juliana Dinkova</b>August 2016</p></div><img class="skip-lazy google-logo-in-new-reviews" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/02/GoogleLogoPNGImage.png" width="40" height="40" data-skip-lazy="1" />
</td>
</tr>
<tr>
<td><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt=""/><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /></td>
</tr>
<tr>
<td class="google-review-text">We were very happy with the service provided. It was quick, efficient and hassle free. We were also lucky enough to get it at 50% off, definitely a bargain! We will most certainly use them again even without the discount.
</td>
</tr>
</tbody>
</table>
</div>
</a>

<div class="filterDiv 5-stars"><button class="greenbutton"><a href="https://g.co/kgs/J74rnVo" target="_blank" rel="noopener">READ MORE IN GOOGLE</a></button></div>

<div class="filterDiv 5-stars"><FleurDivider></FleurDivider></div>

  <a href="https://g.co/kgs/t2ijd1s" target="_blank" rel="noopener">
    <div class="filterDiv 5-stars">
      <table class="google-reviews-in-new-reviews-page 5-stars">
        <tbody>
          <tr>
            <td class="top-row-of-new-google-review">
              <div class="profile-pic-and-name-in-review">
                <img class="skip-lazy" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/02/unnamed-53.png"/>
                <p><b>Sabrina James</b>August 2016</p>
              </div>
              <img class="skip-lazy google-logo-in-new-reviews" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/02/GoogleLogoPNGImage.png"/>
            </td>
          </tr>
          <tr>
            <td>
              <img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" />
              <img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" />
              <img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" />
              <img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" />
              <img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" />
            </td>
          </tr>
          <tr>
            <td class="google-review-text">I am very pleased to leave this review, as I had a lot of old stains on the upholstery of my beloved sofa, which now shines like new, thanks a bunch guys!</td>
          </tr>
        </tbody>
      </table>
    </div>
  </a>

<div class="filterDiv 5-stars"><button class="greenbutton"><a href="https://g.co/kgs/t2ijd1s" target="_blank" rel="noopener">READ MORE IN GOOGLE</a></button></div>

<div class="filterDiv 5-stars"><FleurDivider></FleurDivider></div>

<div class="buttoncontainer"><button class="greenbutton"><a>GET A QUOTE</a></button>
<button class="otherbutton"><a>PRICES</a></button></div>


	<FleurDivider></FleurDivider>

	<div class="m-10% mb-3% flex flex-wrap flex-justify-center gap-15">
		<button class="cursor-pointer outline-none bg-brand-second-action hover-bg-brand-second-action-hover:hover font-size-6 font-600 w-200px h-60px c-paper flex flex-items-center flex-justify-center relative b-solid b-rd-3 b-4 b-brand-second-action hover-b-brand-second-action-hover:hover whitespace-normal line-height-6 word-spacing-0.5 py-9" style="box-shadow: 0 0 0 3px rgba(255, 255, 255, .9) inset; letter-spacing: 0.05rem;"><a class="c-paper font-size-5">SERVICES</a></button>
		<button class="cursor-pointer outline-none bg-brand-action hover-bg-brand-action-hover:hover font-size-6 font-600 w-200px h-60px c-paper flex flex-items-center flex-justify-center relative b-solid b-rd-3 b-4 b-brand-action hover-b-brand-action-hover:hover whitespace-normal line-height-6 word-spacing-0.5 py-9" style="box-shadow: 0 0 0 3px rgba(255, 255, 255, .9) inset; letter-spacing: 0.05rem;"><a class="c-paper font-size-5">GET A QUOTE</a></button>
	</div>

	<a href="/"><img class="max-w-full block mla mra md-mt-30 md-mb-18 mt-20 mb-10" src="/assets/ShenYunZuoPin- Orange-Desktop-ZaDimo.png"></img></a>

  </>
  );
}
