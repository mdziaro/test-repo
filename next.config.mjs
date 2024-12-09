import nextra from 'nextra'


const nextConfig = {
    output: 'export',
    reactStrictMode: true,
    images: {
        unoptimized: true
    },
    trailingSlash: true,
    basePath: '/test-repo', 
    assetPrefix: '/test-repo'
}

const withNextra = nextra({
    theme: 'nextra-theme-docs',
    themeConfig: './theme.config.tsx',
    latex: true,
    defaultShowCopyCode: true,
})

export default withNextra(nextConfig)