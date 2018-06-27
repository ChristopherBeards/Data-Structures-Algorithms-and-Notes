# REST API & HTTP

### API:
  - Application Program Interface
  - A contract provided by one piece of software to another piece of software via a structured request and response. Think of the software as you sitting in a restaurant, and the API as the waiter. It receives information, communicates that to the kitchen (server), and then returns with a response

### REST:

  * Representational State Transfer
  * Architecture style for designing networked applications
  * Addresses to resources: 
    
  ##### NOT REST: `/changeTodoList.php?item=35&action=changeTitle&title=new_title`

Note how this is indeed an instruction (to) change something. But a “changeTodoList” is not a thing,it's not a resource.

In the REST architectural style, servers only offer resources. Resources are conceptual things about which clients and servers communicate.

  ##### REST: `/todolists/7/items/35/`

This above thing is not a command, it is the address of a resource, a thing. You can then use this address to manipulate the to-do list using standard operations, instead of interface-specific commands. | [Source](https://www.quora.com/What-is-REST-in-laymans-terms)
  
### HTTP:
  * Hypertext Transfer Protocol (often abbreviated to HTTP) is a communications protocol. It is used to send and receive webpages and files on the internet
  * A more secure version of HTTP is called HTTPS (Hypertext Transfer Protocol Secure). This contains https:// at the beginning of the URL. It encrypts all the information that is sent and received | [Source](https://simple.wikipedia.org/wiki/Hypertext_Transfer_Protocol)

### HTTP Methods:
  * GET: Retrieve data from a specified location
  * POST: Submit data to a specified location
  * PUT: Update some data at a specified location
  * DELETE: Remove some data at a specified location
  * HEAD: Essentially a GET that does not return a response body
  * OPTIONS: Returns supported HTTP Methods
  * PATCH: Update partial resources