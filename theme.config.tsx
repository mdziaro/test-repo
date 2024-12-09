import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs';

const config: DocsThemeConfig = {
    logo: <span>Learn Git</span>,
    project: {
        link: 'https://github.com/Mikosztyla/git-course',
    },
    docsRepositoryBase: 'https://github.com/Mikosztyla/git-course/tree/main',
    editLink: {
        content: 'Edit this page on GitHub',
    },
    feedback: {
        content: 'Found an issue? Let us know!',
    },
    footer: {
        content: 'Learn Git - A Comprehensive Guide',
    },
};

export default config;
