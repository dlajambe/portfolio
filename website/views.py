from flask import Blueprint, render_template

views = Blueprint('views', __name__)

@views.route('/')
def index():
    return render_template('index.html')

@views.route('/about')
def about():
    return render_template('about.html')

# @views.route('/projects')
# def projects():
#     return render_template('projects.html')

@views.route('/publications')
def publications():
    return render_template('publications.html')

@views.route('/contact')
def contact():
    return render_template('contact.html')