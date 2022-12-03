const SectionDivider = ({ name }) => {

    return (
        <div
            className="section-divider"
            id={name}
        >
            <div className="section-divider__inner">
                <div
                    className="section-divider__title-outer"
                >
                    <div
                        className="section-divider__title-inner"
                    >
                        <h3>{name.toUpperCase()}</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SectionDivider
