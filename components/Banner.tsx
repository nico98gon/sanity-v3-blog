
export const Banner = () => {
    return (
        <div className="flex flex-col lg:flex-row lg:space-x-5 justify-between font-bold px-10 py-5 mb-10">
            <div>
                <h1 className="text-5xl">Blog de la comunidad</h1>
                <br />
                <h2 className="mt-5 md:mt-0">
                    Bienvenidos al blog de{" "}
                    <span className="underline decoration-2 decoration-Blogeate-rose">
                        nuestra comunidad
                    </span>{" "}
                    favorita de tecnología digital
                </h2>
            </div>
        <p className="mt-5 md:mt.2 text-gray-400 max-w-sm">
            Probamos productos de software | Lo último en tecnología | Videos y debates semanales
        </p>
        </div>
    )
}
