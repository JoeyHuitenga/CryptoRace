import cryptocompare as cc

import datetime as dt

def get_price(coin):
    """Gets price of cryptocurrency

    Args:
        coin (str): Name of crypto

    Returns:
        float: Price of crypto
    """
    return cc.get_price(coin, 'EUR')[coin]['EUR']

def get_hist_price(coin, **kwargs):
    """Gets historical price of cryptocurrency

    Args:
        coin (str): Name of crypto
        datetime.timedelta kwargs: Amount of time you want to go back

    Returns:
        float: Price of crypto x time back
    """
    td = dt.timedelta(**kwargs)
    return cc.get_historical_price(coin, 'EUR', dt.datetime.now()-td)[coin]['EUR']

def get_gains(coin, **kwargs):
    return round((get_price(coin)/get_hist_price(coin, **kwargs)-1)*100,2)