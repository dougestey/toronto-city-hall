# Toronto City Hall #
### Time to take it back. ###

You vote once every four years, but how much else do you know about what happens at city hall? Does your elected councillor even show up for work? What motions are being passed?

- Track your city councillor's progress & compare it against the rest of the chamber
- Access detailed attendance & voting records for each member of city council
- Look up individual councillor profiles and voting trends
- Get in direct contact with your city councillor about a particular issue

<img src="https://raw.githubusercontent.com/designcofounders/toronto-city-hall/master/screens/motion_list.png" width="512">

More screens [here](https://github.com/designcofounders/toronto-city-hall/tree/master/screens).

## Setup

```
git clone https://github.com/designcofounders/toronto-city-hall.git
cd toronto-city-hall

npm install
node_modules/.bin/gulp install
node_modules/.bin/gulp sass

node_modules/.bin/cordova platform add browser
node_modules/.bin/cordova emulate browser
node_modules/.bin/cordova serve 8000
```

You may now access the app in your browser at
http://localhost:8000/browser/www
