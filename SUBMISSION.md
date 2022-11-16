### Design and implementation aspects

This MVP app is to provide APIs needed to allow Getsetup users to retrieve and submit teaching availaibility in a given week.
It is an expressjs app running on node environment.

Initially I chose MongoDB to manage app data. But then for the demo purposes, I swap it out with mocked Model objects.
The mocked models object, functioning similar to Mongoose Models, but working with in-memory data, not database.
These mocked models help running the app easily without having to install MongoDB.

This app uses Typescript to make sure variables having correct types.

This app is designed following MVC model.

Requests are validated before being processed by controller, which will delegate to model object to perform database related operations.
Validations are setup as middleware in the request flow chain. Validation for each request is built as schemas, which makes it easy to implement, and easy to test.

Errors are handled and sent back to client.

Unit tests are run by jest.

### Further Improvements

Due to time constraints, this app still have a lot of rooms to improve, which are:
1. Use actual database
4. Add more validations for teaching availability timeslot. For example do not allow overlapping timeslot. Or limit submissions to occur within certain hours.\
 Or validation to encourage a Guide to take a break and stretch their legs, to break up long periods. These validations will be built as middleware to make the app extensible
4. Replace all other mocked data with more meaningful data
5. More unit tests
6. Add more features to the app to make it more feature rich. For example, add an api to allow user to book a time with a guide



