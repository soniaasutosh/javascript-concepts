import http from "http";

const postStudent = (req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Student POST" + req.data);
};

const putStudent = (req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Student PUT" + req.data);
};
const requestProsessor = {
  POST: {
    "/student": postStudent,
  },
  PUT: {
    "/student": putStudent,
  },
};

const server = http.createServer(async (req, res) => {
  console.log(req.headers);
  console.log(req.url);
  console.log(req.method);

  const processMethod =
    requestProsessor[req.method] &&
    requestProsessor[req.method][
      req.url.substring(
        0,
        req.url.indexOf("?") > 0 ? req.url.indexOf("?") : req.url.length
      )
    ];

  if (!processMethod) {
    res.statusCode = 400;
    res.end("PATH/Method Not Found");
    return;
  }

  console.log(req.headers["content-length"]);
  const data = Buffer.allocUnsafe(Number(req.headers["content-length"]));
  let counter = 0;
  const promise = new Promise((resolve) => {
    req.addListener("data", (chunk) => {
      chunk.copy(data);
      console.log("chunk -->", ++counter);
    });
    req.addListener("end", () => {
      resolve();
    });
  });
  if (req.headers["content-length"] > 0) {
    await promise;
  }

  req.data = data.toString();
  processMethod(req, res);
});

server.listen(8080, () => {
  console.log(`Server running...`);
});
