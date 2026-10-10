
from flask import Flask, render_template, request, redirect
import datetime
import psycopg2
import os
from dotenv import load_dotenv

load_dotenv("secret1.env")

start1 = Flask(__name__)

connect1 = psycopg2.connect(
    host = os.getenv("host1"),
    port = os.getenv("port1"),
    database = os.getenv("database1"),
    user = os.getenv("user1"),
    password = os.getenv("password1")
)

execute1 = connect1.cursor()

@start1.after_request
def CSP_rules(header1):
    rules1 = ("default-src 'self'; "
              "script-src 'self'; "
              "object-src 'none'; ")
    
    header1.headers["Content-Security-Policy"] = rules1
    return header1

@start1.route("/", methods = ["POST", "GET"])
def first1():
    if request.method == "POST":
        input1 = request.form["input1"]
        if len(input1.strip()) >= 1:

            execute1.execute("""CREATE TABLE IF NOT EXISTS datatravel1(
                id1 SERIAL PRIMARY KEY,
                name1 TEXT,
                date1 TEXT
                )""")

            datetime1 = datetime.datetime.now()
            execute1.execute("INSERT INTO datatravel1 (name1, date1) VALUES (%s, %s)", (input1, datetime1))
            connect1.commit()
            return redirect("/scheme1")
        else:
            return render_template("html_file.html", message = "ENTER A VALID NAME")
    return render_template("html_file.html")

@start1.route("/scheme1")
def second2():
    return render_template("html2_file.html")

start1.run(debug=True)

connect1.cancel()


