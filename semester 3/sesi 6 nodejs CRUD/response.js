const respon = (statusCode, data, message, res) => {
  res.json(statusCode, [
    {
      payload: data,
      message,
      metaData: {
        prev: "",
        next: "",
        current: "",
      },
    },
  ]);
};

module.exports = respon;
