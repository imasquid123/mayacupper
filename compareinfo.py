import os
import sqlite3
from flask import Flask, request, session, g, redirect, url_for, abort, \
 	render_template, flash
 
app = Flask(__name__)
# The actual app
@app.route('compareInfo.py')
 
# Return the data from ajax.js
def get_data():
    userdata = request.values
    return userdata
 
 
