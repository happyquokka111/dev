# Development

### Link to Deployed Website

If you used the stencil code, this is `https://happyquokka111.github.io/dev

### Goal and Value of the Application

The goal of this application is to allow an easy way for people interested in
cryptocurrency to buy crypto, sorting by price, and filtering based on
the change in price in the last 24 hours and the market cap.

### Usability Principles Considered

I maintained the shopping cart in a fixed position, so they are easy to click
while the user scrolls through the options of items. I also used ranges that split the data
up reasonably to make searching for a particular type of coin more efficient.

### Organization of Components

I used a Coin component to account for each coin item, which I passed into the App file.

### How Data is Passed Down Through Components

Data is passed through using props. This is used to get information about the product
and the functions to add/remove things from their cart.

### How the User Triggers State Changes

The user triggers state changes when they add a filter and use one of the sorting
options. They also trigger state changes when they add coins to the cart.
