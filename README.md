# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

## messagesテーブル
|Column|Type|Options|
|------|----|-------|
|body|text|
|image|string|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :user
- belongs_to :group

## groups_usersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user

## groupsテーブル
|Column|Type|Options|
|------|----|-------|
|group_name|varchar(255)|null: false|

### Association
- has_many :users, through :groups_users
- has_many :messages

## usersテーブル

|Column|Type|Options|
|------|----|-------|
|email|varchar(255)|null: false|
|user_name|varchar(255)|null: false|
|encrypted_password|varchar(255)|null: false|
|reset_password_token|varchar(255)|
|reset_password_sent_at|datetime|
|remember_created_at|datetime|

### Association
- has_many :groups, through :groups_users
- has_many :messages


* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...
