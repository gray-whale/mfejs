module.exports = {
    title: 'MFEJS',
    description: '现代化前端开发框架',
    base: '/mfejs/',
    head: [
        //['link', { rel: 'icon', href: '/mfejs/favicon.ico' }]
    ],
    markdown: {
        lineNumbers: true, //显示代码行数
    },
    lastUpdated: true,
    themeConfig: {
        returnToTopLabel: "返回顶部",
        darkModeSwitchLabel: "外观",
        sidebarMenuLabel: "菜单",
        search: {
            provider: 'local',
            options: {
                translations: {
                    button: {
                        buttonText: '搜索',
                        buttonAriaLabel: '搜索'
                    },
                    modal: {
                        noResultsText: '无法找到相关结果',
                        resetButtonTitle: '清除查询条件',
                        footer: {
                            selectText: '选择',
                            navigateText: '切换'
                        }
                    }
                }
            }
        },
        logo: "/logo.png",
        nav: [
            {
                text: "指南", 
                link: '/guide/index'
            },
            {
                text: "api", 
                link: '/api/index'
            }
        ],
        outlineTitle: '在本页面',
        lastUpdatedText: '最近更新时间',
        footer: {
            message: 'Released under the MIT License.',
            copyright: 'Copyright © 2022-present codeteenager'
        },
        smoothScroll: true,
        socialLinks: [{ icon: "github", link: "https://github.com/gray-whale/mfejs/" }],
        sidebar: {
            "/guide/": [
                {
                    text: "介绍",
                    items: [
                        {
                            text: "快速上手",
                            link: "/guide/index",
                        }
                    ],
                }
            ],
            "/api/": [
                {
                    text: "插件开发",
                    items: [
                        {
                            text: "api",
                            link: "/api/index",
                        },
                    ],
                }
            ]
        },
        docFooter: {
            prev: '上一页',
            next: '下一页'
        }
    }
}