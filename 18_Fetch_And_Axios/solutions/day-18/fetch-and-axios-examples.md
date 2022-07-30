<img src='https://miro.medium.com/max/1400/1*bWNgcJUcd9Bjq9mWmI6DlA.png' atl='fetch and axios image'/>
<a href='https://blog1.westagilelabs.com/fetch-vs-axios-choose-the-better-one-d548b317b259' target='_blank'>Image from Phalgun Mittal - Medium</a>

# Fetch and Axios

1. What is HTTP request?

The following piece of text was extracted from [sematext.com](sematext.com/glossary/htt-requests/):

An __HTTP__ request is made from a client to a host located on the server in order to receive a resource needed to build the content.When they make a request, clients use a __URL__ (_Uniform Resource Locator_) that contains the information needed to access the server resources.

2. What are the most common HTTP requests?

HTTP Request Method:
- GET
- POST
- DELETE
- HEAD
- PUT
- CONNECT
- TRACE
- PATCH
- OPTIONS

3. What is fetch?

__Fetch API__ is a JavaScript interface that allows us to manipulate and access a part of _HTTP_, such as response and request, using the fetch() method allows us to asynchronously manege resource on the network. 
Source: [Developer Mozilla](developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)

4. What is axios?

Like the Fetch method, __axios__ allows us to manipulate API resources over _HTTP_, axios can run in node.js and in the browser with the same code base.
Source: [Getting Started - axios](axios-http.com/docs/intro)

5. What is the difference between fetch and axios?

axios | fetch 
--------------------------------|------------------------------------|
Axios has url in request object.|  Fetch has no url in request object.
Axios is a stand-alone third party package that can be easily installed.                      | Fetch is built into most modern browsers; no installation is required as such.
Axios’ data contains the object.| Fetch’s body has to be stringified.
Axios request is ok when status is 200 and statusText is ‘OK’. | Fetch request is ok when response object contains the ok property.

Source: [geeksforgeeks - fetch vs axios](https://www.geeksforgeeks.org/difference-between-fetch-and-axios-js-for-making-http-requests/)
    
6. Do you prefer fetch to axios for make HTTP requests?

As we know, fetch is installed in the browser and that allows us to use it without installing other packages, but axios has more resources than fetch, and it needs to be installed on the computer to be used, however, there are better ways to make an HTTP request, I think both has advantages and disadvantages, but it depends on developers and the purpose they have in mind.
If you want to know more about fetch vs axios, and which of them use, look at the following link [blog.logrocket.com](https://blog.logrocket.com/axios-vs-fetch-best-http-requests/#:~:text=To%20send%20data%2C%20fetch(),stringify%20method)