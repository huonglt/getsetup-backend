### Design and implementation aspects

This app is to build using express server to provide APIs needed to support its clients.\
Initially I chose MongoDB to manage app data. But then for the demo purposes, I swap it out with mocked Model objects.\
The mocked models object, functioning similar to Mongoose Models, but working with in-memory data, not database.
These mocked models help running the app easily without having to install MongoDB.\

The app is designed following MVC model.\

Requests are validated before being processed by controller, which will delegate to model object to perform database related operations.\
Validations are setup as middleware in the request flow chain. Validation for each request are built as schema, which makes it easy to implement, and easy to test.\

Errors are handled and sent back to client.\


