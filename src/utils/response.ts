const isError = (code) => !(code >= 200 && code <= 299);

export default (statusCode: Number, payload) => {
  const body = {
    code: statusCode,
    err: isError(statusCode),
    data: payload,
  };

  return body;
};
