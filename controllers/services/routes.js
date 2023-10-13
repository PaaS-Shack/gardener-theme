

module.exports = [
    {
        method: 'GET',
        path: '/page/:slug',
        handler: {
            render: 'page.ejs',
            layout: false,
            auth: false,
            services: [{
                key: 'page',
                rest: {
                    method: 'get',
                    path: 'pages/:slug',
                    endpoint: 'strapi'
                },
                params: {
                    slug: {
                        key: 'slug',
                        ref: 'params',
                        type: 'string'
                    }
                },
            }]
        }
    }
]