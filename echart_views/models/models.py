# -*- coding: utf-8 -*-
from odoo import models, fields, api


class Game(models.Model):
    _name = 'echart_views.game'
    _description = 'Games'

    name = fields.Char('游戏名', required=True)
    downloads = fields.Integer(string='下载量', default=0)
    platform = fields.Char(string='平台')

    @api.model
    def get_game_list(self):
        all_games = self.search([])
        game_list = [{'value': g.downloads, 'name': g.name} for g in all_games]
        return dict(game_list=game_list)