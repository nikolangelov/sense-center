function FeaturedBlock (props: {text:string,image:string,url:string}) {
  return (
    <div class="flex flex-col lg-w-30% sm-w-65% w-80% b-solid b-1 b-paper-border mb-40px pb-8 hover-b-gray-3:hover cursor-pointer" style="box-shadow: 0 0 10px #dadada;">
      <img class="" src={props.image}></img>
      <div class="pt-20px px-25px font-size-17px line-height-25px color-gray-8 font-sans pb-8">{props.text}</div>
      <a href={props.url} class="text-center color-paper-link hover-color-paper-link-hover uppercase" style="letter-spacing: .75px;">Прочетете повече</a>
    </div>
  );
}

export default function Page() {
  return (
    <>
      <div class="content">
        <img src="/assets/home-page-blue-montage-1140x490_c-e1615502484310.jpg" class="w-full -mx-20px" style="width: calc(100% + 40px);"/>
        <section class="">
          <div class="flex flex-wrap -mt-30 lg-flex-justify-between sm-flex-justify-center">
          <FeaturedBlock 
            text="Falun Gong, also known as Falun Dafa, is a spiritual practice in the Buddhist tradition. Falun Gong combines meditation and gentle exercises with a moral philosophy centered on the tenets of Truthfulness, Compassion, and Tolerance. Although introduced to the public in China in 1992, its roots extend back thousands of years."
            image="/assets/FDI-1__what-is-falun-gong__1280px-1-640x360.jpg"
            url="/"/>
          <FeaturedBlock 
            text="Falun Gong, also known as Falun Dafa, is a spiritual practice in the Buddhist tradition. Falun Gong combines meditation and gentle exercises with a moral philosophy centered on the tenets of Truthfulness, Compassion, and Tolerance. Although introduced to the public in China in 1992, its roots extend back thousands of years."
            image="/assets/FDI-1__what-is-falun-gong__1280px-1-640x360.jpg"
            url="/"/>
          <FeaturedBlock 
            text="Falun Gong, also known as Falun Dafa, is a spiritual practice in the Buddhist tradition. Falun Gong combines meditation and gentle exercises with a moral philosophy centered on the tenets of Truthfulness, Compassion, and Tolerance. Although introduced to the public in China in 1992, its roots extend back thousands of years."
            image="/assets/FDI-1__what-is-falun-gong__1280px-1-640x360.jpg"
            url="/"/>
          </div>
        </section>
        <a href="/"><img class="max-w-full" src="/assets/FDinfo-HumanityArticle__v2.png"></img></a>

        <section class="">
          <div class="flex flex-wrap lg-flex-justify-between sm-flex-justify-center mt-10">
            <FeaturedBlock 
              text="Falun Gong, also known as Falun Dafa, is a spiritual practice in the Buddhist tradition. Falun Gong combines meditation and gentle exercises with a moral philosophy centered on the tenets of Truthfulness, Compassion, and Tolerance. Although introduced to the public in China in 1992, its roots extend back thousands of years."
              image="/assets/FDI-1__what-is-falun-gong__1280px-1-640x360.jpg"
              url="/"/>
            <FeaturedBlock 
              text="Falun Gong, also known as Falun Dafa, is a spiritual practice in the Buddhist tradition. Falun Gong combines meditation and gentle exercises with a moral philosophy centered on the tenets of Truthfulness, Compassion, and Tolerance. Although introduced to the public in China in 1992, its roots extend back thousands of years."
              image="/assets/FDI-1__what-is-falun-gong__1280px-1-640x360.jpg"
              url="/"/>
            <FeaturedBlock 
              text="Falun Gong, also known as Falun Dafa, is a spiritual practice in the Buddhist tradition. Falun Gong combines meditation and gentle exercises with a moral philosophy centered on the tenets of Truthfulness, Compassion, and Tolerance. Although introduced to the public in China in 1992, its roots extend back thousands of years."
              image="/assets/FDI-1__what-is-falun-gong__1280px-1-640x360.jpg"
              url="/"/>
          </div>
        </section>
        <a href="/"><img class="max-w-full" src="/assets/FDinfo-HumanityArticle__v2.png"></img></a>
        <a href="/"><img class="max-w-full block mla mra mt-10" src="/assets/ShenYunZuoPin- Orange-Desktop-ZaDimo.png"></img></a>
      </div>
     </>
  );
}
