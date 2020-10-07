from flask import Blueprint, request, jsonify, render_template
import requests

from functions.BuildModels import Build

# Make blueprint

main = Blueprint('main', __name__)

# Access Tradingview

@main.route('/')
def index():
       return render_template('index.html')

# POST to database

@main.route("/coins", methods=['GET'])
def coins():
       if request.method == 'GET':
              
              "Import coin data"
              coins_input = ["LTO", "DUSK", "ANKR", "BAND", "ETH", "RLC", "COTI"]
              coins = []

              "Build coin data into database objects, add those objects to a list"
              for coin in coins_input:
                     coins.append(Build.build_coin(coin))
                  
       return {"Coins":coins}