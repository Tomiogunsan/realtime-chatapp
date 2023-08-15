 const successResponse = (data, message, code) => {
  return {
    status: "success",
    code: code || 200,
    data: data,
    message: message,
  };
};

 const errorResponse = (data, message, code) => {
  return {
    status: "error",
    code: code || 500,
    data: data,
    message: message,
  };
};

module.exports = { successResponse, errorResponse };
