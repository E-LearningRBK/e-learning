const { Readable } = require("stream");
const cloudinary = require("../utils/cloudinary");

const upload = async (buffer) => {
    const imageStream = Readable.from(buffer);
    const cloudinaryResult = await new Promise((resolve, reject) => {
        const upload_stream = cloudinary.uploader.upload_stream(
            { resource_type: "image" },
            (error, result) => {
                if (error) reject(error);
                else resolve(result);
            }
        );

        imageStream.pipe(upload_stream);
    });
    return cloudinaryResult.secure_url;
};
function getRandomString(length) {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let randomString = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      randomString += characters.charAt(randomIndex);
    }
    return randomString;
  }

module.exports = { upload ,getRandomString};
