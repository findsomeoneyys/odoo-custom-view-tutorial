odoo.define('echart_views.Controller', function (require) {
    'use strict';

    var AbstractController = require('web.AbstractController');
    var core = require('web.core');
    var qweb = core.qweb;

    var EchartController = AbstractController.extend({
        init: function (parent, model, renderer, params) {
            console.log("eview controller >>> init");
            this._super.apply(this, arguments);
        },
        /**
         * @returns {Deferred}
         */
        start: function() {
            console.log("eview controller >>> start");
            return this._super();
        },
        // 该方法会生成导航栏中的按钮，并可增加绑定按钮事件
        renderButtons: function ($node) {
            console.log("eview controller >>> renderButtons");
            this._super.apply(this, arguments);
        },
        /**
         * 执行该方法重新加载视图，默认逻辑是对调用update的封装
         * @param {Object} [params] This object will simply be given to the update
         * @returns {Deferred}
         */
        reload: function (params) {
            console.log("eview controller >>> reload");
            return this._super.apply(this, arguments);
        },
        /**
         * update是Controller的关键方法，在Odoo默认逻辑中，当用户操作搜索视图，或者部分内部更改会主动调用该方法。
         * 当我们自行编写相关方法时需要主动调用该函数。
         * 这个方法会调用model重新加载数据并通知renderer执行渲染
         * @param {*} params
         * @param {*} options
         * @param {boolean} [options.reload=true] if true, the model will reload data
         *
         * @returns {Deferred}
         */
        update: function (params, options) {
            console.log("eview controller >>> update");
            return this._super.apply(this, arguments);
        },
        /**
         * _update是update的回调方法，区别在于update是重新渲染页面主体部分，
         * _update则是渲染除了主体部分外的组件，比如控制面板中的组件 (buttons, pager, sidebar...)
         * @param {*} state
         * @returns {Deferred}
         */
        _update: function (state) {
            console.log("eview controller >>> _update");
            return this._super.apply(this, arguments);
        },


    });

    return EchartController;

});
