function FeaturedBlock (props: {text:string,image:string,url:string}) {
  return (
    <div class="flex flex-col lg-w-30% sm-w-65% w-95% b-solid b-1 b-paper-border md-mb-30 mb-20 pb-8 hover-b-gray-3:hover cursor-pointer" style="box-shadow: 0 0 10px #dadada;">
      <img class="" src={props.image}></img>
      <div class="pt-20px px-25px lg-font-size-4.2 md-font-size-5 font-size-4.5 line-height-7 md-line-height-8 lg-line-height-25px color-paper-inv typography-body lg-pb-8 lg-my-2 md-my-5 my-5 text-justify">{props.text}</div>
      <a href={props.url} class="text-center typography-ui lg-font-size-4.3 md-font-size-7 font-size-5.5 font-100 color-paper-link hover-color-paper-link-hover uppercase lg-my-0 md-my-5 my-5" style="letter-spacing: .75px;">Прочетете повече</a>
    </div>
  );
}

export default function Page() {
  return (
    <>
      <div class="content max-w-1440px">
        <img src="/assets/home-page-blue-montage-1140x490_c-e1615502484310.jpg" class="w-full -mx-20px -mt-5" style="width: calc(100% + 40px);"/>
        <section class="">
          <div class="flex flex-wrap md--mt-30 -mt-10 lg-flex-justify-between flex-justify-center">
          <FeaturedBlock 
            text="Фалун Гонг, известен също като Фалун Дафа, е духовен метод от будистката традиция, с основни принципи Истинност, Доброта и Търпение. Представен е пред обществеността в Китай през 1992 година, но корените му се простират хиляди години назад в историята.  Десетки милиони го практикуват в Китай. По света се практикува в над 80 държави."
            image="/assets/FDI-1__what-is-falun-gong__1280px-1-640x360.jpg"
            url="/"/>
          <FeaturedBlock 
            text="Фалун Гонг, известен също като Фалун Дафа, е духовен метод от будистката традиция, с основни принципи Истинност, Доброта и Търпение. Представен е пред обществеността в Китай през 1992 година, но корените му се простират хиляди години назад в историята.  Десетки милиони го практикуват в Китай. По света се практикува в над 80 държави."
            image="/assets/FDI-1__what-is-falun-gong__1280px-1-640x360.jpg"
            url="/"/>
          <FeaturedBlock 
            text="Фалун Гонг, известен също като Фалун Дафа, е духовен метод от будистката традиция, с основни принципи Истинност, Доброта и Търпение. Представен е пред обществеността в Китай през 1992 година, но корените му се простират хиляди години назад в историята.  Десетки милиони го практикуват в Китай. По света се практикува в над 80 държави."
            image="/assets/FDI-1__what-is-falun-gong__1280px-1-640x360.jpg"
            url="/"/>
          </div>
        </section>
        <a href="/"><img class="max-w-full" src="/assets/FDinfo-HumanityArticle__v2.png"></img></a>

        <section class="">
          <div class="flex flex-wrap lg-flex-justify-between flex-justify-center md-mt-30 mt-20">
            <FeaturedBlock 
              text="Фалун Гонг, известен също като Фалун Дафа, е духовен метод от будистката традиция, с основни принципи Истинност, Доброта и Търпение. Представен е пред обществеността в Китай през 1992 година, но корените му се простират хиляди години назад в историята.  Десетки милиони го практикуват в Китай. По света се практикува в над 80 държави."
              image="/assets/FDI-1__what-is-falun-gong__1280px-1-640x360.jpg"
              url="/"/>
            <FeaturedBlock 
              text="Фалун Гонг, известен също като Фалун Дафа, е духовен метод от будистката традиция, с основни принципи Истинност, Доброта и Търпение. Представен е пред обществеността в Китай през 1992 година, но корените му се простират хиляди години назад в историята.  Десетки милиони го практикуват в Китай. По света се практикува в над 80 държави."
              image="/assets/FDI-1__what-is-falun-gong__1280px-1-640x360.jpg"
              url="/"/>
            <FeaturedBlock 
              text="Фалун Гонг, известен също като Фалун Дафа, е духовен метод от будистката традиция, с основни принципи Истинност, Доброта и Търпение. Представен е пред обществеността в Китай през 1992 година, но корените му се простират хиляди години назад в историята.  Десетки милиони го практикуват в Китай. По света се практикува в над 80 държави."
              image="/assets/FDI-1__what-is-falun-gong__1280px-1-640x360.jpg"
              url="/"/>
          </div>
        </section>
        <a href="/"><img class="max-w-full" src="/assets/FDinfo-HumanityArticle__v2.png"></img></a>
        <a href="/"><img class="max-w-full block mla mra md-mt-30 md-mb-18 mt-20 mb-10" src="/assets/ShenYunZuoPin- Orange-Desktop-ZaDimo.png"></img></a>
      </div>
    </>
  );
}
