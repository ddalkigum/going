import jwt from "jsonwebtoken";

const createJWT = (id: number): string => {
  const token = jwt.sign(
    {
      id,
    },
    process.env.SECRET_JWT
  );
  return token;
};

export default createJWT;
