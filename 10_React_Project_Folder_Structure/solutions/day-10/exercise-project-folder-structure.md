# React Project Folder Structure

#### What is the importance of React Folder Structure and File Naming.

There is no right or wrong way of structuring a React project but some structures are better than the others for scalability,maintainability, ease of working on files and easy to understand structure.

#### How do you export file.

We use the export method as a default or named export a component

#### How do you  import file.

Once we've used an export method as a default or named, we can use the import method to import a class or function component to adere it to another file.

#### Make a component of module and export it as named or default export.

```js
import React, {Component} from 'react'

export default class App extends Component {
	render(){
		return(<div>Hello</div>)
	}
}
```

```js
import React from 'react'

function App() {
	return(
		<div>Hello</div>
	)
}

export default App
```

#### Make a component or module and import it.

```js
// App.js
import React from 'react'

function App() {
	return(
		<div>Hello</div>
	)
}

export default App
```

```js
//index.js
import React from 'react'
import {createRoot} from 'react-dom/client'

import App from './App'

const container = document.getElementById('root')
const root = createRoot(container)
root.render(<App/>)


```

#### Change all the components you have to different folder structure.

```sh
public
  index.html
src
  App.js
  index.js
  constans
   -image.js
  components
   -auth
    -Signup.js
    -Signin.js
    -Forgotpassword.js
    -Resetpassord.js
   -Header
    -Header.js
   -Main
    -Main.js
   -Footer
    -Footer.js
  assets
   -images
  styles
   -button.scss
 utils
  -display-time.js
  -generate-color.js
 shared
  -Button.js
  -InputField.js
  -TextAreaField.js
package.json
package-lock.json
.gitignore
```