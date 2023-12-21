function SectionTitle({
    title,
    description
}:{
    title : string,
    description : string
}) {
    return ( 
        <div className="flex flex-col items-center gap-3">
            <h2 className="text-2xl font-semibold">{title}</h2>
            <p className="text-[1rem]">{description}</p>
        </div>
     );
}

export default SectionTitle;