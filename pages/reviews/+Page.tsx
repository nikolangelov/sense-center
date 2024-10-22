import "solid-slider/slider.css";
import { createSignal, Show } from 'solid-js';
import range from "lodash/range"
import { FleurDivider } from "../../components/FleurDivider";
import { Head } from 'vike-solid/Head';

function ButtonsFilterReviews({ setFilter }: { setFilter: (rating: number | undefined) => void }) {
  return (
    <div class="flex flex-justify-center md-flex-justify-between flex-wrap">
      <div class="flex flex-col flex-justify-center gap-0">
        <p class="font-size-16 m-b-7 m-t-0 m-x-auto" style="font-family:'Roboto'">4.8</p>
        <div>
          {range(5).map(() => (
            <img class="w-5" src="/assets/google-star-review-logo-e1706350894182.png" alt="review star" />
          ))}
        </div>
        <p class="font-400 m-b-0 m-t-1 m-x-auto" style="font-family:'Roboto'">119 reviews</p>
      </div>

      <div class="w-100% md-w-80%">
        {[undefined, 5, 4, 3, 2, 1].map(rating => (
          <div class="flex flex-items-center my-2 flex-nowrap">
            <button
              class={`b-none cursor-pointer font-size-4 flex whitespace-nowrap mr-2 b-rd-1 ${rating === undefined ? 'bg-transparent underline' : 'bg-paper-border hover-bg-transparent:hover'} p-y-2.5 p-x-3 mb-1`}
              style="font-family:'Roboto'"
              onClick={() => setFilter(rating)}
            >
              {rating === undefined ? 'Show all' : `${rating} Stars`}
            </button>
            {rating !== undefined && (
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
    </div>
  );
}

function getWidth(rating: number) {
  switch (rating) {
    case 5:
      return '100%';
    case 4:
      return '7.62%';
    case 3:
      return '0.95%';
    case 2:
      return '0.95%';
    case 1:
      return '3.81%';
    default:
      return '0';
  }
}

function getReviewCount(rating: number) {
  switch (rating) {
    case 5:
      return '104';
    case 4:
      return '9';
    case 3:
      return '1';
    case 2:
      return '1';
    case 1:
      return '4';
    default:
      return '0';
  }
}

function StarReview(props: { src: string; filterStars: number | undefined; stars: number; hrefGoogleReview: string; name: string; date: string; reviewText: string; }) {
  return (
    <Show when={props.filterStars === undefined || props.filterStars === props.stars}>
      <table class="m-y-25 w-90% md-w-70% m-auto border-style-solid b-gray-2" style="border-width: 1px 0px 1px 0px;">
        <tbody>
          <tr>
            <td class="flex flex-justify-between flex-items-center">
              <div class="profile-pic-and-name-in-review flex flex-items-center gap-4">
                <img class="w-12 h-12" src={props.src} alt="profile" />
                <p class="flex flex-col"><b>{props.name}</b>{props.date}</p>
              </div>
              <img class="w-10 h-10" src="/assets/GoogleLogoPNGImage.png" alt="Google logo" />
            </td>
          </tr>
          <tr>
            <td class="p-t-5 p-b-2">
              {range(props.stars).map((_: any) => <img class="m-r-2 w-5" src="/assets/google-star-review-logo-e1706350894182.png" alt="star" />)}
              {range(5 - props.stars).map((_: any) => <img class="w-5 m-r-2" src="/assets/output-onlinepngtools-e1707480352597.png" alt="star" />)}
            </td>
          </tr>
          <tr>
            <td class="p-b-4 font-300 font-size-5" style="font-family:'Roboto', sans-serif; text-align: left;">{props.reviewText}</td>
          </tr>
        </tbody>
      </table>

      <div class="filterDiv 5-stars mt-12% flex flex-wrap flex-justify-center">
        <button class="outline-none bg-brand-action hover-bg-brand-action-hover:hover font-size-6 font-600 w-200px h-60px c-paper flex flex-items-center flex-justify-center relative b-solid b-rd-3 b-4 b-brand-action hover-b-brand-action-hover:hover whitespace-normal line-height-6 word-spacing-0.5 py-9" style="box-shadow: 0 0 0 3px rgba(255, 255, 255, .9) inset; letter-spacing: 0.05rem;"><a href={props.hrefGoogleReview} target="_blank" rel="noopener" class="c-paper font-size-5">READ MORE IN GOOGLE</a></button>
      </div>

      <div class="filterDiv 5-stars">
        <FleurDivider />
      </div>
    </Show>
  );
}

export default function Page() {
  const [filterStars, setFilterStars] = createSignal<number | undefined>()
  return (
    <>
      <Head><meta name="robots" content="noindex" /></Head>
      <h1>What our clients say about us</h1>

      <ButtonsFilterReviews
        setFilter={setFilterStars}
      />

      <StarReview
        src="/assets/profile-pics-reviews/unnamed34346.png"
        reviewText="Very professional service.  Quick and qualitative.  Carpet is like new after cleaning."
        name="Tereza Svetogorska"
        date="October 2024"
        stars={5}
        hrefGoogleReview="https://g.co/kgs/v6UCjRp"
        filterStars={filterStars()}
      />

      <StarReview
        src="/assets/profile-pics-reviews/unnamed34345.png"
        reviewText="One of the finest carpet cleaning companies you can find in the city.

Latest equipment,and high quality carpets, upholstery solutions.

Plus technicians will long experience.

Work out your quote with them, to know the total charges of the service.

Super helpful assistance from their office.

No disappointment"
        name="CEOKCGOODS MEDOV"
        date="September 2024"
        stars={5}
        hrefGoogleReview="https://g.co/kgs/t8f1V11"
        filterStars={filterStars()}
      />

      <StarReview
        src="/assets/profile-pics-reviews/unnamed34344.png"
        reviewText="Great experience with Fine Carpet Cleaning. I highly recommend their services!"
        name="Liliya Bobilyak"
        date="September 2024"
        stars={5}
        hrefGoogleReview="https://g.co/kgs/54E8Nzq"
        filterStars={filterStars()}
      />

      <StarReview
        src="/assets/profile-pics-reviews/unnamed34343.png"
        reviewText="Niki did a great job cleaning our carpet. Happy with the service :)"
        name="S A"
        date="August 2024"
        stars={5}
        hrefGoogleReview="https://g.co/kgs/byTskAC"
        filterStars={filterStars()}
      />

      <StarReview
        src="/assets/profile-pics-reviews/unnamed90.png"
        reviewText="Professional, quick to respond. I'm very happy with their service."
        name="Zaneta Priscepionkaite"
        date="July 2024"
        stars={5}
        hrefGoogleReview="https://g.co/kgs/c4A87Ud"
        filterStars={filterStars()}
      />

      <StarReview
        src="/assets/profile-pics-reviews/unnamed34341.png"
        reviewText="FANTASTIC STAFF, FANTASTIC SERVICE, FANTASTIC WORK & MOST IMPORTANTLY FANTASTIC PRICE, Cannot be beaten if you want your carpets cleaned,,, one quick call and everything was taken care of.. IF YOU ARE GETTING YOUR CARPETS CLEANED MAKE SURR YOU USE THESE GUYS 100%👍"
        name="Ashley"
        date="June 2024"
        stars={5}
        hrefGoogleReview="https://g.co/kgs/bkssVpF"
        filterStars={filterStars()}
      />

      <StarReview
        src="/assets/profile-pics-reviews/unnamed1112.png"
        reviewText="I received excellent communications throughout the whole process. On the day, the cleaning experience was efficient with a considerate and friendly member of staff. Very competitive pricing."
        name="Elizabeth Maurice"
        date="June 2024"
        stars={5}
        hrefGoogleReview="https://g.co/kgs/HPqEYvL"
        filterStars={filterStars()}
      />

      <StarReview
        src="/assets/profile-pics-reviews/unnamed2334.png"
        reviewText="FANTASTIC STAFF, FANTASTIC SERVICE, FANTASTIC WORK & MOST IMPORTANTLY FANTASTIC PRICE, Cannot be beaten if you want your carpets cleaned,,, one quick call and everything was taken care of.. IF YOU ARE GETTING YOUR CARPETS CLEANED MAKE SURR YOU USE THESE GUYS 100%👍"
        name="Martin"
        date="June 2024"
        stars={5}
        hrefGoogleReview="https://g.co/kgs/kgtTqqt"
        filterStars={filterStars()}
      />

      <StarReview
        src="/assets/profile-pics-reviews/unnamed3434.png"
        reviewText="Really happy with the service and i come across a-lot of carpet cleaners in my job property inventory .
        I was not sure how the carpet would come up , as it is an old carpet in a communal lobby . Wow, so much better-stains removed .
        A really quality service from start to finish , nothing was too much trouble . I managed to get a slot the same day . I would definitely recommend 😁"
        name="Yasmin"
        date="June 2024"
        stars={5}
        hrefGoogleReview="https://g.co/kgs/A7AyWZi"
        filterStars={filterStars()}
      />

      <StarReview
        src="/assets/profile-pics-reviews/unnamed2323.png"
        reviewText="Great service, quick and friendly."
        name="Ivan Comisso"
        date="April 2024"
        stars={5}
        hrefGoogleReview="https://g.co/kgs/bR7okQv"
        filterStars={filterStars()}
      />

      <StarReview
        src="/assets/profile-pics-reviews/unnamed (3).png"
        reviewText="Had a great experience with Fine Carpet Cleaning yesterday. I phoned at 9am for help with a stained carpet, and within 2 hours someone was at my house doing the job. Communications were very clear and slick, and the cleaning was done briskly and to the highest standard. Highly recommended."
        name="Peter O'Donoghue"
        date="April 2024"
        stars={5}
        hrefGoogleReview="https://g.co/kgs/vnLrPA1"
        filterStars={filterStars()}
      />

      <StarReview
        src="/assets/profile-pics-reviews/unnamed (2).png"
        reviewText="Good service at a reasonable price, had my mattress and small rug cleaned and can say that I'm satisfied with the result.
        The company representative was professional, arrived on time and did a very good job, quickly and efficiently.
        Definitely would recommend."
        name="Nikolay Dimitrov"
        date="April 2024"
        stars={5}
        hrefGoogleReview="https://g.co/kgs/jWDWU8Z"
        filterStars={filterStars()}
      />

      <StarReview
        src="/assets/profile-pics-reviews/unnamed (1).png"
        reviewText="The best carpet cleaning service I have ever experienced. From start to finish was unbelievably smooth. The staff that attended extremely polite and moved all the items with utmost care. Would recommend using them as they are simply the best one has come across. Maya was absolutely fantastic in arranging this as the request was done at such a short notice."
        name="Gen Tiski"
        date="March 2024"
        stars={5}
        hrefGoogleReview="https://g.co/kgs/H3NeADN"
        filterStars={filterStars()}
      />

      <StarReview
        src="/assets/profile-pics-reviews/unnamed-1.png"
        reviewText="Great Service. Highly recommended!"
        name="Ivaylo Ivanov"
        date="January 2024"
        stars={5}
        hrefGoogleReview="https://g.co/kgs/PFX6tTG"
        filterStars={filterStars()}
      />

      <StarReview
        src="/assets/profile-pics-reviews/unnamed.png"
        reviewText="Excellent service very quick only took a hour, carpet very clean all stains cleaned.
          front room stairs corridor landing’s small bedroom great service.
          Only waiting for carpet to completely dry should take a hour mostly dried.
          Thank you I was was satisfied with service, the technician was very polite & Professional."
        name="Robert Nyame"
        date="January 2024"
        stars={4}
        hrefGoogleReview="https://g.co/kgs/doBtnwu"
        filterStars={filterStars()}
      />

      <StarReview
        src="/assets/profile-pics-reviews/unnamed-49.png"
        reviewText="I had my carpet cleaned by Nikolay from Fine Carpet Cleaning. What a fantastic job he did ! He is very professional, efficient and organised in the way he works. My carpet looks new again. I highly recommend."
        name="Samanta Federico"
        date="January 2024"
        stars={5}
        hrefGoogleReview="https://g.co/kgs/WxWf2Bm"
        filterStars={filterStars()}
      />

      <StarReview
        src="/assets/profile-pics-reviews/unnamed-2.png"
        reviewText="Thank you for the great customer service and for the outstanding job you have done. We love our carper even more now.
      Gergana"
        name="Gergana Georgieva"
        date="January 2024"
        stars={5}
        hrefGoogleReview="https://g.co/kgs/vD8tsDc"
        filterStars={filterStars()}
      />

      <StarReview
        src="/assets/profile-pics-reviews/unnamed-3.png"
        reviewText="Very pleased with the results of my carpets being cleaned. Easy process from start to finish helped by very friendly Maya who arranged it all. Would certainly use this company again."
        name="Rosalind Faw"
        date="December 2023"
        stars={5}
        hrefGoogleReview="https://g.co/kgs/ou1h8h8"
        filterStars={filterStars()}
      />

      <StarReview
        src="/assets/profile-pics-reviews/unnamed-7-1.png"
        reviewText="Very good carpet cleaning"
        name="david o'brien"
        date="December 2023"
        stars={5}
        hrefGoogleReview="https://g.co/kgs/DNM8JQd"
        filterStars={filterStars()}
      />

      <StarReview
        src="/assets/profile-pics-reviews/unnamed-4.png"
        reviewText="Excellent cleaning company! Very happy with the service all carpet strains gone."
        name="Ladine Oconnor"
        date="November 2023"
        stars={4}
        hrefGoogleReview="https://g.co/kgs/mmNDw9P"
        filterStars={filterStars()}
      />

      <StarReview
        src="/assets/profile-pics-reviews/unnamed-5.png"
        reviewText="Was very mislead by the positive reviews. I was debating whether to just leave it or say something but a few days have passed now and I am very unhappy with the service. I was told my white shaggy rug could be as good as new and deep cleaned, only to have it look exactly the same after. The website said £28, but I was told it needs a deeper clean with urine removal which is £65. The rug smelt and looked EXACTLY the same after completion. £65 I was charged for a Hoover that done nothing. They gave me 10% off when I complained and then start saying they don’t know until they try, which felt so misleading telling me they could before I paid. I would have understood if this was made clear before payment, but it Was said with such certainty, even right before they started I said can we definitely make it good as new, and he literally said “yes absolutely” straight to my face. Money down the drain. Avoid at all costs!"
        name="Brad Merry"
        date="November 2023"
        stars={1}
        hrefGoogleReview="https://g.co/kgs/wmTCMU8"
        filterStars={filterStars()}
      />

      <StarReview
        src="/assets/profile-pics-reviews/unnamed-6.png"
        reviewText="Very dissapoined. While the customer service itself is very friendly and professional, the work itself is absolutely useless. I paid £160 to clean my sofa, send photos, videos and explained that the sofa is natural leather. All I wanted,was just to refereh my leather sofa a bit. However I saw 0 difference from before and after. ;( what a waste of money."
        name="E M"
        date="November 2023"
        stars={1}
        hrefGoogleReview="https://g.co/kgs/1d7AfUe"
        filterStars={filterStars()}
      />

      <StarReview
        src="/assets/profile-pics-reviews/unnamed-7.png"
        reviewText="My carpet was in really bad shape, Fine Carpet Cleaning came around and it looks perfect!
      Will be definitely using their services again"
        name="Erica Baptista"
        date="November 2023"
        stars={5}
        hrefGoogleReview="https://g.co/kgs/B2g8cw9"
        filterStars={filterStars()}
      />

      <StarReview
        src="/assets/profile-pics-reviews/unnamed-8.png"
        reviewText="Good company - very responsive via email & fairly priced. On the day the guys were punctual, polite and did a good thorough job."
        name="Rachel Ellis"
        date="October 2023"
        stars={5}
        hrefGoogleReview="https://g.co/kgs/k6KFKDf"
        filterStars={filterStars()}
      />

      <StarReview
        src="/assets/profile-pics-reviews/unnamed-2.png"
        reviewText="Real professionals"
        name="G B"
        date="October 2023"
        stars={5}
        hrefGoogleReview="https://g.co/kgs/vkoHNfC"
        filterStars={filterStars()}
      />

      <StarReview
        src="/assets/profile-pics-reviews/unnamed-9.png"
        reviewText="Very happy with the service . The carpet cleaning man did a great job. Was very friendly and on time . And it was a great price"
        name="Katrina Scott"
        date="August 2023"
        stars={5}
        hrefGoogleReview="https://g.co/kgs/bkiybKv"
        filterStars={filterStars()}
      />

      <StarReview
        src="/assets/profile-pics-reviews/unnamed-62.png"
        reviewText="Excellent carpet cleaning service"
        name="Sheikh Khanom"
        date="August 2023"
        stars={5}
        hrefGoogleReview="https://g.co/kgs/8hyCUc5"
        filterStars={filterStars()}
      />

      <StarReview
        src="/assets/profile-pics-reviews/unnamed-59.png"
        reviewText="Great service, would recommend."
        name="Peter Tobin"
        date="June 2023"
        stars={5}
        hrefGoogleReview="https://g.co/kgs/55SK7Dy"
        filterStars={filterStars()}
      />

      <StarReview
        src="/assets/profile-pics-reviews/unnamed-10.png"
        reviewText="Yavor and his team have been more than helpful to our short-term rentals business. Not only they've dealt with old stains and left our carpets like brand new, but we are very grateful for their professionalism."
        name="Alena Mineva"
        date="July 2023"
        stars={5}
        hrefGoogleReview="https://g.co/kgs/8muBPZV"
        filterStars={filterStars()}
      />

      <StarReview
        src="/assets/profile-pics-reviews/unnamed-11.png"
        reviewText="Great job from start to finish: competitive quotation, efficient arrangements before appointment, technician arrived exactly on time, efficient clean and stain protection with powerful modern equipment. Very happy with the whole process and will use them again."
        name="Kirsten Pansegrouw"
        date="July 2023"
        stars={5}
        hrefGoogleReview="https://g.co/kgs/hcnd2zs"
        filterStars={filterStars()}
      />

      <StarReview
        src="/assets/profile-pics-reviews/unnamed-12.png"
        reviewText="Excellent service, cost and great communication! Provided stain removal for a carpet. Highly recommended!"
        name="Helder Oliveira"
        date="July 2023"
        stars={5}
        hrefGoogleReview="https://g.co/kgs/Shz3uGZ"
        filterStars={filterStars()}
      />

      <StarReview
        src="/assets/profile-pics-reviews/unnamed-45-1.png"
        reviewText=""
        name="Ramya Kaza"
        date="May 2023"
        stars={4}
        hrefGoogleReview="https://maps.app.goo.gl/aGJwRnPuUjGgZ44e7"
        filterStars={filterStars()}
      />

      <StarReview
        src="/assets/profile-pics-reviews/unnamed-32-1.png"
        reviewText=""
        name="Martin Parzulov"
        date="April 2023"
        stars={5}
        hrefGoogleReview="https://maps.app.goo.gl/aGJwRnPuUjGgZ44e7"
        filterStars={filterStars()}
      />

      <StarReview
        src="/assets/profile-pics-reviews/unnamed-13.png"
        reviewText="First time we used Fine Carpet Cleaning London, we sourced their add on Gumtree and I must say I was taken back with the level of service we received.
      We had a 2 bedroom apartment carpet wash, booked the appointment for the very next day.
      Technician came on time and done a fantastic job, very friendly, always add a smile on his face & most importantly did not make a mess of the property.
      Highly recommended, looking forward to using their services again."
        name="Quest London"
        date="March 2023"
        stars={5}
        hrefGoogleReview="https://g.co/kgs/tUWswMy"
        filterStars={filterStars()}
      />

      <StarReview
        src="/assets/profile-pics-reviews/unnamed-43-1.png"
        reviewText=""
        name="Kam Pindoria"
        date="March 2023"
        stars={4}
        hrefGoogleReview="https://maps.app.goo.gl/aGJwRnPuUjGgZ44e7"
        filterStars={filterStars()}
      />

      <StarReview
        src="/assets/profile-pics-reviews/unnamed-21-1.png"
        reviewText=""
        name="Tereza Aleksieva"
        date="March 2023"
        stars={5}
        hrefGoogleReview="https://maps.app.goo.gl/aGJwRnPuUjGgZ44e7"
        filterStars={filterStars()}
      />

      <StarReview
        src="/assets/profile-pics-reviews/unnamed-37-1.png"
        reviewText=""
        name="Samir Patel"
        date="March 2023"
        stars={5}
        hrefGoogleReview="https://maps.app.goo.gl/aGJwRnPuUjGgZ44e7"
        filterStars={filterStars()}
      />

      <StarReview
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
        stars={5}
        hrefGoogleReview="https://g.co/kgs/ZYgUE1Y"
        filterStars={filterStars()}
      />

      <StarReview
        src="/assets/profile-pics-reviews/unnamed-58.png"
        reviewText="Polite and professional, easy communication and better price than other pushy businesses in the area"
        name="Richard Kaye"
        date="March 2023"
        stars={5}
        hrefGoogleReview="https://g.co/kgs/vRWF2mo"
        filterStars={filterStars()}
      />

      <StarReview
        src="/assets/profile-pics-reviews/unnamed-8-1.png"
        reviewText="Nice men clean good"
        name="Waqas Ali"
        date="February 2023"
        stars={5}
        hrefGoogleReview="https://g.co/kgs/1pmB9CL"
        filterStars={filterStars()}
      />

      <StarReview
        src="/assets/profile-pics-reviews/unnamed-5.png"
        reviewText="Would recommend this company. Would definitely use them again. On time and very polite service"
        name="Bernice Gilbert"
        date="January 2023"
        stars={5}
        hrefGoogleReview="https://g.co/kgs/gX19KLa"
        filterStars={filterStars()}
      />

      <StarReview
        src="/assets/profile-pics-reviews/unnamed-15.png"
        reviewText="Had sofa frames cleaned, they look brand new! You cannot get better price with great quality.
      I had food stains and water mark all gone!!
      5 star🌟"
        name="Adil Mukhtar"
        date="December 2022"
        stars={5}
        hrefGoogleReview="https://g.co/kgs/Ab8W62q"
        filterStars={filterStars()}
      />

      <StarReview
        src="/assets/profile-pics-reviews/unnamed-11-1.png"
        reviewText="Very satisfied"
        name="Ka Po Yuen"
        date="December 2022"
        stars={5}
        hrefGoogleReview="https://g.co/kgs/wAMjUnN"
        filterStars={filterStars()}
      />

      <StarReview
        src="/assets/profile-pics-reviews/unnamed-29-1.png"
        reviewText=""
        name="ken chapman"
        date="December 2022"
        stars={5}
        hrefGoogleReview="https://maps.app.goo.gl/aGJwRnPuUjGgZ44e7"
        filterStars={filterStars()}
      />

      <StarReview
        src="/assets/profile-pics-reviews/unnamed-16.png"
        reviewText="I have used this company four times now and each time have been really pleased with their service.
      Their pricing is very competitive and on occasion when they have had to go over an area twice to achieve perfect results there hasn’t been a surcharge.
      I will definitely use them again and would recommend them to anyone."
        name="Laraine Good"
        date="November 2022"
        stars={5}
        hrefGoogleReview="https://g.co/kgs/pWRvU1L"
        filterStars={filterStars()}
      />

      <StarReview
        src="/assets/profile-pics-reviews/unnamed-54.png"
        reviewText="The carpet smelled awful after the cleaning. They cleaned it in less than 30 mins whereas the previous cleaning company took an hour to do the job. Was not impressed with the job that was done and would not use again."
        name="Amandeep Singh"
        date="October 2022"
        stars={1}
        hrefGoogleReview="https://g.co/kgs/S8gT3sP"
        filterStars={filterStars()}
      />

      <StarReview
        src="/assets/profile-pics-reviews/unnamed-12-1.png"
        reviewText="Excellent service"
        name="linda miller"
        date="October 2022"
        stars={5}
        hrefGoogleReview="https://g.co/kgs/cJ9dNZd"
        filterStars={filterStars()}
      />

      <StarReview
        src="/assets/profile-pics-reviews/unnamed-17.png"
        reviewText="Second time using. I'm not easy impressed. On time, good job, clean, professional and courteous just like last time so recommended to a friend already. Will use again."
        name="Les Johnston"
        date="October 2022"
        stars={5}
        hrefGoogleReview="https://g.co/kgs/NebqKpZ"
        filterStars={filterStars()}
      />

      <StarReview
        src="/assets/profile-pics-reviews/unnamed-56.png"
        reviewText="it was very good experience but I think the guy who cleaned my carpet lacked detergent or something effective in the high traffic carpet as nothing changed after cleaning 🧹"
        name="Islam Bashir"
        date="June 2022"
        stars={4}
        hrefGoogleReview="https://g.co/kgs/PbGgPJC"
        filterStars={filterStars()}
      />

      <StarReview
        src="/assets/profile-pics-reviews/unnamed-63.png"
        reviewText="Very Professional service fast response excellent work completed"
        name="Sheree Davenport"
        date="June 2022"
        stars={5}
        hrefGoogleReview="https://g.co/kgs/WvSpNo6"
        filterStars={filterStars()}
      />

      <StarReview
        src="/assets/profile-pics-reviews/unnamed-35-1.png"
        reviewText=""
        name="Zina Wilkinson"
        date="July 2022"
        stars={5}
        hrefGoogleReview="https://maps.app.goo.gl/aGJwRnPuUjGgZ44e7"
        filterStars={filterStars()}
      />

      <StarReview
        src="/assets/profile-pics-reviews/unnamed-18.png"
        reviewText="Very professional and friendly service. Carpets were brand new, amazing work. Very clean and the products used smelt really nice and fresh."
        name="Nima Mohamed"
        date="June 2022"
        stars={5}
        hrefGoogleReview="https://g.co/kgs/T4X36GH"
        filterStars={filterStars()}
      />

      <StarReview
        src="/assets/profile-pics-reviews/unnamed-54.png"
        reviewText="Very professional communication throughout and excellent cleaning service from the technician. This is the third time I’ve used this company."
        name="Alkesh C"
        date="May 2022"
        stars={5}
        hrefGoogleReview="https://g.co/kgs/DXwa4g2"
        filterStars={filterStars()}
      />

      <StarReview
        src="/assets/profile-pics-reviews/unnamed-14-1.png"
        reviewText=""
        name="Martin Angelov"
        date="May 2022"
        stars={5}
        hrefGoogleReview="https://maps.app.goo.gl/aGJwRnPuUjGgZ44e7"
        filterStars={filterStars()}
      />

      <StarReview
        src="/assets/profile-pics-reviews/unnamed-19.png"
        reviewText="Excellent! We were very happy with both the quality of the service and also the value for money. We will definitely be using their services again."
        name="Baljinder kaur"
        date="May 2022"
        stars={5}
        hrefGoogleReview="https://g.co/kgs/mquiyKX"
        filterStars={filterStars()}
      />

      <StarReview
        src="/assets/profile-pics-reviews/unnamed-38-1.png"
        reviewText=""
        name="Abz Mujib"
        date="May 2022"
        stars={5}
        hrefGoogleReview="https://maps.app.goo.gl/aGJwRnPuUjGgZ44e7"
        filterStars={filterStars()}
      />

      <StarReview
        src="/assets/profile-pics-reviews/unnamed-57.png"
        reviewText="Very happy with the service. The stains and marks are all gone. Carpet looks very clean."
        name="Hatim Shah"
        date="May 2022"
        stars={5}
        hrefGoogleReview="https://g.co/kgs/9JdjcBy"
        filterStars={filterStars()}
      />

      <StarReview
        src="/assets/profile-pics-reviews/unnamed-55.png"
        reviewText="I've used Fine Carpet Cleaning for my business premises and my home and they provide an excellent service."
        name="Gerald Powell"
        date="April 2022"
        stars={5}
        hrefGoogleReview="https://g.co/kgs/hDnPJux"
        filterStars={filterStars()}
      />

      <StarReview
        src="/assets/profile-pics-reviews/unnamed-41-1.png"
        reviewText=""
        name="Flori Rizea"
        date="April 2022"
        stars={5}
        hrefGoogleReview="https://maps.app.goo.gl/aGJwRnPuUjGgZ44e7"
        filterStars={filterStars()}
      />

      <StarReview
        src="/assets/profile-pics-reviews/unnamed-20-1.png"
        reviewText=""
        name="Marc Yallop"
        date="April 2022"
        stars={5}
        hrefGoogleReview="https://maps.app.goo.gl/aGJwRnPuUjGgZ44e7"
        filterStars={filterStars()}
      />

      <StarReview
        src="/assets/profile-pics-reviews/unnamed-15-1.png"
        reviewText=""
        name="Patricia Mbock"
        date="April 2022"
        stars={5}
        hrefGoogleReview="https://maps.app.goo.gl/aGJwRnPuUjGgZ44e7"
        filterStars={filterStars()}
      />

      <StarReview
        src="/assets/profile-pics-reviews/unnamed-5.png"
        reviewText="Would recommend this company. Would definitely use them again. On time and very polite service"
        name="Bernice Gilbert"
        date="April 2022"
        stars={5}
        hrefGoogleReview="https://g.co/kgs/eTUjHXP"
        filterStars={filterStars()}
      />

      <StarReview
        src="/assets/profile-pics-reviews/unnamed-25-1.png"
        reviewText=""
        name="Ralph W"
        date="February 2022"
        stars={5}
        hrefGoogleReview="https://maps.app.goo.gl/aGJwRnPuUjGgZ44e7"
        filterStars={filterStars()}
      />

      <StarReview
        src="/assets/profile-pics-reviews/unnamed-20.png"
        reviewText="I have used Fine Carpet Cleaning for years and need I say they turn our home to new each time they come to do the carpet cleaning. Staffs are very helpful when it comes to flexibility they always deliver the utmost returning that new carpet smell. I will highly recommend Fine Carpet Cleaning anytime any day.
      Moved home recently and we resumed business as usual.....use Fine Carpet Cleaning you won't regret"
        name="Grace Agbo"
        date="January 2022"
        stars={5}
        hrefGoogleReview="https://g.co/kgs/pXnzWnt"
        filterStars={filterStars()}
      />

      <StarReview
        src="/assets/profile-pics-reviews/unnamed-25.png"
        reviewText=""
        name="Minsung Kim"
        date="January 2022"
        stars={5}
        hrefGoogleReview="https://maps.app.goo.gl/aGJwRnPuUjGgZ44e7"
        filterStars={filterStars()}
      />

      <StarReview
        src="/assets/profile-pics-reviews/unnamed-21.png"
        reviewText="Very efficient and friendly. Excellent at keeping the client informed and sticking to the times agreed. Nicky worked very quickly and thoroughly. I was very happy with the result and will be using them again shortly."
        name="Judith Hd"
        date="December 2021"
        stars={5}
        hrefGoogleReview="https://g.co/kgs/7G8CfAu"
        filterStars={filterStars()}
      />

      <StarReview
        src="/assets/profile-pics-reviews/unnamed-1-2.png"
        reviewText="Brilliant service, polite technician. Would recommend to everyone."
        name="Suly Mayet"
        date="December 2021"
        stars={5}
        hrefGoogleReview="https://g.co/kgs/qZomRen"
        filterStars={filterStars()}
      />

      <StarReview
        src="/assets/profile-pics-reviews/unnamed-16-1.png"
        reviewText=""
        name="Bee Sounds (DJ)"
        date="December 2021"
        stars={5}
        hrefGoogleReview="https://maps.app.goo.gl/aGJwRnPuUjGgZ44e7"
        filterStars={filterStars()}
      />

      <StarReview
        src="/assets/profile-pics-reviews/unnamed-9-1.png"
        reviewText="Excellent customer service"
        name="Natasha Osborne"
        date="November 2021"
        stars={5}
        hrefGoogleReview="https://g.co/kgs/1EFfXJP"
        filterStars={filterStars()}
      />

      <StarReview
        src="/assets/profile-pics-reviews/unnamed-27-1.png"
        reviewText=""
        name="wasiu bankole"
        date="November 2021"
        stars={5}
        hrefGoogleReview="https://maps.app.goo.gl/aGJwRnPuUjGgZ44e7"
        filterStars={filterStars()}
      />

      <StarReview
        src="/assets/profile-pics-reviews/unnamed-9-1.png"
        reviewText="Was okay, the price was decent but unfortunately they couldn’t get 75% of the stains out of my carpet although I’d sent them pictures beforehand, and I had to ask them to go over certain areas and stains they could remove."
        name="Nazia Uddin"
        date="October 2021"
        stars={3}
        hrefGoogleReview="https://g.co/kgs/bajEL9E"
        filterStars={filterStars()}
      />

      <StarReview
        src="/assets/profile-pics-reviews/unnamed-2-1.png"
        reviewText="Punctual, professional and reasonable price. Highly recommended."
        name="Naser Mehrabi"
        date="October 2021"
        stars={5}
        hrefGoogleReview="https://g.co/kgs/bhxXcc8"
        filterStars={filterStars()}
      />

      <StarReview
        src="/assets/profile-pics-reviews/unnamed-60.png"
        reviewText="Amazing results, super professional service and attention to details , highly recommend the company"
        name="Temenujka Mollova"
        date="October 2021"
        stars={5}
        hrefGoogleReview="https://g.co/kgs/JXgQacL"
        filterStars={filterStars()}
      />

      <StarReview
        src="/assets/profile-pics-reviews/unnamed-36-1.png"
        reviewText=""
        name="Tom Pegg"
        date="September 2021"
        stars={5}
        hrefGoogleReview="https://maps.app.goo.gl/aGJwRnPuUjGgZ44e7"
        filterStars={filterStars()}
      />

      <StarReview
        src="/assets/profile-pics-reviews/unnamed-28-1.png"
        reviewText=""
        name="A M"
        date="August 2021"
        stars={5}
        hrefGoogleReview="https://maps.app.goo.gl/aGJwRnPuUjGgZ44e7"
        filterStars={filterStars()}
      />

      <StarReview
        src="/assets/profile-pics-reviews/unnamed-5.png"
        reviewText="Very great and fast service 🤩 highly recommend"
        name="Becks Bucks"
        date="August 2021"
        stars={5}
        hrefGoogleReview="https://g.co/kgs/xYbBwht"
        filterStars={filterStars()}
      />

      <StarReview
        src="/assets/profile-pics-reviews/unnamed-61.png"
        reviewText="Very good service and very professional. High standard and I definitely recommend them."
        name="Taty Lima"
        date="August 2021"
        stars={5}
        hrefGoogleReview="https://g.co/kgs/VvwEYrf"
        filterStars={filterStars()}
      />

      <StarReview
        src="/assets/profile-pics-reviews/unnamed-24.png"
        reviewText="Fine Carpet Cleaning were really well priced, turned up on time, did a really good job, my carpets are like new! Will use for all carpet cleaning and upholstery cleaning in future."
        name="Gemma Louise"
        date="August 2021"
        stars={5}
        hrefGoogleReview="https://g.co/kgs/X7npnPK"
        filterStars={filterStars()}
      />

      <StarReview
        src="/assets/profile-pics-reviews/unnamed-25.png"
        reviewText="Have used them twice and they are wonderful. Good cleaning, friendly and accommodating service. Definitely recommend!"
        name="Munish Thairani"
        date="July 2021"
        stars={5}
        hrefGoogleReview="https://g.co/kgs/CvZn1wG"
        filterStars={filterStars()}
      />

      <StarReview
        src="/assets/profile-pics-reviews/unnamed-22-1.png"
        reviewText=""
        name="David Mcall"
        date="July 2021"
        stars={5}
        hrefGoogleReview="https://maps.app.goo.gl/aGJwRnPuUjGgZ44e7"
        filterStars={filterStars()}
      />

      <StarReview
        src="/assets/profile-pics-reviews/unnamed-10-1.png"
        reviewText="Thanks for your service."
        name="Curly Treats"
        date="July 2021"
        stars={4}
        hrefGoogleReview="https://g.co/kgs/Pe5KAST"
        filterStars={filterStars()}
      />

      <StarReview
        src="/assets/profile-pics-reviews/unnamed-42-1.png"
        reviewText=""
        name="Yara Evans"
        date="July 2021"
        stars={4}
        hrefGoogleReview="https://maps.app.goo.gl/aGJwRnPuUjGgZ44e7"
        filterStars={filterStars()}
      />

      <StarReview
        src="/assets/profile-pics-reviews/unnamed-18-1.png"
        reviewText=""
        name="Diner Chowdhury"
        date="May 2021"
        stars={5}
        hrefGoogleReview="https://maps.app.goo.gl/aGJwRnPuUjGgZ44e7"
        filterStars={filterStars()}
      />

      <StarReview
        src="/assets/profile-pics-reviews/unnamed-23-1.png"
        reviewText=""
        name="Rumyana Nedeva"
        date="May 2021"
        stars={5}
        hrefGoogleReview="https://maps.app.goo.gl/aGJwRnPuUjGgZ44e7"
        filterStars={filterStars()}
      />

      <StarReview
        src="/assets/profile-pics-reviews/unnamed-26.png"
        reviewText="The best service i have ever used! They were very helpful and the price was reasonable. I can’t recommend them enough"
        name="ege cevik"
        date="April 2021"
        stars={5}
        hrefGoogleReview="https://g.co/kgs/yyqKtzc"
        filterStars={filterStars()}
      />

      <StarReview
        src="/assets/profile-pics-reviews/unnamed-17-1.png"
        reviewText=""
        name="Kevin Sampson"
        date="February 2021"
        stars={5}
        hrefGoogleReview="https://maps.app.goo.gl/aGJwRnPuUjGgZ44e7"
        filterStars={filterStars()}
      />

      <StarReview
        src="/assets/profile-pics-reviews/unnamed-27.png"
        reviewText="The shaggy rug could not be cleaned properly due to it being a high pile rug. the machine they use is an industrial powerful machine but no way it can pick up all rubbish etc."
        name="yusuf Mohammed"
        date="January 2021"
        stars={2}
        hrefGoogleReview="https://g.co/kgs/AUfMKLe"
        filterStars={filterStars()}
      />

      <StarReview
        src="/assets/profile-pics-reviews/unnamed-39-1.png"
        reviewText=""
        name="Srikanth Vemuri"
        date="December 2020"
        stars={4}
        hrefGoogleReview="https://maps.app.goo.gl/aGJwRnPuUjGgZ44e7"
        filterStars={filterStars()}
      />

      <StarReview
        src="/assets/profile-pics-reviews/unnamed-28.png"
        reviewText="I am very happy with the service I received, the friendly and professional man who came to deep clean my floors and a few pieces of furniture. After lockdown things were in dire need of a clean and he took his time paying attention to detail. I will re-book for a 'Covid Clean' since I am moving home soon, ensuring my new flat is sanitised by these professionals. Thank you Fine Carpet Cleaning London :)"
        name="A L"
        date="November 2020"
        stars={5}
        hrefGoogleReview="https://g.co/kgs/vbZ2Lyn"
        filterStars={filterStars()}
      />

      <StarReview
        src="/assets/profile-pics-reviews/unnamed-29.png"
        reviewText="This was the second time I used Fine Carpet cleaning. On both ocassions I found getting a quote and booking an appointment quick and easy. The person who did the cleanning was polite and very efficient with minimal disruption to my home. Very pleased with results including a difficult stain which was removed successfully."
        name="Christine Rajah"
        date="November 2020"
        stars={5}
        hrefGoogleReview="https://g.co/kgs/PD49URx"
        filterStars={filterStars()}
      />

      <StarReview
        src="/assets/profile-pics-reviews/unnamed-3-1.png"
        reviewText="All in all was satisfied with the work and a reasonable price."
        name="Isaac Tamir"
        date="November 2020"
        stars={4}
        hrefGoogleReview="https://g.co/kgs/AjqjNic"
        filterStars={filterStars()}
      />

      <StarReview
        src="/assets/profile-pics-reviews/unnamed-24-1.png"
        reviewText=""
        name="aelis3"
        date="November 2020"
        stars={5}
        hrefGoogleReview="https://maps.app.goo.gl/aGJwRnPuUjGgZ44e7"
        filterStars={filterStars()}
      />

      <StarReview
        src="/assets/profile-pics-reviews/unnamed-30.png"
        reviewText="I would recommend this company. Their machinery is industrial and robust, they did an excellent job on my carpets, very thorough and all the stains came out. They were professional and costs were very reasonable."
        name="Anna Townsend"
        date="September 2020"
        stars={5}
        hrefGoogleReview="https://g.co/kgs/AS8CV6x"
        filterStars={filterStars()}
      />

      <StarReview
        src="/assets/profile-pics-reviews/unnamed-31.png"
        reviewText="They did a fantastic job removing an old paint stain from my carpet, The cleaner was on time, professional and fast. I can't thank them enough! Def recommend. Again, thank you -Bianca"
        name="Bianca"
        date="September 2020"
        stars={5}
        hrefGoogleReview="https://g.co/kgs/khvbEmJ"
        filterStars={filterStars()}
      />

      <StarReview
        src="/assets/profile-pics-reviews/unnamed-30-1.png"
        reviewText=""
        name="FAHAD HASSAN"
        date="September 2020"
        stars={5}
        hrefGoogleReview="https://maps.app.goo.gl/aGJwRnPuUjGgZ44e7"
        filterStars={filterStars()}
      />

      <StarReview
        src="/assets/profile-pics-reviews/unnamed-4-1.png"
        reviewText="Really pleased with the service, would recommend again"
        name="Graeme Smith"
        date="September 2020"
        stars={5}
        hrefGoogleReview="https://g.co/kgs/szpgisF"
        filterStars={filterStars()}
      />

      <StarReview
        src="/assets/profile-pics-reviews/unnamed-19-1.png"
        reviewText=""
        name="Zakaria Ahmed"
        date="September 2020"
        stars={5}
        hrefGoogleReview="https://maps.app.goo.gl/aGJwRnPuUjGgZ44e7"
        filterStars={filterStars()}
      />

      <StarReview
        src="/assets/profile-pics-reviews/unnamed-68.png"
        reviewText="Very pleased with how my settee came out , gentleman was very polite"
        name="mandy rhys"
        date="September 2020"
        stars={5}
        hrefGoogleReview="https://g.co/kgs/kTX6dRc"
        filterStars={filterStars()}
      />

      <StarReview
        src="/assets/profile-pics-reviews/unnamed-40-1.png"
        reviewText=""
        name="Miguel Pelaez"
        date="August 2020"
        stars={5}
        hrefGoogleReview="https://maps.app.goo.gl/aGJwRnPuUjGgZ44e7"
        filterStars={filterStars()}
      />

      <StarReview
        src="/assets/profile-pics-reviews/unnamed-32.png"
        reviewText="Yes we was very pleased with the outcome of the cleaning of our carpets we have used them a couple of times now & both times were great thanks again ⭐️⭐️⭐️⭐️⭐️"
        name="STONE TONE"
        date="July 2020"
        stars={5}
        hrefGoogleReview="https://g.co/kgs/VPCnNMq"
        filterStars={filterStars()}
      />

      <StarReview
        src="/assets/profile-pics-reviews/unnamed-5-1.png"
        reviewText="very good service.!!
      highly recommend"
        name="Maria Calota"
        date="July 2020"
        stars={5}
        hrefGoogleReview="https://g.co/kgs/68Ui1kg"
        filterStars={filterStars()}
      />

      <StarReview
        src="/assets/profile-pics-reviews/unnamed-67.png"
        reviewText="Excellent service, on time, fast and great attention to detail!"
        name="Gregor Bran"
        date="July 2020"
        stars={5}
        hrefGoogleReview="https://g.co/kgs/nnNX8tD"
        filterStars={filterStars()}
      />

      <StarReview
        src="/assets/profile-pics-reviews/unnamed-33.png"
        reviewText="These guys are truly excellent at what they do, their prices are reasonable and their customer service is second to none. They really are best in the business."
        name="G Jones"
        date="June 2020"
        stars={5}
        hrefGoogleReview="https://g.co/kgs/dJggvx6"
        filterStars={filterStars()}
      />

      <StarReview
        src="/assets/profile-pics-reviews/unnamed-33-1.png"
        reviewText=""
        name="Ruth Elman"
        date="March 2020"
        stars={5}
        hrefGoogleReview="https://maps.app.goo.gl/aGJwRnPuUjGgZ44e7"
        filterStars={filterStars()}
      />

      <StarReview
        src="/assets/profile-pics-reviews/unnamed-34-1.png"
        reviewText=""
        name="Tina Nelan"
        date="March 2020"
        stars={5}
        hrefGoogleReview="https://maps.app.goo.gl/aGJwRnPuUjGgZ44e7"
        filterStars={filterStars()}
      />

      <StarReview
        src="/assets/profile-pics-reviews/unnamed-34.png"
        reviewText="Great company! Professional from beginning to end. Booking was really easy, the guys arrived on time with all the equipment needed to carry out the work. The carpets looked amazing by the time they had finished. Will definitely be using them again."
        name="Colin Burnell"
        date="February 2020"
        stars={5}
        hrefGoogleReview="https://g.co/kgs/jGu6ivH"
        filterStars={filterStars()}
      />

      <StarReview
        src="/assets/profile-pics-reviews/unnamed-6-1.png"
        reviewText="professional, reliable, quick and good service"
        name="Eva Hertegovina"
        date="February 2020"
        stars={5}
        hrefGoogleReview="https://g.co/kgs/Mtqa3sd"
        filterStars={filterStars()}
      />

      <StarReview
        src="/assets/profile-pics-reviews/unnamed-35.png"
        reviewText="We have had an excellent experience with Fine Carpet Cleaning London. From the first moment we contacted them right to point of completing the work, this company has been extremely professional, and accommodating. They have also been very honest and professional, explaining from the beginning what could or could not be achieved from the process. Their communication has also been excellent, always timely, professional and efficient.
      Fine Carpet Cleaning London do a lot more than carpets. They managed to save/rescue our new faux leather sofa (ivory colour) from red wine splashes/spray. I truly thought we would have to buy a new sofa, but fortunately, that will not be necessary. Our sofa is now looking as good as new, although the red wine stains were removed 4 days after the splashes occurred! They also cleaned the carpet in our living room, which also suffered from the red wine incident. Now it looks lovely, nice and clean.
      We are also very pleased with the gentleman that came to do the work, as he had a very pleasant manner and respectful demeanour.
      So yes, based on our experience, we would highly recommend the services of this company."
        name="esamiga"
        date="January 2020"
        stars={5}
        hrefGoogleReview="https://g.co/kgs/Joce2cU"
        filterStars={filterStars()}
      />

      <StarReview
        src="/assets/profile-pics-reviews/unnamed-65.png"
        reviewText="Cleaned three rugs. On time, fast, quality work. Would order again."
        name="Alexander"
        date="January 2020"
        stars={5}
        hrefGoogleReview="https://g.co/kgs/13rYXrv"
        filterStars={filterStars()}
      />

      <StarReview
        src="/assets/profile-pics-reviews/unnamed-36.png"
        reviewText="Great experience! Fast efficient service, no nonsense pricing, easy to work with and within a 5 minute phone call everything was arranged for the following day. Carpet is a lot more fresher and cleaner - industrial grade carpet cleaning machine used. Highly recommend!"
        name="Adil Hussain"
        date="December 2019"
        stars={5}
        hrefGoogleReview="https://g.co/kgs/EZw3kK4"
        filterStars={filterStars()}
      />

      <StarReview
        src="/assets/profile-pics-reviews/unnamed-37.png"
        reviewText="Brilliant service, prompt time keeping, and friendly team .
      Fine carpet cleaning did an amazing job they were here on time and the technician advised me fully on what he was going to do and how, and when they finished they left no mess .
      I would 100% recommend this company to family and friends and will def use them again in 6 months time ."
        name="Noreen Manji"
        date="December 2019"
        stars={5}
        hrefGoogleReview="https://g.co/kgs/Xrd7TYQ"
        filterStars={filterStars()}
      />

      <StarReview
        src="/assets/profile-pics-reviews/unnamed-38.png"
        reviewText="Fine Carpet Cleaning has been cleaning the carpets and upholstery in our house for the past three years.They have always been extremely efficient, quick to respond and providing professional service. We are happy to recommend their company to everyone who needs best quality of steam carpet cleaning!"
        name="Cvetelina Andonova"
        date="November 2019"
        stars={5}
        hrefGoogleReview="https://g.co/kgs/MDqhAAB"
        filterStars={filterStars()}
      />

      <StarReview
        src="/assets/profile-pics-reviews/unnamed-66.png"
        reviewText="Very effective and quick service! Highly recommend this company!"
        name="Marek"
        date="November 2019"
        stars={5}
        hrefGoogleReview="https://g.co/kgs/eoxxVoR"
        filterStars={filterStars()}
      />

      <StarReview
        src="/assets/profile-pics-reviews/unnamed-39.png"
        reviewText="My carpet is brilliant, clean looks like new!I called in the morning to book for the same day and they came in same day. Quickly and efficient ! Really recommend."
        name="Fernando Mendonca"
        date="October 2019"
        stars={5}
        hrefGoogleReview="https://g.co/kgs/vxLLccL"
        filterStars={filterStars()}
      />

      <StarReview
        src="/assets/profile-pics-reviews/unnamed-40.png"
        reviewText="Fine Carpet Cleaning are the best in the business, they are very professional, knowledgable and always offer the best advice. They provide a 1st class service every single time."
        name="Freshn Up Cleaning"
        date="September 2019"
        stars={5}
        hrefGoogleReview="https://g.co/kgs/LDKcDa9"
        filterStars={filterStars()}
      />

      <StarReview
        src="/assets/profile-pics-reviews/unnamed-41.png"
        reviewText="Very professional ! Turned up in time , easy to communicate ! Highly recommended .
      Will keep using they services , already booked another appointment with them .
      Thank you guys !"
        name="Gyula Egri"
        date="August 2019"
        stars={5}
        hrefGoogleReview="https://g.co/kgs/RhcAJzy"
        filterStars={filterStars()}
      />

      <StarReview
        src="/assets/profile-pics-reviews/unnamed-42.png"
        reviewText="I was very please with the cleaning of my two carpets and more importantly my wife was pleased. I would certainly recommend this company
      Regards
      Bruce madeiros"
        name="bruce madeiros"
        date="August 2019"
        stars={5}
        hrefGoogleReview="https://g.co/kgs/yYw4au5"
        filterStars={filterStars()}
      />

      <StarReview
        src="/assets/profile-pics-reviews/unnamed-43.png"
        reviewText="Very professional, quiet and efficient! Truly recommend. Definitely I will use them again. A big thank you ."
        name="Alina Matei"
        date="July 2019"
        stars={5}
        hrefGoogleReview="https://g.co/kgs/gQk6Qa9"
        filterStars={filterStars()}
      />

      <StarReview
        src="/assets/profile-pics-reviews/unnamed-44.png"
        reviewText="Great service. Easy to book. Reliable and did a good job at a reasonable price."
        name="Julie Parker"
        date="July 2019"
        stars={5}
        hrefGoogleReview="https://g.co/kgs/cXZdW3N"
        filterStars={filterStars()}
      />

      <StarReview
        src="/assets/profile-pics-reviews/unnamed-45.png"
        reviewText="Great service, carpets cleaned very professionally. Definatley recommend.
      Thank you"
        name="Nasima Mamun"
        date="June 2019"
        stars={5}
        hrefGoogleReview="https://g.co/kgs/EpxL3Bv"
        filterStars={filterStars()}
      />

      <StarReview
        src="/assets/profile-pics-reviews/unnamed-44-1.png"
        reviewText=""
        name="Ismahan Mohamed"
        date="June 2019"
        stars={1}
        hrefGoogleReview="https://maps.app.goo.gl/aGJwRnPuUjGgZ44e7"
        filterStars={filterStars()}
      />

      <StarReview
        src="/assets/profile-pics-reviews/unnamed-46.png"
        reviewText="excellent service. Prompt replies, easy online payment and they pitched up on time on the day!"
        name="Kirsty Scallan"
        date="May 2019"
        stars={5}
        hrefGoogleReview="https://g.co/kgs/EEdgL91"
        filterStars={filterStars()}
      />

      <StarReview
        src="/assets/profile-pics-reviews/unnamed-47.png"
        reviewText="They left my carpet super clean and spot free. Totally faultless service ."
        name="Bola Osifeso"
        date="April 2019"
        stars={5}
        hrefGoogleReview="https://g.co/kgs/P67YWGw"
        filterStars={filterStars()}
      />

      <StarReview
        src="/assets/profile-pics-reviews/unnamed-48.png"
        reviewText="Great guys for commercial or domestic work
      Always do a good job at a reasonable cost and very helpful
      Can get out stains where you think all is lost!
      Totally recommended"
        name="Keith Hickey"
        date="January 2019"
        stars={5}
        hrefGoogleReview="https://g.co/kgs/zgWWvob"
        filterStars={filterStars()}
      />

      <StarReview
        src="/assets/profile-pics-reviews/unnamed-49.png"
        reviewText="Great job!I recommend Fine Carpet Cleaning highly-reasonable prices with hard working staff!!!Well done!"
        name="Slavka Shinina"
        date="June 2018"
        stars={5}
        hrefGoogleReview="https://g.co/kgs/4kvuGga"
        filterStars={filterStars()}
      />

      <StarReview
        src="/assets/profile-pics-reviews/unnamed-64.png"
        reviewText="Fantastic prompt polite and reliable service. very clean carpets!"
        name="Janette Hodgkinson"
        date="May 2018"
        stars={5}
        hrefGoogleReview="https://g.co/kgs/xnaaQvp"
        filterStars={filterStars()}
      />

      <StarReview
        src="/assets/profile-pics-reviews/unnamed-69.png"
        reviewText="Had an old sofa from the 1960s steam cleaned and it went from smelling like a wet dog to fresh as a daisy."
        name="Ted2.0"
        date="April 2018"
        stars={5}
        hrefGoogleReview="https://g.co/kgs/NPfBU6W"
        filterStars={filterStars()}
      />

      <StarReview
        src="/assets/profile-pics-reviews/unnamed-50.png"
        reviewText="I was extremely pleased with the carpet cleaning service provided,would like to recommend the Fine Carpet Cleaning service to any Londoner. They are punctual, hard working, polite and the results are impressive to say the least. My carpets look amazing. Best wishes, J."
        name="Jason Block"
        date="September 2016"
        stars={5}
        hrefGoogleReview="https://g.co/kgs/f9QJZVm"
        filterStars={filterStars()}
      />

      <StarReview
        src="/assets/profile-pics-reviews/unnamed-51.png"
        reviewText="I was extremely delighted of the service provided by Fine Carpet. My cousine very recently moved to South Kensington as the whole entire house needed proper brushing. Good timing, courtesy service, professional performance followed by the ' wow ' effect after we came back to the property. Six stars of Five indeed, keep it that way guys!
      Highly recommended"
        name="georgi valchev"
        date="October 2016"
        stars={5}
        hrefGoogleReview="https://g.co/kgs/5gExcVH"
        filterStars={filterStars()}
      />

      <StarReview
        src="/assets/profile-pics-reviews/unnamed-52.png"
        reviewText="We were very happy with the service provided. It was quick, efficient and hassle free. We were also lucky enough to get it at 50% off, definitely a bargain! We will most certainly use them again even without the discount."
        name="Juliana Dinkova"
        date="August 2016"
        stars={5}
        hrefGoogleReview="https://g.co/kgs/J74rnVo"
        filterStars={filterStars()}
      />

      <StarReview
        src="/assets/profile-pics-reviews/unnamed-53.png"
        reviewText="I am very pleased to leave this review, as I had a lot of old stains on the upholstery of my beloved sofa, which now shines like new, thanks a bunch guys!"
        name="Sabrina James"
        date="August 2016"
        stars={5}
        hrefGoogleReview="https://g.co/kgs/t2ijd1s"
        filterStars={filterStars()}
      />

      <div class="m-10% mb-3% flex flex-wrap flex-justify-center md-gap-15 gap-10">
        <a href="/services"><button class="cursor-pointer outline-none bg-brand-second-action hover-bg-brand-second-action-hover:hover font-size-5 font-600 w-200px h-60px c-paper flex flex-items-center flex-justify-center relative b-solid b-rd-3 b-4 b-brand-second-action hover-b-brand-second-action-hover:hover whitespace-normal line-height-6 word-spacing-0.5 py-9" style="box-shadow: 0 0 0 3px rgba(255, 255, 255, .9) inset; letter-spacing: 0.05rem;">SERVICES</button></a>
        <a href="/contact-us"><button class="cursor-pointer outline-none bg-brand-action hover-bg-brand-action-hover:hover font-size-5 font-600 w-200px h-60px c-paper flex flex-items-center flex-justify-center relative b-solid b-rd-3 b-4 b-brand-action hover-b-brand-action-hover:hover whitespace-normal line-height-6 word-spacing-0.5 py-9" style="box-shadow: 0 0 0 3px rgba(255, 255, 255, .9) inset; letter-spacing: 0.05rem;">REQUEST A QUOTE</button></a>
      </div>
    </>
  );
}
