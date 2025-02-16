const url = `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUD_NAME_CLOUDINARY}/image/upload`

const uploadImage  = async(image) => {
    // console.log("URL:", url);
    const formData = new FormData()
    formData.append("file",image)
    formData.append("upload_preset","mern_product")
    
    // console.log("FormData:", formData);

    const dataResponse = await fetch(url,{
        method : "post",
        body : formData
    })

    // console.log("Response:", dataResponse);

    return dataResponse.json()

}

export default uploadImage 