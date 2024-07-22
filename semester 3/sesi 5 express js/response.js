const respon = (statusCode, data, message, res) => {
  res.json(statusCode, [
    {
      data: data,
      message,
      metaData: {
        success: true,
      },
    },
  ]);
};

module.exports = respon;
