odoo.define('echart_views.Model', function (require) {
    'use strict';

    var AbstractModel = require('web.AbstractModel');

    var EchartModel = AbstractModel.extend({
        /**
         * 该方法需要返回renderer所需的数据
         * 数据可以通过load/reload执行相关获取数据方法时，设置到该对象上
         */
        get: function () {
            console.log("eview model >>> get");
            return this.data;
        },
        /**
         * 只会初次加载时执行一次，需要自定义相关数据获取方法获取数据并设置到该对象上
         *
         * @param {Object} params
         * @param {string} params.modelName the name of the model
         * @returns {Deferred} The deferred resolves to some kind of handle
         */
        load: function (params) {
            console.log("eview model >>> load");
            this.modelName = params.modelName;
            this.domain = params.domain || [];
            this.measure = params.measure;
            this.measures = params.measures;
            this.displayNameField = params.displayNameField;
            return this._fetchData();
        },
        /**
         * 当有相关数据变动时，重新获取数据。
         *
         * @param {Object} params
         * @returns {Deferred}
         */
        reload: function (handle, params) {
            console.log("eview model >>> reload");
            if ('measure' in params) {
                this.measure = params.measure;
            }
            if ('domain' in params) {
                this.domain = params.domain;
            }
            return this._fetchData();
        },
        _fetchData: function () {
            var self = this;
            var measureFieldInfo = this.measures[this.measure];
            var measureString = measureFieldInfo['string'];
            var seriesLegend = [];
            if (measureFieldInfo.type === 'integer') {
                return this._rpc({
                    model: this.modelName,
                    method: 'search_read',
                    domain: this.domain,
                    fields: [this.measure, this.displayNameField],
                }).then(function (result) {
                    var seriesData = _.map(result, function (data) {
                        return {value: data[self.measure], name: data[self.displayNameField]}
                    });
                    _.each(seriesData, function (d) {
                        seriesLegend.push(d['name']);
                    });
                    self.data = {
                        seriesData: seriesData,
                        measureString: measureString,
                        measure: self.measure,
                        seriesLegend: seriesLegend
                    };
                });
            } else {
                return this._rpc({
                    model: this.modelName,
                    method: 'search_read',
                    domain: this.domain,
                    fields: [this.measure],
                }).then(function (result) {
                    var resGroupAndCount = _.pairs(_.countBy(result, function (o) {
                        return o[self.measure]
                    }));
                    var seriesData = _.map(resGroupAndCount, function (data) {
                        return {value: data[1], name: data[0]}
                    });
                    _.each(seriesData, function (d) {
                        seriesLegend.push(d['name']);
                    });
                    self.data = {
                        seriesData: seriesData,
                        measureString: measureString,
                        measure: self.measure,
                        seriesLegend: seriesLegend
                    };
                });
            }
        },
    });

    return EchartModel;

});
