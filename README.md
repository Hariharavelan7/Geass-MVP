## Main features
- Login and register
- Users can upload their text file and covert them to audio
- Users can listen to premade audiobooks
- Users can make their books public
- Users can pay for converting their books
- User profile and dashboard

### Login and register
- [x] Google login
- [x] Login using firebase
- [x] Email verificition
- [ ] Facebook login
- [ ] Twitter login
#### Bugs and features
- [x] LogIn Navigate
- [x] LogIn Error message correction
- [x] SignUp Navigate
- [x] SignUp message to verify email

### Users can upload their text file and covert them to audio
- [ ] Upload pdf or text files
- [ ] Using their own API key
- [x] Upload their own audiobooks
- [ ] Pay for converting

### Users can listen to premade audiobooks
- [x] Media player page
- [ ] Users history

### Users can make their books public
- [ ] Option to make them public and private

### User profile and dashboard
- [ ] Books coverted
- [x] Books uploaded

### User Info
- uid
- name
- username
- bio
- city
- country
- booklist [ bookId1, bookId2 . . .]
Future Info
- Likes

### User Files
- Profile images
- Banner images
### State Management for users
1. Signup - Adds a new user to the firestore with a email and unique nanoid
2. Update Redux state with email and nanoid
3. EditProfile - Update the firestore using user's nanoid
4. Update Redux state with other informations
5. Profile - Get user from firestore based on the url's params
6. UserList - Get all the users from the firestore

### Book Info
- bookId
- titile
- description
- length
- tags []
- likes
- genres []

### Book Files
- Text file
- Poster images
- Cover images
- Audio [ chapter1, chapter2 . . .]

### State Management for users
1. AddBook - Adds a new book to the Firestore with a unique ID generated by Firestore
2. Update Redux state with the book's ID
3. EditBook - Update the book in Firestore using the book's ID
4. Update Redux state with other information about the book
5. BookList - Get all the books from the Firestore
6. BookDetail - Get the book details from the Firestore based on the book's ID
