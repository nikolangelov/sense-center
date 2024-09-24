import { MetaProvider, Title, Meta } from 'solid-meta';

export function NoIndexComponent() {
  return (
    <MetaProvider>
      <Meta name="robots" content="noindex" />
      {/* Add other meta tags as needed */}
    </MetaProvider>
  );
}