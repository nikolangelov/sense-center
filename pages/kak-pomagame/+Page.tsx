import "solid-slider/slider.css";
import { AnimatedComponent } from '../../components/AnimateOnView';
import { JSX } from "solid-js";
import { DoodleDecor } from "../../components/BackgroundDecor";

export function AuthorContainer(props: { href: string; style: string; name: string; description: string | JSX.Element; }) {
	return (
		<div class="mx-auto mt-0 px-2 md:px-5 pt-4 b-rd-12px w-330px h-500px md:w-400px md:h-550px bg-[position:right_50%_bottom_50%] bg-contain" style={props.style}>
			<div class="ml-3 flex flex-col flex-justify-between h-450px md:h-510px">
				<div>
					<h2 class="important-md:font-size-35px important-font-size-32px normal-case c-paper font-600 mb-1 h-13 md:h-18 mt-0 text-center">{props.name}</h2>
					<div class="font-[MYRIADPRO-Light] c-paper px-0 line-height-6 text-center">{props.description}</div>
				</div>
				<div class="w-full">
					<div class="important-delay-600 flex flex-col justify-center items-center gap-2">
						<div class="flex justify-center">
							<AnimatedComponent class="float-left md:pr-5px relative text-center w-65">
								<a href="/">
									<div class="flex bg-brand hover:bg-brand-hover transition-all b-rd-100 max-w-100 w-full px-2 py-2 md:py-8px">
										<div class="flex justify-center items-center bg-paper b-rd-100 w-10 h-10">
											<img src="/assets/sense-puzzle-piece.svg" alt="puzzle piece" class="m-auto w-7 h-7 object-cover" />
										</div>
										<div class="m-auto">
											<div class="relative min-h-1px px-6px c-paper flex text-center flex-justify-center tracking-1.2px font-size-3 font-500 leading-4.5 important:font-roboto">
												Запазете час за<br />първична оценка
											</div>
										</div>
									</div>
								</a>
							</AnimatedComponent>
						</div>
						<div class="flex justify-center">
							<AnimatedComponent class="float-left md:pr-5px relative text-center w-65">
								<a href={props.href}>
									<div class="flex bg-brand-orange hover:bg-brand-orange-hover transition-all b-rd-100 max-w-100 w-full px-2 py-2 md:py-8px">
										<div class="flex justify-center items-center bg-paper b-rd-100 w-10 h-10">
											<img src="/assets/sense-orange-puzzle-piece.svg" alt="puzzle piece" class="m-auto w-7 h-7 object-cover" />
										</div>
										<div class="m-auto">
											<div class="relative min-h-1px px-6px c-paper flex text-center flex-justify-center tracking-1.2px font-size-3 font-500 leading-4.5 important:font-roboto">
												Научете повече
											</div>
										</div>
									</div>
								</a>
							</AnimatedComponent>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default function Page() {
	return (
		<>
			<div class="flex flex-col items-center gap-3 md:gap-10 mt-35 lg:mt-65 md:mb-30 mb-20">
				<div class="grid grid-cols-1 lg:grid-cols-3 gap-15 md:gap-6 max-w-screen-xl w-full">
					<AuthorContainer
						href="/detski-logoped"
						style="background:linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0)),url(/assets/assets_task_01jzpz2g6xecb88e22va909k3x_1752043792_img_0.webp); background-position: right 50% bottom 85% !important; background-repeat: no-repeat; background-size: cover;"
						name="Детски логопед"
						description="Терапията подобрява разбирането и изпълнението на команди."
					/>
					<AuthorContainer
						href="/pozitsia-logoped"
						style="background:linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0)),url(/assets/assets_task_01jzpz2g6xecb88e22va909k3x_1752043792_img_0.webp); background-position: right 50% bottom 85% !important; background-repeat: no-repeat; background-size: cover;"
						name="Позиция логопед"
						description="Терапията подобрява разбирането и изпълнението на команди."
					/>
					<AuthorContainer
						href="/detski-psiholog"
						style="background:linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0)),url(/assets/assets_task_01jzpz2g6xecb88e22va909k3x_1752043792_img_0.webp); background-position: right 50% bottom 85% !important; background-repeat: no-repeat; background-size: cover;"
						name="Детски психолог"
						description="Терапията подобрява разбирането и изпълнението на команди."
					/>
				</div>

				<div class="md:block hidden relative w-full h-10 z-0">
					<DoodleDecor variant="pink2" style="position: absolute; right: -230px; margin-top: -250px;" />
				</div>

				<div class="block md:hidden relative w-full h-10 z-0">
					<DoodleDecor variant="pink2" style="position: absolute; right: -200px; margin-top: -120px; max-width:350px;" />
				</div>

				<div class="grid grid-cols-1 lg:grid-cols-3 gap-15 md:gap-6 max-w-screen-xl w-full">
					<AuthorContainer
						href="/ergoterapia-za-detsa"
						style="background:linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0)),url(/assets/assets_task_01jzpz2g6xecb88e22va909k3x_1752043792_img_0.webp); background-position: right 50% bottom 85% !important; background-repeat: no-repeat; background-size: cover;"
						name="Ерготерапия за деца"
						description="Терапията подобрява разбирането и изпълнението на команди."
					/>
					<AuthorContainer
						href="/prakticheski-zanimania-za-deca-s-autizam"
						style="background:linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0)),url(/assets/assets_task_01jzpz2g6xecb88e22va909k3x_1752043792_img_0.webp); background-position: right 50% bottom 85% !important; background-repeat: no-repeat; background-size: cover;"
						name="Практически занимания за деца с аутизъм"
						description="Терапията подобрява разбирането и изпълнението на команди."
					/>
					<AuthorContainer
						href="/psihomotorika-za-detsa"
						style="background:linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0)),url(/assets/assets_task_01jzpz2g6xecb88e22va909k3x_1752043792_img_0.webp); background-position: right 50% bottom 85% !important; background-repeat: no-repeat; background-size: cover;"
						name="Психомоторика за деца"
						description="Терапията подобрява разбирането и изпълнението на команди."
					/>
				</div>

				<div class="md:block hidden relative w-full h-10 z-0">
					<DoodleDecor variant="purple2" style="position: absolute; left: -230px; margin-top: -110px;" />
				</div>

				<div class="block md:hidden relative w-full h-10 z-0">
					<DoodleDecor variant="purple2" style="position: absolute; left: -150px; margin-top: -40px; max-width:300px;" />
				</div>

				<div class="grid grid-cols-1 lg:grid-cols-3 gap-15 md:gap-6 max-w-screen-xl w-full">
					<AuthorContainer
						href="/kognitivno-povedencheska-terapia-za-detsa"
						style="background:linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0)),url(/assets/assets_task_01jzpz2g6xecb88e22va909k3x_1752043792_img_0.webp); background-position: right 50% bottom 85% !important; background-repeat: no-repeat; background-size: cover;"
						name="Когнитивно поведенческа терапия за деца"
						description="Терапията подобрява разбирането и изпълнението на команди."
					/>
					<AuthorContainer
						href="/zvukova-stimulacia-za-detsa"
						style="background:linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0)),url(/assets/assets_task_01jzpz2g6xecb88e22va909k3x_1752043792_img_0.webp); background-position: right 50% bottom 85% !important; background-repeat: no-repeat; background-size: cover;"
						name="Звукова стимулация за деца"
						description="Терапията подобрява разбирането и изпълнението на команди."
					/>
					<AuthorContainer
						href="/obuchenie-za-koncentracia-i-vnimanie-za-detsa"
						style="background:linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0)),url(/assets/assets_task_01jzpz2g6xecb88e22va909k3x_1752043792_img_0.webp); background-position: right 50% bottom 85% !important; background-repeat: no-repeat; background-size: cover;"
						name="Обучение за концентрация и внимание за деца"
						description="Терапията подобрява разбирането и изпълнението на команди."
					/>
				</div>

				<div class="relative w-full h-10 z-0">
					<DoodleDecor variant="pink" style="position: absolute; left: -200px;" />
				</div>

				<div class="grid grid-cols-1 lg:grid-cols-3 gap-15 md:gap-6 max-w-screen-xl w-full">
					<AuthorContainer
						href=""
						style="background:linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0)),url(/assets/assets_task_01jzpz2g6xecb88e22va909k3x_1752043792_img_0.webp); background-position: right 50% bottom 85% !important; background-repeat: no-repeat; background-size: cover;"
						name=""
						description=""
					/>
					<AuthorContainer
						href=""
						style="background:linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0)),url(/assets/assets_task_01jzpz2g6xecb88e22va909k3x_1752043792_img_0.webp); background-position: right 50% bottom 85% !important; background-repeat: no-repeat; background-size: cover;"
						name=""
						description=""
					/>
					<AuthorContainer
						href=""
						style="background:linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0)),url(/assets/assets_task_01jzpz2g6xecb88e22va909k3x_1752043792_img_0.webp); background-position: right 50% bottom 85% !important; background-repeat: no-repeat; background-size: cover;"
						name=""
						description=""
					/>
				</div>

				<div class="md:block hidden relative w-full h-10 z-0">
					<DoodleDecor variant="blue2" style="position: absolute; right: -150px; margin-top: -200px;" />
				</div>

				<div class="block md:hidden relative w-full h-10 z-0">
					<DoodleDecor variant="blue2" style="position: absolute; right: 0px; margin-top: -30px; max-width:300px;" />
				</div>

				<div class="grid grid-cols-1 lg:grid-cols-3 gap-15 md:gap-6 max-w-screen-xl w-full">
					<AuthorContainer
						href=""
						style="background:linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0)),url(/assets/assets_task_01jzpz2g6xecb88e22va909k3x_1752043792_img_0.webp); background-position: right 50% bottom 85% !important; background-repeat: no-repeat; background-size: cover;"
						name=""
						description=""
					/>
					<AuthorContainer
						href=""
						style="background:linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0)),url(/assets/assets_task_01jzpz2g6xecb88e22va909k3x_1752043792_img_0.webp); background-position: right 50% bottom 85% !important; background-repeat: no-repeat; background-size: cover;"
						name=""
						description=""
					/>
					<AuthorContainer
						href=""
						style="background:linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0)),url(/assets/assets_task_01jzpz2g6xecb88e22va909k3x_1752043792_img_0.webp); background-position: right 50% bottom 85% !important; background-repeat: no-repeat; background-size: cover;"
						name=""
						description=""
					/>
				</div>

				<div class="md:block hidden relative w-full h-10 z-0">
					<DoodleDecor variant="purple2" style="position: absolute; right: 50px; margin-top: -200px;" />
				</div>

				<div class="block md:hidden relative w-full h-10 z-0">
					<DoodleDecor variant="purple2" style="position: absolute; right: 20px; margin-top: -70px; max-width:300px;" />
				</div>

				<div class="grid grid-cols-1 lg:grid-cols-3 gap-15 md:gap-6 max-w-screen-xl w-full">
					<AuthorContainer
						href=""
						style="background:linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0)),url(/assets/assets_task_01jzpz2g6xecb88e22va909k3x_1752043792_img_0.webp); background-position: right 50% bottom 85% !important; background-repeat: no-repeat; background-size: cover;"
						name=""
						description=""
					/>
					<AuthorContainer
						href=""
						style="background:linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0)),url(/assets/assets_task_01jzpz2g6xecb88e22va909k3x_1752043792_img_0.webp); background-position: right 50% bottom 85% !important; background-repeat: no-repeat; background-size: cover;"
						name=""
						description=""
					/>
					<AuthorContainer
						href=""
						style="background:linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0)),url(/assets/assets_task_01jzpz2g6xecb88e22va909k3x_1752043792_img_0.webp); background-position: right 50% bottom 85% !important; background-repeat: no-repeat; background-size: cover;"
						name=""
						description=""
					/>
				</div>
			</div>
		</>
	);
}
