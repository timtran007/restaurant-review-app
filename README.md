# Foodies

Foodies is a web application that allows users to submit reviews of curated restaurants. Users are able to track restaurants they have visited as well as create, edit or delete their reviews. 

Foodies uses a Ruby on Rails back end API and a React front end.

## Installation

Foodies is using Ruby's 2.7.4 version and Rails 7.0.4.1

You can check your machine's Ruby and Rails version by typing into terminal: 

```
$ ruby -v
$ rails -v
```

Install and use the current versions listed above.

## Usage

### Starting the Back End
To start the back end, simply navigate to your cloned repo. 

And let's run the following:
```
bundle install
```

This will download all the dependencies within Rails for the application to run!

After everything has been installed, we can run the following in the terminal:
```
$ rails db:migrate db:seed
```
This will create the necessary migrations for the tables within the API and will seed dummy data

After the migration, you can start up the server:

```
$ rails s
```

You will be hosting the API on port 3000, so make sure that it is available.

### Starting the Front End
To start the React front end, you can run the following code in a new terminal:

```
npm install --prefix client
```

This will download all the dependencies within Foodies to run the front end. 

After the dependencies have been installed, go ahead and run the following in the terminal in order to start the front end application:

```
npm start --prefix client
```

Great! The front end will be running on port 4000 and you should see the following image: 

![Image_Of_App](https://drive.google.com/file/d/1-Tlc9d3uHNXSv6v5qnBGk0VosToTy_1U/view)

### Signing Up For an Account

Users can sign up for an account by clicking on the signup link at the top right corner and filling out the following form

![Screenshot_Signup_Form](https://drive.google.com/file/d/14zOmYIOOJ8k2G68oziuM4osGE6YnDFYO/view)

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)