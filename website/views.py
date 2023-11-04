from flask import Blueprint

views = Blueprint('views', __name__)

@views.route('/')
def home():
    return '<h1>Hello world!</h1>'

@views.route('/portfolio')
def portfolio():
    return '<h1>Portfolio</h1>'