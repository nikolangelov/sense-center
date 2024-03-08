import {serializeLexical} from "../../components/RichText/serialize";
import {useData} from "vike-solid/useData";
import {Post} from "../../cms/payload-types";

export default function Page() {
	const {post} = useData<{post: Post}>()
	return <>
		<h1 class='typography-title'>{post.title}</h1>
		<img src={typeof post.image === 'string' ? post.image : post.image?.url ?? ""}/>
		{serializeLexical({ nodes: post.content!.root.children })}
	</>
} 
