export function PriceTable(props: { title: string, children: HTMLElement | any }) {

	return (
		<div>
			<table class="w-full m-auto font-sans">
				<thead style="box-shadow: 0px 20px 20px 1px rgb(84 89 95 / 10%);">
					<tr class="h-20">
						<td class="c-paper bg-#2e5c47 font-size-7 pl-5 b-rd-lt-3"><strong>{props.title}</strong></td>
						<td class="c-paper bg-#2e5c47 font-size-7 pl-5 b-rd-rt-3"><strong>Price</strong></td>
					</tr>
				</thead>
				<tbody style="box-shadow: 0px 20px 20px 1px rgb(84 89 95 / 10%);">
					{props.children}
					<tr>
						<td class="b-rd-lb-3 b-rd-rb-3 bg-#2e5c47" colspan="3" style="box-shadow: 0px 20px 20px 1px rgb(247 247 247/ 100%);"><p class="font-size-3.5 md-font-size-4 px-4 md-my-2 c-paper md-line-height-5 line-height-5 word-spacing-0.5">*We also offer performing services out of working hours and at night, which will be included in the final price.<br></br>**Minimum charge £65</p></td>
					</tr>
				</tbody>
			</table>
		</div>
	);
}