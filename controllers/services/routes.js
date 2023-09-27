

module.exports = [
     {
        method: 'GET',
        path: '/company/services/:serviceID',
        handler: {
            render: 'services/view',
            auth: false,
            services: [{
                key: 'service',
                action: {
                    version: 1,
                    name: 'company.services.get',
                },
                rest: {
                    method: 'get',
                    path: 'company/services/:id',
                    endpoint: 'onehost'
                },
                params: {
                    id: {
                        key: 'serviceID',
                        ref: 'params',
                        type: 'string'
                    }
                },
            }]
        }
    },
    {
        method: 'GET',
        path: '/company/services/:serviceID/namespaces/:nsID',
        handler: {
            views: 'services/view',
            services: [{
                key: 'service',
                action: {
                    version: 1,
                    name: 'company.namespace.resolve',
                },
                rest: {
                    method: 'post',
                    path: 'company/services/:id/namespaces/:namespace',
                    endpoint: 'onehost'
                },
                params: {
                    id: {
                        key: 'serviceID',
                        ref: 'params',
                        type: 'string'
                    },
                    namespace: {
                        key: 'nsID',
                        ref: 'params',
                        type: 'string'
                    }
                },
            }, {
                key: 'namespace',
                action: {
                    version: 1,
                    name: 'company.namespace.get',
                },
                rest: {
                    method: 'get',
                    path: 'company/namespaces/:id',
                    endpoint: 'onehost'
                },
                params: {
                    id: {
                        key: 'nsID',
                        ref: 'params',
                        type: 'string'
                    }
                },
            }]
        }
    },
    {
        method: 'GET',
        path: '/company/services',
        handler: {
            views: 'services/index',
            services: [{
                key: 'services',
                action: {
                    version: 1,
                    name: 'company.services.list',
                },
                rest: {
                    method: 'get',
                    path: 'company/services',
                    endpoint: 'onehost'
                },
                params: {
                    pageSize: {
                        ref: 'query',
                        default: 10,
                        type: 'number'
                    },
                    page: {
                        ref: 'query',
                        default: 1,
                        type: 'number'
                    },

                },
            }]
        }
    }
]