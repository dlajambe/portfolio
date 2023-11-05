from flask import Flask
from flask_assets import Bundle, Environment
from .views import views
from .auth import auth

def create_app():
    app = Flask(__name__)
    app.config['SECRET_KEY'] = 'my key'

    app.register_blueprint(views, url_prefix='/')
    app.register_blueprint(auth, url_prefix='/')

    """Bundle paths are relative to the project's 'static' directory.
    This is required to compile the project's SASS files into CSS files
    that can be used by a browser.

    Updating the version number upon each compilation ensures that users
    are forced to use the new version when the css file changes instead
    of the old version that was cachced by their browser the last time
    they loaded the page.
    """
    assets = Environment(app)
    scss = Bundle(
        'scss/main.scss', 
        filters='libsass', 
        output='gen/main.%(version)s.css')
    assets.register('main_css', scss)
    return app

