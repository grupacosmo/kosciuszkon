import Video from "../../assets/video.mp4"

const Hero = () => {
    return (
        <section
            className="hero"
        >
            <div
                className="hero__gradient"
            >
            </div>
            <div
                className="hero__title"
            >
                <div className="hero__title-background" />
                <div className="hero__title-content">
                    <h1>Kościuszkon</h1>
                    <span class="description">Zapraszamy na pierwszą edycję hackathonu organizowanego przez Wydział Informatyki i Telekomunikacji Politechniki Krakowskiej. Czeka na was 24 godziny pracy nad ciekawym wyzwaniem oraz dobra zabawa</span>
                </div>
            </div>
            <div className="hero__video-container">
                <video 
                    src={Video}
                    autoplay 
                    autoPlay
                    muted 
                    loop
                />
            </div>
        </section>
    )
}

export default Hero
