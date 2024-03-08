import type { PageContextServer } from 'vike/types'
import {payload} from "../../cms/rest-client";

export async function data(pageContext: PageContextServer) {
	const post = pageContext.routeParams?.post
		? await payload.collections.posts.find({
			where: {
				slug: {
					equals: pageContext.routeParams.post
				}
			}
		})
		: undefined

	return {post: post?.docs[0]}
}
