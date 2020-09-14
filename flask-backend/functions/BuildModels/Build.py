from functions.Cryptocompare import GetCoins

# Build coin model

def build_coin(name):
    coin = {
        "id" : name,
        "gains_daily" : GetCoins.get_gains(name, days=1),
        "gains_weekly" : GetCoins.get_gains(name, days=7),
        "gains_monthly" : GetCoins.get_gains(name, days=30),
    }

    return coin