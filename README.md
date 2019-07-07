# Auth Demos

## Setup

```sh
# ruby and rails
# assuming asdf
asdf install ruby 2.6.3
gem install rails --pre
rails _6.0.0.rc1_ new auth-demos --database=postgresql --skip-test

cat > .tool-versions
ruby 2.6.3

# create and migrate db and run rails server
bin/rails db:create db:migrate
rails server
```

## Rails & Devise

```sh
# add devise gem
rails generate devise:install
rails generate devise User
rails db:migrate
```

## Rails & Clearnace

## Extend to React

```sh
rails webpacker:install:react
```

## Authorizationn from scratch

## JWT and an Auth service

