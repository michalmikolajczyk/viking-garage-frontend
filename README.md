# viking-garage-frontend
VIKING GARAGE app

### Setup
```
git clone git@github.com:michalmikolajczyk/viking-garage-frontend.git
cd viking-garage-frontend && npm i
npm start # go to browser -> localhost:3000
```

### Config
Add in the root directory file `config.js` with an API keys:
```
var config = {
  GOOGLE_MAP_API: 'AIzaSyCdqKWZgAE65hVV89OmGEfeNTQkOB9EXM8'
}
```

### Debug
To enable logs from the App, set in a `localStorage`:
```
localStorage.setItem('debug', 'app:*')
```
To add logger to a new module:
```
import debug from 'debug';
var log = debug('app:NameOfModule');
log('goes to stdout');
```
For more info go to [browser support](https://github.com/visionmedia/debug#browser-support)
