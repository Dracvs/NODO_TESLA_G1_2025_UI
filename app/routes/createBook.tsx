import { ImageToBase64 } from "~/components/Base64Util";

export default function CreateBook(){
    
    let daSrc = "";
    const handleBase64Generated = (base64:string) =>{
        console.log("Base 64 Encoder: " + base64);
        daSrc = base64;
    }
    
    return(
        <div>
            <div className="flex">
                <ImageToBase64 onBase64Generated={handleBase64Generated} />
            </div>

            <img src={daSrc} alt="imagen Comprimida" />
        </div>
    );
}