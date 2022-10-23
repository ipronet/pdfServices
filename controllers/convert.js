const asynHandler = require("../middleware/async");
const { ProcessPdf } = require("../helper/process");
const ok = "./pdfServices/swiftalerts"
exports.Convert = asynHandler(async (req, res, next) => {
  const {swift,pdf_dir,img_dir,src_dir} = req.body

  let file = await ProcessPdf(swift,pdf_dir,img_dir,src_dir);

  res.send(file);
});
