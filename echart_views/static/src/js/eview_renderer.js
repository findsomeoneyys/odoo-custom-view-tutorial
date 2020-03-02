odoo.define('echart_views.Renderer', function (require) {
    'use strict';

    var AbstractRenderer = require('web.AbstractRenderer');
    var core = require('web.core');

    var qweb = core.qweb;

    var EchartRenderer = AbstractRenderer.extend({
        events: _.extend({}, AbstractRenderer.prototype.events, {
            'click #reloadView': '_onClickReloadView',
        }),
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
                    data: []
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
                        data: []
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
            this.echart_option.series[0].name = this.state.measureString;
            this.echart_option.series[0].data = this.state.seriesData;
            this.echart_option.legend.data = this.state.seriesLegend;

            this.$el.append(qweb.render('echart_views.page'));
            var el = this.$el.find('#app')[0];
            var myChart = echarts.init(el);
            myChart.setOption(this.echart_option);
            return this._super.apply(this, arguments);
        },
        _onClickReloadView: function (ev) {
            ev.preventDefault();
            console.log("eview renderer >>> _onClickReloadView");
            this.trigger_up('reload_view');
            
        }
    });

    return EchartRenderer;

});
