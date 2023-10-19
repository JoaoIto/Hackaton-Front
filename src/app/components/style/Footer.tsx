export default function Footer() {
    return (
        <>
            <div className={`w-screen h-[120px] bg-azulEscuro`}></div>
            <div className={`flex items-center justify-evenly w-screen h-[120px] bg-white`}>
                <img className="hidden sm:block" src="/assets/UFT.png" alt="unitins logo"/>
                <img className="hidden sm:block" src="/assets/Unitins.png" alt="unitins logo"/>
                <img className="hidden sm:block" src="/assets/GovernoTO.png" alt="unitins logo"/>
            </div>
        </>
    )
}
