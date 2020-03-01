# -*- coding: utf-8 -*-
{
    'name': "echart_views",

    'summary': """
        odoo 自定义视图教程""",

    'author': "yunshen",
    'website': "https://github.com/findsomeoneyys/odoo-custom-view-tutorial",

    # Categories can be used to filter modules in modules listing
    # Check https://github.com/odoo/odoo/blob/12.0/odoo/addons/base/data/ir_module_category_data.xml
    # for the full list
    'category': 'Uncategorized',
    'version': '0.2',

    # any module necessary for this one to work correctly
    'depends': ['base'],

    # always loaded
    'data': [
        'security/ir.model.access.csv',

        'data/data.xml',

        'views/templates.xml',
        'views/views.xml',
    ],
    'installable': True,
    'application': True,
}