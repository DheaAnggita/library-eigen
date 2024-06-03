const express = require('express');
const app = express();
const membersRoute = require('./routes/membersRoute');
const booksRoute = require('./routes/booksRoute');
const borrowsRoute = require('./routes/borrowsRoute');

const cors = require('cors')

app.use(cors())
app.use(express.json());
app.use(membersRoute);
app.use(booksRoute);
app.use(borrowsRoute);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
