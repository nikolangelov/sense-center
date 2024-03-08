import {serializeLexical} from "../../components/RichText/serialize";
import {useData} from "vike-solid/useData";
import {Post} from "../../cms/payload-types";

export default function Page() {
	const {post} = useData<{post: Post}>()
	return serializeLexical({ nodes: post.content!.root.children })
} 
