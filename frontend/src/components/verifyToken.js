import jwt from "jsonwebtoken";

const authenticateToken = (req, res, next) => {
  const token = req.cookies["authToken"];
  console.log(token);
  if (token == null) return res.redirect("/");

  jwt.verify(token, "some", (err, user) => {
    if (err) {
      return res.redirect("/");
    }
    req.user = user;
    next();
  });
};

export default authenticateToken;
