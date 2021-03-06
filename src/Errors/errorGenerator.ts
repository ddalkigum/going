const DEFAULT_HTTP_STATUS_MESSAGES = {
  400: "Bad Request",
  401: "Unauthorized",
  403: "Forbidden",
  404: "Not Found",
  409: "duplicate",
  500: "Internal Server Error",
  503: "Temporary Unavailble",
};

export interface ErrorWithStatusCode extends Error {
  statusCode?: number;
}

const errorGenerator = ({
  message = "",
  statusCode = 500,
}: {
  message?: string;
  statusCode: number;
}): void => {
  const error: ErrorWithStatusCode = new Error(
    message || DEFAULT_HTTP_STATUS_MESSAGES[statusCode]
  );
  error.statusCode = statusCode;
  throw error;
};

export default errorGenerator;
