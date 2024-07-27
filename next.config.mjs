import { createRequire } from 'module';
const require = createRequire(import.meta.url);
import mdx from '@next/mdx';

const withMDX = mdx({
  extension: /\.mdx?$/,
});

const nextConfig = {
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
};

export default withMDX(nextConfig);
