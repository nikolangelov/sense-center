import RiArrowRightSLine from '~icons/ri/arrow-right-s-line';
import RiArrowLeftSLine from '~icons/ri/arrow-left-s-line';
import RiCloseFill from '~icons/ri/close-fill';
import "solid-slider/slider.css";
import { createSignal, Show } from 'solid-js';
import RiYoutubeFill from '~icons/ri/youtube-fill';


function FleurDivider () {
	return (
		<div class="m-auto my-36 position-relative w-80%">
			<div class="divider-shadow overflow-hidden h-0.5 after-block::after after-w-full::after after-h-6::after after-mx-auto::after after-mt--6::after"></div>
			<div class="w-11 h-11 position-absolute position-bottom--6 left-47% bg-#f7f7f7"><img class="position-absolute max-w-7 mx-1.8" src="assets/output-onlinepngtools.png" /></div>
		</div>
	);
}

export default function Page() {
  return (
    <>

<h1>What our clients say about us</h1>

<div id="myBtnContainer">

<div class="cntnr-of-summarised-rating-in-new-reviews">
  <p style="font-size:4rem;">4.8</p>
  <div class="cntnr-of-summarised-rating-in-new-reviews-imgs">
    <img class="" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="10" height="10" data-skip-lazy="1" />
    <img class="" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="10" height="10" data-skip-lazy="1" />
    <img class="" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="10" height="10" data-skip-lazy="1" />
    <img class="" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="10" height="10" data-skip-lazy="1" />
    <img class="" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="10" height="10" data-skip-lazy="1" />
  </div>
  <p>119 reviews</p>
</div>

<div class="first-cntnr-of-scores-in-new-rvs">
<div class="cntnr-of-scores-in-new-reviews">
  <button class="filter-btns-for-new-star-reviews" onclick="filterSelection('all')">Show all</button>
</div>

<div class="cntnr-of-scores-in-new-reviews">
  <button class="filter-btns-for-new-star-reviews" onclick="filterSelection('5-stars')">5 stars</button>
  <div class="grey-score-in-new-reviews">
    <div class="yellow-score-in-new-reviews" style="width:100%"></div>
  </div>
  <div class="number-of-reviews-in-new-rvs">(104)</div>
</div>

<div class="cntnr-of-scores-in-new-reviews">
  <button class="filter-btns-for-new-star-reviews" onclick="filterSelection('4-stars')">4 stars</button>
  <div class="grey-score-in-new-reviews">
    <div class="yellow-score-in-new-reviews" style="width:7.61904764175415%"></div>
  </div>
  <div class="number-of-reviews-in-new-rvs">(9)</div>
</div>

<div class="cntnr-of-scores-in-new-reviews">
  <button class="filter-btns-for-new-star-reviews" onclick="filterSelection('3-stars')">3 stars</button>
  <div class="grey-score-in-new-reviews">
    <div class="yellow-score-in-new-reviews" style="width:0.9523809552192688%"></div>
  </div>
  <div class="number-of-reviews-in-new-rvs">(1)</div>
</div>

<div class="cntnr-of-scores-in-new-reviews">
  <button class="filter-btns-for-new-star-reviews" onclick="filterSelection('2-stars')">2 stars</button>
  <div class="grey-score-in-new-reviews">
    <div class="yellow-score-in-new-reviews" style="width:0.9523809552192688%"></div>
  </div>
  <div class="number-of-reviews-in-new-rvs">(1)</div>
</div>

<div class="cntnr-of-scores-in-new-reviews">
  <button class="filter-btns-for-new-star-reviews" onclick="filterSelection('1-stars')">&nbsp;1 star&nbsp;</button>
  <div class="grey-score-in-new-reviews">
    <div class="yellow-score-in-new-reviews" style="width:3.809523820877075%"></div>
  </div>
  <div class="number-of-reviews-in-new-rvs">(4)</div>
</div>

</div>
</div>


<a class="top-class-of-new-google-reviews" href="https://g.co/kgs/PFX6tTG" target="_blank" rel="noopener">
  <div class="filterDiv 5-stars">
    <table class="google-reviews-in-new-reviews-page 5-stars">
      <tbody>
        <tr>
          <td class="top-row-of-new-google-review">
            <div class="profile-pic-and-name-in-review">
              <img class="skip-lazy" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/02/unnamed-1.png"/>
              <p><b>Ivaylo Ivanov</b>January 2024</p></div>
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
          <td class="google-review-text">Great Service.Highly recomended!
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</a>


<div class="filterDiv 5-stars"><button class="greenbutton"><a href="https://g.co/kgs/PFX6tTG" target="_blank" rel="noopener">READ MORE IN GOOGLE</a></button></div>

<div class="filterDiv 5-stars"><FleurDivider></FleurDivider></div>

  <a href="https://g.co/kgs/doBtnwu" target="_blank" rel="noopener">
<div class="filterDiv 4-stars"><table class="google-reviews-in-new-reviews-page 4-stars" border="0" width="100%" cellspacing="10" cellpadding="0">
<tbody>
<tr>
<td class="top-row-of-new-google-review"><div class="profile-pic-and-name-in-review"><img class="skip-lazy" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/02/unnamed.png" width="40" height="40" data-skip-lazy="1" /><p><b>Robert Nyame</b>January 2024</p></div><img class="skip-lazy" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/02/GoogleLogoPNGImage.png" width="40" height="40" data-skip-lazy="1" />
</td>
</tr>
<tr>
<td align="center"><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/02/output-onlinepngtools-e1707480352597.png" alt="" width="20" height="20" data-skip-lazy="1" /></td>
</tr>
<tr>
<td class="google-review-text">Excellent service very quick only took a hour, carpet very clean all stains cleaned.
front room stairs corridor landing’s small bedroom great service.
Only waiting for carpet to completely dry should take a hour mostly dried.
Thank you I was was satisfied with service, the technician was very polite & Professional.</td>
</tr>
</tbody>
</table>
</div>
</a>

<div class="filterDiv 4-stars"><button class="greenbutton"><a href="https://g.co/kgs/doBtnwu" target="_blank" rel="noopener">READ MORE IN GOOGLE</a></button></div>

<div class="filterDiv 4-stars">
<div class="fleur-de-lis--divider">
<div class="divider-shadow"></div>
<div class="divider-shadow-image"><img src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/output-onlinepngtools.png" /></div>
</div></div>

  <a href="https://g.co/kgs/WxWf2Bm" target="_blank" rel="noopener">
<div class="filterDiv 5-stars"><table class="google-reviews-in-new-reviews-page 5-stars" border="0" width="100%" cellspacing="10" cellpadding="0">
<tbody>
<tr>
<td class="top-row-of-new-google-review"><div class="profile-pic-and-name-in-review"><img class="skip-lazy" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/02/unnamed-1-1.png" width="40" height="40" data-skip-lazy="1" /><p><b>Samanta Federico</b><br>January 2024</p></div><img class="skip-lazy" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/02/GoogleLogoPNGImage.png" width="40" height="40" data-skip-lazy="1" />
</td>
</tr>
<tr>
<td align="center"><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /></td>
</tr>
<tr>
<td class="google-review-text">I had my carpet cleaned by Nikolay from Fine Carpet Cleaning. What a fantastic job he did ! He is very professional, efficient and organised in the way he works. My carpet looks new again. I highly recommend.</td>
</tr>
</tbody>
</table>
</div>
</a>

<div class="filterDiv 5-stars"><button class="greenbutton"><a href="https://g.co/kgs/WxWf2Bm" target="_blank" rel="noopener">READ MORE IN GOOGLE</a></button></div>

<div class="filterDiv 5-stars">
<div class="fleur-de-lis--divider">
<div class="divider-shadow"></div>
<div class="divider-shadow-image"><img src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/output-onlinepngtools.png" /></div>
</div></div>

  <a href="https://g.co/kgs/vD8tsDc" target="_blank" rel="noopener">
<div class="filterDiv 5-stars"><table class="google-reviews-in-new-reviews-page 5-stars" border="0" width="100%" cellspacing="10" cellpadding="0">
<tbody>
<tr>
<td class="top-row-of-new-google-review"><div class="profile-pic-and-name-in-review"><img class="skip-lazy" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/02/unnamed-2.png" width="40" height="40" data-skip-lazy="1" /><p><b>Gergana Georgieva</b><br>January 2024</p></div><img class="skip-lazy google-logo-in-new-reviews" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/02/GoogleLogoPNGImage.png" width="40" height="40" data-skip-lazy="1" />
</td>
</tr>
<tr>
<td align="center"><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /></td>
</tr>
<tr>
<td class="google-review-text">Thank you for the great customer service and for the outstanding job you have done. We love our carper even more now.
Gergana
</td>
</tr>
</tbody>
</table>
</div>
</a>

<div class="filterDiv 5-stars"><button class="greenbutton"><a href="https://g.co/kgs/vD8tsDc" target="_blank" rel="noopener">READ MORE IN GOOGLE</a></button></div>

<div class="filterDiv 5-stars">
<div class="fleur-de-lis--divider">
<div class="divider-shadow"></div>
<div class="divider-shadow-image"><img src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/output-onlinepngtools.png" /></div>
</div></div>

  <a href="https://g.co/kgs/ou1h8h8" target="_blank" rel="noopener">
<div class="filterDiv 5-stars"><table class="google-reviews-in-new-reviews-page 5-stars" border="0" width="100%" cellspacing="10" cellpadding="0">
<tbody>
<tr>
<td class="top-row-of-new-google-review"><div class="profile-pic-and-name-in-review"><img class="skip-lazy" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/02/unnamed-3.png" width="40" height="40" data-skip-lazy="1" /><p><b>Rosalind Faw</b><br>December 2023</p></div><img class="skip-lazy google-logo-in-new-reviews" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/02/GoogleLogoPNGImage.png" width="40" height="40" data-skip-lazy="1" />
</td>
</tr>
<tr>
<td align="center"><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /></td>
</tr>
<tr>
<td class="google-review-text">Very pleased with the results of my carpets being cleaned. Easy process from start to finish helped by very friendly Maya who arranged it all. Would certainly use this company again.
</td>
</tr>
</tbody>
</table>
</div>
</a>

<div class="filterDiv 5-stars"><button class="greenbutton"><a href="https://g.co/kgs/ou1h8h8" target="_blank" rel="noopener">READ MORE IN GOOGLE</a></button></div>

<div class="filterDiv 5-stars">
<div class="fleur-de-lis--divider">
<div class="divider-shadow"></div>
<div class="divider-shadow-image"><img src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/output-onlinepngtools.png" /></div>
</div></div>

  <a class="top-class-of-new-google-reviews" href="https://g.co/kgs/DNM8JQd" target="_blank" rel="noopener">
<div class="filterDiv 5-stars"><table class="google-reviews-in-new-reviews-page 5-stars" border="0" width="100%" cellspacing="10" cellpadding="0">
<tbody>
<tr>
<td class="top-row-of-new-google-review"><div class="profile-pic-and-name-in-review"><img class="skip-lazy" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/02/unnamed-7-1.png" width="40" height="40" data-skip-lazy="1" /><p><b>david o'brien</b><br>December 2023</p></div><img class="skip-lazy google-logo-in-new-reviews" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/02/GoogleLogoPNGImage.png" width="40" height="40" data-skip-lazy="1" />
</td>
</tr>
<tr>
<td align="center"><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /></td>
</tr>
<tr>
<td class="google-review-text">Very good carpet cleaning
</td>
</tr>
</tbody>
</table>
</div>
</a>

<div class="filterDiv 5-stars"><button class="greenbutton"><a href="https://g.co/kgs/DNM8JQd" target="_blank" rel="noopener">READ MORE IN GOOGLE</a></button></div>

<div class="filterDiv 5-stars">
<div class="fleur-de-lis--divider">
<div class="divider-shadow"></div>
<div class="divider-shadow-image"><img src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/output-onlinepngtools.png" /></div>
</div></div>

  <a href="https://g.co/kgs/mmNDw9P" target="_blank" rel="noopener">
<div class="filterDiv 4-stars"><table class="google-reviews-in-new-reviews-page 4-stars" border="0" width="100%" cellspacing="10" cellpadding="0">
<tbody>
<tr>
<td class="top-row-of-new-google-review"><div class="profile-pic-and-name-in-review"><img class="skip-lazy" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/02/unnamed-4.png" width="40" height="40" data-skip-lazy="1" /><p><b>Ladine Oconnor</b><br>November 2023</p></div><img class="skip-lazy google-logo-in-new-reviews" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/02/GoogleLogoPNGImage.png" width="40" height="40" data-skip-lazy="1" />
</td>
</tr>
<tr>
<td align="center"><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/02/output-onlinepngtools-e1707480352597.png" alt="" width="20" height="20" data-skip-lazy="1" /></td>
</tr>
<tr>
<td class="google-review-text">Excellent cleaning company! Very happy with the service all carpet strains gone.
</td>
</tr>
</tbody>
</table>
</div>
</a>

<div class="filterDiv 4-stars"><button class="greenbutton"><a href="https://g.co/kgs/mmNDw9P" target="_blank" rel="noopener">READ MORE IN GOOGLE</a></button></div>

<div class="filterDiv 4-stars">
<div class="fleur-de-lis--divider">
<div class="divider-shadow"></div>
<div class="divider-shadow-image"><img src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/output-onlinepngtools.png" /></div>
</div></div>

  <a href="https://g.co/kgs/wmTCMU8" target="_blank" rel="noopener">
<div class="filterDiv 1-stars"><table class="google-reviews-in-new-reviews-page 1-stars" border="0" width="100%" cellspacing="10" cellpadding="0">
<tbody>
<tr>
<td class="top-row-of-new-google-review"><div class="profile-pic-and-name-in-review"><img class="skip-lazy" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/02/unnamed-5.png" width="40" height="40" data-skip-lazy="1" /><p><b>Brad Merry</b><br>November 2023</p></div><img class="skip-lazy google-logo-in-new-reviews" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/02/GoogleLogoPNGImage.png" width="40" height="40" data-skip-lazy="1" />
</td>
</tr>
<tr>
<td align="center"><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/02/output-onlinepngtools-e1707480352597.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/02/output-onlinepngtools-e1707480352597.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/02/output-onlinepngtools-e1707480352597.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/02/output-onlinepngtools-e1707480352597.png" alt="" width="20" height="20" data-skip-lazy="1" /></td>
</tr>
<tr>
<td class="google-review-text">Was very mislead by the positive reviews. I was debating whether to just leave it or say something but a few days have passed now and I am very unhappy with the service. I was told my white shaggy rug could be as good as new and deep cleaned, only to have it look exactly the same after. The website said £28, but I was told it needs a deeper clean with urine removal which is £65. The rug smelt and looked EXACTLY the same after completion. £65 I was charged for a Hoover that done nothing. They gave me 10% off when I complained and then start saying they don’t know until they try, which felt so misleading telling me they could before I paid. I would have understood if this was made clear before payment, but it Was said with such certainty, even right before they started I said can we definitely make it good as new, and he literally said “yes absolutely” straight to my face. Money down the drain. Avoid at all costs!
</td>
</tr>
</tbody>
</table>
</div>
</a>

<div class="filterDiv 1-stars"><button class="greenbutton"><a href="https://g.co/kgs/wmTCMU8" target="_blank" rel="noopener">READ MORE IN GOOGLE</a></button></div>

<div class="filterDiv 1-stars">
<div class="fleur-de-lis--divider">
<div class="divider-shadow"></div>
<div class="divider-shadow-image"><img src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/output-onlinepngtools.png" /></div>
</div></div>

  <a href="https://g.co/kgs/1d7AfUe" target="_blank" rel="noopener">
<div class="filterDiv 1-stars"><table class="google-reviews-in-new-reviews-page 1-stars" border="0" width="100%" cellspacing="10" cellpadding="0">
<tbody>
<tr>
<td class="top-row-of-new-google-review"><div class="profile-pic-and-name-in-review"><img class="skip-lazy" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/02/unnamed-6.png" width="40" height="40" data-skip-lazy="1" /><p><b>E M</b><br>November 2023</p></div><img class="skip-lazy google-logo-in-new-reviews" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/02/GoogleLogoPNGImage.png" width="40" height="40" data-skip-lazy="1" />
</td>
</tr>
<tr>
<td align="center"><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/02/output-onlinepngtools-e1707480352597.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/02/output-onlinepngtools-e1707480352597.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/02/output-onlinepngtools-e1707480352597.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/02/output-onlinepngtools-e1707480352597.png" alt="" width="20" height="20" data-skip-lazy="1" /></td>
</tr>
<tr>
<td class="google-review-text">Very dissapoined. While the customer service itself is very friendly and professional, the work itself is absolutely useless. I paid £160 to clean my sofa, send photos, videos and explained that the sofa is natural leather. All I wanted,was just to refereh my leather sofa a bit. However I saw 0 difference from before and after. ;( what a waste of money.
</td>
</tr>
</tbody>
</table>
</div>
</a>

<div class="filterDiv 1-stars"><button class="greenbutton"><a href="https://g.co/kgs/1d7AfUe" target="_blank" rel="noopener">READ MORE IN GOOGLE</a></button></div>

<div class="filterDiv 1-stars">
<div class="fleur-de-lis--divider">
<div class="divider-shadow"></div>
<div class="divider-shadow-image"><img src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/output-onlinepngtools.png" /></div>
</div></div>

  <a href="https://g.co/kgs/B2g8cw9" target="_blank" rel="noopener">
<div class="filterDiv 5-stars"><table class="google-reviews-in-new-reviews-page 5-stars" border="0" width="100%" cellspacing="10" cellpadding="0">
<tbody>
<tr>
<td class="top-row-of-new-google-review"><div class="profile-pic-and-name-in-review"><img class="skip-lazy" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/02/unnamed-7.png" width="40" height="40" data-skip-lazy="1" /><p><b>Erica Baptista</b><br>November 2023</p></div><img class="skip-lazy google-logo-in-new-reviews" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/02/GoogleLogoPNGImage.png" width="40" height="40" data-skip-lazy="1" />
</td>
</tr>
<tr>
<td align="center"><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /></td>
</tr>
<tr>
<td class="google-review-text">My carpet was in really bad shape, Fine Carpet Cleaning came around and it looks perfect!
Will be definitely using their services again
</td>
</tr>
</tbody>
</table>
</div>
</a>

<div class="filterDiv 5-stars"><button class="greenbutton"><a href="https://g.co/kgs/B2g8cw9" target="_blank" rel="noopener">READ MORE IN GOOGLE</a></button></div>

<div class="filterDiv 5-stars">
<div class="fleur-de-lis--divider">
<div class="divider-shadow"></div>
<div class="divider-shadow-image"><img src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/output-onlinepngtools.png" /></div>
</div></div>

  <a href="https://g.co/kgs/k6KFKDf" target="_blank" rel="noopener">
<div class="filterDiv 5-stars"><table class="google-reviews-in-new-reviews-page 5-stars" border="0" width="100%" cellspacing="10" cellpadding="0">
<tbody>
<tr>
<td class="top-row-of-new-google-review"><div class="profile-pic-and-name-in-review"><img class="skip-lazy" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/02/unnamed-8.png" width="40" height="40" data-skip-lazy="1" /><p><b>Rachel Ellis</b><br>October 2023</p></div><img class="skip-lazy google-logo-in-new-reviews" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/02/GoogleLogoPNGImage.png" width="40" height="40" data-skip-lazy="1" />
</td>
</tr>
<tr>
<td align="center"><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /></td>
</tr>
<tr>
<td class="google-review-text">Good company - very responsive via email & fairly priced. On the day the guys were punctual, polite and did a good thorough job.
</td>
</tr>
</tbody>
</table>
</div>
</a>

<div class="filterDiv 5-stars"><button class="greenbutton"><a href="https://g.co/kgs/k6KFKDf" target="_blank" rel="noopener">READ MORE IN GOOGLE</a></button></div>

<div class="filterDiv 5-stars">
<div class="fleur-de-lis--divider">
<div class="divider-shadow"></div>
<div class="divider-shadow-image"><img src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/output-onlinepngtools.png" /></div>
</div></div>

  <a class="top-class-of-new-google-reviews" href="https://g.co/kgs/vkoHNfC" target="_blank" rel="noopener">
<div class="filterDiv 5-stars"><table class="google-reviews-in-new-reviews-page 5-stars" border="0" width="100%" cellspacing="10" cellpadding="0">
<tbody>
<tr>
<td class="top-row-of-new-google-review"><div class="profile-pic-and-name-in-review"><img class="skip-lazy" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/02/unnamed-13-1.png" width="40" height="40" data-skip-lazy="1" /><p><b>G B</b><br>October 2023</p></div><img class="skip-lazy google-logo-in-new-reviews" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/02/GoogleLogoPNGImage.png" width="40" height="40" data-skip-lazy="1" />
</td>
</tr>
<tr>
<td align="center"><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /></td>
</tr>
<tr>
<td class="google-review-text">Real professionals
</td>
</tr>
</tbody>
</table>
</div>
</a>

<div class="filterDiv 5-stars"><button class="greenbutton"><a href="https://g.co/kgs/vkoHNfC" target="_blank" rel="noopener">READ MORE IN GOOGLE</a></button></div>

<div class="filterDiv 5-stars">
<div class="fleur-de-lis--divider">
<div class="divider-shadow"></div>
<div class="divider-shadow-image"><img src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/output-onlinepngtools.png" /></div>
</div></div>

  <a href="https://g.co/kgs/bkiybKv" target="_blank" rel="noopener">
<div class="filterDiv 5-stars"><table class="google-reviews-in-new-reviews-page 5-stars" border="0" width="100%" cellspacing="10" cellpadding="0">
<tbody>
<tr>
<td class="top-row-of-new-google-review"><div class="profile-pic-and-name-in-review"><img class="skip-lazy" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/02/unnamed-9.png" width="40" height="40" data-skip-lazy="1" /><p><b>Katrina Scott</b><br>August 2023</p></div><img class="skip-lazy google-logo-in-new-reviews" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/02/GoogleLogoPNGImage.png" width="40" height="40" data-skip-lazy="1" />
</td>
</tr>
<tr>
<td align="center"><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /></td>
</tr>
<tr>
<td class="google-review-text">Very happy with the service . The carpet cleaning man did a great job. Was very friendly and on time . And it was a great price
</td>
</tr>
</tbody>
</table>
</div>
</a>

<div class="filterDiv 5-stars"><button class="greenbutton"><a href="https://g.co/kgs/bkiybKv" target="_blank" rel="noopener">READ MORE IN GOOGLE</a></button></div>

<div class="filterDiv 5-stars">
<div class="fleur-de-lis--divider">
<div class="divider-shadow"></div>
<div class="divider-shadow-image"><img src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/output-onlinepngtools.png" /></div>
</div></div>

  <a class="top-class-of-new-google-reviews" href="https://g.co/kgs/8hyCUc5" target="_blank" rel="noopener">
<div class="filterDiv 5-stars"><table class="google-reviews-in-new-reviews-page 5-stars" border="0" width="100%" cellspacing="10" cellpadding="0">
<tbody>
<tr>
<td class="top-row-of-new-google-review"><div class="profile-pic-and-name-in-review"><img class="skip-lazy" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/02/unnamed-62.png" width="40" height="40" data-skip-lazy="1" /><p><b>Sheikh Khanom</b><br>August 2023</p></div><img class="skip-lazy google-logo-in-new-reviews" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/02/GoogleLogoPNGImage.png" width="40" height="40" data-skip-lazy="1" />
</td>
</tr>
<tr>
<td align="center"><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /></td>
</tr>
<tr>
<td class="google-review-text">Excellent carpet cleaning service
</td>
</tr>
</tbody>
</table>
</div>
</a>

<div class="filterDiv 5-stars"><button class="greenbutton"><a href="https://g.co/kgs/8hyCUc5" target="_blank" rel="noopener">READ MORE IN GOOGLE</a></button></div>

<div class="filterDiv 5-stars">
<div class="fleur-de-lis--divider">
<div class="divider-shadow"></div>
<div class="divider-shadow-image"><img src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/output-onlinepngtools.png" /></div>
</div></div>

  <a class="top-class-of-new-google-reviews" href="https://g.co/kgs/55SK7Dy" target="_blank" rel="noopener">
<div class="filterDiv 5-stars"><table class="google-reviews-in-new-reviews-page 5-stars" border="0" width="100%" cellspacing="10" cellpadding="0">
<tbody>
<tr>
<td class="top-row-of-new-google-review"><div class="profile-pic-and-name-in-review"><img class="skip-lazy" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/02/unnamed-59.png" width="40" height="40" data-skip-lazy="1" /><p><b>Peter Tobin</b><br>June 2023</p></div><img class="skip-lazy google-logo-in-new-reviews" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/02/GoogleLogoPNGImage.png" width="40" height="40" data-skip-lazy="1" />
</td>
</tr>
<tr>
<td align="center"><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /></td>
</tr>
<tr>
<td class="google-review-text">Great service, would recommend.
</td>
</tr>
</tbody>
</table>
</div>
</a>

<div class="filterDiv 5-stars"><button class="greenbutton"><a href="https://g.co/kgs/55SK7Dy" target="_blank" rel="noopener">READ MORE IN GOOGLE</a></button></div>

<div class="filterDiv 5-stars">
<div class="fleur-de-lis--divider">
<div class="divider-shadow"></div>
<div class="divider-shadow-image"><img src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/output-onlinepngtools.png" /></div>
</div></div>

  <a href="https://g.co/kgs/8muBPZV" target="_blank" rel="noopener">
<div class="filterDiv 5-stars"><table class="google-reviews-in-new-reviews-page 5-stars" border="0" width="100%" cellspacing="10" cellpadding="0">
<tbody>
<tr>
<td class="top-row-of-new-google-review"><div class="profile-pic-and-name-in-review"><img class="skip-lazy" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/02/unnamed-10.png" width="40" height="40" data-skip-lazy="1" /><p><b>Alena Mineva</b><br>July 2023</p></div><img class="skip-lazy google-logo-in-new-reviews" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/02/GoogleLogoPNGImage.png" width="40" height="40" data-skip-lazy="1" />
</td>
</tr>
<tr>
<td align="center"><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /></td>
</tr>
<tr>
<td class="google-review-text">Yavor and his team have been more than helpful to our short-term rentals business. Not only they've dealt with old stains and left our carpets like brand new, but we are very grateful for their professionalism.
</td>
</tr>
</tbody>
</table>
</div>
</a>

<div class="filterDiv 5-stars"><button class="greenbutton"><a href="https://g.co/kgs/8muBPZV" target="_blank" rel="noopener">READ MORE IN GOOGLE</a></button></div>

<div class="filterDiv 5-stars">
<div class="fleur-de-lis--divider">
<div class="divider-shadow"></div>
<div class="divider-shadow-image"><img src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/output-onlinepngtools.png" /></div>
</div></div>

  <a href="https://g.co/kgs/hcnd2zs" target="_blank" rel="noopener">
<div class="filterDiv 5-stars"><table class="google-reviews-in-new-reviews-page 5-stars" border="0" width="100%" cellspacing="10" cellpadding="0">
<tbody>
<tr>
<td class="top-row-of-new-google-review"><div class="profile-pic-and-name-in-review"><img class="skip-lazy" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/02/unnamed-11.png" width="40" height="40" data-skip-lazy="1" /><p><b>Kirsten Pansegrouw</b><br>July 2023</p></div><img class="skip-lazy google-logo-in-new-reviews" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/02/GoogleLogoPNGImage.png" width="40" height="40" data-skip-lazy="1" />
</td>
</tr>
<tr>
<td align="center"><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /></td>
</tr>
<tr>
<td class="google-review-text">Great job from start to finish: competitive quotation, efficient arrangements before appointment, technician arrived exactly on time, efficient clean and stain protection with powerful modern equipment. Very happy with the whole process and will use them again.
</td>
</tr>
</tbody>
</table>
</div>
</a>

<div class="filterDiv 5-stars"><button class="greenbutton"><a href="https://g.co/kgs/hcnd2zs" target="_blank" rel="noopener">READ MORE IN GOOGLE</a></button></div>

<div class="filterDiv 5-stars">
<div class="fleur-de-lis--divider">
<div class="divider-shadow"></div>
<div class="divider-shadow-image"><img src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/output-onlinepngtools.png" /></div>
</div></div>

  <a href="https://g.co/kgs/Shz3uGZ" target="_blank" rel="noopener">
<div class="filterDiv 5-stars"><table class="google-reviews-in-new-reviews-page 5-stars" border="0" width="100%" cellspacing="10" cellpadding="0">
<tbody>
<tr>
<td class="top-row-of-new-google-review"><div class="profile-pic-and-name-in-review"><img class="skip-lazy" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/02/unnamed-12.png" width="40" height="40" data-skip-lazy="1" /><p><b>Helder Oliveira</b><br>July 2023</p></div><img class="skip-lazy google-logo-in-new-reviews" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/02/GoogleLogoPNGImage.png" width="40" height="40" data-skip-lazy="1" />
</td>
</tr>
<tr>
<td align="center"><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /></td>
</tr>
<tr>
<td class="google-review-text">Excellent service, cost and great communication! Provided stain removal for a carpet. Highly recommended!
</td>
</tr>
</tbody>
</table>
</div>
</a>

<div class="filterDiv 5-stars"><button class="greenbutton"><a href="https://g.co/kgs/Shz3uGZ" target="_blank" rel="noopener">READ MORE IN GOOGLE</a></button></div>

<div class="filterDiv 5-stars">
<div class="fleur-de-lis--divider">
<div class="divider-shadow"></div>
<div class="divider-shadow-image"><img src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/output-onlinepngtools.png" /></div>
</div></div>

  <a class="top-class-of-new-google-reviews" href="https://maps.app.goo.gl/aGJwRnPuUjGgZ44e7" target="_blank" rel="noopener">
<div class="filterDiv 4-stars"><table class="google-reviews-in-new-reviews-page 4-stars" border="0" width="100%" cellspacing="10" cellpadding="0">
<tbody>
<tr>
<td class="top-row-of-new-google-review"><div class="profile-pic-and-name-in-review"><img class="skip-lazy" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/02/unnamed-45-1.png" width="40" height="40" data-skip-lazy="1" /><p><b>Ramya Kaza</b><br>May 2023</p></div><img class="skip-lazy google-logo-in-new-reviews" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/02/GoogleLogoPNGImage.png" width="40" height="40" data-skip-lazy="1" />
</td>
</tr>
<tr>
<td align="center"><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/02/output-onlinepngtools-e1707480352597.png" alt="" width="20" height="20" data-skip-lazy="1" /></td>
</tr>
</tbody>
</table>
</div>
</a>

<div class="filterDiv 4-stars"><button class="greenbutton"><a href="https://maps.app.goo.gl/aGJwRnPuUjGgZ44e7" target="_blank" rel="noopener">READ MORE IN GOOGLE</a></button></div>

<div class="filterDiv 4-stars">
<div class="fleur-de-lis--divider">
<div class="divider-shadow"></div>
<div class="divider-shadow-image"><img src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/output-onlinepngtools.png" /></div>
</div></div>

  <a class="top-class-of-new-google-reviews" href="https://maps.app.goo.gl/aGJwRnPuUjGgZ44e7" target="_blank" rel="noopener">
<div class="filterDiv 5-stars"><table class="google-reviews-in-new-reviews-page 5-stars" border="0" width="100%" cellspacing="10" cellpadding="0">
<tbody>
<tr>
<td class="top-row-of-new-google-review"><div class="profile-pic-and-name-in-review"><img class="skip-lazy" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/02/unnamed-32-1.png" width="40" height="40" data-skip-lazy="1" /><p><b>Martin Parzulov</b><br>April 2023</p></div><img class="skip-lazy google-logo-in-new-reviews" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/02/GoogleLogoPNGImage.png" width="40" height="40" data-skip-lazy="1" />
</td>
</tr>
<tr>
<td align="center"><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /></td>
</tr>
</tbody>
</table>
</div>
</a>

<div class="filterDiv 5-stars"><button class="greenbutton"><a href="https://maps.app.goo.gl/aGJwRnPuUjGgZ44e7" target="_blank" rel="noopener">READ MORE IN GOOGLE</a></button></div>

<div class="filterDiv 5-stars">
<div class="fleur-de-lis--divider">
<div class="divider-shadow"></div>
<div class="divider-shadow-image"><img src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/output-onlinepngtools.png" /></div>
</div></div>

  <a href="https://g.co/kgs/tUWswMy" target="_blank" rel="noopener">
<div class="filterDiv 5-stars"><table class="google-reviews-in-new-reviews-page 5-stars" border="0" width="100%" cellspacing="10" cellpadding="0">
<tbody>
<tr>
<td class="top-row-of-new-google-review"><div class="profile-pic-and-name-in-review"><img class="skip-lazy" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/02/unnamed-13.png" width="40" height="40" data-skip-lazy="1" /><p><b>Quest London</b><br>March 2023</p></div><img class="skip-lazy google-logo-in-new-reviews" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/02/GoogleLogoPNGImage.png" width="40" height="40" data-skip-lazy="1" />
</td>
</tr>
<tr>
<td align="center"><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /></td>
</tr>
<tr>
<td class="google-review-text">First time we used Fine Carpet Cleaning London, we sourced their add on Gumtree and I must say I was taken back with the level of service we received.
We had a 2 bedroom apartment carpet wash, booked the appointment for the very next day.
Technician came on time and done a fantastic job, very friendly, always add a smile on his face & most importantly did not make a mess of the property.
Highly recommended, looking forward to using their services again.
</td>
</tr>
</tbody>
</table>
</div>
</a>

<div class="filterDiv 5-stars"><button class="greenbutton"><a href="https://g.co/kgs/tUWswMy" target="_blank" rel="noopener">READ MORE IN GOOGLE</a></button></div>

<div class="filterDiv 5-stars">
<div class="fleur-de-lis--divider">
<div class="divider-shadow"></div>
<div class="divider-shadow-image"><img src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/output-onlinepngtools.png" /></div>
</div></div>

  <a class="top-class-of-new-google-reviews" href="https://maps.app.goo.gl/aGJwRnPuUjGgZ44e7" target="_blank" rel="noopener">
<div class="filterDiv 4-stars"><table class="google-reviews-in-new-reviews-page 4-stars" border="0" width="100%" cellspacing="10" cellpadding="0">
<tbody>
<tr>
<td class="top-row-of-new-google-review"><div class="profile-pic-and-name-in-review"><img class="skip-lazy" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/02/unnamed-43-1.png" width="40" height="40" data-skip-lazy="1" /><p><b>Kam Pindoria</b><br>March 2023</p></div><img class="skip-lazy google-logo-in-new-reviews" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/02/GoogleLogoPNGImage.png" width="40" height="40" data-skip-lazy="1" />
</td>
</tr>
<tr>
<td align="center"><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/02/output-onlinepngtools-e1707480352597.png" alt="" width="20" height="20" data-skip-lazy="1" /></td>
</tr>
</tbody>
</table>
</div>
</a>

<div class="filterDiv 4-stars"><button class="greenbutton"><a href="https://maps.app.goo.gl/aGJwRnPuUjGgZ44e7" target="_blank" rel="noopener">READ MORE IN GOOGLE</a></button></div>

<div class="filterDiv 4-stars">
<div class="fleur-de-lis--divider">
<div class="divider-shadow"></div>
<div class="divider-shadow-image"><img src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/output-onlinepngtools.png" /></div>
</div></div>

  <a class="top-class-of-new-google-reviews" href="https://maps.app.goo.gl/aGJwRnPuUjGgZ44e7" target="_blank" rel="noopener">
<div class="filterDiv 5-stars"><table class="google-reviews-in-new-reviews-page 5-stars" border="0" width="100%" cellspacing="10" cellpadding="0">
<tbody>
<tr>
<td class="top-row-of-new-google-review"><div class="profile-pic-and-name-in-review"><img class="skip-lazy" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/02/unnamed-21-1.png" width="40" height="40" data-skip-lazy="1" /><p><b>Tereza Aleksieva</b><br>March 2023</p></div><img class="skip-lazy google-logo-in-new-reviews" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/02/GoogleLogoPNGImage.png" width="40" height="40" data-skip-lazy="1" />
</td>
</tr>
<tr>
<td align="center"><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /></td>
</tr>
</tbody>
</table>
</div>
</a>

<div class="filterDiv 5-stars"><button class="greenbutton"><a href="https://maps.app.goo.gl/aGJwRnPuUjGgZ44e7" target="_blank" rel="noopener">READ MORE IN GOOGLE</a></button></div>

<div class="filterDiv 5-stars">
<div class="fleur-de-lis--divider">
<div class="divider-shadow"></div>
<div class="divider-shadow-image"><img src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/output-onlinepngtools.png" /></div>
</div></div>

  <a class="top-class-of-new-google-reviews" href="https://maps.app.goo.gl/aGJwRnPuUjGgZ44e7" target="_blank" rel="noopener">
<div class="filterDiv 5-stars"><table class="google-reviews-in-new-reviews-page 5-stars" border="0" width="100%" cellspacing="10" cellpadding="0">
<tbody>
<tr>
<td class="top-row-of-new-google-review"><div class="profile-pic-and-name-in-review"><img class="skip-lazy" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/02/unnamed-37-1.png" width="40" height="40" data-skip-lazy="1" /><p><b>Samir Patel</b><br>March 2023</p></div><img class="skip-lazy google-logo-in-new-reviews" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/02/GoogleLogoPNGImage.png" width="40" height="40" data-skip-lazy="1" />
</td>
</tr>
<tr>
<td align="center"><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /></td>
</tr>
</tbody>
</table>
</div>
</a>

<div class="filterDiv 5-stars"><button class="greenbutton"><a href="https://maps.app.goo.gl/aGJwRnPuUjGgZ44e7" target="_blank" rel="noopener">READ MORE IN GOOGLE</a></button></div>

<div class="filterDiv 5-stars">
<div class="fleur-de-lis--divider">
<div class="divider-shadow"></div>
<div class="divider-shadow-image"><img src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/output-onlinepngtools.png" /></div>
</div></div>

  <a href="https://g.co/kgs/ZYgUE1Y" target="_blank" rel="noopener">
<div class="filterDiv 5-stars"><table class="google-reviews-in-new-reviews-page 5-stars" border="0" width="100%" cellspacing="10" cellpadding="0">
<tbody>
<tr>
<td class="top-row-of-new-google-review"><div class="profile-pic-and-name-in-review"><img class="skip-lazy" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/02/unnamed-14.png" width="40" height="40" data-skip-lazy="1" /><p><b>Sonia Lavinia</b><br>March 2023</p></div><img class="skip-lazy google-logo-in-new-reviews" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/02/GoogleLogoPNGImage.png" width="40" height="40" data-skip-lazy="1" />
</td>
</tr>
<tr>
<td align="center"><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /></td>
</tr>
<tr>
<td class="google-review-text">This is my second time using this specific company I highly recommened them as they are excellent, my sofa had some stains and general dirt and it has come up very clean the person was informative and tidy he was polite and friendly and I am very impressed by how my sofa cleaned up very well. Also further too this the person that manages the phone is always friendly and polite and understanding, very competent at his job and offers reasonable prices. I will most definitely recommend this company and everything they have done. Also the person arrived within the allocated time slot.
Highly recommened
Reasonable price
Friendly
Arrived on time
Introduced himself
And clean and tidy
Thank you
</td>
</tr>
</tbody>
</table>
</div>
</a>

<div class="filterDiv 5-stars"><button class="greenbutton"><a href="https://g.co/kgs/ZYgUE1Y" target="_blank" rel="noopener">READ MORE IN GOOGLE</a></button></div>

<div class="filterDiv 5-stars">
<div class="fleur-de-lis--divider">
<div class="divider-shadow"></div>
<div class="divider-shadow-image"><img src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/output-onlinepngtools.png" /></div>
</div></div>

  <a href="https://g.co/kgs/vRWF2mo" target="_blank" rel="noopener">
<div class="filterDiv 5-stars"><table class="google-reviews-in-new-reviews-page 5-stars" border="0" width="100%" cellspacing="10" cellpadding="0">
<tbody>
<tr>
<td class="top-row-of-new-google-review"><div class="profile-pic-and-name-in-review"><img class="skip-lazy" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/02/unnamed-58.png" width="40" height="40" data-skip-lazy="1" /><p><b>Richard Kaye</b><br>March 2023</p></div><img class="skip-lazy google-logo-in-new-reviews" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/02/GoogleLogoPNGImage.png" width="40" height="40" data-skip-lazy="1" />
</td>
</tr>
<tr>
<td align="center"><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /></td>
</tr>
<tr>
<td class="google-review-text">Polite and professional, easy communication and better price than other pushy businesses in the area
</td>
</tr>
</tbody>
</table>
</div>
</a>

<div class="filterDiv 5-stars"><button class="greenbutton"><a href="https://g.co/kgs/vRWF2mo" target="_blank" rel="noopener">READ MORE IN GOOGLE</a></button></div>

<div class="filterDiv 5-stars">
<div class="fleur-de-lis--divider">
<div class="divider-shadow"></div>
<div class="divider-shadow-image"><img src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/output-onlinepngtools.png" /></div>
</div></div>

  <a class="top-class-of-new-google-reviews" href="https://g.co/kgs/1pmB9CL" target="_blank" rel="noopener">
<div class="filterDiv 5-stars"><table class="google-reviews-in-new-reviews-page 5-stars" border="0" width="100%" cellspacing="10" cellpadding="0">
<tbody>
<tr>
<td class="top-row-of-new-google-review"><div class="profile-pic-and-name-in-review"><img class="skip-lazy" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/02/unnamed-8-1.png" width="40" height="40" data-skip-lazy="1" /><p><b>Waqas Ali</b><br>February 2023</p></div><img class="skip-lazy google-logo-in-new-reviews" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/02/GoogleLogoPNGImage.png" width="40" height="40" data-skip-lazy="1" />
</td>
</tr>
<tr>
<td align="center"><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /></td>
</tr>
<tr>
<td class="google-review-text">Nice men clean good
</td>
</tr>
</tbody>
</table>
</div>
</a>

<div class="filterDiv 5-stars"><button class="greenbutton"><a href="https://g.co/kgs/1pmB9CL" target="_blank" rel="noopener">READ MORE IN GOOGLE</a></button></div>

<div class="filterDiv 5-stars">
<div class="fleur-de-lis--divider">
<div class="divider-shadow"></div>
<div class="divider-shadow-image"><img src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/output-onlinepngtools.png" /></div>
</div></div>

  <a href="https://g.co/kgs/gX19KLa" target="_blank" rel="noopener">
<div class="filterDiv 5-stars"><table class="google-reviews-in-new-reviews-page 5-stars" border="0" width="100%" cellspacing="10" cellpadding="0">
<tbody>
<tr>
<td class="top-row-of-new-google-review"><div class="profile-pic-and-name-in-review"><img class="skip-lazy" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/02/unnamed-5.png" width="40" height="40" data-skip-lazy="1" /><p><b>Bernice Gilbert</b><br>January 2023</p></div><img class="skip-lazy google-logo-in-new-reviews" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/02/GoogleLogoPNGImage.png" width="40" height="40" data-skip-lazy="1" />
</td>
</tr>
<tr>
<td align="center"><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /></td>
</tr>
<tr>
<td class="google-review-text">Would recommend this company. Would definitely use them again. On time and very polite service
</td>
</tr>
</tbody>
</table>
</div>
</a>

<div class="filterDiv 5-stars"><button class="greenbutton"><a href="https://g.co/kgs/gX19KLa" target="_blank" rel="noopener">READ MORE IN GOOGLE</a></button></div>

<div class="filterDiv 5-stars">
<div class="fleur-de-lis--divider">
<div class="divider-shadow"></div>
<div class="divider-shadow-image"><img src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/output-onlinepngtools.png" /></div>
</div></div>

  <a href="https://g.co/kgs/Ab8W62q" target="_blank" rel="noopener">
<div class="filterDiv 5-stars"><table class="google-reviews-in-new-reviews-page 5-stars" border="0" width="100%" cellspacing="10" cellpadding="0">
<tbody>
<tr>
<td class="top-row-of-new-google-review"><div class="profile-pic-and-name-in-review"><img class="skip-lazy" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/02/unnamed-15.png" width="40" height="40" data-skip-lazy="1" /><p><b>Adil Mukhtar</b><br>December 2022</p></div>img class="skip-lazy google-logo-in-new-reviews" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/02/GoogleLogoPNGImage.png" width="40" height="40" data-skip-lazy="1" />
</td>
</tr>
<tr>
<td align="center"><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /></td>
</tr>
<tr>
<td class="google-review-text">Had sofa frames cleaned, they look brand new! You cannot get better price with great quality.
I had food stains and water mark all gone!!
5 star🌟
</td>
</tr>
</tbody>
</table>
</div>
</a>

<div class="filterDiv 5-stars"><button class="greenbutton"><a href="https://g.co/kgs/Ab8W62q" target="_blank" rel="noopener">READ MORE IN GOOGLE</a></button></div>

<div class="filterDiv 5-stars">
<div class="fleur-de-lis--divider">
<div class="divider-shadow"></div>
<div class="divider-shadow-image"><img src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/output-onlinepngtools.png" /></div>
</div></div>

  <a class="top-class-of-new-google-reviews" href="https://g.co/kgs/wAMjUnN" target="_blank" rel="noopener">
<div class="filterDiv 5-stars"><table class="google-reviews-in-new-reviews-page 5-stars" border="0" width="100%" cellspacing="10" cellpadding="0">
<tbody>
<tr>
<td class="top-row-of-new-google-review"><div class="profile-pic-and-name-in-review"><img class="skip-lazy" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/02/unnamed-11-1.png" width="40" height="40" data-skip-lazy="1" /><p><b>Ka Po Yuen</b><br>December 2022</p></div><img class="skip-lazy google-logo-in-new-reviews" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/02/GoogleLogoPNGImage.png" width="40" height="40" data-skip-lazy="1" />
</td>
</tr>
<tr>
<td align="center"><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /></td>
</tr>
<tr>
<td class="google-review-text">Very satisfied
</td>
</tr>
</tbody>
</table>
</div>
</a>

<div class="filterDiv 5-stars"><button class="greenbutton"><a href="https://g.co/kgs/wAMjUnN" target="_blank" rel="noopener">READ MORE IN GOOGLE</a></button></div>

<div class="filterDiv 5-stars">
<div class="fleur-de-lis--divider">
<div class="divider-shadow"></div>
<div class="divider-shadow-image"><img src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/output-onlinepngtools.png" /></div>
</div></div>

  <a class="top-class-of-new-google-reviews" href="https://maps.app.goo.gl/aGJwRnPuUjGgZ44e7" target="_blank" rel="noopener">
<div class="filterDiv 5-stars"><table class="google-reviews-in-new-reviews-page 5-stars" border="0" width="100%" cellspacing="10" cellpadding="0">
<tbody>
<tr>
<td class="top-row-of-new-google-review"><div class="profile-pic-and-name-in-review"><img class="skip-lazy" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/02/unnamed-29-1.png" width="40" height="40" data-skip-lazy="1" /><p><b>ken chapman</b><br>December 2022</p></div><img class="skip-lazy google-logo-in-new-reviews" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/02/GoogleLogoPNGImage.png" width="40" height="40" data-skip-lazy="1" />
</td>
</tr>
<tr>
<td align="center"><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /></td>
</tr>
</tbody>
</table>
</div>
</a>

<div class="filterDiv 5-stars"><button class="greenbutton"><a href="https://maps.app.goo.gl/aGJwRnPuUjGgZ44e7" target="_blank" rel="noopener">READ MORE IN GOOGLE</a></button></div>

<div class="filterDiv 5-stars">
<div class="fleur-de-lis--divider">
<div class="divider-shadow"></div>
<div class="divider-shadow-image"><img src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/output-onlinepngtools.png" /></div>
</div></div>

  <a href="https://g.co/kgs/pWRvU1L" target="_blank" rel="noopener">
<div class="filterDiv 5-stars"><table class="google-reviews-in-new-reviews-page 5-stars" border="0" width="100%" cellspacing="10" cellpadding="0">
<tbody>
<tr>
<td class="top-row-of-new-google-review"><div class="profile-pic-and-name-in-review"><img class="skip-lazy" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/02/unnamed-16.png" width="40" height="40" data-skip-lazy="1" /><p><b>Laraine Good</b><br>November 2022</p></div><img class="skip-lazy google-logo-in-new-reviews" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/02/GoogleLogoPNGImage.png" width="40" height="40" data-skip-lazy="1" />
</td>
</tr>
<tr>
<td align="center"><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /></td>
</tr>
<tr>
<td class="google-review-text">I have used this company four times now and each time have been really pleased with their service.
Their pricing is very competitive and on occasion when they have had to go over an area twice to achieve perfect results there hasn’t been a surcharge.
I will definitely use them again and would recommend them to anyone.
</td>
</tr>
</tbody>
</table>
</div>
</a>

<div class="filterDiv 5-stars"><button class="greenbutton"><a href="https://g.co/kgs/pWRvU1L" target="_blank" rel="noopener">READ MORE IN GOOGLE</a></button></div>

<div class="filterDiv 5-stars">
<div class="fleur-de-lis--divider">
<div class="divider-shadow"></div>
<div class="divider-shadow-image"><img src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/output-onlinepngtools.png" /></div>
</div></div>

  <a href="https://g.co/kgs/S8gT3sP" target="_blank" rel="noopener">
<div class="filterDiv 1-stars"><table class="google-reviews-in-new-reviews-page 1-stars" border="0" width="100%" cellspacing="10" cellpadding="0">
<tbody>
<tr>
<td class="top-row-of-new-google-review"><div class="profile-pic-and-name-in-review"><img class="skip-lazy" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/02/unnamed-54.png" width="40" height="40" data-skip-lazy="1" /><p><b>Amandeep Singh</b><br>October 2022</p></div><img class="skip-lazy google-logo-in-new-reviews" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/02/GoogleLogoPNGImage.png" width="40" height="40" data-skip-lazy="1" />
</td>
</tr>
<tr>
<td align="center"><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/02/output-onlinepngtools-e1707480352597.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/02/output-onlinepngtools-e1707480352597.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/02/output-onlinepngtools-e1707480352597.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/02/output-onlinepngtools-e1707480352597.png" alt="" width="20" height="20" data-skip-lazy="1" /></td>
</tr>
<tr>
<td class="google-review-text">The carpet smelled awful after the cleaning. They cleaned it in less than 30 mins whereas the previous cleaning company took an hour to do the job. Was not impressed with the job that was done and would not use again.
</td>
</tr>
</tbody>
</table>
</div>
</a>

<div class="filterDiv 1-stars"><button class="greenbutton"><a href="https://g.co/kgs/S8gT3sP" target="_blank" rel="noopener">READ MORE IN GOOGLE</a></button></div>

<div class="filterDiv 1-stars">
<div class="fleur-de-lis--divider">
<div class="divider-shadow"></div>
<div class="divider-shadow-image"><img src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/output-onlinepngtools.png" /></div>
</div></div>

  <a class="top-class-of-new-google-reviews" href="https://g.co/kgs/cJ9dNZd" target="_blank" rel="noopener">
<div class="filterDiv 5-stars"><table class="google-reviews-in-new-reviews-page 5-stars" border="0" width="100%" cellspacing="10" cellpadding="0">
<tbody>
<tr>
<td class="top-row-of-new-google-review"><div class="profile-pic-and-name-in-review"><img class="skip-lazy" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/02/unnamed-12-1.png" width="40" height="40" data-skip-lazy="1" /><p><b>linda miller</b><br>October 2022</p></div><img class="skip-lazy google-logo-in-new-reviews" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/02/GoogleLogoPNGImage.png" width="40" height="40" data-skip-lazy="1" />
</td>
</tr>
<tr>
<td align="center"><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /></td>
</tr>
<tr>
<td class="google-review-text">Excellent service
</td>
</tr>
</tbody>
</table>
</div>
</a>

<div class="filterDiv 5-stars"><button class="greenbutton"><a href="https://g.co/kgs/cJ9dNZd" target="_blank" rel="noopener">READ MORE IN GOOGLE</a></button></div>

<div class="filterDiv 5-stars">
<div class="fleur-de-lis--divider">
<div class="divider-shadow"></div>
<div class="divider-shadow-image"><img src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/output-onlinepngtools.png" /></div>
</div></div>

  <a href="https://g.co/kgs/NebqKpZ" target="_blank" rel="noopener">
<div class="filterDiv 5-stars"><table class="google-reviews-in-new-reviews-page 5-stars" border="0" width="100%" cellspacing="10" cellpadding="0">
<tbody>
<tr>
<td class="top-row-of-new-google-review"><div class="profile-pic-and-name-in-review"><img class="skip-lazy" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/02/unnamed-17.png" width="40" height="40" data-skip-lazy="1" /><p><b>Les Johnston</b><br>October 2022</p></div><img class="skip-lazy google-logo-in-new-reviews" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/02/GoogleLogoPNGImage.png" width="40" height="40" data-skip-lazy="1" />
</td>
</tr>
<tr>
<td align="center"><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /></td>
</tr>
<tr>
<td class="google-review-text">Second time using. I'm not easy impressed. On time, good job, clean, professional and courteous just like last time so recommended to a friend already. Will use again.
</td>
</tr>
</tbody>
</table>
</div>
</a>

<div class="filterDiv 5-stars"><button class="greenbutton"><a href="https://g.co/kgs/NebqKpZ" target="_blank" rel="noopener">READ MORE IN GOOGLE</a></button></div>

<div class="filterDiv 5-stars">
<div class="fleur-de-lis--divider">
<div class="divider-shadow"></div>
<div class="divider-shadow-image"><img src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/output-onlinepngtools.png" /></div>
</div></div>

  <a href="https://g.co/kgs/PbGgPJC" target="_blank" rel="noopener">
<div class="filterDiv 4-stars"><table class="google-reviews-in-new-reviews-page 4-stars" border="0" width="100%" cellspacing="10" cellpadding="0">
<tbody>
<tr>
<td class="top-row-of-new-google-review"><div class="profile-pic-and-name-in-review"><img class="skip-lazy" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/02/unnamed-56.png" width="40" height="40" data-skip-lazy="1" /><p><b>Islam Bashir</b><br>June 2022</p></div><img class="skip-lazy" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/02/GoogleLogoPNGImage.png" width="40" height="40" data-skip-lazy="1" />
</td>
</tr>
<tr>
<td align="center"><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/02/output-onlinepngtools-e1707480352597.png" alt="" width="20" height="20" data-skip-lazy="1" /></td>
</tr>
<tr>
<td class="google-review-text">it was very good experience but I think the guy who cleaned my carpet lacked detergent or something effective in the high traffic carpet as nothing changed after cleaning 🧹
</td>
</tr>
</tbody>
</table>
</div>
</a>

<div class="filterDiv 4-stars"><button class="greenbutton"><a href="https://g.co/kgs/PbGgPJC" target="_blank" rel="noopener">READ MORE IN GOOGLE</a></button></div>

<div class="filterDiv 4-stars">
<div class="fleur-de-lis--divider">
<div class="divider-shadow"></div>
<div class="divider-shadow-image"><img src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/output-onlinepngtools.png" /></div>
</div></div>

  <a class="top-class-of-new-google-reviews" href="https://g.co/kgs/WvSpNo6" target="_blank" rel="noopener">
<div class="filterDiv 5-stars"><table class="google-reviews-in-new-reviews-page 5-stars" border="0" width="100%" cellspacing="10" cellpadding="0">
<tbody>
<tr>
<td class="top-row-of-new-google-review"><div class="profile-pic-and-name-in-review"><img class="skip-lazy" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/02/unnamed-63.png" width="40" height="40" data-skip-lazy="1" /><p><b>Sheree Davenport</b><br>June 2022</p></div><img class="skip-lazy" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/02/GoogleLogoPNGImage.png" width="40" height="40" data-skip-lazy="1" />
</td>
</tr>
<tr>
<td align="center"><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /></td>
</tr>
<tr>
<td class="google-review-text">Very Professional service fast response excellent work completed
</td>
</tr>
</tbody>
</table>
</div>
</a>

<div class="filterDiv 5-stars"><button class="greenbutton"><a href="https://g.co/kgs/WvSpNo6" target="_blank" rel="noopener">READ MORE IN GOOGLE</a></button></div>

<div class="filterDiv 5-stars">
<div class="fleur-de-lis--divider">
<div class="divider-shadow"></div>
<div class="divider-shadow-image"><img src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/output-onlinepngtools.png" /></div>
</div></div>

  <a class="top-class-of-new-google-reviews" href="https://maps.app.goo.gl/aGJwRnPuUjGgZ44e7" target="_blank" rel="noopener">
<div class="filterDiv 5-stars"><table class="google-reviews-in-new-reviews-page 5-stars" border="0" width="100%" cellspacing="10" cellpadding="0">
<tbody>
<tr>
<td class="top-row-of-new-google-review"><div class="profile-pic-and-name-in-review"><img class="skip-lazy" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/02/unnamed-35-1.png" width="40" height="40" data-skip-lazy="1" /><p><b>Zina Wilkinson</b><br>July 2022</p></div><img class="skip-lazy google-logo-in-new-reviews" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/02/GoogleLogoPNGImage.png" width="40" height="40" data-skip-lazy="1" />
</td>
</tr>
<tr>
<td align="center"><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /></td>
</tr>
</tbody>
</table>
</div>
</a>

<div class="filterDiv 5-stars"><button class="greenbutton"><a href="https://maps.app.goo.gl/aGJwRnPuUjGgZ44e7" target="_blank" rel="noopener">READ MORE IN GOOGLE</a></button></div>

<div class="filterDiv 5-stars">
<div class="fleur-de-lis--divider">
<div class="divider-shadow"></div>
<div class="divider-shadow-image"><img src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/output-onlinepngtools.png" /></div>
</div></div>

  <a href="https://g.co/kgs/T4X36GH" target="_blank" rel="noopener">
<div class="filterDiv 5-stars"><table class="google-reviews-in-new-reviews-page 5-stars" border="0" width="100%" cellspacing="10" cellpadding="0">
<tbody>
<tr>
<td class="top-row-of-new-google-review"><div class="profile-pic-and-name-in-review"><img class="skip-lazy" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/02/unnamed-18.png" width="40" height="40" data-skip-lazy="1" /><p><b>Nima Mohamed</b><br>June 2022</p></div><img class="skip-lazy google-logo-in-new-reviews" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/02/GoogleLogoPNGImage.png" width="40" height="40" data-skip-lazy="1" />
</td>
</tr>
<tr>
<td align="center"><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /></td>
</tr>
<tr>
<td class="google-review-text">Very professional and friendly service. Carpets were brand new, amazing work. Very clean and the products used smelt really nice and fresh.
</td>
</tr>
</tbody>
</table>
</div>
</a>

<div class="filterDiv 5-stars"><button class="greenbutton"><a href="https://g.co/kgs/T4X36GH" target="_blank" rel="noopener">READ MORE IN GOOGLE</a></button></div>

<div class="filterDiv 5-stars">
<div class="fleur-de-lis--divider">
<div class="divider-shadow"></div>
<div class="divider-shadow-image"><img src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/output-onlinepngtools.png" /></div>
</div></div>

  <a href="https://g.co/kgs/DXwa4g2" target="_blank" rel="noopener">
<div class="filterDiv 5-stars"><table class="google-reviews-in-new-reviews-page 5-stars" border="0" width="100%" cellspacing="10" cellpadding="0">
<tbody>
<tr>
<td class="top-row-of-new-google-review"><div class="profile-pic-and-name-in-review"><img class="skip-lazy" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/02/unnamed-54.png" width="40" height="40" data-skip-lazy="1" /><p><b>Alkesh C</b><br>May 2022</p></div><img class="skip-lazy google-logo-in-new-reviews" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/02/GoogleLogoPNGImage.png" width="40" height="40" data-skip-lazy="1" />
</td>
</tr>
<tr>
<td align="center"><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /></td>
</tr>
<tr>
<td class="google-review-text">Very professional communication throughout and excellent cleaning service from the technician. This is the third time I’ve used this company.
</td>
</tr>
</tbody>
</table>
</div>
</a>

<div class="filterDiv 5-stars"><button class="greenbutton"><a href="https://g.co/kgs/DXwa4g2" target="_blank" rel="noopener">READ MORE IN GOOGLE</a></button></div>

<div class="filterDiv 5-stars">
<div class="fleur-de-lis--divider">
<div class="divider-shadow"></div>
<div class="divider-shadow-image"><img src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/output-onlinepngtools.png" /></div>
</div></div>

  <a class="top-class-of-new-google-reviews" href="https://maps.app.goo.gl/aGJwRnPuUjGgZ44e7" target="_blank" rel="noopener">
<div class="filterDiv 5-stars"><table class="google-reviews-in-new-reviews-page 5-stars" border="0" width="100%" cellspacing="10" cellpadding="0">
<tbody>
<tr>
<td class="top-row-of-new-google-review"><div class="profile-pic-and-name-in-review"><img class="skip-lazy" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/02/unnamed-14-1.png" width="40" height="40" data-skip-lazy="1" /><p><b>Martin Angelov</b><br>May 2022</p></div><img class="skip-lazy google-logo-in-new-reviews" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/02/GoogleLogoPNGImage.png" width="40" height="40" data-skip-lazy="1" />
</td>
</tr>
<tr>
<td align="center"><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /></td>
</tr>
</tbody>
</table>
</div>
</a>

<div class="filterDiv 5-stars"><button class="greenbutton"><a href="https://maps.app.goo.gl/aGJwRnPuUjGgZ44e7" target="_blank" rel="noopener">READ MORE IN GOOGLE</a></button></div>

<div class="filterDiv 5-stars">
<div class="fleur-de-lis--divider">
<div class="divider-shadow"></div>
<div class="divider-shadow-image"><img src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/output-onlinepngtools.png" /></div>
</div></div>

  <a href="https://g.co/kgs/mquiyKX" target="_blank" rel="noopener">
<div class="filterDiv 5-stars"><table class="google-reviews-in-new-reviews-page 5-stars" border="0" width="100%" cellspacing="10" cellpadding="0">
<tbody>
<tr>
<td class="top-row-of-new-google-review"><div class="profile-pic-and-name-in-review"><img class="skip-lazy" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/02/unnamed-19.png" width="40" height="40" data-skip-lazy="1" /><p><b>Baljinder kaur</b><br>May 2022</p></div><img class="skip-lazy google-logo-in-new-reviews" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/02/GoogleLogoPNGImage.png" width="40" height="40" data-skip-lazy="1" />
</td>
</tr>
<tr>
<td align="center"><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /></td>
</tr>
<tr>
<td class="google-review-text">Excellent! We were very happy with both the quality of the service and also the value for money. We will definitely be using their services again.
</td>
</tr>
</tbody>
</table>
</div>
</a>

<div class="filterDiv 5-stars"><button class="greenbutton"><a href="https://g.co/kgs/mquiyKX" target="_blank" rel="noopener">READ MORE IN GOOGLE</a></button></div>

<div class="filterDiv 5-stars">
<div class="fleur-de-lis--divider">
<div class="divider-shadow"></div>
<div class="divider-shadow-image"><img src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/output-onlinepngtools.png" /></div>
</div></div>

  <a class="top-class-of-new-google-reviews" href="https://maps.app.goo.gl/aGJwRnPuUjGgZ44e7" target="_blank" rel="noopener">
<div class="filterDiv 5-stars"><table class="google-reviews-in-new-reviews-page 5-stars" border="0" width="100%" cellspacing="10" cellpadding="0">
<tbody>
<tr>
<td class="top-row-of-new-google-review"><div class="profile-pic-and-name-in-review"><img class="skip-lazy" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/02/unnamed-38-1.png" width="40" height="40" data-skip-lazy="1" /><p><b>Abz Mujib</b><br>May 2022</p></div><img class="skip-lazy google-logo-in-new-reviews" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/02/GoogleLogoPNGImage.png" width="40" height="40" data-skip-lazy="1" />
</td>
</tr>
<tr>
<td align="center"><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /></td>
</tr>

</tbody>
</table>
</div>
</a>

<div class="filterDiv 5-stars"><button class="greenbutton"><a href="https://maps.app.goo.gl/aGJwRnPuUjGgZ44e7" target="_blank" rel="noopener">READ MORE IN GOOGLE</a></button></div>

<div class="filterDiv 5-stars">
<div class="fleur-de-lis--divider">
<div class="divider-shadow"></div>
<div class="divider-shadow-image"><img src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/output-onlinepngtools.png" /></div>
</div></div>

  <a href="https://g.co/kgs/9JdjcBy" target="_blank" rel="noopener">
<div class="filterDiv 5-stars"><table class="google-reviews-in-new-reviews-page 5-stars" border="0" width="100%" cellspacing="10" cellpadding="0">
<tbody>
<tr>
<td class="top-row-of-new-google-review"><div class="profile-pic-and-name-in-review"><img class="skip-lazy" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/02/unnamed-57.png" width="40" height="40" data-skip-lazy="1" /><p><b>Hatim Shah</b><br>May 2022</p></div><img class="skip-lazy google-logo-in-new-reviews" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/02/GoogleLogoPNGImage.png" width="40" height="40" data-skip-lazy="1" />
</td>
</tr>
<tr>
<td align="center"><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /></td>
</tr>
<tr>
<td class="google-review-text">Very happy with the service. The stains and marks are all gone. Carpet looks very clean.
</td>
</tr>
</tbody>
</table>
</div>
</a>

<div class="filterDiv 5-stars"><button class="greenbutton"><a href="https://g.co/kgs/9JdjcBy" target="_blank" rel="noopener">READ MORE IN GOOGLE</a></button></div>

<div class="filterDiv 5-stars">
<div class="fleur-de-lis--divider">
<div class="divider-shadow"></div>
<div class="divider-shadow-image"><img src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/output-onlinepngtools.png" /></div>
</div></div>

  <a href="https://g.co/kgs/hDnPJux" target="_blank" rel="noopener">
<div class="filterDiv 5-stars"><table class="google-reviews-in-new-reviews-page 5-stars" border="0" width="100%" cellspacing="10" cellpadding="0">
<tbody>
<tr>
<td class="top-row-of-new-google-review"><div class="profile-pic-and-name-in-review"><img class="skip-lazy" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/02/unnamed-55.png" width="40" height="40" data-skip-lazy="1" /><p><b>Gerald Powell</b><br>April 2022</p></div><img class="skip-lazy google-logo-in-new-reviews" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/02/GoogleLogoPNGImage.png" width="40" height="40" data-skip-lazy="1" />
</td>
</tr>
<tr>
<td align="center"><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /></td>
</tr>
<tr>
<td class="google-review-text">I've used Fine Carpet Cleaning for my business premises and my home and they provide an excellent service.
</td>
</tr>
</tbody>
</table>
</div>
</a>

<div class="filterDiv 5-stars"><button class="greenbutton"><a href="https://g.co/kgs/hDnPJux" target="_blank" rel="noopener">READ MORE IN GOOGLE</a></button></div>

<div class="filterDiv 5-stars">
<div class="fleur-de-lis--divider">
<div class="divider-shadow"></div>
<div class="divider-shadow-image"><img src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/output-onlinepngtools.png" /></div>
</div></div>

  <a class="top-class-of-new-google-reviews" href="https://maps.app.goo.gl/aGJwRnPuUjGgZ44e7" target="_blank" rel="noopener">
<div class="filterDiv 5-stars"><table class="google-reviews-in-new-reviews-page 5-stars" border="0" width="100%" cellspacing="10" cellpadding="0">
<tbody>
<tr>
<td class="top-row-of-new-google-review"><div class="profile-pic-and-name-in-review"><img class="skip-lazy" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/02/unnamed-41-1.png" width="40" height="40" data-skip-lazy="1" /><p><b>Flori Rizea</b><br>April 2022</p></div><img class="skip-lazy google-logo-in-new-reviews" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/02/GoogleLogoPNGImage.png" width="40" height="40" data-skip-lazy="1" />
</td>
</tr>
<tr>
<td align="center"><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /></td>
</tr>
</tbody>
</table>
</div>
</a>

<div class="filterDiv 5-stars"><button class="greenbutton"><a href="https://maps.app.goo.gl/aGJwRnPuUjGgZ44e7" target="_blank" rel="noopener">READ MORE IN GOOGLE</a></button></div>

<div class="filterDiv 5-stars">
<div class="fleur-de-lis--divider">
<div class="divider-shadow"></div>
<div class="divider-shadow-image"><img src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/output-onlinepngtools.png" /></div>
</div></div>

  <a class="top-class-of-new-google-reviews" href="https://maps.app.goo.gl/aGJwRnPuUjGgZ44e7" target="_blank" rel="noopener">
<div class="filterDiv 5-stars"><table class="google-reviews-in-new-reviews-page 5-stars" border="0" width="100%" cellspacing="10" cellpadding="0">
<tbody>
<tr>
<td class="top-row-of-new-google-review"><div class="profile-pic-and-name-in-review"><img class="skip-lazy" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/02/unnamed-20-1.png" width="40" height="40" data-skip-lazy="1" /><p><b>Marc Yallop</b><br>April 2022</p></div><img class="skip-lazy google-logo-in-new-reviews" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/02/GoogleLogoPNGImage.png" width="40" height="40" data-skip-lazy="1" />
</td>
</tr>
<tr>
<td align="center"><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /></td>
</tr>
</tbody>
</table>
</div>
</a>

<div class="filterDiv 5-stars"><button class="greenbutton"><a href="https://maps.app.goo.gl/aGJwRnPuUjGgZ44e7" target="_blank" rel="noopener">READ MORE IN GOOGLE</a></button></div>

<div class="filterDiv 5-stars">
<div class="fleur-de-lis--divider">
<div class="divider-shadow"></div>
<div class="divider-shadow-image"><img src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/output-onlinepngtools.png" /></div>
</div></div>

  <a class="top-class-of-new-google-reviews" href="https://maps.app.goo.gl/aGJwRnPuUjGgZ44e7" target="_blank" rel="noopener">
<div class="filterDiv 5-stars"><table class="google-reviews-in-new-reviews-page 5-stars" border="0" width="100%" cellspacing="10" cellpadding="0">
<tbody>
<tr>
<td class="top-row-of-new-google-review"><div class="profile-pic-and-name-in-review"><img class="skip-lazy" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/02/unnamed-15-1.png" width="40" height="40" data-skip-lazy="1" /><p><b>Patricia Mbock</b><br>April 2022</p></div><img class="skip-lazy google-logo-in-new-reviews" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/02/GoogleLogoPNGImage.png" width="40" height="40" data-skip-lazy="1" />
</td>
</tr>
<tr>
<td align="center"><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /></td>
</tr>
</tbody>
</table>
</div>
</a>

<div class="filterDiv 5-stars"><button class="greenbutton"><a href="https://maps.app.goo.gl/aGJwRnPuUjGgZ44e7" target="_blank" rel="noopener">READ MORE IN GOOGLE</a></button></div>

<div class="filterDiv 5-stars">
<div class="fleur-de-lis--divider">
<div class="divider-shadow"></div>
<div class="divider-shadow-image"><img src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/output-onlinepngtools.png" /></div>
</div></div>

  <a href="https://g.co/kgs/eTUjHXP" target="_blank" rel="noopener">
<div class="filterDiv 5-stars"><table class="google-reviews-in-new-reviews-page 5-stars" border="0" width="100%" cellspacing="10" cellpadding="0">
<tbody>
<tr>
<td class="top-row-of-new-google-review"><div class="profile-pic-and-name-in-review"><img class="skip-lazy" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/02/unnamed-5.png" width="40" height="40" data-skip-lazy="1" /><p><b>Bernice Gilbert</b><br>April 2022</p></div><img class="skip-lazy google-logo-in-new-reviews" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/02/GoogleLogoPNGImage.png" width="40" height="40" data-skip-lazy="1" />
</td>
</tr>
<tr>
<td align="center"><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /></td>
</tr>
<tr>
<td class="google-review-text">Would recommend this company. Would definitely use them again. On time and very polite service
</td>
</tr>
</tbody>
</table>
</div>
</a>

<div class="filterDiv 5-stars"><button class="greenbutton"><a href="https://g.co/kgs/eTUjHXP" target="_blank" rel="noopener">READ MORE IN GOOGLE</a></button></div>

<div class="filterDiv 5-stars">
<div class="fleur-de-lis--divider">
<div class="divider-shadow"></div>
<div class="divider-shadow-image"><img src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/output-onlinepngtools.png" /></div>
</div></div>

  <a class="top-class-of-new-google-reviews" href="https://maps.app.goo.gl/aGJwRnPuUjGgZ44e7" target="_blank" rel="noopener">
<div class="filterDiv 5-stars"><table class="google-reviews-in-new-reviews-page 5-stars" border="0" width="100%" cellspacing="10" cellpadding="0">
<tbody>
<tr>
<td class="top-row-of-new-google-review"><div class="profile-pic-and-name-in-review"><img class="skip-lazy" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/02/unnamed-25-1.png" width="40" height="40" data-skip-lazy="1" /><p><b>Ralph W</b><br>February 2022</p></div><img class="skip-lazy google-logo-in-new-reviews" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/02/GoogleLogoPNGImage.png" width="40" height="40" data-skip-lazy="1" />
</td>
</tr>
<tr>
<td align="center"><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /></td>
</tr>
</tbody>
</table>
</div>
</a>

<div class="filterDiv 5-stars"><button class="greenbutton"><a href="https://maps.app.goo.gl/aGJwRnPuUjGgZ44e7" target="_blank" rel="noopener">READ MORE IN GOOGLE</a></button></div>

<div class="filterDiv 5-stars">
<div class="fleur-de-lis--divider">
<div class="divider-shadow"></div>
<div class="divider-shadow-image"><img src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/output-onlinepngtools.png" /></div>
</div></div>

  <a href="https://g.co/kgs/pXnzWnt" target="_blank" rel="noopener">
<div class="filterDiv 5-stars"><table class="google-reviews-in-new-reviews-page 5-stars" border="0" width="100%" cellspacing="10" cellpadding="0">
<tbody>
<tr>
<td class="top-row-of-new-google-review"><div class="profile-pic-and-name-in-review"><img class="skip-lazy" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/02/unnamed-20.png" width="40" height="40" data-skip-lazy="1" /><p><b>Grace Agbo</b><br>January 2022</p></div><img class="skip-lazy google-logo-in-new-reviews" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/02/GoogleLogoPNGImage.png" width="40" height="40" data-skip-lazy="1" />
</td>
</tr>
<tr>
<td align="center"><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /></td>
</tr>
<tr>
<td class="google-review-text">I have used Fine Carpet Cleaning for years and need I say they turn our home to new each time they come to do the carpet cleaning. Staffs are very helpful when it comes to flexibility they always deliver the utmost returning that new carpet smell. I will highly recommend Fine Carpet Cleaning Ltd anytime any day.
Moved home recently and we resumed business as usual.....use Fine Carpet Cleaning you won't regret
</td>
</tr>
</tbody>
</table>
</div>
</a>

<div class="filterDiv 5-stars"><button class="greenbutton"><a href="https://g.co/kgs/pXnzWnt" target="_blank" rel="noopener">READ MORE IN GOOGLE</a></button></div>

<div class="filterDiv 5-stars">
<div class="fleur-de-lis--divider">
<div class="divider-shadow"></div>
<div class="divider-shadow-image"><img src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/output-onlinepngtools.png" /></div>
</div></div>

  <a class="top-class-of-new-google-reviews" href="https://maps.app.goo.gl/aGJwRnPuUjGgZ44e7" target="_blank" rel="noopener">
<div class="filterDiv 5-stars"><table class="google-reviews-in-new-reviews-page 5-stars" border="0" width="100%" cellspacing="10" cellpadding="0">
<tbody>
<tr>
<td class="top-row-of-new-google-review"><div class="profile-pic-and-name-in-review"><img class="skip-lazy" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/02/unnamed-26-1.png" width="40" height="40" data-skip-lazy="1" /><p><b>Minsung Kim</b><br>January 2022</p></div><img class="skip-lazy google-logo-in-new-reviews" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/02/GoogleLogoPNGImage.png" width="40" height="40" data-skip-lazy="1" />
</td>
</tr>
<tr>
<td align="center"><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /></td>
</tr>
</tbody>
</table>
</div>
</a>

<div class="filterDiv 5-stars"><button class="greenbutton"><a href="https://maps.app.goo.gl/aGJwRnPuUjGgZ44e7" target="_blank" rel="noopener">READ MORE IN GOOGLE</a></button></div>

<div class="filterDiv 5-stars">
<div class="fleur-de-lis--divider">
<div class="divider-shadow"></div>
<div class="divider-shadow-image"><img src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/output-onlinepngtools.png" /></div>
</div></div>

  <a href="https://g.co/kgs/7G8CfAu" target="_blank" rel="noopener">
<div class="filterDiv 5-stars"><table class="google-reviews-in-new-reviews-page 5-stars" border="0" width="100%" cellspacing="10" cellpadding="0">
<tbody>
<tr>
<td class="top-row-of-new-google-review"><div class="profile-pic-and-name-in-review"><img class="skip-lazy" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/02/unnamed-21.png" width="40" height="40" data-skip-lazy="1" /><p><b>Judith Hd</b><br>December 2021</p></div><img class="skip-lazy google-logo-in-new-reviews" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/02/GoogleLogoPNGImage.png" width="40" height="40" data-skip-lazy="1" />
</td>
</tr>
<tr>
<td align="center"><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /></td>
</tr>
<tr>
<td class="google-review-text">Very efficient and friendly. Excellent at keeping the client informed and sticking to the times agreed. Nicky worked very quickly and thoroughly. I was very happy with the result and will be using them again shortly.
</td>
</tr>
</tbody>
</table>
</div>
</a>

<div class="filterDiv 5-stars"><button class="greenbutton"><a href="https://g.co/kgs/7G8CfAu" target="_blank" rel="noopener">READ MORE IN GOOGLE</a></button></div>

<div class="filterDiv 5-stars">
<div class="fleur-de-lis--divider">
<div class="divider-shadow"></div>
<div class="divider-shadow-image"><img src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/output-onlinepngtools.png" /></div>
</div></div>

  <a class="top-class-of-new-google-reviews" href="https://g.co/kgs/qZomRen" target="_blank" rel="noopener">
<div class="filterDiv 5-stars"><table class="google-reviews-in-new-reviews-page 5-stars" border="0" width="100%" cellspacing="10" cellpadding="0">
<tbody>
<tr>
<td class="top-row-of-new-google-review"><div class="profile-pic-and-name-in-review"><img class="skip-lazy" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/02/unnamed-1-2.png" width="40" height="40" data-skip-lazy="1" /><p><b>Suly Mayet</b><br>December 2021</p></div><img class="skip-lazy google-logo-in-new-reviews" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/02/GoogleLogoPNGImage.png" width="40" height="40" data-skip-lazy="1" />
</td>
</tr>
<tr>
<td align="center"><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /></td>
</tr>
<tr>
<td class="google-review-text">Brilliant service, polite technician. Would recommend to everyone.
</td>
</tr>
</tbody>
</table>
</div>
</a>

<div class="filterDiv 5-stars"><button class="greenbutton"><a href="https://g.co/kgs/qZomRen" target="_blank" rel="noopener">READ MORE IN GOOGLE</a></button></div>

<div class="filterDiv 5-stars">
<div class="fleur-de-lis--divider">
<div class="divider-shadow"></div>
<div class="divider-shadow-image"><img src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/output-onlinepngtools.png" /></div>
</div></div>

  <a class="top-class-of-new-google-reviews" href="https://maps.app.goo.gl/aGJwRnPuUjGgZ44e7" target="_blank" rel="noopener">
<div class="filterDiv 5-stars"><table class="google-reviews-in-new-reviews-page 5-stars" border="0" width="100%" cellspacing="10" cellpadding="0">
<tbody>
<tr>
<td class="top-row-of-new-google-review"><div class="profile-pic-and-name-in-review"><img class="skip-lazy" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/02/unnamed-16-1.png" width="40" height="40" data-skip-lazy="1" /><p><b>Bee Sounds (DJ)</b><br>December 2021</p></div><img class="skip-lazy google-logo-in-new-reviews" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/02/GoogleLogoPNGImage.png" width="40" height="40" data-skip-lazy="1" />
</td>
</tr>
<tr>
<td align="center"><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /></td>
</tr>
</tbody>
</table>
</div>
</a>

<div class="filterDiv 5-stars"><button class="greenbutton"><a href="https://maps.app.goo.gl/aGJwRnPuUjGgZ44e7" target="_blank" rel="noopener">READ MORE IN GOOGLE</a></button></div>

<div class="filterDiv 5-stars">
<div class="fleur-de-lis--divider">
<div class="divider-shadow"></div>
<div class="divider-shadow-image"><img src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/output-onlinepngtools.png" /></div>
</div></div>

  <a class="top-class-of-new-google-reviews" href="https://g.co/kgs/1EFfXJP" target="_blank" rel="noopener">
<div class="filterDiv 5-stars"><table class="google-reviews-in-new-reviews-page 5-stars" border="0" width="100%" cellspacing="10" cellpadding="0">
<tbody>
<tr>
<td class="top-row-of-new-google-review"><div class="profile-pic-and-name-in-review"><img class="skip-lazy" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/02/unnamed-9-1.png" width="40" height="40" data-skip-lazy="1" /><p><b>Natasha Osborne</b><br>November 2021</p></div><img class="skip-lazy google-logo-in-new-reviews" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/02/GoogleLogoPNGImage.png" width="40" height="40" data-skip-lazy="1" />
</td>
</tr>
<tr>
<td align="center"><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /></td>
</tr>
<tr>
<td class="google-review-text">Excellent customer service
</td>
</tr>
</tbody>
</table>
</div>
</a>

<div class="filterDiv 5-stars"><button class="greenbutton"><a href="https://g.co/kgs/1EFfXJP" target="_blank" rel="noopener">READ MORE IN GOOGLE</a></button></div>

<div class="filterDiv 5-stars">
<div class="fleur-de-lis--divider">
<div class="divider-shadow"></div>
<div class="divider-shadow-image"><img src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/output-onlinepngtools.png" /></div>
</div></div>

  <a class="top-class-of-new-google-reviews" href="https://maps.app.goo.gl/aGJwRnPuUjGgZ44e7" target="_blank" rel="noopener">
<div class="filterDiv 5-stars"><table class="google-reviews-in-new-reviews-page 5-stars" border="0" width="100%" cellspacing="10" cellpadding="0">
<tbody>
<tr>
<td class="top-row-of-new-google-review"><div class="profile-pic-and-name-in-review"><img class="skip-lazy" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/02/unnamed-27-1.png" width="40" height="40" data-skip-lazy="1" /><p><b>wasiu bankole</b><br>November 2021</p></div><img class="skip-lazy google-logo-in-new-reviews" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/02/GoogleLogoPNGImage.png" width="40" height="40" data-skip-lazy="1" />
</td>
</tr>
<tr>
<td align="center"><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /></td>
</tr>
</tbody>
</table>
</div>
</a>

<div class="filterDiv 5-stars"><button class="greenbutton"><a href="https://maps.app.goo.gl/aGJwRnPuUjGgZ44e7" target="_blank" rel="noopener">READ MORE IN GOOGLE</a></button></div>

<div class="filterDiv 5-stars">
<div class="fleur-de-lis--divider">
<div class="divider-shadow"></div>
<div class="divider-shadow-image"><img src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/output-onlinepngtools.png" /></div>
</div></div>

  <a href="https://g.co/kgs/bajEL9E" target="_blank" rel="noopener">
<div class="filterDiv 3-stars"><table class="google-reviews-in-new-reviews-page 3-stars" border="0" width="100%" cellspacing="10" cellpadding="0">
<tbody>
<tr>
<td class="top-row-of-new-google-review"><div class="profile-pic-and-name-in-review"><img class="skip-lazy" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/02/unnamed-22.png" width="40" height="40" data-skip-lazy="1" /><p><b>Nazia Uddin</b><br>October 2021</p></div><img class="skip-lazy google-logo-in-new-reviews" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/02/GoogleLogoPNGImage.png" width="40" height="40" data-skip-lazy="1" />
</td>
</tr>
<tr>
<td align="center"><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/02/output-onlinepngtools-e1707480352597.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/02/output-onlinepngtools-e1707480352597.png" alt="" width="20" height="20" data-skip-lazy="1" /></td>
</tr>
<tr>
<td class="google-review-text">Was okay, the price was decent but unfortunately they couldn’t get 75% of the stains out of my carpet although I’d sent them pictures beforehand, and I had to ask them to go over certain areas and stains they could remove.
</td>
</tr>
</tbody>
</table>
</div>
</a>

<div class="filterDiv 3-stars"><button class="greenbutton"><a href="https://g.co/kgs/bajEL9E" target="_blank" rel="noopener">READ MORE IN GOOGLE</a></button></div>

<div class="filterDiv 3-stars">
<div class="fleur-de-lis--divider">
<div class="divider-shadow"></div>
<div class="divider-shadow-image"><img src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/output-onlinepngtools.png" /></div>
</div></div>

  <a class="top-class-of-new-google-reviews" href="https://g.co/kgs/bhxXcc8" target="_blank" rel="noopener">
<div class="filterDiv 5-stars"><table class="google-reviews-in-new-reviews-page 5-stars" border="0" width="100%" cellspacing="10" cellpadding="0">
<tbody>
<tr>
<td class="top-row-of-new-google-review"><div class="profile-pic-and-name-in-review"><img class="skip-lazy" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/02/unnamed-2-1.png" width="40" height="40" data-skip-lazy="1" /><p><b>Naser Mehrabi</b><br>October 2021</p></div><img class="skip-lazy google-logo-in-new-reviews" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/02/GoogleLogoPNGImage.png" width="40" height="40" data-skip-lazy="1" />
</td>
</tr>
<tr>
<td align="center"><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /></td>
</tr>
<tr>
<td class="google-review-text">Punctual, professional and reasonable price. Highly recommended.
</td>
</tr>
</tbody>
</table>
</div>
</a>

<div class="filterDiv 5-stars"><button class="greenbutton"><a href="https://g.co/kgs/bhxXcc8" target="_blank" rel="noopener">READ MORE IN GOOGLE</a></button></div>

<div class="filterDiv 5-stars">
<div class="fleur-de-lis--divider">
<div class="divider-shadow"></div>
<div class="divider-shadow-image"><img src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/output-onlinepngtools.png" /></div>
</div></div>

  <a href="https://g.co/kgs/JXgQacL" target="_blank" rel="noopener">
<div class="filterDiv 5-stars"><table class="google-reviews-in-new-reviews-page 5-stars" border="0" width="100%" cellspacing="10" cellpadding="0">
<tbody>
<tr>
<td class="top-row-of-new-google-review"><div class="profile-pic-and-name-in-review"><img class="skip-lazy" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/02/unnamed-60.png" width="40" height="40" data-skip-lazy="1" /><p><b>Temenujka Mollova</b><br>October 2021</p></div><img class="skip-lazy google-logo-in-new-reviews" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/02/GoogleLogoPNGImage.png" width="40" height="40" data-skip-lazy="1" />
</td>
</tr>
<tr>
<td align="center"><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /></td>
</tr>
<tr>
<td class="google-review-text">Amazing results, super professional service and attention to details , highly recommend the company
</td>
</tr>
</tbody>
</table>
</div>
</a>

<div class="filterDiv 5-stars"><button class="greenbutton"><a href="https://g.co/kgs/JXgQacL" target="_blank" rel="noopener">READ MORE IN GOOGLE</a></button></div>

<div class="filterDiv 5-stars">
<div class="fleur-de-lis--divider">
<div class="divider-shadow"></div>
<div class="divider-shadow-image"><img src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/output-onlinepngtools.png" /></div>
</div></div>

  <a class="top-class-of-new-google-reviews" href="https://maps.app.goo.gl/aGJwRnPuUjGgZ44e7" target="_blank" rel="noopener">
<div class="filterDiv 5-stars"><table class="google-reviews-in-new-reviews-page 5-stars" border="0" width="100%" cellspacing="10" cellpadding="0">
<tbody>
<tr>
<td class="top-row-of-new-google-review"><div class="profile-pic-and-name-in-review"><img class="skip-lazy" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/02/unnamed-36-1.png" width="40" height="40" data-skip-lazy="1" /><p><b>Tom Pegg</b><br>September 2021</p></div><img class="skip-lazy google-logo-in-new-reviews" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/02/GoogleLogoPNGImage.png" width="40" height="40" data-skip-lazy="1" />
</td>
</tr>
<tr>
<td align="center"><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /></td>
</tr>
</tbody>
</table>
</div>
</a>

<div class="filterDiv 5-stars"><button class="greenbutton"><a href="https://maps.app.goo.gl/aGJwRnPuUjGgZ44e7" target="_blank" rel="noopener">READ MORE IN GOOGLE</a></button></div>

<div class="filterDiv 5-stars">
<div class="fleur-de-lis--divider">
<div class="divider-shadow"></div>
<div class="divider-shadow-image"><img src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/output-onlinepngtools.png" /></div>
</div></div>

  <a href="https://g.co/kgs/6pSvf2H" target="_blank" rel="noopener">
<div class="filterDiv 5-stars"><table class="google-reviews-in-new-reviews-page 5-stars" border="0" width="100%" cellspacing="10" cellpadding="0">
<tbody>
<tr>
<td class="top-row-of-new-google-review"><div class="profile-pic-and-name-in-review"><img class="skip-lazy" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/02/unnamed-23.png" width="40" height="40" data-skip-lazy="1" /><p><b>Sandra Ebeledike</b><br>August 2021</p></div><img class="skip-lazy google-logo-in-new-reviews" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/02/GoogleLogoPNGImage.png" width="40" height="40" data-skip-lazy="1" />
</td>
</tr>
<tr>
<td align="center"><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /></td>
</tr>
<tr>
<td class="google-review-text">Fine carpet cleaning did a great job cleaning the carpets in my house. They were reasonably priced and very professional throughout. I highly recommend them.
</td>
</tr>
</tbody>
</table>
</div>
</a>

<div class="filterDiv 5-stars"><button class="greenbutton"><a href="https://g.co/kgs/6pSvf2H" target="_blank" rel="noopener">READ MORE IN GOOGLE</a></button></div>

<div class="filterDiv 5-stars">
<div class="fleur-de-lis--divider">
<div class="divider-shadow"></div>
<div class="divider-shadow-image"><img src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/output-onlinepngtools.png" /></div>
</div></div>

  <a class="top-class-of-new-google-reviews" href="https://maps.app.goo.gl/aGJwRnPuUjGgZ44e7" target="_blank" rel="noopener">
<div class="filterDiv 5-stars"><table class="google-reviews-in-new-reviews-page 5-stars" border="0" width="100%" cellspacing="10" cellpadding="0">
<tbody>
<tr>
<td class="top-row-of-new-google-review"><div class="profile-pic-and-name-in-review"><img class="skip-lazy" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/02/unnamed-28-1.png" width="40" height="40" data-skip-lazy="1" /><p><b>A M</b><br>August 2021</p></div><img class="skip-lazy google-logo-in-new-reviews" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/02/GoogleLogoPNGImage.png" width="40" height="40" data-skip-lazy="1" />
</td>
</tr>
<tr>
<td align="center"><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /></td>
</tr>
</tbody>
</table>
</div>
</a>

<div class="filterDiv 5-stars"><button class="greenbutton"><a href="https://maps.app.goo.gl/aGJwRnPuUjGgZ44e7" target="_blank" rel="noopener">READ MORE IN GOOGLE</a></button></div>

<div class="filterDiv 5-stars">
<div class="fleur-de-lis--divider">
<div class="divider-shadow"></div>
<div class="divider-shadow-image"><img src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/output-onlinepngtools.png" /></div>
</div></div>

  <a class="top-class-of-new-google-reviews" href="https://g.co/kgs/xYbBwht" target="_blank" rel="noopener">
<div class="filterDiv 5-stars"><table class="google-reviews-in-new-reviews-page 5-stars" border="0" width="100%" cellspacing="10" cellpadding="0">
<tbody>
<tr>
<td class="top-row-of-new-google-review"><div class="profile-pic-and-name-in-review"><img class="skip-lazy" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/02/unnamed-5.png" width="40" height="40" data-skip-lazy="1" /><p><b>Becks Bucks</b><br>August 2021</p></div><img class="skip-lazy google-logo-in-new-reviews" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/02/GoogleLogoPNGImage.png" width="40" height="40" data-skip-lazy="1" />
</td>
</tr>
<tr>
<td align="center"><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /></td>
</tr>
<tr>
<td class="google-review-text">Very great and fast service 🤩 highly recommend
</td>
</tr>
</tbody>
</table>
</div>
</a>

<div class="filterDiv 5-stars"><button class="greenbutton"><a href="https://g.co/kgs/xYbBwht" target="_blank" rel="noopener">READ MORE IN GOOGLE</a></button></div>

<div class="filterDiv 5-stars">
<div class="fleur-de-lis--divider">
<div class="divider-shadow"></div>
<div class="divider-shadow-image"><img src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/output-onlinepngtools.png" /></div>
</div></div>

  <a href="https://g.co/kgs/VvwEYrf" target="_blank" rel="noopener">
<div class="filterDiv 5-stars"><table class="google-reviews-in-new-reviews-page 5-stars" border="0" width="100%" cellspacing="10" cellpadding="0">
<tbody>
<tr>
<td class="top-row-of-new-google-review"><div class="profile-pic-and-name-in-review"><img class="skip-lazy" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/02/unnamed-61.png" width="40" height="40" data-skip-lazy="1" /><p><b>Taty Lima</b><br>August 2021</p></div><img class="skip-lazy google-logo-in-new-reviews" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/02/GoogleLogoPNGImage.png" width="40" height="40" data-skip-lazy="1" />
</td>
</tr>
<tr>
<td align="center"><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /></td>
</tr>
<tr>
<td class="google-review-text">Very good service and very professional. High standard and I definitely recommend them.
</td>
</tr>
</tbody>
</table>
</div>
</a>

<div class="filterDiv 5-stars"><button class="greenbutton"><a href="https://g.co/kgs/VvwEYrf" target="_blank" rel="noopener">READ MORE IN GOOGLE</a></button></div>

<div class="filterDiv 5-stars">
<div class="fleur-de-lis--divider">
<div class="divider-shadow"></div>
<div class="divider-shadow-image"><img src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/output-onlinepngtools.png" /></div>
</div></div>

  <a href="https://g.co/kgs/X7npnPK" target="_blank" rel="noopener">
<div class="filterDiv 5-stars"><table class="google-reviews-in-new-reviews-page 5-stars" border="0" width="100%" cellspacing="10" cellpadding="0">
<tbody>
<tr>
<td class="top-row-of-new-google-review"><div class="profile-pic-and-name-in-review"><img class="skip-lazy" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/02/unnamed-24.png" width="40" height="40" data-skip-lazy="1" /><p><b>Gemma Louise</b><br>August 2021</p></div><img class="skip-lazy google-logo-in-new-reviews" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/02/GoogleLogoPNGImage.png" width="40" height="40" data-skip-lazy="1" />
</td>
</tr>
<tr>
<td align="center"><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /></td>
</tr>
<tr>
<td class="google-review-text">Fine Carpet Cleaning were really well priced, turned up on time, did a really good job, my carpets are like new! Will use for all carpet cleaning and upholstery cleaning in future.
</td>
</tr>
</tbody>
</table>
</div>
</a>

<div class="filterDiv 5-stars"><button class="greenbutton"><a href="https://g.co/kgs/X7npnPK" target="_blank" rel="noopener">READ MORE IN GOOGLE</a></button></div>

<div class="filterDiv 5-stars">
<div class="fleur-de-lis--divider">
<div class="divider-shadow"></div>
<div class="divider-shadow-image"><img src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/output-onlinepngtools.png" /></div>
</div></div>

  <a href="https://g.co/kgs/CvZn1wG" target="_blank" rel="noopener">
<div class="filterDiv 5-stars"><table class="google-reviews-in-new-reviews-page 5-stars" border="0" width="100%" cellspacing="10" cellpadding="0">
<tbody>
<tr>
<td class="top-row-of-new-google-review"><div class="profile-pic-and-name-in-review"><img class="skip-lazy" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/02/unnamed-25.png" width="40" height="40" data-skip-lazy="1" /><p><b>Munish Thairani</b><br>July 2021</p></div><img class="skip-lazy google-logo-in-new-reviews" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/02/GoogleLogoPNGImage.png" width="40" height="40" data-skip-lazy="1" />
</td>
</tr>
<tr>
<td align="center"><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /></td>
</tr>
<tr>
<td class="google-review-text">Have used them twice and they are wonderful. Good cleaning, friendly and accommodating service. Definitely recommend!
</td>
</tr>
</tbody>
</table>
</div>
</a>

<div class="filterDiv 5-stars"><button class="greenbutton"><a href="https://g.co/kgs/CvZn1wG" target="_blank" rel="noopener">READ MORE IN GOOGLE</a></button></div>

<div class="filterDiv 5-stars">
<div class="fleur-de-lis--divider">
<div class="divider-shadow"></div>
<div class="divider-shadow-image"><img src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/output-onlinepngtools.png" /></div>
</div></div>

  <a class="top-class-of-new-google-reviews" href="https://maps.app.goo.gl/aGJwRnPuUjGgZ44e7" target="_blank" rel="noopener">
<div class="filterDiv 5-stars"><table class="google-reviews-in-new-reviews-page 5-stars" border="0" width="100%" cellspacing="10" cellpadding="0">
<tbody>
<tr>
<td class="top-row-of-new-google-review"><div class="profile-pic-and-name-in-review"><img class="skip-lazy" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/02/unnamed-22-1.png" width="40" height="40" data-skip-lazy="1" /><p><b>David Mcall</b><br>July 2021</p></div><img class="skip-lazy google-logo-in-new-reviews" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/02/GoogleLogoPNGImage.png" width="40" height="40" data-skip-lazy="1" />
</td>
</tr>
<tr>
<td align="center"><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /></td>
</tr>
</tbody>
</table>
</div>
</a>

<div class="filterDiv 5-stars"><button class="greenbutton"><a href="https://maps.app.goo.gl/aGJwRnPuUjGgZ44e7" rel="noopener">READ MORE IN GOOGLE</a></button></div>

<div class="filterDiv 5-stars">
<div class="fleur-de-lis--divider">
<div class="divider-shadow"></div>
<div class="divider-shadow-image"><img src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/output-onlinepngtools.png" /></div>
</div></div>

  <a class="top-class-of-new-google-reviews" href="https://g.co/kgs/Pe5KAST" target="_blank" rel="noopener">
<div class="filterDiv 4-stars"><table class="google-reviews-in-new-reviews-page 4-stars" border="0" width="100%" cellspacing="10" cellpadding="0">
<tbody>
<tr>
<td class="top-row-of-new-google-review"><div class="profile-pic-and-name-in-review"><img class="skip-lazy" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/02/unnamed-10-1.png" width="40" height="40" data-skip-lazy="1" /><p><b>Curly Treats</b><br>July 2021</p></div><img class="skip-lazy google-logo-in-new-reviews" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/02/GoogleLogoPNGImage.png" width="40" height="40" data-skip-lazy="1" />
</td>
</tr>
<tr>
<td align="center"><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/02/output-onlinepngtools-e1707480352597.png" alt="" width="20" height="20" data-skip-lazy="1" /></td>
</tr>
<tr>
<td class="google-review-text">Thanks for your service.
</td>
</tr>
</tbody>
</table>
</div>
</a>

<div class="filterDiv 4-stars"><button class="greenbutton"><a href="https://g.co/kgs/Pe5KAST" target="_blank" rel="noopener">READ MORE IN GOOGLE</a></button></div>

<div class="filterDiv 4-stars">
<div class="fleur-de-lis--divider">
<div class="divider-shadow"></div>
<div class="divider-shadow-image"><img src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/output-onlinepngtools.png" /></div>
</div></div>

  <a class="top-class-of-new-google-reviews" href="https://maps.app.goo.gl/aGJwRnPuUjGgZ44e7" target="_blank" rel="noopener">
<div class="filterDiv 4-stars"><table class="google-reviews-in-new-reviews-page 4-stars" border="0" width="100%" cellspacing="10" cellpadding="0">
<tbody>
<tr>
<td class="top-row-of-new-google-review"><div class="profile-pic-and-name-in-review"><img class="skip-lazy" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/02/unnamed-42-1.png" width="40" height="40" data-skip-lazy="1" /><p><b>Yara Evans</b><br>July 2021</p></div><img class="skip-lazy google-logo-in-new-reviews" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/02/GoogleLogoPNGImage.png" width="40" height="40" data-skip-lazy="1" />
</td>
</tr>
<tr>
<td align="center"><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/02/output-onlinepngtools-e1707480352597.png" alt="" width="20" height="20" data-skip-lazy="1" /></td>
</tr>
</tbody>
</table>
</div>
</a>

<div class="filterDiv 4-stars"><button class="greenbutton"><a href="https://maps.app.goo.gl/aGJwRnPuUjGgZ44e7" target="_blank" rel="noopener">READ MORE IN GOOGLE</a></button></div>

<div class="filterDiv 4-stars">
<div class="fleur-de-lis--divider">
<div class="divider-shadow"></div>
<div class="divider-shadow-image"><img src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/output-onlinepngtools.png" /></div>
</div></div>

  <a class="top-class-of-new-google-reviews" href="https://maps.app.goo.gl/aGJwRnPuUjGgZ44e7" target="_blank" rel="noopener">
<div class="filterDiv 5-stars"><table class="google-reviews-in-new-reviews-page 5-stars" border="0" width="100%" cellspacing="10" cellpadding="0">
<tbody>
<tr>
<td class="top-row-of-new-google-review"><div class="profile-pic-and-name-in-review"><img class="skip-lazy" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/02/unnamed-18-1.png" width="40" height="40" data-skip-lazy="1" /><p><b>Diner Chowdhury</b><br>May 2021</p></div><img class="skip-lazy google-logo-in-new-reviews" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/02/GoogleLogoPNGImage.png" width="40" height="40" data-skip-lazy="1" />
</td>
</tr>
<tr>
<td align="center"><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /></td>
</tr>
</tbody>
</table>
</div>
</a>

<div class="filterDiv 5-stars"><button class="greenbutton"><a href="https://maps.app.goo.gl/aGJwRnPuUjGgZ44e7" target="_blank" rel="noopener">READ MORE IN GOOGLE</a></button></div>

<div class="filterDiv 5-stars">
<div class="fleur-de-lis--divider">
<div class="divider-shadow"></div>
<div class="divider-shadow-image"><img src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/output-onlinepngtools.png" /></div>
</div></div>

  <a class="top-class-of-new-google-reviews" href="https://maps.app.goo.gl/aGJwRnPuUjGgZ44e7" target="_blank" rel="noopener">
<div class="filterDiv 5-stars"><table class="google-reviews-in-new-reviews-page 5-stars" border="0" width="100%" cellspacing="10" cellpadding="0">
<tbody>
<tr>
<td class="top-row-of-new-google-review"><div class="profile-pic-and-name-in-review"><img class="skip-lazy" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/02/unnamed-23-1.png" width="40" height="40" data-skip-lazy="1" /><p><b>Rumyana Nedeva</b><br>May 2021</p></div><img class="skip-lazy google-logo-in-new-reviews" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/02/GoogleLogoPNGImage.png" width="40" height="40" data-skip-lazy="1" />
</td>
</tr>
<tr>
<td align="center"><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /></td>
</tr>
</tbody>
</table>
</div>
</a>

<div class="filterDiv 5-stars"><button class="greenbutton"><a href="https://maps.app.goo.gl/aGJwRnPuUjGgZ44e7" target="_blank" rel="noopener">READ MORE IN GOOGLE</a></button></div>

<div class="filterDiv 5-stars">
<div class="fleur-de-lis--divider">
<div class="divider-shadow"></div>
<div class="divider-shadow-image"><img src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/output-onlinepngtools.png" /></div>
</div></div>

  <a href="https://g.co/kgs/yyqKtzc" target="_blank" rel="noopener">
<div class="filterDiv 5-stars"><table class="google-reviews-in-new-reviews-page 5-stars" border="0" width="100%" cellspacing="10" cellpadding="0">
<tbody>
<tr>
<td class="top-row-of-new-google-review"><div class="profile-pic-and-name-in-review"><img class="skip-lazy" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/02/unnamed-26.png" width="40" height="40" data-skip-lazy="1" /><p><b>ege cevik</b><br>April 2021</p></div><img class="skip-lazy google-logo-in-new-reviews" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/02/GoogleLogoPNGImage.png" width="40" height="40" data-skip-lazy="1" />
</td>
</tr>
<tr>
<td align="center"><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /></td>
</tr>
<tr>
<td class="google-review-text">The best service i have ever used! They were very helpful and the price was reasonable. I can’t recommend them enough
</td>
</tr>
</tbody>
</table>
</div>
</a>

<div class="filterDiv 5-stars"><button class="greenbutton"><a href="https://g.co/kgs/yyqKtzc" target="_blank" rel="noopener">READ MORE IN GOOGLE</a></button></div>

<div class="filterDiv 5-stars">
<div class="fleur-de-lis--divider">
<div class="divider-shadow"></div>
<div class="divider-shadow-image"><img src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/output-onlinepngtools.png" /></div>
</div></div>

  <a class="top-class-of-new-google-reviews" href="https://maps.app.goo.gl/aGJwRnPuUjGgZ44e7" target="_blank" rel="noopener">
<div class="filterDiv 5-stars"><table class="google-reviews-in-new-reviews-page 5-stars" border="0" width="100%" cellspacing="10" cellpadding="0">
<tbody>
<tr>
<td class="top-row-of-new-google-review"><div class="profile-pic-and-name-in-review"><img class="skip-lazy" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/02/unnamed-17-1.png" width="40" height="40" data-skip-lazy="1" /><p><b>Kevin Sampson</b><br>February 2021</p></div><img class="skip-lazy google-logo-in-new-reviews" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/02/GoogleLogoPNGImage.png" width="40" height="40" data-skip-lazy="1" />
</td>
</tr>
<tr>
<td align="center"><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /></td>
</tr>
</tbody>
</table>
</div>
</a>

<div class="filterDiv 5-stars"><button class="greenbutton"><a href="https://maps.app.goo.gl/aGJwRnPuUjGgZ44e7" target="_blank" rel="noopener">READ MORE IN GOOGLE</a></button></div>

<div class="filterDiv 5-stars">
<div class="fleur-de-lis--divider">
<div class="divider-shadow"></div>
<div class="divider-shadow-image"><img src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/output-onlinepngtools.png" /></div>
</div></div>

  <a href="https://g.co/kgs/AUfMKLe" target="_blank" rel="noopener">
<div class="filterDiv 2-stars"><table class="google-reviews-in-new-reviews-page 2-stars" border="0" width="100%" cellspacing="10" cellpadding="0">
<tbody>
<tr>
<td class="top-row-of-new-google-review"><div class="profile-pic-and-name-in-review"><img class="skip-lazy" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/02/unnamed-27.png" width="40" height="40" data-skip-lazy="1" /><p><b>yusuf Mohammed</b><br>January 2021</p></div><img class="skip-lazy google-logo-in-new-reviews" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/02/GoogleLogoPNGImage.png" width="40" height="40" data-skip-lazy="1" />
</td>
</tr>
<tr>
<td align="center"><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/02/output-onlinepngtools-e1707480352597.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/02/output-onlinepngtools-e1707480352597.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/02/output-onlinepngtools-e1707480352597.png" alt="" width="20" height="20" data-skip-lazy="1" /></td>
</tr>
<tr>
<td class="google-review-text">The shaggy rug could not be cleaned properly due to it being a high pile rug. the machine they use is an industrial powerful machine but no way it can pick up all rubbish etc.
</td>
</tr>
</tbody>
</table>
</div>
</a>

<div class="filterDiv 2-stars"><button class="greenbutton"><a href="https://g.co/kgs/AUfMKLe" target="_blank" rel="noopener">READ MORE IN GOOGLE</a></button></div>

<div class="filterDiv 2-stars">
<div class="fleur-de-lis--divider">
<div class="divider-shadow"></div>
<div class="divider-shadow-image"><img src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/output-onlinepngtools.png" /></div>
</div></div>

  <a class="top-class-of-new-google-reviews" href="https://maps.app.goo.gl/aGJwRnPuUjGgZ44e7" target="_blank" rel="noopener">
<div class="filterDiv 4-stars"><table class="google-reviews-in-new-reviews-page 4-stars" border="0" width="100%" cellspacing="10" cellpadding="0">
<tbody>
<tr>
<td class="top-row-of-new-google-review"><div class="profile-pic-and-name-in-review"><img class="skip-lazy" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/02/unnamed-39-1.png" width="40" height="40" data-skip-lazy="1" /><p><b>Srikanth Vemuri</b><br>December 2020</p></div><img class="skip-lazy google-logo-in-new-reviews" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/02/GoogleLogoPNGImage.png" width="40" height="40" data-skip-lazy="1" />
</td>
</tr>
<tr>
<td align="center"><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/02/output-onlinepngtools-e1707480352597.png" alt="" width="20" height="20" data-skip-lazy="1" /></td>
</tr>

</tbody>
</table>
</div>
</a>

<div class="filterDiv 4-stars"><button class="greenbutton"><a href="https://maps.app.goo.gl/aGJwRnPuUjGgZ44e7" target="_blank" rel="noopener">READ MORE IN GOOGLE</a></button></div>

<div class="filterDiv 4-stars">
<div class="fleur-de-lis--divider">
<div class="divider-shadow"></div>
<div class="divider-shadow-image"><img src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/output-onlinepngtools.png" /></div>
</div></div>

  <a href="https://g.co/kgs/vbZ2Lyn" target="_blank" rel="noopener">
<div class="filterDiv 5-stars"><table class="google-reviews-in-new-reviews-page 5-stars" border="0" width="100%" cellspacing="10" cellpadding="0">
<tbody>
<tr>
<td class="top-row-of-new-google-review"><div class="profile-pic-and-name-in-review"><img class="skip-lazy" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/02/unnamed-28.png" width="40" height="40" data-skip-lazy="1" /><p><b>A L</b><br>November 2020</p></div><img class="skip-lazy google-logo-in-new-reviews" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/02/GoogleLogoPNGImage.png" width="40" height="40" data-skip-lazy="1" />
</td>
</tr>
<tr>
<td align="center"><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /></td>
</tr>
<tr>
<td class="google-review-text">I am very happy with the service I received, the friendly and professional man who came to deep clean my floors and a few pieces of furniture. After lockdown things were in dire need of a clean and he took his time paying attention to detail. I will re-book for a 'Covid Clean' since I am moving home soon, ensuring my new flat is sanitised by these professionals. Thank you Fine Carpet Cleaning London :)
</td>
</tr>
</tbody>
</table>
</div>
</a>

<div class="filterDiv 5-stars"><button class="greenbutton"><a href="https://g.co/kgs/vbZ2Lyn" target="_blank" rel="noopener">READ MORE IN GOOGLE</a></button></div>

<div class="filterDiv 5-stars">
<div class="fleur-de-lis--divider">
<div class="divider-shadow"></div>
<div class="divider-shadow-image"><img src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/output-onlinepngtools.png" /></div>
</div></div>

  <a href="https://g.co/kgs/PD49URx" target="_blank" rel="noopener">
<div class="filterDiv 5-stars"><table class="google-reviews-in-new-reviews-page 5-stars" border="0" width="100%" cellspacing="10" cellpadding="0">
<tbody>
<tr>
<td class="top-row-of-new-google-review"><div class="profile-pic-and-name-in-review"><img class="skip-lazy" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/02/unnamed-29.png" width="40" height="40" data-skip-lazy="1" /><p><b>Christine Rajah</b><br>November 2020</p></div><img class="skip-lazy google-logo-in-new-reviews" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/02/GoogleLogoPNGImage.png" width="40" height="40" data-skip-lazy="1" />
</td>
</tr>
<tr>
<td align="center"><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /></td>
</tr>
<tr>
<td class="google-review-text">This was the second time I used Fine Carpet cleaning. On both ocassions I found getting a quote and booking an appointment quick and easy. The person who did the cleanning was polite and very efficient with minimal disruption to my home. Very pleased with results including a difficult stain which was removed successfully.
</td>
</tr>
</tbody>
</table>
</div>
</a>

<div class="filterDiv 5-stars"><button class="greenbutton"><a href="https://g.co/kgs/PD49URx" target="_blank" rel="noopener">READ MORE IN GOOGLE</a></button></div>

<div class="filterDiv 5-stars">
<div class="fleur-de-lis--divider">
<div class="divider-shadow"></div>
<div class="divider-shadow-image"><img src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/output-onlinepngtools.png" /></div>
</div></div>

  <a class="top-class-of-new-google-reviews" href="https://g.co/kgs/AjqjNic" target="_blank" rel="noopener">
<div class="filterDiv 4-stars"><table class="google-reviews-in-new-reviews-page 4-stars" border="0" width="100%" cellspacing="10" cellpadding="0">
<tbody>
<tr>
<td class="top-row-of-new-google-review"><div class="profile-pic-and-name-in-review"><img class="skip-lazy" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/02/unnamed-3-1.png" width="40" height="40" data-skip-lazy="1" /><p><b>Isaac Tamir</b><br>November 2020</p></div><img class="skip-lazy google-logo-in-new-reviews" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/02/GoogleLogoPNGImage.png" width="40" height="40" data-skip-lazy="1" />
</td>
</tr>
<tr>
<td align="center"><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/02/output-onlinepngtools-e1707480352597.png" alt="" width="20" height="20" data-skip-lazy="1" /></td>
</tr>
<tr>
<td class="google-review-text">All in all was satisfied with the work and a reasonable price.
</td>
</tr>
</tbody>
</table>
</div>
</a>

<div class="filterDiv 4-stars"><button class="greenbutton"><a href="https://g.co/kgs/AjqjNic" target="_blank" rel="noopener">READ MORE IN GOOGLE</a></button></div>

<div class="filterDiv 4-stars">
<div class="fleur-de-lis--divider">
<div class="divider-shadow"></div>
<div class="divider-shadow-image"><img src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/output-onlinepngtools.png" /></div>
</div></div>

  <a class="top-class-of-new-google-reviews" href="https://maps.app.goo.gl/aGJwRnPuUjGgZ44e7" target="_blank" rel="noopener">
<div class="filterDiv 5-stars"><table class="google-reviews-in-new-reviews-page 5-stars" border="0" width="100%" cellspacing="10" cellpadding="0">
<tbody>
<tr>
<td class="top-row-of-new-google-review"><div class="profile-pic-and-name-in-review"><img class="skip-lazy" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/02/unnamed-24-1.png" width="40" height="40" data-skip-lazy="1" /><p><b>aelis3</b><br>November 2020</p></div><img class="skip-lazy google-logo-in-new-reviews" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/02/GoogleLogoPNGImage.png" width="40" height="40" data-skip-lazy="1" />
</td>
</tr>
<tr>
<td align="center"><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /></td>
</tr>
</tbody>
</table>
</div>
</a>

<div class="filterDiv 5-stars"><button class="greenbutton"><a href="https://maps.app.goo.gl/aGJwRnPuUjGgZ44e7" target="_blank" rel="noopener">READ MORE IN GOOGLE</a></button></div>

<div class="filterDiv 5-stars">
<div class="fleur-de-lis--divider">
<div class="divider-shadow"></div>
<div class="divider-shadow-image"><img src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/output-onlinepngtools.png" /></div>
</div></div>

  <a href="https://g.co/kgs/AS8CV6x" target="_blank" rel="noopener">
<div class="filterDiv 5-stars"><table class="google-reviews-in-new-reviews-page 5-stars" border="0" width="100%" cellspacing="10" cellpadding="0">
<tbody>
<tr>
<td class="top-row-of-new-google-review"><div class="profile-pic-and-name-in-review"><img class="skip-lazy" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/02/unnamed-30.png" width="40" height="40" data-skip-lazy="1" /><p><b>Anna Townsend</b><br>September 2020</p></div><img class="skip-lazy google-logo-in-new-reviews" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/02/GoogleLogoPNGImage.png" width="40" height="40" data-skip-lazy="1" />
</td>
</tr>
<tr>
<td align="center"><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /></td>
</tr>
<tr>
<td class="google-review-text">I would recommend this company. Their machinery is industrial and robust, they did an excellent job on my carpets, very thorough and all the stains came out. They were professional and costs were very reasonable.
</td>
</tr>
</tbody>
</table>
</div>
</a>

<div class="filterDiv 5-stars"><button class="greenbutton"><a href="https://g.co/kgs/AS8CV6x" target="_blank" rel="noopener">READ MORE IN GOOGLE</a></button></div>

<div class="filterDiv 5-stars">
<div class="fleur-de-lis--divider">
<div class="divider-shadow"></div>
<div class="divider-shadow-image"><img src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/output-onlinepngtools.png" /></div>
</div></div>

  <a href="https://g.co/kgs/khvbEmJ" target="_blank" rel="noopener">
<div class="filterDiv 5-stars"><table class="google-reviews-in-new-reviews-page 5-stars" border="0" width="100%" cellspacing="10" cellpadding="0">
<tbody>
<tr>
<td class="top-row-of-new-google-review"><div class="profile-pic-and-name-in-review"><img class="skip-lazy" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/02/unnamed-31.png" width="40" height="40" data-skip-lazy="1" /><p><b>Bianca</b><br>September 2020</p></div><img class="skip-lazy google-logo-in-new-reviews" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/02/GoogleLogoPNGImage.png" width="40" height="40" data-skip-lazy="1" />
</td>
</tr>
<tr>
<td align="center"><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /></td>
</tr>
<tr>
<td class="google-review-text">They did a fantastic job removing an old paint stain from my carpet, The cleaner was on time, professional and fast. I can't thank them enough! Def recommend. Again, thank you -Bianca
</td>
</tr>
</tbody>
</table>
</div>
</a>

<div class="filterDiv 5-stars"><button class="greenbutton"><a href="https://g.co/kgs/khvbEmJ" target="_blank" rel="noopener">READ MORE IN GOOGLE</a></button></div>

<div class="filterDiv 5-stars">
<div class="fleur-de-lis--divider">
<div class="divider-shadow"></div>
<div class="divider-shadow-image"><img src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/output-onlinepngtools.png" /></div>
</div></div>

  <a class="top-class-of-new-google-reviews" href="https://maps.app.goo.gl/aGJwRnPuUjGgZ44e7" target="_blank" rel="noopener">
<div class="filterDiv 5-stars"><table class="google-reviews-in-new-reviews-page 5-stars" border="0" width="100%" cellspacing="10" cellpadding="0">
<tbody>
<tr>
<td class="top-row-of-new-google-review"><div class="profile-pic-and-name-in-review"><img class="skip-lazy" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/02/unnamed-30-1.png" width="40" height="40" data-skip-lazy="1" /><p><b>FAHAD HASSAN</b><br>September 2020</p></div><img class="skip-lazy google-logo-in-new-reviews" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/02/GoogleLogoPNGImage.png" width="40" height="40" data-skip-lazy="1" />
</td>
</tr>
<tr>
<td align="center"><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /></td>
</tr>
</tbody>
</table>
</div>
</a>

<div class="filterDiv 5-stars"><button class="greenbutton"><a href="https://maps.app.goo.gl/aGJwRnPuUjGgZ44e7" target="_blank" rel="noopener">READ MORE IN GOOGLE</a></button></div>

<div class="filterDiv 5-stars">
<div class="fleur-de-lis--divider">
<div class="divider-shadow"></div>
<div class="divider-shadow-image"><img src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/output-onlinepngtools.png" /></div>
</div></div>

  <a class="top-class-of-new-google-reviews" href="https://g.co/kgs/szpgisF" target="_blank" rel="noopener">
<div class="filterDiv 5-stars"><table class="google-reviews-in-new-reviews-page 5-stars" border="0" width="100%" cellspacing="10" cellpadding="0">
<tbody>
<tr>
<td class="top-row-of-new-google-review"><div class="profile-pic-and-name-in-review"><img class="skip-lazy" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/02/unnamed-4-1.png" width="40" height="40" data-skip-lazy="1" /><p><b>Graeme Smith</b><br>September 2020</p></div><img class="skip-lazy google-logo-in-new-reviews" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/02/GoogleLogoPNGImage.png" width="40" height="40" data-skip-lazy="1" />
</td>
</tr>
<tr>
<td align="center"><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /></td>
</tr>
<tr>
<td class="google-review-text">Really pleased with the service, would recommend again
</td>
</tr>
</tbody>
</table>
</div>
</a>

<div class="filterDiv 5-stars"><button class="greenbutton"><a href="https://g.co/kgs/szpgisF" target="_blank" rel="noopener">READ MORE IN GOOGLE</a></button></div>

<div class="filterDiv 5-stars">
<div class="fleur-de-lis--divider">
<div class="divider-shadow"></div>
<div class="divider-shadow-image"><img src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/output-onlinepngtools.png" /></div>
</div></div>

  <a class="top-class-of-new-google-reviews" href="https://maps.app.goo.gl/aGJwRnPuUjGgZ44e7" target="_blank" rel="noopener">
<div class="filterDiv 5-stars"><table class="google-reviews-in-new-reviews-page 5-stars" border="0" width="100%" cellspacing="10" cellpadding="0">
<tbody>
<tr>
<td class="top-row-of-new-google-review"><div class="profile-pic-and-name-in-review"><img class="skip-lazy" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/02/unnamed-19-1.png" width="40" height="40" data-skip-lazy="1" /><p><b>Zakaria Ahmed</b><br>September 2020</p></div><img class="skip-lazy google-logo-in-new-reviews" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/02/GoogleLogoPNGImage.png" width="40" height="40" data-skip-lazy="1" />
</td>
</tr>
<tr>
<td align="center"><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /></td>
</tr>
</tbody>
</table>
</div>
</a>

<div class="filterDiv 5-stars"><button class="greenbutton"><a href="https://maps.app.goo.gl/aGJwRnPuUjGgZ44e7" target="_blank" rel="noopener">READ MORE IN GOOGLE</a></button></div>

<div class="filterDiv 5-stars">
<div class="fleur-de-lis--divider">
<div class="divider-shadow"></div>
<div class="divider-shadow-image"><img src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/output-onlinepngtools.png" /></div>
</div></div>

  <a class="top-class-of-new-google-reviews" href="https://g.co/kgs/kTX6dRc" target="_blank" rel="noopener">
<div class="filterDiv 5-stars"><table class="google-reviews-in-new-reviews-page 5-stars" border="0" width="100%" cellspacing="10" cellpadding="0">
<tbody>
<tr>
<td class="top-row-of-new-google-review"><div class="profile-pic-and-name-in-review"><img class="skip-lazy" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/02/unnamed-68.png" width="40" height="40" data-skip-lazy="1" /><p><b>mandy rhys</b><br>September 2020</p></div><img class="skip-lazy google-logo-in-new-reviews" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/02/GoogleLogoPNGImage.png" width="40" height="40" data-skip-lazy="1" />
</td>
</tr>
<tr>
<td align="center"><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /></td>
</tr>
<tr>
<td class="google-review-text">Very pleased with how my settee came out , gentleman was very polite
</td>
</tr>
</tbody>
</table>
</div>
</a>

<div class="filterDiv 5-stars"><button class="greenbutton"><a href="https://g.co/kgs/kTX6dRc" target="_blank" rel="noopener">READ MORE IN GOOGLE</a></button></div>

<div class="filterDiv 5-stars">
<div class="fleur-de-lis--divider">
<div class="divider-shadow"></div>
<div class="divider-shadow-image"><img src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/output-onlinepngtools.png" /></div>
</div></div>

  <a class="top-class-of-new-google-reviews" href="https://maps.app.goo.gl/aGJwRnPuUjGgZ44e7" target="_blank" rel="noopener">
<div class="filterDiv 5-stars"><table class="google-reviews-in-new-reviews-page 5-stars" border="0" width="100%" cellspacing="10" cellpadding="0">
<tbody>
<tr>
<td class="top-row-of-new-google-review"><div class="profile-pic-and-name-in-review"><img class="skip-lazy" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/02/unnamed-40-1.png" width="40" height="40" data-skip-lazy="1" /><p><b>Miguel Pelaez</b><br>August 2020</p></div><img class="skip-lazy google-logo-in-new-reviews" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/02/GoogleLogoPNGImage.png" width="40" height="40" data-skip-lazy="1" />
</td>
</tr>
<tr>
<td align="center"><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /></td>
</tr>
</tbody>
</table>
</div>
</a>

<div class="filterDiv 5-stars"><button class="greenbutton"><a href="https://maps.app.goo.gl/aGJwRnPuUjGgZ44e7" target="_blank" rel="noopener">READ MORE IN GOOGLE</a></button></div>

<div class="filterDiv 5-stars">
<div class="fleur-de-lis--divider">
<div class="divider-shadow"></div>
<div class="divider-shadow-image"><img src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/output-onlinepngtools.png" /></div>
</div></div>

  <a href="https://g.co/kgs/VPCnNMq" target="_blank" rel="noopener">
<div class="filterDiv 5-stars"><table class="google-reviews-in-new-reviews-page 5-stars" border="0" width="100%" cellspacing="10" cellpadding="0">
<tbody>
<tr>
<td class="top-row-of-new-google-review"><div class="profile-pic-and-name-in-review"><img class="skip-lazy" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/02/unnamed-32.png" width="40" height="40" data-skip-lazy="1" /><p><b>STONE TONE</b><br>July 2020</p></div><img class="skip-lazy google-logo-in-new-reviews" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/02/GoogleLogoPNGImage.png" width="40" height="40" data-skip-lazy="1" />
</td>
</tr>
<tr>
<td align="center"><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /></td>
</tr>
<tr>
<td class="google-review-text">Yes we was very pleased with the outcome of the cleaning of our carpets we have used them a couple of times now & both times were great thanks again ⭐️⭐️⭐️⭐️⭐️
</td>
</tr>
</tbody>
</table>
</div>
</a>

<div class="filterDiv 5-stars"><button class="greenbutton"><a href="https://g.co/kgs/VPCnNMq" target="_blank" rel="noopener">READ MORE IN GOOGLE</a></button></div>

<div class="filterDiv 5-stars">
<div class="fleur-de-lis--divider">
<div class="divider-shadow"></div>
<div class="divider-shadow-image"><img src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/output-onlinepngtools.png" /></div>
</div></div>

  <a class="top-class-of-new-google-reviews" href="https://g.co/kgs/68Ui1kg" target="_blank" rel="noopener">
<div class="filterDiv 5-stars"><table class="google-reviews-in-new-reviews-page 5-stars" border="0" width="100%" cellspacing="10" cellpadding="0">
<tbody>
<tr>
<td class="top-row-of-new-google-review"><div class="profile-pic-and-name-in-review"><img class="skip-lazy" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/02/unnamed-5-1.png" width="40" height="40" data-skip-lazy="1" /><p><b>Maria Calota</b><br>July 2020</p></div><img class="skip-lazy google-logo-in-new-reviews" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/02/GoogleLogoPNGImage.png" width="40" height="40" data-skip-lazy="1" />
</td>
</tr>
<tr>
<td align="center"><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /></td>
</tr>
<tr>
<td class="google-review-text">very good service.!!
highly recommend
</td>
</tr>
</tbody>
</table>
</div>
</a>

<div class="filterDiv 5-stars"><button class="greenbutton"><a href="https://g.co/kgs/68Ui1kg" target="_blank" rel="noopener">READ MORE IN GOOGLE</a></button></div>

<div class="filterDiv 5-stars">
<div class="fleur-de-lis--divider">
<div class="divider-shadow"></div>
<div class="divider-shadow-image"><img src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/output-onlinepngtools.png" /></div>
</div></div>

  <a class="top-class-of-new-google-reviews" href="https://g.co/kgs/nnNX8tD" target="_blank" rel="noopener">
<div class="filterDiv 5-stars"><table class="google-reviews-in-new-reviews-page 5-stars" border="0" width="100%" cellspacing="10" cellpadding="0">
<tbody>
<tr>
<td class="top-row-of-new-google-review"><div class="profile-pic-and-name-in-review"><img class="skip-lazy" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/02/unnamed-67.png" width="40" height="40" data-skip-lazy="1" /><p><b>Gregor Bran</b><br>July 2020</p></div><img class="skip-lazy google-logo-in-new-reviews" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/02/GoogleLogoPNGImage.png" width="40" height="40" data-skip-lazy="1" />
</td>
</tr>
<tr>
<td align="center"><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /></td>
</tr>
<tr>
<td class="google-review-text">Excellent service, on time, fast and great attention to detail!
</td>
</tr>
</tbody>
</table>
</div>
</a>

<div class="filterDiv 5-stars"><button class="greenbutton"><a href="https://g.co/kgs/nnNX8tD" target="_blank" rel="noopener">READ MORE IN GOOGLE</a></button></div>

<div class="filterDiv 5-stars">
<div class="fleur-de-lis--divider">
<div class="divider-shadow"></div>
<div class="divider-shadow-image"><img src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/output-onlinepngtools.png" /></div>
</div></div>

  <a href="https://g.co/kgs/dJggvx6" target="_blank" rel="noopener">
<div class="filterDiv 5-stars"><table class="google-reviews-in-new-reviews-page 5-stars" border="0" width="100%" cellspacing="10" cellpadding="0">
<tbody>
<tr>
<td class="top-row-of-new-google-review"><div class="profile-pic-and-name-in-review"><img class="skip-lazy" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/02/unnamed-33.png" width="40" height="40" data-skip-lazy="1" /><p><b>G Jones</b><br>June 2020</p></div><img class="skip-lazy google-logo-in-new-reviews" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/02/GoogleLogoPNGImage.png" width="40" height="40" data-skip-lazy="1" />
</td>
</tr>
<tr>
<td align="center"><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /></td>
</tr>
<tr>
<td class="google-review-text">These guys are truly excellent at what they do, their prices are reasonable and their customer service is second to none. They really are best in the business.
</td>
</tr>
</tbody>
</table>
</div>
</a>

<div class="filterDiv 5-stars"><button class="greenbutton"><a href="https://g.co/kgs/dJggvx6" target="_blank" rel="noopener">READ MORE IN GOOGLE</a></button></div>

<div class="filterDiv 5-stars">
<div class="fleur-de-lis--divider">
<div class="divider-shadow"></div>
<div class="divider-shadow-image"><img src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/output-onlinepngtools.png" /></div>
</div></div>

  <a class="top-class-of-new-google-reviews" href="https://maps.app.goo.gl/aGJwRnPuUjGgZ44e7" target="_blank" rel="noopener">
<div class="filterDiv 5-stars"><table class="google-reviews-in-new-reviews-page 5-stars" border="0" width="100%" cellspacing="10" cellpadding="0">
<tbody>
<tr>
<td class="top-row-of-new-google-review"><div class="profile-pic-and-name-in-review"><img class="skip-lazy" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/02/unnamed-33-1.png" width="40" height="40" data-skip-lazy="1" /><p><b>Ruth Elman</b><br>March 2020</p></div><img class="skip-lazy google-logo-in-new-reviews" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/02/GoogleLogoPNGImage.png" width="40" height="40" data-skip-lazy="1" />
</td>
</tr>
<tr>
<td align="center"><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /></td>
</tr>
</tbody>
</table>
</div>
</a>

<div class="filterDiv 5-stars"><button class="greenbutton"><a href="https://maps.app.goo.gl/aGJwRnPuUjGgZ44e7" target="_blank" rel="noopener">READ MORE IN GOOGLE</a></button></div>

<div class="filterDiv 5-stars">
<div class="fleur-de-lis--divider">
<div class="divider-shadow"></div>
<div class="divider-shadow-image"><img src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/output-onlinepngtools.png" /></div>
</div></div>

  <a class="top-class-of-new-google-reviews" href="https://maps.app.goo.gl/aGJwRnPuUjGgZ44e7" target="_blank" rel="noopener">
<div class="filterDiv 5-stars"><table class="google-reviews-in-new-reviews-page 5-stars" border="0" width="100%" cellspacing="10" cellpadding="0">
<tbody>
<tr>
<td class="top-row-of-new-google-review"><div class="profile-pic-and-name-in-review"><img class="skip-lazy" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/02/unnamed-34-1.png" width="40" height="40" data-skip-lazy="1" /><p><b>Tina Nelan</b><br>March 2020</p></div><img class="skip-lazy google-logo-in-new-reviews" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/02/GoogleLogoPNGImage.png" width="40" height="40" data-skip-lazy="1" />
</td>
</tr>
<tr>
<td align="center"><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /></td>
</tr>
</tbody>
</table>
</div>
</a>

<div class="filterDiv 5-stars"><button class="greenbutton"><a href="https://maps.app.goo.gl/aGJwRnPuUjGgZ44e7" target="_blank" rel="noopener">READ MORE IN GOOGLE</a></button></div>

<div class="filterDiv 5-stars">
<div class="fleur-de-lis--divider">
<div class="divider-shadow"></div>
<div class="divider-shadow-image"><img src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/output-onlinepngtools.png" /></div>
</div></div>

  <a href="https://g.co/kgs/jGu6ivH" target="_blank" rel="noopener">
<div class="filterDiv 5-stars"><table class="google-reviews-in-new-reviews-page 5-stars" border="0" width="100%" cellspacing="10" cellpadding="0">
<tbody>
<tr>
<td class="top-row-of-new-google-review"><div class="profile-pic-and-name-in-review"><img class="skip-lazy" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/02/unnamed-34.png" width="40" height="40" data-skip-lazy="1" /><p><b>Colin Burnell</b><br>February 2020</p></div><img class="skip-lazy google-logo-in-new-reviews" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/02/GoogleLogoPNGImage.png" width="40" height="40" data-skip-lazy="1" />
</td>
</tr>
<tr>
<td align="center"><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /></td>
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

<div class="filterDiv 5-stars">
<div class="fleur-de-lis--divider">
<div class="divider-shadow"></div>
<div class="divider-shadow-image"><img src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/output-onlinepngtools.png" /></div>
</div></div>

  <a class="top-class-of-new-google-reviews" href="https://g.co/kgs/Mtqa3sd" target="_blank" rel="noopener">
<div class="filterDiv 5-stars"><table class="google-reviews-in-new-reviews-page 5-stars" border="0" width="100%" cellspacing="10" cellpadding="0">
<tbody>
<tr>
<td class="top-row-of-new-google-review"><div class="profile-pic-and-name-in-review"><img class="skip-lazy" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/02/unnamed-6-1.png" width="40" height="40" data-skip-lazy="1" /><p><b>Eva Hertegovina</b><br>February 2020</p></div><img class="skip-lazy google-logo-in-new-reviews" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/02/GoogleLogoPNGImage.png" width="40" height="40" data-skip-lazy="1" />
</td>
</tr>
<tr>
<td align="center"><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /></td>
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

<div class="filterDiv 5-stars">
<div class="fleur-de-lis--divider">
<div class="divider-shadow"></div>
<div class="divider-shadow-image"><img src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/output-onlinepngtools.png" /></div>
</div></div>

  <a href="https://g.co/kgs/Joce2cU" target="_blank" rel="noopener">
<div class="filterDiv 5-stars"><table class="google-reviews-in-new-reviews-page 5-stars" border="0" width="100%" cellspacing="10" cellpadding="0">
<tbody>
<tr>
<td class="top-row-of-new-google-review"><div class="profile-pic-and-name-in-review"><img class="skip-lazy" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/02/unnamed-35.png" width="40" height="40" data-skip-lazy="1" /><p><b>esamiga</b><br>January 2020</p></div><img class="skip-lazy google-logo-in-new-reviews" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/02/GoogleLogoPNGImage.png" width="40" height="40" data-skip-lazy="1" />
</td>
</tr>
<tr>
<td align="center"><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /></td>
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

<div class="filterDiv 5-stars">
<div class="fleur-de-lis--divider">
<div class="divider-shadow"></div>
<div class="divider-shadow-image"><img src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/output-onlinepngtools.png" /></div>
</div></div>

  <a class="top-class-of-new-google-reviews" href="https://g.co/kgs/13rYXrv" target="_blank" rel="noopener">
<div class="filterDiv 5-stars"><table class="google-reviews-in-new-reviews-page 5-stars" border="0" width="100%" cellspacing="10" cellpadding="0">
<tbody>
<tr>
<td class="top-row-of-new-google-review"><div class="profile-pic-and-name-in-review"><img class="skip-lazy" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/02/unnamed-65.png" width="40" height="40" data-skip-lazy="1" /><p><b>Alexander</b><br>January 2020</p></div><img class="skip-lazy google-logo-in-new-reviews" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/02/GoogleLogoPNGImage.png" width="40" height="40" data-skip-lazy="1" />
</td>
</tr>
<tr>
<td align="center"><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /></td>
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

<div class="filterDiv 5-stars">
<div class="fleur-de-lis--divider">
<div class="divider-shadow"></div>
<div class="divider-shadow-image"><img src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/output-onlinepngtools.png" /></div>
</div></div>

  <a href="https://g.co/kgs/EZw3kK4" target="_blank" rel="noopener">
<div class="filterDiv 5-stars"><table class="google-reviews-in-new-reviews-page 5-stars" border="0" width="100%" cellspacing="10" cellpadding="0">
<tbody>
<tr>
<td class="top-row-of-new-google-review"><div class="profile-pic-and-name-in-review"><img class="skip-lazy" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/02/unnamed-36.png" width="40" height="40" data-skip-lazy="1" /><p><b>Adil Hussain</b><br>December 2019</p></div><img class="skip-lazy google-logo-in-new-reviews" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/02/GoogleLogoPNGImage.png" width="40" height="40" data-skip-lazy="1" />
</td>
</tr>
<tr>
<td align="center"><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /></td>
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

<div class="filterDiv 5-stars">
<div class="fleur-de-lis--divider">
<div class="divider-shadow"></div>
<div class="divider-shadow-image"><img src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/output-onlinepngtools.png" /></div>
</div></div>

  <a href="https://g.co/kgs/Xrd7TYQ" target="_blank" rel="noopener">
<div class="filterDiv 5-stars"><table class="google-reviews-in-new-reviews-page 5-stars" border="0" width="100%" cellspacing="10" cellpadding="0">
<tbody>
<tr>
<td class="top-row-of-new-google-review"><div class="profile-pic-and-name-in-review"><img class="skip-lazy" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/02/unnamed-37.png" width="40" height="40" data-skip-lazy="1" /><p><b>Noreen Manji</b><br>December 2019</p></div><img class="skip-lazy google-logo-in-new-reviews" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/02/GoogleLogoPNGImage.png" width="40" height="40" data-skip-lazy="1" />
</td>
</tr>
<tr>
<td align="center"><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /></td>
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

<div class="filterDiv 5-stars">
<div class="fleur-de-lis--divider">
<div class="divider-shadow"></div>
<div class="divider-shadow-image"><img src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/output-onlinepngtools.png" /></div>
</div></div>

  <a href="https://g.co/kgs/MDqhAAB" target="_blank" rel="noopener">
<div class="filterDiv 5-stars"><table class="google-reviews-in-new-reviews-page 5-stars" border="0" width="100%" cellspacing="10" cellpadding="0">
<tbody>
<tr>
<td class="top-row-of-new-google-review"><div class="profile-pic-and-name-in-review"><img class="skip-lazy" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/02/unnamed-38.png" width="40" height="40" data-skip-lazy="1" /><p><b>Cvetelina Andonova</b><br>November 2019</p></div><img class="skip-lazy google-logo-in-new-reviews" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/02/GoogleLogoPNGImage.png" width="40" height="40" data-skip-lazy="1" />
</td>
</tr>
<tr>
<td align="center"><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /></td>
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

<div class="filterDiv 5-stars">
<div class="fleur-de-lis--divider">
<div class="divider-shadow"></div>
<div class="divider-shadow-image"><img src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/output-onlinepngtools.png" /></div>
</div></div>

  <a class="top-class-of-new-google-reviews" href="https://g.co/kgs/eoxxVoR" target="_blank" rel="noopener">
<div class="filterDiv 5-stars"><table class="google-reviews-in-new-reviews-page 5-stars" border="0" width="100%" cellspacing="10" cellpadding="0">
<tbody>
<tr>
<td class="top-row-of-new-google-review"><div class="profile-pic-and-name-in-review"><img class="skip-lazy" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/02/unnamed-66.png" width="40" height="40" data-skip-lazy="1" /><p><b>Marek</b><br>November 2019</p></div><img class="skip-lazy google-logo-in-new-reviews" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/02/GoogleLogoPNGImage.png" width="40" height="40" data-skip-lazy="1" />
</td>
</tr>
<tr>
<td align="center"><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /></td>
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

<div class="filterDiv 5-stars">
<div class="fleur-de-lis--divider">
<div class="divider-shadow"></div>
<div class="divider-shadow-image"><img src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/output-onlinepngtools.png" /></div>
</div></div>

  <a href="https://g.co/kgs/vxLLccL" target="_blank" rel="noopener">
<div class="filterDiv 5-stars"><table class="google-reviews-in-new-reviews-page 5-stars" border="0" width="100%" cellspacing="10" cellpadding="0">
<tbody>
<tr>
<td class="top-row-of-new-google-review"><div class="profile-pic-and-name-in-review"><img class="skip-lazy" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/02/unnamed-39.png" width="40" height="40" data-skip-lazy="1" /><p><b>Fernando Mendonca</b><br>October 2019</p></div><img class="skip-lazy google-logo-in-new-reviews" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/02/GoogleLogoPNGImage.png" width="40" height="40" data-skip-lazy="1" />
</td>
</tr>
<tr>
<td align="center"><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /></td>
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

<div class="filterDiv 5-stars">
<div class="fleur-de-lis--divider">
<div class="divider-shadow"></div>
<div class="divider-shadow-image"><img src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/output-onlinepngtools.png" /></div>
</div></div>

  <a href="https://g.co/kgs/LDKcDa9" target="_blank" rel="noopener">
<div class="filterDiv 5-stars"><table class="google-reviews-in-new-reviews-page 5-stars" border="0" width="100%" cellspacing="10" cellpadding="0">
<tbody>
<tr>
<td class="top-row-of-new-google-review"><div class="profile-pic-and-name-in-review"><img class="skip-lazy" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/02/unnamed-40.png" width="40" height="40" data-skip-lazy="1" /><p><b>Freshn Up Cleaning</b><br>September 2019</p></div><img class="skip-lazy google-logo-in-new-reviews" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/02/GoogleLogoPNGImage.png" width="40" height="40" data-skip-lazy="1" />
</td>
</tr>
<tr>
<td align="center"><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /></td>
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

<div class="filterDiv 5-stars">
<div class="fleur-de-lis--divider">
<div class="divider-shadow"></div>
<div class="divider-shadow-image"><img src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/output-onlinepngtools.png" /></div>
</div></div>

  <a href="https://g.co/kgs/RhcAJzy" target="_blank" rel="noopener">
<div class="filterDiv 5-stars"><table class="google-reviews-in-new-reviews-page 5-stars" border="0" width="100%" cellspacing="10" cellpadding="0">
<tbody>
<tr>
<td class="top-row-of-new-google-review"><div class="profile-pic-and-name-in-review"><img class="skip-lazy" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/02/unnamed-41.png" width="40" height="40" data-skip-lazy="1" /><p><b>Gyula Egri</b><br>August 2019</p></div><img class="skip-lazy google-logo-in-new-reviews" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/02/GoogleLogoPNGImage.png" width="40" height="40" data-skip-lazy="1" />
</td>
</tr>
<tr>
<td align="center"><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /></td>
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

<div class="filterDiv 5-stars">
<div class="fleur-de-lis--divider">
<div class="divider-shadow"></div>
<div class="divider-shadow-image"><img src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/output-onlinepngtools.png" /></div>
</div></div>

  <a href="https://g.co/kgs/yYw4au5" target="_blank" rel="noopener">
<div class="filterDiv 5-stars"><table class="google-reviews-in-new-reviews-page 5-stars" border="0" width="100%" cellspacing="10" cellpadding="0">
<tbody>
<tr>
<td class="top-row-of-new-google-review"><div class="profile-pic-and-name-in-review"><img class="skip-lazy" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/02/unnamed-42.png" width="40" height="40" data-skip-lazy="1" /><p><b>bruce madeiros</b><br>August 2019</p></div><img class="skip-lazy google-logo-in-new-reviews" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/02/GoogleLogoPNGImage.png" width="40" height="40" data-skip-lazy="1" />
</td>
</tr>
<tr>
<td align="center"><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /></td>
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

<div class="filterDiv 5-stars">
<div class="fleur-de-lis--divider">
<div class="divider-shadow"></div>
<div class="divider-shadow-image"><img src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/output-onlinepngtools.png" /></div>
</div></div>

  <a href="https://g.co/kgs/gQk6Qa9" target="_blank" rel="noopener">
<div class="filterDiv 5-stars"><table class="google-reviews-in-new-reviews-page 5-stars" border="0" width="100%" cellspacing="10" cellpadding="0">
<tbody>
<tr>
<td class="top-row-of-new-google-review"><div class="profile-pic-and-name-in-review"><img class="skip-lazy" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/02/unnamed-43.png" width="40" height="40" data-skip-lazy="1" /><p><b>Alina Matei</b><br>July 2019</p></div><img class="skip-lazy google-logo-in-new-reviews" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/02/GoogleLogoPNGImage.png" width="40" height="40" data-skip-lazy="1" />
</td>
</tr>
<tr>
<td align="center"><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /></td>
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

<div class="filterDiv 5-stars">
<div class="fleur-de-lis--divider">
<div class="divider-shadow"></div>
<div class="divider-shadow-image"><img src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/output-onlinepngtools.png" /></div>
</div></div>

  <a class="top-class-of-new-google-reviews" href="https://g.co/kgs/cXZdW3N" target="_blank" rel="noopener">
<div class="filterDiv 5-stars"><table class="google-reviews-in-new-reviews-page 5-stars" border="0" width="100%" cellspacing="10" cellpadding="0">
<tbody>
<tr>
<td class="top-row-of-new-google-review"><div class="profile-pic-and-name-in-review"><img class="skip-lazy" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/02/unnamed-44.png" width="40" height="40" data-skip-lazy="1" /><p><b>Julie Parker</b><br>July 2019</p></div><img class="skip-lazy google-logo-in-new-reviews" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/02/GoogleLogoPNGImage.png" width="40" height="40" data-skip-lazy="1" />
</td>
</tr>
<tr>
<td align="center"><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /></td>
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

<div class="filterDiv 5-stars">
<div class="fleur-de-lis--divider">
<div class="divider-shadow"></div>
<div class="divider-shadow-image"><img src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/output-onlinepngtools.png" /></div>
</div></div>

  <a class="top-class-of-new-google-reviews" href="https://g.co/kgs/EpxL3Bv" target="_blank" rel="noopener">
<div class="filterDiv 5-stars"><table class="google-reviews-in-new-reviews-page 5-stars" border="0" width="100%" cellspacing="10" cellpadding="0">
<tbody>
<tr>
<td class="top-row-of-new-google-review"><div class="profile-pic-and-name-in-review"><img class="skip-lazy" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/02/unnamed-45.png" width="40" height="40" data-skip-lazy="1" /><p><b>Nasima Mamun</b><br>June 2019</p></div><img class="skip-lazy google-logo-in-new-reviews" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/02/GoogleLogoPNGImage.png" width="40" height="40" data-skip-lazy="1" />
</td>
</tr>
<tr>
<td align="center"><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /></td>
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

<div class="filterDiv 5-stars">
<div class="fleur-de-lis--divider">
<div class="divider-shadow"></div>
<div class="divider-shadow-image"><img src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/output-onlinepngtools.png" /></div>
</div></div>

  <a class="top-class-of-new-google-reviews" href="https://maps.app.goo.gl/aGJwRnPuUjGgZ44e7" target="_blank" rel="noopener">
<div class="filterDiv 1-stars"><table class="google-reviews-in-new-reviews-page 1-stars" border="0" width="100%" cellspacing="10" cellpadding="0">
<tbody>
<tr>
<td class="top-row-of-new-google-review"><div class="profile-pic-and-name-in-review"><img class="skip-lazy" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/02/unnamed-44-1.png" width="40" height="40" data-skip-lazy="1" /><p><b>Ismahan Mohamed</b><br>June 2019</p></div><img class="skip-lazy google-logo-in-new-reviews" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/02/GoogleLogoPNGImage.png" width="40" height="40" data-skip-lazy="1" />
</td>
</tr>
<tr>
<td align="center"><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/02/output-onlinepngtools-e1707480352597.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/02/output-onlinepngtools-e1707480352597.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/02/output-onlinepngtools-e1707480352597.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/02/output-onlinepngtools-e1707480352597.png" alt="" width="20" height="20" data-skip-lazy="1" /></td>
</tr>
</tbody>
</table>
</div>
</a>

<div class="filterDiv 1-stars"><button class="greenbutton"><a href="https://maps.app.goo.gl/aGJwRnPuUjGgZ44e7" target="_blank" rel="noopener">READ MORE IN GOOGLE</a></button></div>

<div class="filterDiv 1-stars">
<div class="fleur-de-lis--divider">
<div class="divider-shadow"></div>
<div class="divider-shadow-image"><img src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/output-onlinepngtools.png" /></div>
</div></div>

  <a href="https://g.co/kgs/EEdgL91" target="_blank" rel="noopener">
<div class="filterDiv 5-stars"><table class="google-reviews-in-new-reviews-page 5-stars" border="0" width="100%" cellspacing="10" cellpadding="0">
<tbody>
<tr>
<td class="top-row-of-new-google-review"><div class="profile-pic-and-name-in-review"><img class="skip-lazy" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/02/unnamed-46.png" width="40" height="40" data-skip-lazy="1" /><p><b>Kirsty Scallan</b><br>May 2019</p></div><img class="skip-lazy google-logo-in-new-reviews" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/02/GoogleLogoPNGImage.png" width="40" height="40" data-skip-lazy="1" />
</td>
</tr>
<tr>
<td align="center"><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /><img class="google-star-rating-review" style="padding: 5px;" src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/google-star-review-logo-e1706350894182.png" alt="" width="20" height="20" data-skip-lazy="1" /></td>
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

<div class="filterDiv 5-stars">
<div class="fleur-de-lis--divider">
<div class="divider-shadow"></div>
<div class="divider-shadow-image"><img src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/output-onlinepngtools.png" /></div>
</div></div>

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

<div class="filterDiv 5-stars">
<div class="fleur-de-lis--divider">
<div class="divider-shadow"></div>
<div class="divider-shadow-image"><img src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/output-onlinepngtools.png" /></div>
</div></div>

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

<div class="filterDiv 5-stars">
<div class="fleur-de-lis--divider">
<div class="divider-shadow"></div>
<div class="divider-shadow-image"><img src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/output-onlinepngtools.png" /></div>
</div></div>

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

<div class="filterDiv 5-stars">
<div class="fleur-de-lis--divider">
<div class="divider-shadow"></div>
<div class="divider-shadow-image"><img src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/output-onlinepngtools.png" /></div>
</div></div>

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

<div class="filterDiv 5-stars">
<div class="fleur-de-lis--divider">
<div class="divider-shadow"></div>
<div class="divider-shadow-image"><img src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/output-onlinepngtools.png" /></div>
</div></div>

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

<div class="filterDiv 5-stars">
<div class="fleur-de-lis--divider">
<div class="divider-shadow"></div>
<div class="divider-shadow-image"><img src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/output-onlinepngtools.png" /></div>
</div></div>

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

<div class="filterDiv 5-stars">
<div class="fleur-de-lis--divider">
<div class="divider-shadow"></div>
<div class="divider-shadow-image"><img src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/output-onlinepngtools.png" /></div>
</div></div>

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

<div class="filterDiv 5-stars">
<div class="fleur-de-lis--divider">
<div class="divider-shadow"></div>
<div class="divider-shadow-image"><img src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/output-onlinepngtools.png" /></div>
</div></div>

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

<div class="filterDiv 5-stars">
<div class="fleur-de-lis--divider">
<div class="divider-shadow"></div>
<div class="divider-shadow-image"><img src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/output-onlinepngtools.png" /></div>
</div></div>

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

<div class="filterDiv 5-stars">
<div class="fleur-de-lis--divider">
<div class="divider-shadow"></div>
<div class="divider-shadow-image"><img src="https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/output-onlinepngtools.png" /></div>
</div></div>

<div class="buttoncontainer"><button class="greenbutton"><a>GET A QUOTE</a></button>
<button class="otherbutton"><a>PRICES</a></button></div>


	<FleurDivider></FleurDivider>

	<div class="m-10% mb-3% flex flex-wrap flex-justify-center gap-15">
		<button class="outline-none bg-brand-second-action hover-bg-brand-second-action-hover:hover font-size-6 font-600 w-200px h-60px c-paper flex flex-items-center flex-justify-center relative b-solid b-rd-3 b-4 b-brand-second-action hover-b-brand-second-action-hover:hover whitespace-normal line-height-6 word-spacing-0.5 py-9" style="box-shadow: 0 0 0 3px rgba(255, 255, 255, .9) inset; letter-spacing: 0.05rem;"><a class="c-paper font-size-5">SERVICES</a></button>
		<button class="outline-none bg-brand-action hover-bg-brand-action-hover:hover font-size-6 font-600 w-200px h-60px c-paper flex flex-items-center flex-justify-center relative b-solid b-rd-3 b-4 b-brand-action hover-b-brand-action-hover:hover whitespace-normal line-height-6 word-spacing-0.5 py-9" style="box-shadow: 0 0 0 3px rgba(255, 255, 255, .9) inset; letter-spacing: 0.05rem;"><a class="c-paper font-size-5">GET A QUOTE</a></button>
	</div>

	<a href="/"><img class="max-w-full block mla mra md-mt-30 md-mb-18 mt-20 mb-10" src="/assets/ShenYunZuoPin- Orange-Desktop-ZaDimo.png"></img></a>

  </>
  );
}
