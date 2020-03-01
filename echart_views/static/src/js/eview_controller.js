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
        start: function() {
            console.log("eview controller >>> start");
            this._super();
        },
        // 该方法会生成导航栏中的按钮，并可增加绑定按钮事件
        renderButtons: function ($node) {
            console.log("eview controller >>> renderButtons");
            this._super.apply(this, arguments);
            this.$buttons = $(qweb.render('echart_views.buttons'));
            this.$measureList = this.$buttons.find('.o_echart_measures_list');
            this.$buttons.click(this._onButtonClick.bind(this));
            this.$buttons.appendTo($node);
        },
        // 执行该方法重新加载视图，默认逻辑是对调用update的封装
        reload: function (params) {
            console.log("eview controller >>> reload");
            this._super.apply(this, arguments);
        },
        /**
         * update是Controller的关键方法，在Odoo默认逻辑中，当用户操作搜索视图，或者部分内部更改会主动调用该方法。
         * 当我们自行编写相关方法时需要主动调用该函数。
         * 这个方法会调用model重新加载数据并通知renderer执行渲染
         * @param {*} params 
         * @param {*} options 
         */
        update: function (params, options) {
            console.log("eview controller >>> update");
            this._super.apply(this, arguments);
        },
        /**
         * _update是update的回调方法，区别在于update是重新渲染页面主体部分，
         * _update则是渲染除了主体部分外的组件，比如控制面板中的组件 (buttons, pager, sidebar...)
         * @param {*} state 
         */
        _update: function (state) {
            console.log("eview controller >>> _update");
            this._super.apply(this, arguments);
        },
        _onButtonClick: function (event) {
            var $target = $(event.target);
            var field;
            if ($target.parents('.o_echart_measures_list').length) {
                event.preventDefault();
                event.stopPropagation();
                field = $target.data('field');
                _.each(this.$measureList.find('.dropdown-item'), function (item) {
                    var $item = $(item);
                    $item.toggleClass('selected', $item.data('field') === field);
                });
            }
        },

    });

    return EchartController;

});
