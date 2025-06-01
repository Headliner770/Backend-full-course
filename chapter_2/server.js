// The address of this server connected to the network is: http://localhost:8383
// URL -> http://localhost:8383
// IP -> 127.0.0.1:8383

const express = require("express");
const app = express();
const PORT = 8383;

// HTTP VERBS && Routes (or paths)

app.listen(PORT, () => console.log(`Server has started on: ${PORT}`));
