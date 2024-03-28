from behave import *
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.chrome.webdriver import WebDriver
import time 
from selenium import webdriver
from selenium.webdriver.common.by import By

@given("Launching chrome browser")
def launch_browser(context):
    context.driver = webdriver.Edge()
    

@when('Open facebook.com')
def openFB(context):
    context.driver.maximize_window()
    context.driver.get("https://www.facebook.com/login")
    time.sleep(5)


@when('Enter userName {username}')
def step_impl(context, username):
    context.driver.find_element(By.XPATH, "//*[@id='email']").send_keys(username)
    time.sleep(5)

@when('Enter password {password}')
def step_impl(context, password):
    context.driver.find_element(By.XPATH, "//*[@id='pass']").send_keys(password)
    time.sleep(10)


@when('Click on Log In button')
def step_impl(context):
    context.driver.find_element(By.XPATH, "/html/body/div[1]/div[1]/div[1]/div/div/div/div[2]/div/div[1]/form/div[2]/button").click()
    time.sleep(5)


@then('User must successfully login to the facebook account')
def step_impl(context):
    raise NotImplementedError('STEP: Then User must successfully login to the facebook account')