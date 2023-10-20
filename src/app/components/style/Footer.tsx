export default function Footer() {
    return (
        <>
            <div className={`w-screen h-[70px] bg-verdeClaro`}></div>
            <div className={`flex items-center justify-evenly w-screen h-[120px] bg-white`}>
                <img width={150} className="hidden sm:block" src="/assets/Gov.br_logo.png" alt="unitins logo"/>
                <img className="hidden sm:block" src="/assets/Unitins.png" alt="unitins logo"/>
                <img className="hidden sm:block" src="/assets/GovernoTO.png" alt="governo do estado do tocantins logo"/>
            </div>
        </>
    )
}
