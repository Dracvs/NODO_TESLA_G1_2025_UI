import { ChangeEvent } from "react";

function ImageToBase64({onBase64Generated}:{ onBase64Generated: (base64: string) => void}){
    const handleImageUpload = (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if(file){
            const reader = new FileReader();
            reader.onloadend = () => {
                if(typeof reader.result === "string"){
                    onBase64Generated(reader.result);
                }
            };
            reader.readAsDataURL(file);
        }
    };

    return(
        <div>
            <label>Portada del libro</label>
            <input type="file" onChange={handleImageUpload} />
        </div>
    );
}


function base64Toimage({base64String}: {base64String:string}){
    const imageSrc = base64String;
    return(
        <div>
            {imageSrc &&(
                <div>
                    <img src={imageSrc} alt="Converted" />
                </div>

            )}
        </div>
    );
}

export { base64Toimage, ImageToBase64 };

