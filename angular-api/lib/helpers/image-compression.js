const jimp = require('jimp')
const appRoot = require('app-root-path')
const path = require('path')

const ImageCompression = {
  async compress(file){
    const image = await jimp.read(file.data)
    const fileName = Date.now() + '.jpg'
    await image
      .quality(100)
      .write(getDirectory(fileName))
    return fileName
  }
}

function getDirectory(fileName){
  const directory = '/public/attachments/'
  return path.join(appRoot + directory + fileName)
}

module.exports = ImageCompression