# Project 2

## Description

This Webpage was made to help Animal Crossing Players find items.

## Installation

N/A

## Usage

Create an account by clicking on the create account button and fill in the boxes, then login and search for an item or add an item to your account by pressing the add item button.

## License

Please refer to the LICENSE in the Repo.

## Link
https://stark-sands-43742.herokuapp.com/index.html






















## Create User Example
http://localhost:3001/api/user

Post
{
	"user_name": "Testreg",
	"password": "Drowssapasfr",
	"island_code": "DA-8473-2222-3124"
}

Response
{
	"id": 2,
	"user_name": "Testreg",
	"password": "Drowssapasfr",
	"island_code": "DA-8473-2222-3124"
}

## Login Example
http://localhost:3001/api/login

Post
{
	"user_name": "Testreg",
	"password": "Drowssapasfr"
}

Response
{
	"user_name": "Test",
	"id": 1,
	"island_code": "DA-8473-0407-4785"
}

## Create Item Example
http://localhost:3001/api/items

Post
{
	"item_name": "wood"
}

Response
{
	"id": 8,
	"item_name": "wood",
	"user_id": 1,
	"userId": 1
}

## Find Item Example
http://localhost:3001/api/find-item/wood
Get

Response
[
	{
		"id": 3,
		"user_id": 1,
		"item_name": "wood",
		"userId": 1,
		"user": {
			"user_name": "Test",
			"island_code": "DA-8473-0407-4785"
		}
	},
]

## Show All Users
http://localhost:3001/api/user/
Get

Response
[
	{
		"user_name": "Test",
		"id": 1,
		"island_code": "DA-8473-0407-4785"
	},
	{
		"user_name": "Testreg",
		"id": 2,
		"island_code": "DA-8473-2222-3124"
	}
]

## Show All Items
http://localhost:3001/api/items/
Get

Response
[
	{
		"id": 1,
		"user_id": 1,
		"item_name": "fish",
		"userId": 1
	},
]

## Logout
http://localhost:3001/api/logout
Get

Response
{}