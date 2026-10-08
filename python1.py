
from flask import Flask, render_template, request, redirect
import datetime
import psycopg2

start1 = Flask(__name__)

@start1.route("/", methods = ["POST", "GET"])
def first1():
    return render_template("html_file.html")

start1.run(debug=True)