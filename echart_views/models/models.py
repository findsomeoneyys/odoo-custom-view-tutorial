# -*- coding: utf-8 -*-
from odoo import models, fields, api


class Game(models.Model):
    _name = 'echart_views.game'
    _description = 'Games'

    name = fields.Char('游戏名', required=True)
    downloads = fields.Integer(string='下载量', default=0)
    platform = fields.Char(string='平台')