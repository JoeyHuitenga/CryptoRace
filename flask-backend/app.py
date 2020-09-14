from flask import Flask, render_template
from flask import current_app as app
from flask_bootstrap import Bootstrap
import os

def create_app():
    app = Flask(__name__)

    from api import routes  
    app.register_blueprint(routes.main)

    return app

# create app and db
app = create_app()

# Init bootstrap
Bootstrap(app)