const express = require('express');
const app = express();
const { specs, swaggerUi } = require('./swagger');
const membersRoute = require('./routes/membersRoute');
const booksRoute = require('./routes/booksRoute');
const borrowsRoute = require('./routes/borrowsRoute');

const cors = require('cors')

app.use(cors())
app.use(express.json());
app.use(membersRoute);
app.use(booksRoute);
app.use(borrowsRoute);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
