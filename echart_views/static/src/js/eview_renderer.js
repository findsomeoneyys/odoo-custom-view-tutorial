odoo.define('echart_views.Renderer', function (require) {
    'use strict';

    var AbstractRenderer = require('web.AbstractRenderer');
    var core = require('web.core');

    var qweb = core.qweb;

    var EchartRenderer = AbstractRenderer.extend({
        init: function (parent, state, params) {
            console.log("eview renderer >>> init");
            this._super.apply(this, arguments);
            this.echart_option = {
                tooltip: {
                    trigger: 'item',
                    formatter: '{a} <br/>{b}: {c} ({d}%)'
                },
                title: {
                    text: '',
                    left: 'center',
                    top: 20,
                    textStyle: {
                        color: '#ccc'
                    }
                },
                legend: {
                    orient: 'vertical',
                    left: 10,
                    data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
                },
                series: [
                    {
                        name: '访问来源',
                        type: 'pie',
                        radius: ['50%', '70%'],
                        avoidLabelOverlap: false,
                        label: {
                            normal: {
                                show: false,
                                position: 'center'
                            },
                            emphasis: {
                                show: true,
                                textStyle: {
                                    fontSize: '30',
                                    fontWeight: 'bold'
                                }
                            }
                        },
                        labelLine: {
                            normal: {
                                show: false
                            }
                        },
                        data: [
                            {value: 335, name: '直接访问'},
                            {value: 310, name: '邮件营销'},
                            {value: 234, name: '联盟广告'},
                            {value: 135, name: '视频广告'},
                            {value: 1548, name: '搜索引擎'}
                        ]
                    }
                ]
            };
            

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
            this.$el.empty();

            this.echart_option.title.text = this.state.measureString;

            this.$el.append(qweb.render('echart_views.page'));
            var el = this.$el.find('#app')[0];
            var myChart = echarts.init(el);
            myChart.setOption(this.echart_option);
            return this._super.apply(this, arguments);
        },
    });

    return EchartRenderer;

});
