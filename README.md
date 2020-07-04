# Currency Exchanger
**Weekly Project for Epicodus**  
**By Peter Grimm, 07.03.2020**

## Description

Week 6 project for Epicodus. A program that converts currencies utilizing an exchange rate API. Designed to showcase my knowledge and ability using APIs, asynchrony, exception handling, and managing API keys.

## Specifications
* User can enter a currency amount, and specify which currency they are converting from, and which currency they are converting to
* User should see the amount they entered in the converted currency
* User can specify to convert to all available currencies
* Currency name and symbol should be displayed
* If the query response doesn't include that particular currency, the application should return a notification that states the currency in question doesn't exist.


## Setup/Installation Requirements

* Acquire an API key from `https://www.exchangerate-api.com/` by creating an account here `https://www.exchangerate-api.com/app/sign-up`.
* Your API key will be listed at the top of your dashboard when you create an account and sign in.
* Clone this repository using the command `git clone https://github.com/pagrimm/currency-exchanger.git`
* Browse to the `currency-exchanger` folder.
* Create a file named `.env` either by using the command `touch .env` or through your file explorer.
* Add the line `API_KEY = {your key}` substituting `{your key}` for the API key you received earlier.
* Run `npm install` to install dependencies.
* Run `npm run start` to spin up a live server to view the site.

## Technologies Used

HTML  
CSS  
Bootstrap 4.5.0  
jQuery 3.5.1  
Popper 1.16.1

## Legal

Copyright (c) 2020, **_Peter Grimm_**  
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) This software is licensed under the MIT license.
