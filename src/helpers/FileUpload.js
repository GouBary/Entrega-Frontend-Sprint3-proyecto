export const FileUpload = async (file) => {

    const urlCloudinary = "https://api.cloudinary.com/v1_1/dcdmk6vze/upload"

    const formData = new FormData();
    
    formData.append("upload_preset", "proyecto3");
    
    formData.append("file", file);

    const resp = await fetch(urlCloudinary, { 
        method: "POST",
        body: formData
    })
    const data = await resp.json();
    console.log(data)

    return data.secure_url

}