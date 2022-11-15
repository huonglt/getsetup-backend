### Design and implementation aspects

This app is to build using express server to provide APIs needed to support its clients.\
Initially I chose MongoDB to manage app data. But then for the demo purposes, I swap it out with mocked Model objects.\
The mocked models object, functioning similar to Mongoose Models, but working with in-memory data, not database.
These mocked models help running the app easily without having to install MongoDB.\

This app using Typescript to make sure variables having correct types.\

This app is designed following MVC model.\

Requests are validated before being processed by controller, which will delegate to model object to perform database related operations.\
Validations are setup as middleware in the request flow chain. Validation for each request are built as schemas, which makes it easy to implement, and easy to test.\

Errors are handled and sent back to client.\

### Further Improvements

Due to time constraints, this app still have a lot of rooms to improve, which are:
1. Use actual database
2. Week numbers data are hard coded at the moment. This need to be replaced to return dynamic dates values, matching with the week number.\
3. Week days data are hard coded at the moment, returning same week days for any given week. This need to be replaced to return the correct week days associated with a week number.\ 
4. Replace all other mocked data with more meaningful data
5. More unit tests
6. Add more features to the app to make it more interesting


