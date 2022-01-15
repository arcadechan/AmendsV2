const path = require('path')
const fs = require('fs/promises')

module.exports = {
  reactStrictMode: true,
  trailingSlash: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')]
  },
  exportPathMap: async function(
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ){
    const paths = {
      '/': { page: '/' },
      '/about': { page: '/about' },
      '/posts': { page: '/posts' }
    }

    const posts = await fs.readdir(path.join('content/posts'))
    
    posts.forEach( filename => {
      const slug = filename.replace('.md', '');

      paths[`/posts/${slug}`] = {
        page: '/posts/[slug]'
      }
    });

    return paths;
  },
  webpack: (cfg) => {
    cfg.module.rules.push({
      test: /\.md$/,
      loader: 'frontmatter-markdown-loader',
      options: { mode: ['react-component'] }
    })
    return cfg;
  }
}
