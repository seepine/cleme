module.exports = ctx => ({
    base: '/climb/',
    lang: 'zh-CN',
    title: 'Climb',
    description: 'climb-ui',
    themeConfig: {
        smoothScroll: true,//页面滚动
        repo: 'seepine/climb',
        logo: `/logo.png`,
        editLinks: true,
        docsDir: 'docs',
        editLinkText: '在 GitHub 上编辑此页',
        lastUpdated: '上次更新',
        nav: [
            {
                text: '首页',
                link: '/'
            },
            {
                text: '表单',
                link: '/form/'
            }, {
                text: '表格',
                link: '/table/'
            }, {
                text: '其他组件',
                link: '/component/'
            }
        ],
        sidebar: {
            '/form/': require('./sidebar/form'),
            '/table/': require('./sidebar/table'),
            '/component/': require('./sidebar/component')
        }
    },
    head: [
        ['link', {rel: 'icon', href: `/logo.png`}],
        ['script', {src: 'https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js'}],
        ['script', {src: 'https://cdn.jsdelivr.net/npm/react-dom/umd/react-dom.production.min.js'}],
        ['script', {src: 'https://cdn.jsdelivr.net/npm/vue/dist/vue.min.js'}],
        ['script', {src: 'https://cdn.jsdelivr.net/npm/@babel/standalone/babel.min.js'}],
        ['script', {src: 'https://cdn.bootcdn.net/ajax/libs/element-ui/2.13.2/index.js'}],
        ['link', {rel: "stylesheet", href: 'https://cdn.bootcdn.net/ajax/libs/element-ui/2.13.2/theme-chalk/index.css'}]
    ],
    plugins: ['demo-block'],
    extraWatchFiles: [
        '.vuepress/nav/zh.js', './sidebar/component.js','./sidebar/form.js','./sidebar/table.js'
    ]
})

