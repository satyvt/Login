
from os import environ
from Sockets import *
from flask import Flask, render_template
import sqlite3
import datetime

connection = sqlite3.connect("database.db")
cursor = connection.cursor()
cursor.execute("SELECT * from users")



app - Flask(__name__)

app.config('SECRET_KEY')

people = "CREATE TABLE [IF NOT EXISTS] users (column_1 String PRIMARY KEY column_2 String PRIMARY KEY) [WITHOUT ROWID]"

list = cursor.fectchall()

def go_to_login():
    @app.route('login.html')
    
def login():
    @app.route('success.html')
    return render_template("login.html")

def signups():
    @app.route('login.html')
    return render_template("signup.html")

    