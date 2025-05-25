export function Grid(items){
    /* Escrobe aquí tu código */
    return (
        <div className="grid">
            {items.map((item, index) => (
                
                <div key={index} className="card">
                <h2>{item.title}</h2>
                <p>{item.ref}</p>
                </div>

            ))}
        </div>
    );

}