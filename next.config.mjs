import nextra from 'nextra';

const withNextra = nextra({
    theme: 'nextra-theme-docs',
    themeConfig: './theme.config.tsx',
    latex: true,
    defaultShowCopyCode: true,
});

const nextConfig = {
    output: 'export',
    reactStrictMode: true,
    images: {
        unoptimized: true,
    },
    trailingSlash: true,
};

export default withNextra(nextConfig);
