odoo.define('echart_views.View', function (require) {
    'use strict';

    var AbstractView = require('web.AbstractView');
    var view_registry = require('web.view_registry');
    var Controller = require('echart_views.Controller');
    var eViewModel = require('echart_views.Model');
    var eViewRenderer = require('echart_views.Renderer');


    var EchartView = AbstractView.extend({
        display_name: 'EchartView',
        icon: 'fa-bar-chart',
        cssLibs: [
        ],
        jsLibs: [
        ],
        config: {
            Model: eViewModel,
            Controller: Controller,
            Renderer: eViewRenderer,
        },
        viewType: 'eview',
        groupable: false,
        /**
         * View的入口，会传入相关视图定义的参数(视图结构，字段信息等。。)，
         * 函数会处理并生产3个主要字段：this.rendererParams， this.controllerParams，this.loadParams
         * 分别对应renderer，controller，model的初始化参数，我们可以根据需要自行对相关增加相关参数
         * @param {Object} viewInfo.arch
         * @param {Object} viewInfo
         * @param {Object} viewInfo.fields
         * @param {Object} viewInfo.fieldsInfo
         * @param {Object} params
         * @param {string} params.modelName The actual model name
         * @param {Object} params.context
         */
        init: function (viewInfo, params) {
            console.log("eview view >>> init");
            this._super.apply(this, arguments);
        },
        /**
         * View的主要的执行逻辑，这个方法会分别执行getModel，getRenderer初始化相关组件，
         * 然后对renderer, model设置controller就完成了作用，之后的View相关操作与这个类无关了
         * @param {}} parent 
         */
        getController: function (parent) {
            console.log("eview view >>> getController");
            return this._super.apply(this, arguments);
        },
        // 这里会初始化model，并执行model中load方法
        getModel: function (parent) {
            console.log("eview view >>> getModel");
            return this._super.apply(this, arguments);
        },
        getRenderer: function (parent, state) {
            console.log("eview view >>> getRenderer");
            return this._super.apply(this, arguments);
        },

    });

    view_registry.add('eview', EchartView);

    return EchartView;

});
