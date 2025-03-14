import { Link } from "@remix-run/react";

export default function Footer(){
    return(
        <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content p-10">
            <div>
                <Link to="/">
                    <img alt="secretos para contar" src="../../public/img/secretos_para_contar_color.png" className="h-12"/>
                </Link>
            </div>
        </footer>
    );
}