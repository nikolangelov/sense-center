import type { SerializedListItemNode, SerializedListNode } from '@lexical/list'
import type { SerializedHeadingNode, SerializedQuoteNode } from '@lexical/rich-text'
import type { LinkFields, SerializedLinkNode } from '@payloadcms/richtext-lexical'
import type { SerializedElementNode, SerializedLexicalNode, SerializedTextNode } from 'lexical'

import escapeHTML from 'escape-html'

import {
	IS_BOLD,
	IS_CODE,
	IS_ITALIC,
	IS_STRIKETHROUGH,
	IS_SUBSCRIPT,
	IS_SUPERSCRIPT,
	IS_UNDERLINE,
} from './nodeFormat'
import {JSX} from "solid-js";
import {Link} from "../../Link";

interface Props {
	nodes: SerializedLexicalNode[]
}

export function serializeLexical({ nodes }: Props): JSX.Element {
	return (
		<>
			{nodes?.map((_node, index): JSX.Element | null => {
				if (_node.type === 'text') {
					const node = _node as SerializedTextNode
					let text = <span innerHTML={escapeHTML(node.text)}/>

					if ((node.format & IS_BOLD) > 0) {
						text = <strong>{text}</strong>
					}
					if ((node.format & IS_ITALIC) > 0) {
						text = <em>{text}</em>
					}
					if ((node.format & IS_STRIKETHROUGH) > 0) {
						text = <span style={{ "text-decoration": "line-through" }}>{text}</span>
					}
					if ((node.format & IS_UNDERLINE) > 0) {
						text = <span class='underline'>{text}</span>
					}
					if ((node.format & IS_CODE) > 0) {
						text = <code>{text}</code>
					}
					if ((node.format & IS_SUBSCRIPT) > 0) {
						text = <sub>{text}</sub>
					}
					if ((node.format & IS_SUPERSCRIPT) > 0) {
						text = <sup>{text}</sup>
					}

					return text
				}

				if (_node === null) {
					return null
				}

				// NOTE: Hacky fix for
				// https://github.com/facebook/lexical/blob/d10c4e6e55261b2fdd7d1845aed46151d0f06a8c/packages/lexical-list/src/LexicalListItemNode.ts#L133
				// which does not return checked: false (only true - i.e. there is no prop for false)
				const serializedChildrenFn = (node: SerializedElementNode): JSX.Element | null => {
					if (node.children == null) {
						return null
					} else {
						if (node?.type === 'list' && (node as SerializedListNode)?.listType === 'check') {
							for (const item of node.children) {
								if ('checked' in item) {
									if (!item?.checked) {
										item.checked = false
									}
								}
							}
							return serializeLexical({ nodes: node.children })
						} else {
							return serializeLexical({ nodes: node.children })
						}
					}
				}

				const serializedChildren =
					'children' in _node ? serializedChildrenFn(_node as SerializedElementNode) : ''

				switch (_node.type) {
					case 'linebreak': {
						return <br/>
					}
					case 'paragraph': {
						return <p>{serializedChildren}</p>
					}
					case 'heading': {
						const node = _node as SerializedHeadingNode
						switch (node?.tag) {
							case 'h1':
								return <h1>{serializedChildren}</h1>
							case 'h2':
								return <h2>{serializedChildren}</h2>
							case 'h3':
								return <h3>{serializedChildren}</h3>
							case 'h4':
								return <h4>{serializedChildren}</h4>
							case 'h5':
								return <h5>{serializedChildren}</h5>
							default:
								return <h1>{serializedChildren}</h1>
						}
					}
					case 'list': {
						const node = _node as SerializedListNode

						type List = Extract<keyof JSX.IntrinsicElements, 'ol' | 'ul'>
						switch (node?.tag) {
							case 'ol':
								return <ol>{serializedChildren}</ol>
							case 'ul':
								return <ul>{serializedChildren}</ul>
							default:
								return <ul>{serializedChildren}</ul>
						}
					}
					case 'listitem': {
						const node = _node as SerializedListItemNode

						if (node?.checked != null) {
							return (
								<li
									aria-checked={node.checked ? 'true' : 'false'}
									role="checkbox"
									tabIndex={-1}
									value={node?.value}
								>
									{serializedChildren}
								</li>
							)
						} else {
							return (
								<li value={node?.value}>
									{serializedChildren}
								</li>
							)
						}
					}
					case 'quote': {
						const node = _node as SerializedQuoteNode
						return <blockquote>{serializedChildren}</blockquote>
					}
					case 'link': {
						const node = _node as SerializedLinkNode
						const fields: LinkFields = node.fields
						if (fields.linkType === 'custom') {
							return (
								<Link
									href={escapeHTML(fields.url)}
									newTab={fields?.newTab}
								>
									{serializedChildren}
								</Link>
							)
						} else {
							return <span>Internal link coming soon</span>
						}
					}

					default:
						return null
				}
			})}
		</>
	)
}
