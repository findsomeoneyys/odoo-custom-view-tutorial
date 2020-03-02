odoo.define('echart_views.Renderer', function (require) {
    'use strict';

    var AbstractRenderer = require('web.AbstractRenderer');
    var core = require('web.core');

    var qweb = core.qweb;

    var EchartRenderer = AbstractRenderer.extend({
        init: function (parent, state, params) {
            console.log("eview renderer >>> init");
            this._super.apply(this, arguments);

        },
        /**
         *  renderer的渲染逻辑部分，自行渲染相关数据并插入this.$el中
         *
         * @abstract
         * @private
         * @returns {Deferred}
         */
        _render: function () {
            console.log("eview renderer >>> _render");
            var content = $("<div><p> eview </p></div>");
            this.$el.append(content);
            return this._super.apply(this, arguments);
        },
    });

    return EchartRenderer;

});
